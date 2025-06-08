import { useEffect, useRef } from "react";
import Particles from "../common/Particles";
import { getFromStorage, STORAGE_KEYS } from "../../utils/storage";

const FloatingNames = ({ visitors }) => {
  const containerRef = useRef(null);
  const floatingNamesRef = useRef([]);
  const animationFrameRef = useRef(null);
  const isDragging = useRef(false);
  const draggedName = useRef(null);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current || visitors.length === 0) return;

    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const myVisitorId = getFromStorage(STORAGE_KEYS.USER_ID, null);

    floatingNamesRef.current.forEach((name) => {
      if (name.element && name.element.parentNode) {
        name.element.parentNode.removeChild(name.element);
      }
    });
    floatingNamesRef.current = [];

    visitors.forEach((visitor) => {
      const isMyName =
        myVisitorId && visitor.id.toString() === myVisitorId.toString();

      const nameElement = document.createElement("div");
      nameElement.className =
        "absolute select-none transition-opacity duration-500 opacity-0 cursor-grab active:cursor-grabbing";

      if (isMyName) {
        nameElement.className += " font-bold";
        nameElement.style.color = "#60a5fa";
        nameElement.style.fontSize = `${1.2}rem`;
      } else {
        nameElement.style.color = getRandomColor();
        nameElement.style.fontSize = `${Math.random() * 1 + 0.8}rem`;
      }

      nameElement.textContent = visitor.name;
      nameElement.style.userSelect = "none";
      nameElement.style.pointerEvents = "auto";

      container.appendChild(nameElement);

      const x = Math.random() * (containerWidth - 100);
      const y = Math.random() * (containerHeight - 50);

      const speedX = (Math.random() - 0.5) * 0.5;
      const speedY = (Math.random() - 0.5) * 0.5;

      const nameData = {
        element: nameElement,
        x,
        y,
        speedX,
        speedY,
        isDragged: false,
        originalSpeedX: speedX,
        originalSpeedY: speedY,
      };

      floatingNamesRef.current.push(nameData);

      nameElement.addEventListener("mousedown", (e) =>
        handleMouseDown(e, nameData)
      );
    });

    const handleMouseMove = (e) => handleGlobalMouseMove(e);
    const handleMouseUp = () => handleGlobalMouseUp();

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    setTimeout(() => {
      floatingNamesRef.current.forEach((name) => {
        name.element.style.opacity = "0.6";
      });
    }, 100);

    const animate = () => {
      floatingNamesRef.current.forEach((name) => {
        if (!name.isDragged) {
          name.x += name.speedX;
          name.y += name.speedY;

          if (
            name.x <= 0 ||
            name.x >= containerWidth - name.element.offsetWidth
          ) {
            name.speedX *= -1;
          }

          if (
            name.y <= 0 ||
            name.y >= containerHeight - name.element.offsetHeight
          ) {
            name.speedY *= -1;
          }
        }

        name.element.style.transform = `translate(${name.x}px, ${name.y}px)`;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      floatingNamesRef.current.forEach((name) => {
        if (name.element && name.element.parentNode) {
          name.element.parentNode.removeChild(name.element);
        }
      });
    };
  }, [visitors]);

  const handleMouseDown = (e, nameData) => {
    e.preventDefault();
    isDragging.current = true;
    draggedName.current = nameData;

    const rect = containerRef.current.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left - nameData.x,
      y: e.clientY - rect.top - nameData.y,
    };

    nameData.isDragged = true;
    nameData.element.style.cursor = "grabbing";
    nameData.element.style.opacity = "0.9";
    nameData.element.style.zIndex = "1000";

    nameData.element.style.transform = `translate(${nameData.x}px, ${nameData.y}px) scale(1.1)`;
  };

  const handleGlobalMouseMove = (e) => {
    if (!isDragging.current || !draggedName.current || !containerRef.current)
      return;

    const rect = containerRef.current.getBoundingClientRect();
    const newX = e.clientX - rect.left - dragOffset.current.x;
    const newY = e.clientY - rect.top - dragOffset.current.y;

    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    draggedName.current.x = Math.max(
      0,
      Math.min(newX, containerWidth - draggedName.current.element.offsetWidth)
    );
    draggedName.current.y = Math.max(
      0,
      Math.min(newY, containerHeight - draggedName.current.element.offsetHeight)
    );
  };

  const handleGlobalMouseUp = () => {
    if (draggedName.current) {
      draggedName.current.isDragged = false;
      draggedName.current.element.style.cursor = "grab";
      draggedName.current.element.style.opacity = "0.6";
      draggedName.current.element.style.zIndex = "auto";

      draggedName.current.element.style.transform = `translate(${draggedName.current.x}px, ${draggedName.current.y}px) scale(1)`;

      draggedName.current.speedX = (Math.random() - 0.5) * 0.8;
      draggedName.current.speedY = (Math.random() - 0.5) * 0.8;
    }

    isDragging.current = false;
    draggedName.current = null;
  };

  const getRandomColor = () => {
    const colors = [
      "#3b82f6",
      "#60a5fa",
      "#f59e0b",
      "#10b981",
      "#8b5cf6",
      "#ec4899",
      "#f43f5e",
      "#f97316",
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        size={0.4}
        colors={["#3b82f6", "#f8fafc", "#f1f5f9"]}
        fadeToBottom={false}
      />
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden"
        style={{ pointerEvents: "none" }}
      />
    </>
  );
};

export default FloatingNames;

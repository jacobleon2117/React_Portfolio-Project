import React, { useEffect, useRef } from "react";
import Particles from "../common/Particles";
import { getFromStorage, STORAGE_KEYS } from "../../utils/storage";

const FloatingNames = ({ visitors }) => {
  const containerRef = useRef(null);
  const floatingNamesRef = useRef([]);
  const animationFrameRef = useRef(null);

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
        "absolute pointer-events-none select-none transition-opacity duration-500 opacity-0";

      if (isMyName) {
        nameElement.className += " font-bold";
        nameElement.style.color = "#60a5fa";
        nameElement.style.fontSize = `${1.2}rem`;
      } else {
        nameElement.style.color = getRandomColor();
        nameElement.style.fontSize = `${Math.random() * 1 + 0.8}rem`;
      }

      nameElement.textContent = visitor.name;
      container.appendChild(nameElement);

      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;

      const speedX = (Math.random() - 0.5) * 0.5;
      const speedY = (Math.random() - 0.5) * 0.5;

      floatingNamesRef.current.push({
        element: nameElement,
        x,
        y,
        speedX,
        speedY,
      });
    });

    setTimeout(() => {
      floatingNamesRef.current.forEach((name) => {
        name.element.style.opacity = "0.6";
      });
    }, 100);

    const animate = () => {
      floatingNamesRef.current.forEach((name) => {
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

        name.element.style.transform = `translate(${name.x}px, ${name.y}px)`;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
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

  const getRandomColor = () => {
    const colors = [
      "#3b82f6", // blue
      "#60a5fa", // light blue
      "#f59e0b", // amber
      "#10b981", // emerald
      "#8b5cf6", // violet
      "#ec4899", // pink
      "#f43f5e", // rose
      "#f97316", // orange
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
        aria-hidden="true"
      />
    </>
  );
};

export default FloatingNames;

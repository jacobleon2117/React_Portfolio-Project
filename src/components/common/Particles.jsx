"use client";

import React, { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function hexToRgb(hex) {
  hex = hex.replace("#", "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const hexInt = parseInt(hex, 16);
  const red = (hexInt >> 16) & 255;
  const green = (hexInt >> 8) & 255;
  const blue = hexInt & 255;
  return [red, green, blue];
}

const Particles = ({
  className = "",
  quantity = 150,
  size = 0.5,
  colors = ["#3b82f6", "#f8fafc", "#f1f5f9"],
  fadeToBottom = true,
}) => {
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const contextRef = useRef(null);
  const particlesRef = useRef([]);
  const canvasSizeRef = useRef({ w: 0, h: 0 });
  const animationFrameIdRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const effectiveQuantity = isMobile ? Math.floor(quantity * 0.6) : quantity;

  const createParticle = () => {
    const x = Math.floor(Math.random() * canvasSizeRef.current.w);
    const y = Math.floor(Math.random() * canvasSizeRef.current.h);

    if (fadeToBottom) {
      const probability = 1 - (y / canvasSizeRef.current.h) * 0.8;
      if (Math.random() > probability) {
        return createParticle();
      }
    }

    const particleSize = Math.random() * 1.5 + size;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.4 + 0.1).toFixed(2));

    const angle = Math.random() * Math.PI * 2;
    const speed = 0.05 + Math.random() * 0.1;

    const dx = Math.cos(angle) * speed;
    const dy = Math.sin(angle) * speed;

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const rgbColor = hexToRgb(randomColor);

    return {
      x,
      y,
      size: particleSize,
      alpha,
      targetAlpha,
      dx,
      dy,
      color: rgbColor,
    };
  };

  const initCanvas = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    const container = canvasContainerRef.current;
    if (!container) return;

    canvasSizeRef.current.w = container.offsetWidth;
    canvasSizeRef.current.h = container.offsetHeight;

    canvas.width = canvasSizeRef.current.w * dpr;
    canvas.height = canvasSizeRef.current.h * dpr;
    canvas.style.width = `${canvasSizeRef.current.w}px`;
    canvas.style.height = `${canvasSizeRef.current.h}px`;

    context.scale(dpr, dpr);

    particlesRef.current = [];

    for (let i = 0; i < effectiveQuantity; i++) {
      particlesRef.current.push(createParticle());
    }
  };

  const drawParticle = (particle) => {
    if (!contextRef.current) return;

    const { x, y, size, alpha, color } = particle;
    contextRef.current.beginPath();
    contextRef.current.arc(x, y, size, 0, Math.PI * 2);
    contextRef.current.fillStyle = `rgba(${color.join(", ")}, ${alpha})`;
    contextRef.current.fill();
  };

  const animate = () => {
    if (!contextRef.current) return;

    contextRef.current.clearRect(
      0,
      0,
      canvasSizeRef.current.w,
      canvasSizeRef.current.h
    );

    particlesRef.current.forEach((particle, index) => {
      if (particle.alpha < particle.targetAlpha) {
        particle.alpha += 0.01;
        if (particle.alpha > particle.targetAlpha) {
          particle.alpha = particle.targetAlpha;
        }
      }

      if (fadeToBottom) {
        const fadeStartPoint = canvasSizeRef.current.h * 0.7;
        if (particle.y > fadeStartPoint) {
          const fadeRatio =
            1 -
            (particle.y - fadeStartPoint) /
              (canvasSizeRef.current.h - fadeStartPoint);
          particle.alpha = Math.min(
            particle.targetAlpha,
            particle.targetAlpha * fadeRatio
          );
        }
      }

      particle.x += particle.dx;
      particle.y += particle.dy;

      if (particle.x < -10) {
        particle.x = canvasSizeRef.current.w + 10;
      } else if (particle.x > canvasSizeRef.current.w + 10) {
        particle.x = -10;
      }

      if (particle.y < -10) {
        particle.y = canvasSizeRef.current.h + 10;
      } else if (particle.y > canvasSizeRef.current.h + 10) {
        particle.y = -10;
      }

      drawParticle(particle);
    });

    animationFrameIdRef.current = window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    initCanvas();

    animate();

    const handleResize = () => {
      initCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameIdRef.current) {
        window.cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [colors, quantity, size, isMobile, fadeToBottom]);

  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      ref={canvasContainerRef}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
};

export default Particles;

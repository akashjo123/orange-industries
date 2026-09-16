"use client";

import React, { useRef, useEffect } from "react";

interface ThreadsProps {
  color?: string;
  count?: number;
  speed?: number;
  amplitude?: number;
}

export default function Threads({
  color = "#FF5A00",
  count = 45,
  speed = 0.005,
  amplitude = 60,
}: ThreadsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;
    let time = 0;

    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      targetMouseX = -1000;
      targetMouseY = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    const rgbColor = hexToRgb(color);

    const animate = () => {
      time += speed;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;

      for (let i = 0; i < count; i++) {
        ctx.beginPath();
        
        // Distribute threads vertically
        const yOffset = (height / count) * i;
        const phase = i * 0.15;
        
        let started = false;
        
        for (let x = 0; x <= width; x += 15) {
          // Base wave calculation with multiple harmonics for organic look
          let y = yOffset 
            + Math.sin(x * 0.003 + time + phase) * amplitude
            + Math.sin(x * 0.007 - time * 1.5 + phase * 2) * (amplitude * 0.5);
          
          // Mouse interaction (repel/modulate)
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 250) {
            const force = (250 - dist) / 250;
            // Push thread away from mouse
            y += (dy / dist) * Math.pow(force, 2) * 80;
          }

          if (!started) {
            ctx.moveTo(x, y);
            started = true;
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        // Vary opacity based on vertical position
        const alpha = 0.15 + Math.sin(i / count * Math.PI) * 0.25;
        ctx.strokeStyle = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${alpha})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", init);

    return () => {
      window.removeEventListener("resize", init);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, count, speed, amplitude]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto mix-blend-screen"
      style={{ opacity: 0.6 }}
    />
  );
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 255, g: 90, b: 0 };
}

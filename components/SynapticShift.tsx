"use client";

import React, { useRef, useEffect } from "react";

interface SynapticShiftProps {
  speed?: number;
  scale?: number;
  intensity?: number;
  color?: string;
  falloff?: number;
  complexity?: number;
  breathing?: boolean;
}

export default function SynapticShift({
  speed = 0.35,
  scale = 0.55,
  intensity = 1.5,
  color = "#FF5A00",
  falloff = 1.15,
  complexity = 10,
  breathing = true,
}: SynapticShiftProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let time = 0;

    const rgbColor = hexToRgb(color);
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const actualSpeed = prefersReducedMotion ? speed * 0.1 : speed;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      phase: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        // Increase base velocity so it's noticeably moving even at speed 0.35
        const velocity = (Math.random() * 1.5 + 0.5) * actualSpeed;
        this.vx = Math.cos(angle) * velocity;
        this.vy = Math.sin(angle) * velocity;
        this.size = (Math.random() * 1.5 + 0.8) * scale;
        this.baseAlpha = Math.random() * 0.5 + 0.2;
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges with generous padding
        if (this.x < -100) this.vx *= -1;
        if (this.x > width + 100) this.vx *= -1;
        if (this.y < -100) this.vy *= -1;
        if (this.y > height + 100) this.vy *= -1;

        if (breathing && !prefersReducedMotion) {
           this.phase += 0.04 * actualSpeed; // Faster breathing
        }
      }

      draw() {
        if (!ctx) return;
        const alpha = breathing && !prefersReducedMotion
          ? this.baseAlpha + Math.sin(this.phase) * 0.3
          : this.baseAlpha;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${Math.max(0, alpha * intensity)})`;
        ctx.fill();
        
        // Add subtle secondary glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 122, 51, ${Math.max(0, (alpha * intensity) * 0.15)})`; // Secondary glow color #FF7A33
        ctx.fill();
      }
    }

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      // Handle high DPI displays for crisp rendering
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Density calculation: higher complexity = more particles
      // Reduced count on mobile for performance
      const isMobile = width < 768;
      const mobileMultiplier = isMobile ? 0.5 : 1;
      
      const area = width * height;
      const count = Math.floor((area / 12000) * (complexity / 5) * mobileMultiplier);
      
      particles = [];
      for (let i = 0; i < count; i++) {
        // Bias spawning slightly to the right side as requested
        const spawnX = Math.random() > 0.3 
            ? (Math.random() * (width / 2)) + (width / 2) // Right half
            : Math.random() * width; // Anywhere
            
        particles.push(
          new Particle(spawnX, Math.random() * height)
        );
      }
    };

    const animate = () => {
      time += 0.01 * actualSpeed;
      ctx.clearRect(0, 0, width, height);

      // Connection distance based on scale and falloff (increased base for better high-res visibility)
      const maxDistance = 250 * scale * falloff;

      // Update and draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            // Non-linear falloff for more organic look
            const distanceRatio = distance / maxDistance;
            const falloffFactor = Math.pow(1 - distanceRatio, 2);
            // Increased base opacity of connections
            const opacity = falloffFactor * 0.8 * intensity;
            
            const lineAlpha = breathing && !prefersReducedMotion
                ? opacity * (0.8 + Math.sin(time + particles[i].phase) * 0.2)
                : opacity;

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${Math.max(0, lineAlpha)})`;
            // Thicker lines for visibility
            ctx.lineWidth = 1.5 * scale;
            ctx.stroke();
          }
        }
      }

      // Draw dots
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        init();
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, scale, intensity, color, falloff, complexity, breathing]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.9 }} 
    />
  );
}

// Utility to convert hex to rgb
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

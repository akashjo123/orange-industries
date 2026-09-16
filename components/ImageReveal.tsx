"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type RevealDirection = "up" | "down" | "left" | "right";

interface ImageRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  className?: string;
  delay?: number;
}

export default function ImageReveal({ 
  children, 
  direction = "up", 
  className = "",
  delay = 0 
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (!containerRef.current || !imageWrapperRef.current) return;

    if (prefersReducedMotion) {
      gsap.set(containerRef.current, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" });
      gsap.set(imageWrapperRef.current, { scale: 1 });
      return;
    }

    let ctx = gsap.context(() => {
      // Set initial clip path based on direction
      let initialClipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      
      switch (direction) {
        case "up":
          initialClipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"; // Bottom sliver
          break;
        case "down":
          initialClipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"; // Top sliver
          break;
        case "left":
          initialClipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"; // Right sliver
          break;
        case "right":
          initialClipPath = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"; // Left sliver
          break;
      }

      gsap.set(containerRef.current, { clipPath: initialClipPath });
      gsap.set(imageWrapperRef.current, { scale: 1.14 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", // Trigger when top of container hits 85% of viewport
          toggleActions: "play none none none", // Play once
        },
        delay: delay
      });

      tl.to(containerRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.1,
        ease: "power3.inOut" // Smooth expo-style ease
      }, 0)
      .to(imageWrapperRef.current, {
        scale: 1,
        duration: 1.1,
        ease: "power3.inOut"
      }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, [direction, delay]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden w-full h-full ${className}`}>
      <div ref={imageWrapperRef} className="w-full h-full origin-center">
        {children}
      </div>
    </div>
  );
}

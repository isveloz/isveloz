import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function BackgroundGlow() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Use MotionValues for performance (does not trigger React re-renders)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Add spring physics for smooth trailing effect
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if it's a touch device to avoid rendering on mobile
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Center initially
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  // Don't render on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 1, // Behind everything except the darkest background
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.03) 40%, transparent 70%)',
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    />
  );
}

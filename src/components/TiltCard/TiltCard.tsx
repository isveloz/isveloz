import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export default function TiltCard({ children, className = '', intensity = 15 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smoothing for the tilt effect
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map mouse position to rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-intensity, intensity]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    // Only apply on devices with a mouse
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const rect = ref.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the card (normalized between -0.5 and 0.5)
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
}

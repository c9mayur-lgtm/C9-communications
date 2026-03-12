import type { ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { useMagnetic } from '../hooks/useMagnetic';

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  strength?: number;
  friction?: number;
}

export const MagneticButton = ({ 
  children, 
  strength = 0.3, 
  friction = 15,
  className,
  ...props 
}: MagneticButtonProps) => {
  const { ref, x, y } = useMagnetic(friction, strength);

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`relative flex-center overflow-hidden ${className || ''}`}
      {...props}
    >
      {/* Outer wrapper gets the magnetic pull, inner text could also have its own parallax if desired */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

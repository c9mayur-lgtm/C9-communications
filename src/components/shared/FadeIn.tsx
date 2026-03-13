import React, { useRef, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  style?: React.CSSProperties;
  duration?: number;
}

export const FadeIn = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  style,
  duration = 0.8,
}: FadeInProps) => {
  const ref = useRef(null);
  
  const initial =
    direction === 'up' ? { opacity: 0, y: 32 } :
    direction === 'down' ? { opacity: 0, y: -32 } :
    direction === 'left' ? { opacity: 0, x: -32 } :
    direction === 'right' ? { opacity: 0, x: 32 } :
    { opacity: 0 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

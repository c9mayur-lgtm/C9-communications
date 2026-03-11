import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className, style }) => {
  return (
    <motion.section
      id={id}
      className={className}
      style={style}
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.section>
  );
};

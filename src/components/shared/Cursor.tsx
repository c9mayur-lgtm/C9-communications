import React, { useEffect, useState, useRef } from 'react';
import './Cursor.css';

export const Cursor: React.FC = () => {
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isCard, setIsCard] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isCoarse, setIsCoarse] = useState(false);

  const requestRef = useRef<number>(0);
  const ringRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsCoarse(true);
      return;
    }

    const mouseMove = (e: MouseEvent) => {
      setIsHidden(false);
      setDotPos({ x: e.clientX, y: e.clientY });

      // Identify target type
      const target = e.target as HTMLElement;
      
      const isClickable = target.closest('a, button, [role="button"]') !== null;
      setIsPointer(isClickable);
      
      const isTextNode = window.getSelection()?.type === "Range" || ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN'].includes(target.tagName) && !isClickable;
      setIsText(isTextNode);
      
      const isCardHover = target.closest('.glass-card, .glass-card-light') !== null && !isClickable;
      setIsCard(isCardHover);

      // Check if we are over a dark section
      const closestDark = target.closest('.dark-section, [style*="background: var(--c9-hero-bg)"], [style*="background: #1A003A"]');
      setIsDark(closestDark !== null);
    };

    const mouseLeave = () => setIsHidden(true);
    const mouseEnter = () => setIsHidden(false);
    const mouseDown = () => setIsPressed(true);
    const mouseUp = () => setIsPressed(false);

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseleave', mouseLeave);
    document.addEventListener('mouseenter', mouseEnter);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    // Smooth ring animation
    const updateRing = () => {
      ringRef.current.x += (dotPos.x - ringRef.current.x) * 0.2;
      ringRef.current.y += (dotPos.y - ringRef.current.y) * 0.2;
      setRingPos({ x: ringRef.current.x, y: ringRef.current.y });
      requestRef.current = requestAnimationFrame(updateRing);
    };
    
    requestRef.current = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseleave', mouseLeave);
      document.removeEventListener('mouseenter', mouseEnter);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [dotPos]);

  if (isCoarse) return null;

  const dotClasses = ['cursor-dot'];
  if (isPointer) dotClasses.push('pointer');
  if (isDark && !isPointer) dotClasses.push('dark-mode');
  if (isHidden) dotClasses.push('hidden');

  const ringClasses = ['cursor-ring'];
  if (isPointer) ringClasses.push('pointer');
  else if (isText) ringClasses.push('text');
  else if (isCard) ringClasses.push('card');
  if (isPressed) ringClasses.push('pressed');
  if (isHidden) ringClasses.push('hidden');

  return (
    <>
      <div 
        className={dotClasses.join(' ')} 
        style={{ transform: `translate3d(${dotPos.x}px, ${dotPos.y}px, 0)` }} 
      />
      <div 
        className={ringClasses.join(' ')} 
        style={{ transform: `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)` }} 
      />
    </>
  );
};

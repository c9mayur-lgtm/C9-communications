import React, { useEffect, useRef } from 'react';
import './Cursor.css';

export const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const animFrame = useRef<number>(0);
  const isPointer = useRef(false);
  const isPressed = useRef(false);
  const isHidden = useRef(true);

  useEffect(() => {
    // Don't run on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const applyDotStyles = () => {
      const dot = dotRef.current;
      if (!dot) return;
      dot.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      dot.style.opacity = isHidden.current ? '0' : isPointer.current ? '0' : '1';
    };

    const applyRingStyles = () => {
      const r = ringRef.current;
      if (!r) return;
      ring.current.x += (mouse.current.x - ring.current.x) * 0.14;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.14;
      r.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      r.style.opacity = isHidden.current ? '0' : '1';

      if (isPointer.current) {
        r.style.width = '56px';
        r.style.height = '56px';
        r.style.marginLeft = '-28px';
        r.style.marginTop = '-28px';
        r.style.borderColor = 'rgba(168, 85, 247, 0.8)';
        r.style.backgroundColor = 'rgba(168, 85, 247, 0.08)';
        r.style.transform = isPressed.current
          ? `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) scale(0.85)`
          : `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      } else {
        r.style.width = '32px';
        r.style.height = '32px';
        r.style.marginLeft = '-16px';
        r.style.marginTop = '-16px';
        r.style.borderColor = 'rgba(168, 85, 247, 0.4)';
        r.style.backgroundColor = 'transparent';
      }
    };

    const loop = () => {
      applyDotStyles();
      applyRingStyles();
      animFrame.current = requestAnimationFrame(loop);
    };
    animFrame.current = requestAnimationFrame(loop);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      isHidden.current = false;
      const target = e.target as HTMLElement;
      isPointer.current = target.closest('a, button, [role="button"], input, select, textarea, label') !== null;
    };

    const onLeave = () => { isHidden.current = true; };
    const onEnter = () => { isHidden.current = false; };
    const onDown  = () => { isPressed.current = true; };
    const onUp    = () => { isPressed.current = false; };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      cancelAnimationFrame(animFrame.current);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []); // ← empty deps — no stale closure issues

  // Don't render on touch/coarse-pointer devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  style={{ opacity: 0 }} />
      <div ref={ringRef} className="cursor-ring" style={{ opacity: 0 }} />
    </>
  );
};

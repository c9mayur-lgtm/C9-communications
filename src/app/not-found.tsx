'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Home, Search, PhoneCall, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    const colors = ['#5D00D6', '#A855F7', '#7C3AED', '#6D28D9'];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      resize();
      particles.length = 0;
      const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 18000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#5D00D6';
            ctx.globalAlpha = (1 - dist / 120) * 0.12;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        ctx.globalAlpha = 1;
      });
      animationId = requestAnimationFrame(draw);
    };

    init();
    draw();

    const observer = new ResizeObserver(init);
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  const quickLinks = [
    { label: 'Managed IT', href: '/managed-it' },
    { label: 'Small Business', href: '/business' },
    { label: 'Enterprise', href: '/enterprise' },
    { label: 'Greenfield', href: '/greenfield' },
    { label: 'Case Studies', href: '/about/case-studies' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <main className="relative min-h-screen bg-[#0c1024] overflow-hidden flex flex-col items-center justify-center px-6 py-24">
      {/* Animated particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Purple glow blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#5D00D6] opacity-[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#A855F7] opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full text-center">

        {/* 404 Giant Number */}
        <div className="relative mb-4 select-none">
          <span
            className="text-[160px] md:text-[200px] font-black leading-none tracking-tighter"
            style={{
              background: 'linear-gradient(135deg, #5D00D6 0%, #A855F7 50%, #7C3AED 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: 0.9,
            }}
          >
            404
          </span>
          {/* Glitch overlay */}
          <span
            className="absolute inset-0 text-[160px] md:text-[200px] font-black leading-none tracking-tighter pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, #A855F7 0%, #5D00D6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              clipPath: 'polygon(0 30%, 100% 30%, 100% 50%, 0 50%)',
              transform: 'translateX(3px)',
              opacity: 0.4,
            }}
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Page Not Found
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[32px] md:text-[44px] font-bold text-white leading-tight mb-5 tracking-tight">
          Looks like this page{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #A855F7, #5D00D6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            doesn&apos;t exist.
          </span>
        </h1>

        <p className="text-slate-400 text-[17px] leading-relaxed mb-12 max-w-md mx-auto">
          The URL may have moved or was mistyped. Head back home or explore our services below.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/40 group"
          >
            <Home size={16} />
            Back to Home
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-white/15 text-white rounded-full h-14 px-9 font-bold text-[14px] hover:bg-white/5 transition-all"
          >
            <PhoneCall size={16} />
            Talk to Us
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-10" />

        {/* Quick Links */}
        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-6">
          Quick Navigation
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[13px] font-semibold hover:bg-[#5D00D6]/20 hover:border-[#5D00D6]/40 hover:text-white transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-14 text-slate-600 text-[12px]">
          If you believe this is an error, please{' '}
          <Link href="/contact" className="text-[#A855F7] hover:underline font-medium">
            contact our team
          </Link>
          .
        </p>
      </div>
    </main>
  );
}

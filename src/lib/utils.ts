import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Standardized CTA click handler for smooth-scroll or redirect
 */
export function handleCtaClick(e?: React.MouseEvent) {
  if (e) e.preventDefault();
  const el = document.getElementById('consultation-section');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = '/contact#consultation-section';
  }
}

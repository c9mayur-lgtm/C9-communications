'use client';

import React from 'react';

export default function C9VoiceNetworkDiagram() {
  return (
    <div className="relative w-full max-w-[720px] mx-auto overflow-hidden">
      <style>{`
        @keyframes flowDown{0%{stroke-dashoffset:0}100%{stroke-dashoffset:-48}}
        @keyframes flowRight{0%{stroke-dashoffset:0}100%{stroke-dashoffset:-48}}
        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
        @keyframes pulseDot{0%,100%{opacity:1}50%{opacity:.25}}
        @keyframes tagPop{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
        @keyframes glowPulse{0%,100%{opacity:.18}50%{opacity:.38}}
        .c9-fd{stroke-dasharray:8 8;animation:flowDown 1.5s linear infinite}
        .c9-fr{stroke-dasharray:8 8;animation:flowRight 1.5s linear infinite}
        .c9-fl{stroke-dasharray:8 8;animation:flowRight 1.5s linear infinite reverse}
        .c9-fi1{animation:floatY 3.2s ease-in-out infinite}
        .c9-fi2{animation:floatY 3.2s ease-in-out infinite .5s}
        .c9-fi3{animation:floatY 3.2s ease-in-out infinite 1s}
        .c9-fi4{animation:floatY 3.2s ease-in-out infinite 1.5s}
        .c9-fi5{animation:floatY 3.6s ease-in-out infinite .8s}
        .c9-pd1{animation:pulseDot 1.6s ease-in-out infinite}
        .c9-pd2{animation:pulseDot 1.6s ease-in-out infinite .4s}
        .c9-pd3{animation:pulseDot 1.6s ease-in-out infinite .8s}
        .c9-t1{animation:tagPop 2.8s ease-in-out infinite}
        .c9-t2{animation:tagPop 2.8s ease-in-out infinite .9s}
        .c9-t3{animation:tagPop 2.8s ease-in-out infinite 1.8s}
        .c9-glow{animation:glowPulse 3s ease-in-out infinite}
      `}</style>

      <svg width="100%" viewBox="0 0 680 560" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <defs>
          <marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#7F77DD]"/>
          </marker>
          <radialGradient id="netglow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#534AB7" stopOpacity=".22"/>
            <stop offset="100%" stopColor="#534AB7" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="devbg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F5F4FE"/>
            <stop offset="100%" stopColor="#EEEDFE"/>
          </linearGradient>
        </defs>

        {/* Section label */}
        <text x="220" y="22" textAnchor="middle" fontSize="10" fontWeight="600" fill="#7F77DD" letterSpacing="2" fontFamily="system-ui,sans-serif">OFFICE OR REMOTE USER</text>

        {/* Device box */}
        <rect x="20" y="34" width="400" height="118" rx="14" fill="url(#devbg)" stroke="#AFA9EC" strokeWidth="1"/>

        {/* Phone */}
        <g className="c9-fi1">
          <path d="M48 65 a5 5 0 0 1 5 -5 h22 a5 5 0 0 1 5 5 v34 a5 5 0 0 1 -5 5 h-22 a5 5 0 0 1 -5 -5 z" fill="none" stroke="#7F77DD" strokeWidth="1.8"/>
          <rect x="57" y="91" width="14" height="3" rx="1.5" fill="#7F77DD"/>
          <rect x="61" y="62" width="6" height="2" rx="1" fill="#AFA9EC"/>
        </g>
        <text x="64" y="114" textAnchor="middle" fontSize="9.5" fill="#534AB7" fontFamily="system-ui,sans-serif" fontWeight="600">PHONE</text>

        {/* Laptop */}
        <g className="c9-fi2">
          <rect x="116" y="60" width="44" height="30" rx="3" fill="none" stroke="#7F77DD" strokeWidth="1.8"/>
          <rect x="106" y="90" width="64" height="5" rx="2" fill="none" stroke="#7F77DD" strokeWidth="1.5"/>
          <rect x="121" y="65" width="34" height="20" rx="1" fill="#EEEDFE"/>
        </g>
        <text x="138" y="114" textAnchor="middle" fontSize="9.5" fill="#534AB7" fontFamily="system-ui,sans-serif" fontWeight="600">LAPTOP</text>

        {/* Mobile */}
        <g className="c9-fi3">
          <rect x="200" y="56" width="26" height="44" rx="5" fill="none" stroke="#7F77DD" strokeWidth="1.8"/>
          <rect x="208" y="93" width="10" height="2" rx="1" fill="#7F77DD"/>
        </g>
        <text x="213" y="114" textAnchor="middle" fontSize="9.5" fill="#534AB7" fontFamily="system-ui,sans-serif" fontWeight="600">MOBILE</text>

        {/* Tablet */}
        <g className="c9-fi4">
          <rect x="270" y="55" width="38" height="46" rx="4" fill="none" stroke="#7F77DD" strokeWidth="1.8"/>
          <rect x="285" y="94" width="8" height="2" rx="1" fill="#7F77DD"/>
          <rect x="275" y="60" width="28" height="28" rx="1" fill="#EEEDFE"/>
        </g>
        <text x="289" y="114" textAnchor="middle" fontSize="9.5" fill="#534AB7" fontFamily="system-ui,sans-serif" fontWeight="600">TABLET</text>

        {/* Network glow */}
        <ellipse cx="554" cy="88" rx="100" ry="38" fill="url(#netglow)" className="c9-glow"/>

        {/* C9 Voice Network pill */}
        <rect x="460" y="50" width="196" height="58" rx="12" fill="#534AB7" stroke="#3C3489" strokeWidth="1"/>
        <text x="558" y="75" textAnchor="middle" fontSize="13" fontWeight="600" fill="white" fontFamily="system-ui,sans-serif">C9 Voice or</text>
        <text x="558" y="93" textAnchor="middle" fontSize="13" fontWeight="600" fill="white" fontFamily="system-ui,sans-serif">3rd Party Network</text>

        {/* Bidirectional arrow with pulse dots */}
        <line x1="422" y1="93" x2="458" y2="93" stroke="#7F77DD" strokeWidth="1.5" markerEnd="url(#ah)" markerStart="url(#ah)"/>
        <circle cx="430" cy="93" r="2.5" fill="#7F77DD" className="pulseDot0"/>
        <circle cx="440" cy="93" r="2.5" fill="#7F77DD" className="pulseDot1"/>
        <circle cx="450" cy="93" r="2.5" fill="#7F77DD" className="pulseDot2"/>

        {/* Flow down to telephony */}
        <line x1="558" y1="110" x2="558" y2="232" stroke="#7F77DD" strokeWidth="1.5" className="c9-fd" markerEnd="url(#ah)"/>

        {/* IP Telephony box */}
        <rect x="390" y="234" width="268" height="174" rx="14" fill="#F5F4FE" stroke="#AFA9EC" strokeWidth="1.2" strokeDasharray="6 3"/>
        <text x="524" y="261" textAnchor="middle" fontSize="12.5" fontWeight="600" fill="#3C3489" fontFamily="system-ui,sans-serif">C9 Voice IP Telephony</text>

        {/* Cloud icon - Simplified SVG path */}
        <g className="c9-fi5" transform="translate(488, 280) scale(0.8)">
            <path d="M45 23 a20 20 0 0 0 -34 0 a15 15 0 0 0 4 28 h32 a15 15 0 0 0 0 -30 a15 15 0 0 0 -2 2" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>

        {/* Feature tags */}
        <g className="c9-t1"><rect x="402" y="370" width="36" height="22" rx="6" fill="#534AB7"/><text x="420" y="385" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="white" fontFamily="system-ui,sans-serif">IVR</text></g>
        <g className="c9-t2"><rect x="447" y="370" width="82" height="22" rx="6" fill="#534AB7"/><text x="488" y="385" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="white" fontFamily="system-ui,sans-serif">HUNT GROUPS</text></g>
        <g className="c9-t3"><rect x="538" y="370" width="72" height="22" rx="6" fill="#534AB7"/><text x="574" y="385" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="white" fontFamily="system-ui,sans-serif">VOICEMAIL</text></g>

        {/* PSTN box */}
        <rect x="220" y="306" width="148" height="56" rx="10" fill="#AFA9EC" stroke="#7F77DD" strokeWidth="1.2"/>
        <text x="294" y="330" textAnchor="middle" fontSize="12.5" fontWeight="600" fill="#26215C" fontFamily="system-ui,sans-serif">Public Telephony</text>
        <text x="294" y="348" textAnchor="middle" fontSize="11.5" fill="#3C3489" fontFamily="system-ui,sans-serif">(PSTN)</text>

        {/* Telephony → PSTN */}
        <line x1="388" y1="334" x2="370" y2="334" stroke="#7F77DD" strokeWidth="1.5" className="c9-fl" markerEnd="url(#ah)"/>

        {/* PSTN ↔ Call Destination */}
        <line x1="218" y1="334" x2="148" y2="396" stroke="#7F77DD" strokeWidth="1.5" markerEnd="url(#ah)" markerStart="url(#ah)"/>

        {/* Call Destination box */}
        <rect x="20" y="360" width="140" height="112" rx="14" fill="white" stroke="#AFA9EC" strokeWidth="1"/>
        <text x="90" y="386" textAnchor="middle" fontSize="12.5" fontWeight="600" fill="#3C3489" fontFamily="system-ui,sans-serif">Call Destination</text>
        <circle cx="90" cy="430" r="22" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="1.4"/>
        <ellipse cx="90" cy="430" rx="10" ry="22" fill="none" stroke="#7F77DD" strokeWidth="1"/>
        <line x1="68" y1="430" x2="112" y2="430" stroke="#7F77DD" strokeWidth="1"/>
        <line x1="70" y1="420" x2="110" y2="420" stroke="#7F77DD" strokeWidth=".8"/>
        <line x1="70" y1="440" x2="110" y2="440" stroke="#7F77DD" strokeWidth=".8"/>

        {/* Vertical connector */}
        <line x1="200" y1="154" x2="200" y2="306" stroke="#CECBF6" strokeWidth="1" strokeDasharray="4 4"/>
        <line x1="200" y1="306" x2="240" y2="306" stroke="#CECBF6" strokeWidth="1" markerEnd="url(#ah)"/>

        {/* Legend strip */}
        <rect x="20" y="500" width="640" height="44" rx="10" fill="#F5F4FE" stroke="#CECBF6" strokeWidth=".8"/>
        <rect x="36" y="515" width="12" height="12" rx="3" fill="#534AB7"/>
        <text x="54" y="525" fontSize="10.5" fill="#3C3489" fontFamily="system-ui,sans-serif">C9 Voice Network</text>
        <rect x="172" y="515" width="12" height="12" rx="3" fill="#AFA9EC"/>
        <text x="190" y="525" fontSize="10.5" fill="#3C3489" fontFamily="system-ui,sans-serif">PSTN</text>
        <line x1="252" y1="521" x2="278" y2="521" stroke="#7F77DD" strokeWidth="1.5" strokeDasharray="4 4"/>
        <text x="284" y="525" fontSize="10.5" fill="#3C3489" fontFamily="system-ui,sans-serif">Live call flow</text>
        <rect x="376" y="514" width="12" height="12" rx="3" fill="#F5F4FE" stroke="#7F77DD" strokeWidth="1" strokeDasharray="3 2"/>
        <text x="394" y="525" fontSize="10.5" fill="#3C3489" fontFamily="system-ui,sans-serif">Cloud-hosted zone</text>
        <rect x="520" y="514" width="12" height="12" rx="3" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="1"/>
        <text x="538" y="525" fontSize="10.5" fill="#3C3489" fontFamily="system-ui,sans-serif">IP endpoint</text>
      </svg>
    </div>
  );
}

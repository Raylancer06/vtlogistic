'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, Sparkles, Pause, Play } from 'lucide-react';

interface ClientLogo {
  name: string;
  filename: string;
  tag: string;
}

const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'NRN Linkit', filename: 'nrn.jpeg', tag: 'Connecting • Enabling • Delivering' },
  { name: 'Sada Shiv Enterprises', filename: 'sada.jpeg', tag: 'Industrial Freight & Logistics' },
  { name: 'Signature Logistics', filename: 'sign.jpeg', tag: 'Key Enterprise Partner' },
  { name: 'Crown Logistics', filename: 'crown.jpeg', tag: 'Automotive & Heavy Fleet' },
  { name: 'Mahadhan', filename: 'mahadhan.jpeg', tag: 'Agri Supply Chain' },
  { name: 'Linkit Logistics', filename: 'linkit logistics.jpeg', tag: 'Interstate Transport' },
  { name: 'Agrim', filename: 'agrim.jpeg', tag: 'Enterprise Agriculture' },
  { name: 'AgriOne', filename: 'agrione.jpeg', tag: 'Cold Chain & Relocation' },
  { name: 'Agrohaat', filename: 'agrohaat.jpeg', tag: 'Bulk Regional Cargo' },
  { name: 'Hymark', filename: 'hymark.jpeg', tag: 'Commercial Distribution' },
  { name: 'Ingen', filename: 'ingen.jpeg', tag: 'Industrial Movement' },
  { name: 'Mahesh Transport', filename: 'mahesh.jpeg', tag: 'Highway Convoy Partner' },
  { name: 'Neptune', filename: 'neptune.jpeg', tag: 'National Logistics' },
];

export default function LogoScroller() {
  const [isPaused, setIsPaused] = useState(false);
  const [activeClient, setActiveClient] = useState<string | null>(null);

  // Duplicate for seamless 100% infinite marquee loop
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="relative w-full py-12 md:py-16 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/50 border-y border-slate-200/80 overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Status Badge */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 sm:mb-10">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-600 animate-pulse" />
              <span>Institutional Enterprise Network</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Trusted by Premier Supply Chains & Fleet Operators
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 shadow-sm transition-all"
              title={isPaused ? 'Resume auto scroll' : 'Pause on current view'}
            >
              {isPaused ? <Play className="w-3 h-3 text-emerald-600" /> : <Pause className="w-3 h-3 text-slate-500" />}
              <span>{isPaused ? 'Resume Ticker' : 'Pause Ticker'}</span>
            </button>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Hover over any logo to inspect
            </span>
          </div>
        </div>

        {/* The Scroller Container with Edge Fades & On-Hover Effects */}
        <div className="relative group overflow-hidden py-4">
          {/* Left & Right subtle gradient fog for smooth endless look */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Marquee Track */}
          <div
            className={`flex items-center gap-6 sm:gap-8 w-max transition-all ${
              isPaused ? '[animation-play-state:paused]' : 'animate-marquee group-hover:[animation-play-state:paused]'
            }`}
          >
            {duplicatedLogos.map((client, idx) => (
              <div
                key={`${client.filename}-${idx}`}
                onMouseEnter={() => setActiveClient(client.name)}
                onMouseLeave={() => setActiveClient(null)}
                className="relative flex flex-col items-center justify-center min-w-[170px] sm:min-w-[210px] h-24 sm:h-28 px-6 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/15 hover:border-brand-400 hover:-translate-y-1.5 group/card cursor-pointer"
              >
                {/* Logo Image */}
                <div className="relative w-full h-12 sm:h-14 flex items-center justify-center">
                  <Image
                    src={`/images/${client.filename}`}
                    alt={client.name}
                    width={150}
                    height={56}
                    className="max-h-12 sm:max-h-14 max-w-[140px] sm:max-w-[170px] w-auto h-auto object-contain filter contrast-105 transition-all duration-300 group-hover/card:scale-105"
                  />
                </div>

                {/* Micro Tagline on Hover */}
                <div className="mt-1 flex items-center gap-1 opacity-70 group-hover/card:opacity-100 transition-opacity">
                  <ShieldCheck className="w-3 h-3 text-brand-600" />
                  <span className="text-[11px] font-semibold text-slate-600 truncate max-w-[150px]">
                    {client.tag}
                  </span>
                </div>

                {/* Subtle top indicator pip on hover */}
                <span className="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-brand-500 opacity-0 group-hover/card:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* Micro statistics pill below scroller */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>100% Verified SLAs</span>
          </div>
          <div className="hidden sm:inline text-slate-300">•</div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-500"></span>
            <span>Direct Factory-to-Depot Transit</span>
          </div>
          <div className="hidden sm:inline text-slate-300">•</div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span>Zero Unvetted Subcontracting</span>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Truck,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Clock,
  MapPin,
  Users,
  Compass,
  Gauge,
  Sparkles,
  FileCheck,
  Award,
  Layers,
  ArrowUpRight,
  MessageSquare,
  Building,
  Navigation,
  Radio,
} from 'lucide-react';
import LogoScroller from '@/components/LogoScroller';
import FleetSlider from '@/components/FleetSlider';
import QuoteSection from '@/components/QuoteSection';
import { useRequestModal } from '@/components/LayoutClientWrapper';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export default function HomePage() {
  const { openModal } = useRequestModal();

  return (
    <div className="w-full">
      {/* 1. HERO SECTION (LOGIXPRESS CALIBER FULL-BLEED CINEMATIC) */}
      <section className="relative w-full min-h-[92vh] flex flex-col justify-center bg-[#060B14] text-white overflow-hidden pt-12 pb-24 md:pb-32">
        {/* Cinematic HD Fleet Image for VT Logistics */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/truck_freight_hd.jpg"
            alt="Value Trust Logistics Heavy Commercial Transport Fleet"
            fill
            priority
            className="object-cover object-center scale-105"
          />
          {/* Deep Gradient Film Layers for high contrast & readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060B14] via-[#060B14]/90 to-[#060B14]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-transparent to-[#060B14]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-16">
          <div className="max-w-3xl flex flex-col items-start">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-slate-200 text-xs font-bold tracking-widest uppercase mb-7 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-ping"></span>
              <span className="text-[#FF7A00] font-extrabold">PAN-INDIA B2B LOGISTICS</span>
              <span className="text-slate-400">•</span>
              <span>10,000+ VERIFIED DRIVERS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-white mb-6 uppercase">
              Reliable FTL Transportation. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">
                Flexible Fleet.
              </span>{' '}
              <br />
              <span className="text-white">Built Around Your Load.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 font-sans text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-8 max-w-2xl drop-shadow-sm">
              We provide a versatile fleet from 1 to 40 tons, tailored to customer load and transportation requirements, along with EV fleet deployment and jockey movement support.
            </p>

            {/* High-Impact Action Buttons - Responsive Stack on Mobile */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full pt-2">
              {/* Primary Amber Button */}
              <button
                type="button"
                onClick={openModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF7A00] hover:bg-[#E06900] text-white font-display font-extrabold text-[13px] tracking-wider uppercase px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl shadow-[0_8px_20px_rgba(255,122,0,0.3)] hover:shadow-[0_12px_28px_rgba(255,122,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <Truck className="w-4 h-4 shrink-0" />
                <span>Request A Vehicle</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              {/* WhatsApp Action with Official WhatsApp Icon */}
              <a
                href="https://wa.me/919053529200?text=Hello,%20I%20have%20an%20urgent%20logistics%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-display font-extrabold text-[13px] tracking-wider uppercase px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl shadow-[0_6px_18px_rgba(37,211,102,0.25)] hover:shadow-[0_10px_22px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp</span>
              </a>

              {/* Call Button: Phone Icon + Number */}
              <a
                href="tel:9053529200"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-display font-bold text-[13px] tracking-wider uppercase px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 whitespace-nowrap group"
                aria-label="Call +91 9053529200"
              >
                <Phone className="w-4 h-4 text-[#FF7A00] shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91 9053529200</span>
              </a>
            </div>

            {/* Trust Markers */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-300 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Jhajjar Central HQ</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero-Damage Driveaway</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Enterprise SLA Bonded</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERLAPPING METRICS BANNER (RESPONSIVE & BALANCED) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 grid grid-cols-2 lg:grid-cols-4 p-4 sm:p-6 gap-3 sm:gap-6">
          {/* Stat 1: Jhajjar HQ */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-white hover:border-brand-300 transition-all duration-200">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
              <Building className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-none whitespace-nowrap">Jhajjar HQ</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 truncate">Central Dispatch</p>
            </div>
          </div>

          {/* Stat 2: 100% On-Time Deliveries */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-white hover:border-emerald-300 transition-all duration-200">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-none whitespace-nowrap">100%</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 truncate">On-Time Deliveries</p>
            </div>
          </div>

          {/* Stat 3: 99% Zero-Damage Record */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-white hover:border-amber-300 transition-all duration-200">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-none whitespace-nowrap">99%</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 truncate">Zero-Damage Record</p>
            </div>
          </div>

          {/* Stat 4: 24/7 Active Control Desk */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-white hover:border-purple-300 transition-all duration-200">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
              <Radio className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-none whitespace-nowrap">24/7</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 truncate">Active Control Desk</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CLIENT LOGO SCROLLER */}
      <div className="mt-12">
        <LogoScroller />
      </div>

      {/* 4. REFERENCE PILL CARDS (Matching user's reference image style) */}
      <section className="py-14 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Core Service Access</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Select Your Operational Requirement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Card 1: Fleet Operations Management */}
            <Link
              href="/services#fleet-operations"
              className="group bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-brand-400 transition-all duration-300 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/70 flex items-center justify-center text-amber-500 shrink-0 group-hover:bg-amber-100 transition-colors">
                  <ShieldCheck className="w-7 h-7 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
                    Fleet Operations Management
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Dedicated corporate fleets, uptime SLAs, and line-haul schedules.
                  </p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-brand-50 flex items-center justify-center text-slate-400 group-hover:text-brand-600 transition-all shrink-0">
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 2: Jockey Movement */}
            <Link
              href="/services#jockey-movement"
              className="group bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-brand-400 transition-all duration-300 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/70 flex items-center justify-center text-amber-500 shrink-0 group-hover:bg-amber-100 transition-colors">
                  <Compass className="w-7 h-7 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
                    Jockey Movement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Pan-India driveaway for buses, bare chassis, and heavy trailers.
                  </p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-brand-50 flex items-center justify-center text-slate-400 group-hover:text-brand-600 transition-all shrink-0">
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FLEET TONNAGE SHOWCASE (A TRUCK FOR EVERY TONNAGE) */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#FF7A00] mb-2">
                <Truck className="w-3.5 h-3.5" />
                <span>Our Fleet • Your Flexibility</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                A truck for every tonnage.
              </h2>
            </div>
            <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
              From 14 FT closed bodies to 40-ton trailers — explore our verified fleet with live payload specs and instant dispatch booking.
            </p>
          </div>

          {/* Interactive HD Fleet Slider */}
          <FleetSlider />
        </div>
      </section>

      {/* 6. CORE SERVICE CAPABILITIES (ENTERPRISE TRANSPORTATION PORTFOLIO - 2 CARDS) */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF7A00]">
                  Core Service Capabilities
                </span>
                <span className="w-8 h-[2px] bg-[#FF7A00]" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                Enterprise Transportation Portfolio
              </h2>
            </div>
            <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
              Engineered specifically for manufacturers, OEMs, corporate bus operators, and enterprise distribution heads.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: FTL Road Transportation */}
            <div className="group rounded-[32px] overflow-hidden bg-[#0A1322] border border-slate-800 shadow-2xl flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300">
              {/* Image Window */}
              <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/truck_freight_hd.jpg"
                  alt="Full Truckload (FTL) Road Transportation"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1322] via-[#0A1322]/20 to-transparent" />
                
                {/* Top Badge Floating */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-black tracking-wider uppercase shadow-xl">
                    <Truck className="w-4 h-4" />
                    <span>1. FTL LOAD TRANSPORTATION</span>
                  </span>
                  <span className="block text-[11px] font-extrabold text-blue-200 tracking-widest uppercase mt-2 ml-1 drop-shadow-md">
                    YOUR LOAD | OUR PRIORITY
                  </span>
                </div>
              </div>

              {/* Dedicated Content Body Below Image */}
              <div className="p-6 sm:p-8 bg-[#0A1322] flex-1 flex flex-col justify-between gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  {/* Left: Title & Description */}
                  <div className="sm:max-w-xs md:max-w-sm">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-2">
                      Full Truckload (FTL) Road Transportation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      We provide dedicated vehicles for full truckload consignments, ensuring safe, on-time and efficient delivery across locations.
                    </p>
                  </div>

                  {/* Right: 3 Circular Feature Badges */}
                  <div className="flex items-center justify-start sm:justify-end gap-3 sm:gap-4 shrink-0 pt-2 sm:pt-0">
                    <div className="flex flex-col items-center text-center gap-2 w-16 sm:w-20">
                      <div className="w-12 h-12 rounded-full bg-blue-950 border border-blue-500/40 text-blue-400 flex items-center justify-center shadow-lg">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-200 leading-tight">Safe &amp; Secure</span>
                    </div>
                    <div className="flex flex-col items-center text-center gap-2 w-16 sm:w-20">
                      <div className="w-12 h-12 rounded-full bg-blue-950 border border-blue-500/40 text-blue-400 flex items-center justify-center shadow-lg">
                        <Clock className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-200 leading-tight">On-Time Delivery</span>
                    </div>
                    <div className="flex flex-col items-center text-center gap-2 w-16 sm:w-20">
                      <div className="w-12 h-12 rounded-full bg-blue-950 border border-blue-500/40 text-blue-400 flex items-center justify-center shadow-lg">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-200 leading-tight">Pan India Coverage</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Ribbon */}
                <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={openModal}
                    className="inline-flex items-center gap-2 font-black text-blue-400 hover:text-white uppercase tracking-wider transition-colors group/btn"
                  >
                    <span>Book FTL Truck Placement</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-slate-400 font-semibold">1 to 40 Tons Available</span>
                </div>
              </div>
            </div>

            {/* Card 2: Jockey Movement */}
            <div className="group rounded-[32px] overflow-hidden bg-[#0A1322] border border-slate-800 shadow-2xl flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300">
              {/* Image Window */}
              <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/jockey_bus.jpg"
                  alt="Jockey Movement & Skilled Driver Support"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1322] via-[#0A1322]/20 to-transparent" />
                
                {/* Top Badge Floating */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white text-xs font-black tracking-wider uppercase shadow-xl">
                    <Compass className="w-4 h-4" />
                    <span>2. JOCKEY MOVEMENT</span>
                  </span>
                  <span className="block text-[11px] font-extrabold text-emerald-200 tracking-widest uppercase mt-2 ml-1 drop-shadow-md">
                    DRIVER SUPPORT | FLEXIBLE MOBILITY
                  </span>
                </div>
              </div>

              {/* Dedicated Content Body Below Image */}
              <div className="p-6 sm:p-8 bg-[#0A1322] flex-1 flex flex-col justify-between gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  {/* Left: Title & Description */}
                  <div className="sm:max-w-xs md:max-w-sm">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-2">
                      Jockey Movement
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      We provide skilled drivers and jockey movement services to ensure smooth and timely vehicle movement between locations as per your requirements.
                    </p>
                  </div>

                  {/* Right: 3 Circular Feature Badges */}
                  <div className="flex items-center justify-start sm:justify-end gap-3 sm:gap-4 shrink-0 pt-2 sm:pt-0">
                    <div className="flex flex-col items-center text-center gap-2 w-16 sm:w-20">
                      <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-lg">
                        <Users className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-200 leading-tight">Skilled Drivers</span>
                    </div>
                    <div className="flex flex-col items-center text-center gap-2 w-16 sm:w-20">
                      <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-lg">
                        <Navigation className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-200 leading-tight">Flexible Routes</span>
                    </div>
                    <div className="flex flex-col items-center text-center gap-2 w-16 sm:w-20">
                      <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-lg">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-200 leading-tight">Reliable Operations</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Ribbon */}
                <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={openModal}
                    className="inline-flex items-center gap-2 font-black text-emerald-400 hover:text-white uppercase tracking-wider transition-colors group/btn"
                  >
                    <span>Request Jockey Driver Crew</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-slate-400 font-semibold">EV Bus &amp; Trucks Supported</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. STANDARD OPERATING PROCEDURE (8-STAGE SOP) */}
      <section className="py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF7A00] block mb-2">
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Standard Operating Procedure
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              From contract scoping to terminal handover, our step-by-step process guarantees zero highway losses and complete customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {[
              {
                step: '01',
                title: 'Understand Customer Requirement',
                desc: 'We first understand your load, cargo type, destination, timeline and special needs.',
                icon: FileCheck,
                color: 'bg-blue-600 text-white',
              },
              {
                step: '02',
                title: 'Plan & Route Mapping',
                desc: 'We analyze the best routes, distance, transit time and possible alternatives.',
                icon: MapPin,
                color: 'bg-emerald-600 text-white',
              },
              {
                step: '03',
                title: 'Availability Check',
                desc: 'We check vehicle availability, fleet capacity and driver readiness as per your requirement.',
                icon: Gauge,
                color: 'bg-purple-600 text-white',
              },
              {
                step: '04',
                title: 'Vehicle Placement',
                desc: 'Once confirmed, we allocate the right vehicle from our fleet (1–40 Ton) based on your load & route.',
                icon: Truck,
                color: 'bg-amber-500 text-white',
              },
              {
                step: '05',
                title: 'Jockey Movement & Driver Alignment',
                desc: 'If required, we align professional drivers, handle jockey movement and guide them with full route details.',
                icon: Users,
                color: 'bg-sky-600 text-white',
              },
              {
                step: '06',
                title: 'Execute',
                desc: 'The vehicle is dispatched and movement is closely monitored until delivery.',
                icon: Navigation,
                color: 'bg-indigo-600 text-white',
              },
              {
                step: '07',
                title: '24/7 SLA Support',
                desc: 'Our team stays active 24/7 to ensure smooth movement, real-time updates and quick issue resolution.',
                icon: Radio,
                color: 'bg-rose-600 text-white',
              },
              {
                step: '08',
                title: 'Successful Delivery',
                desc: 'We ensure safe, on-time delivery with complete compliance and customer satisfaction.',
                icon: Award,
                color: 'bg-emerald-600 text-white',
              },
            ].map((st, idx) => (
              <div
                key={st.step}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#FF7A00] transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`w-10 h-10 rounded-2xl ${st.color} font-extrabold text-sm flex items-center justify-center shadow-md`}>
                      {st.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-50 group-hover:bg-orange-50 flex items-center justify-center text-slate-400 group-hover:text-[#FF7A00] transition-colors">
                      <st.icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight mb-2 leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-[#FF7A00] transition-colors">
                  <span>Stage {idx + 1} of 8</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE FUNCTIONAL DISPATCH FORM SECTION */}
      <QuoteSection />

      {/* 8. JHAJJAR HEADQUARTERS & PAN-INDIA REACH - PREMIUM LOGIXPRESS SHOWCASE */}
      <section className="relative py-20 bg-[#060B14] text-white overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0c1322] via-[#09101c] to-[#060B14] shadow-2xl">
            {/* Background subtle watermark / pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
              <div className="absolute -right-20 -top-20 w-96 h-96 border-[40px] border-white/10 rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-14">
              {/* Left Column: Information & Corridor Connectivity */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700/80 text-slate-300 text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-brand-500" />
                  <span>Central Operations Headquarters</span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-snug uppercase">
                  Strategically Positioned In{' '}
                  <span className="text-white border-b-2 border-brand-500 pb-0.5">
                    Jhajjar, Haryana
                  </span>
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                  Direct arterial connectivity to Delhi-NCR, Rajasthan, Uttar Pradesh, Punjab, and the Western Dedicated Freight Corridor. Centralized vehicle staging, driver screening facilities, and rapid corridor deployment (PIN: 124103).
                </p>

                {/* Corridor Tags / Arterial Connectivity */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                    <Navigation className="w-4 h-4 text-[#FF7A00] shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Arterial Highway</p>
                      <p className="text-xs font-bold text-white">KMP Expressway</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                    <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Delhi-NCR Access</p>
                      <p className="text-xs font-bold text-white">&lt; 45 Mins Transit</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5 col-span-2 sm:col-span-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Western Corridor</p>
                      <p className="text-xs font-bold text-white">NH-48 Direct Link</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons: Crisp & Corporate */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {/* Call Button: Phone Icon + Number Only */}
                  <a
                    href="tel:9053529200"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-[13px] uppercase tracking-wider border border-slate-700 hover:border-slate-600 transition-all active:translate-y-0 whitespace-nowrap"
                    aria-label="Call +91 9053529200"
                  >
                    <Phone className="w-4 h-4 text-[#FF7A00]" />
                    <span>+91 9053529200</span>
                  </a>

                  {/* WhatsApp Button: WhatsApp Icon */}
                  <a
                    href="https://wa.me/919053529200?text=Hello%20VT%20Logistic%20Services,%20I%20would%20like%20to%20discuss%20a%20logistics%20requirement."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-extrabold text-[13px] uppercase tracking-wider shadow-sm transition-all active:translate-y-0 whitespace-nowrap"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-[13px] uppercase tracking-wider border border-white/20 hover:border-white/30 transition-all whitespace-nowrap"
                  >
                    <span>View HQ Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Terminal Showcase Card with HD Photography */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 shadow-2xl group">
                  <div className="relative h-64 sm:h-72 w-full">
                    <Image
                      src="/images/ev_bus_fleet.jpg"
                      alt="Jhajjar Operational Staging Terminal & EV Fleet Hub"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-[#060B14]/40 to-transparent" />

                    {/* Top Inset Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7A00] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                        <Radio className="w-3.5 h-3.5 animate-pulse" />
                        <span>LIVE DISPATCH TERMINAL</span>
                      </span>

                      <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                        24/7 ACTIVE
                      </span>
                    </div>

                    {/* Bottom Details */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Jhajjar, Haryana – 124103</span>
                      </div>
                      <p className="text-base font-extrabold text-white">
                        Northern Freight Transit & Staging Hub
                      </p>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/15 text-xs text-slate-300">
                        <span>Zero-Towing Jockey Yard</span>
                        <span className="text-amber-300 font-bold">100+ Fleet Staging</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

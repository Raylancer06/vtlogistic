'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  Truck,
  ArrowRight,
  MapPin,
  Users,
  Compass,
  Award,
  Clock,
  Building,
  Navigation,
  Radio,
  BadgeCheck,
  Check,
  Sparkles,
} from 'lucide-react';
import LogoScroller from '@/components/LogoScroller';
import FleetSlider from '@/components/FleetSlider';
import { useRequestModal } from '@/components/LayoutClientWrapper';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export default function AboutPage() {
  const { openModal } = useRequestModal();

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* 01 — THE COMPANY HERO SECTION (MATCHING CINEMATIC BRAND THEME) */}
      <section className="relative w-full bg-[#060B14] text-white overflow-hidden pt-16 sm:pt-24 pb-20 sm:pb-28 border-b border-slate-800">
        {/* Cinematic HD Fleet Backdrop with Gradient Film */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/truck_freight_hd.jpg"
            alt="VT Logistics Heavy Commercial Fleet"
            fill
            priority
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060B14] via-[#060B14]/90 to-[#060B14]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-transparent to-[#060B14]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              {/* Top Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-slate-200 text-xs font-bold tracking-widest uppercase shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-ping" />
                <span className="text-[#FF7A00] font-extrabold">01 • THE COMPANY</span>
                <span className="text-slate-400">•</span>
                <span>PAN-INDIA FTL NETWORK</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] uppercase">
                Moving India with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-amber-400 to-yellow-300">
                  Trust
                </span>
                , Speed &amp; Reliability.
              </h1>

              {/* Subtitle / Description */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
                VT Logistics Services is a professional logistics company specializing exclusively in Full Truck Load (FTL) transportation across India. We provide reliable truck placement, competitive freight rates and timely transportation solutions for businesses of every scale.
              </p>

              {/* High-Impact Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <button
                  type="button"
                  onClick={openModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF7A00] hover:bg-[#E06900] text-white font-display font-extrabold text-[13px] tracking-wider uppercase px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl shadow-[0_8px_20px_rgba(255,122,0,0.3)] hover:shadow-[0_12px_28px_rgba(255,122,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <Truck className="w-4 h-4 shrink-0" />
                  <span>Request A Vehicle</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>

                <a
                  href="https://wa.me/919053529200?text=Hello%20VT%20Logistic%20Services,%20I%20would%20like%20to%20discuss%20logistics%20requirements."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-display font-extrabold text-[13px] tracking-wider uppercase px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl shadow-[0_6px_18px_rgba(37,211,102,0.25)] hover:shadow-[0_10px_22px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="tel:9053529200"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-display font-bold text-[13px] tracking-wider uppercase px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 whitespace-nowrap group"
                  aria-label="Call +91 9053529200"
                >
                  <Phone className="w-4 h-4 text-[#FF7A00] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+91 9053529200</span>
                </a>
              </div>

              {/* Fast Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-300 border-t border-white/10">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Pan-India FTL Network
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% On-Time Deliveries
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Jhajjar HQ 24/7 Control Desk
                </span>
              </div>
            </div>

            {/* Right: High-Definition Commercial Truck Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900 group">
                <div className="relative h-[360px] sm:h-[440px] w-full overflow-hidden">
                  <Image
                    src="/images/truck_bharatbenz_hd.jpg"
                    alt="VT Logistics Heavy Commercial Transport Fleet"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-[#060B14]/20 to-transparent opacity-80" />

                  {/* Floating Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF7A00] text-white text-xs font-black uppercase tracking-wider shadow-lg">
                      <Truck className="w-3.5 h-3.5" />
                      <span>Verified Heavy Fleet</span>
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-emerald-400 text-xs font-mono font-bold shadow">
                      GPS LIVE
                    </span>
                  </div>

                  {/* Bottom Glass Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] uppercase font-extrabold tracking-wider text-[#FF7A00]">
                          Full Truckload Excellence
                        </p>
                        <p className="text-sm sm:text-base font-extrabold text-white">
                          1 to 40 Ton Pan-India Fleets
                        </p>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        VERIFIED SLA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS BAR */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 grid grid-cols-2 lg:grid-cols-4 p-4 sm:p-6 gap-3 sm:gap-6">
          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
            <div className="w-11 h-11 rounded-xl bg-orange-100 text-[#FF7A00] flex items-center justify-center shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-extrabold text-slate-900 leading-none">Jhajjar HQ</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Central Dispatch</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
            <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-extrabold text-slate-900 leading-none">100%</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">On-Time Deliveries</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
            <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-extrabold text-slate-900 leading-none">99%</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Zero-Damage Record</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
            <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-extrabold text-slate-900 leading-none">24/7</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Active Control Desk</p>
            </div>
          </div>
        </div>
      </div>

      {/* FLEET TONNAGE SHOWCASE (OUR FLEET. YOUR FLEXIBILITY) */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200/80">
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

      {/* CORE SERVICES WITH WORKING PATTERN (ONLY 2 CORE SERVICES: FTL FIRST, THEN JOCKEY) */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#FF7A00] text-xs font-extrabold uppercase tracking-widest mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Core Service Framework</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our 2 Core Services &amp; Working Pattern
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Transparent, point-to-point execution designed specifically for full truckload consignments and professional jockey movement.
            </p>
          </div>

          <div className="space-y-12">
            {/* 1. Full Truck Load Management (FTL) */}
            <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Truck className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-blue-600 uppercase tracking-widest block mb-1">
                      CORE SERVICE 01
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      Full Truck Load Management (FTL)
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
                      Dedicated vehicles from 1 to 40 tons for bulk industrial consignments, automotive parts, and FMCG manufacturing corridors across India.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={openModal}
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all shrink-0 flex items-center gap-2 w-fit"
                >
                  <span>Request FTL Truck</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Working Pattern Steps for FTL */}
              <div className="pt-8">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-6">
                  FTL Working Pattern &amp; Execution Stages:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      step: 'Step 1',
                      title: 'Load & Capacity Audit',
                      desc: 'We analyze your cargo tonnage (1–40 Ton), box count, and dimensions to allocate the precise vehicle.',
                    },
                    {
                      step: 'Step 2',
                      title: 'Direct Vehicle Placement',
                      desc: 'Guaranteed truck placement from our Jhajjar terminal and regional hubs within committed SLA windows.',
                    },
                    {
                      step: 'Step 3',
                      title: 'Route & Corridor Tracking',
                      desc: '24/7 telematics oversight, live driver communication, and milestone check-ins across expressways.',
                    },
                    {
                      step: 'Step 4',
                      title: 'Safe Handover & Compliance',
                      desc: 'Zero-damage unloading, electronic Proof of Delivery (ePOD), and instant statutory compliance handover.',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200">
                      <span className="text-xs font-black text-blue-600 block mb-1">{item.step}</span>
                      <h5 className="text-sm font-extrabold text-slate-900 mb-1">{item.title}</h5>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Pan-India Jockey Movement */}
            <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Compass className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-emerald-600 uppercase tracking-widest block mb-1">
                      CORE SERVICE 02
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      Pan-India Jockey Movement
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
                      Professional behind-the-wheel driveaway. We physically pilot electric buses, Indian EV trucks, commercial coaches, and bare chassis safely without risky lowbed towing.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={openModal}
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all shrink-0 flex items-center gap-2 w-fit"
                >
                  <span>Request Jockey Crew</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Working Pattern Steps for Jockey */}
              <div className="pt-8">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-6">
                  Jockey Working Pattern &amp; Execution Stages:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      step: 'Step 1',
                      title: 'Certified Pilot Alignment',
                      desc: 'Assignment of experienced commercial drivers screened via police verification and HMV badge checks.',
                    },
                    {
                      step: 'Step 2',
                      title: '36-Point Pre-Trip Audit',
                      desc: 'Photographic inspection, EV battery / fuel check, odometer log, and signed vehicle custody handover.',
                    },
                    {
                      step: 'Step 3',
                      title: 'Zero-Damage Highway Driveaway',
                      desc: 'Towing-free physical road movement following approved green transit corridors with speed governance.',
                    },
                    {
                      step: 'Step 4',
                      title: 'Terminal Gate Handover',
                      desc: 'Pristine vehicle delivery at bodybuilding yard or regional depot with physical inspection sign-off.',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200">
                      <span className="text-xs font-black text-emerald-600 block mb-1">{item.step}</span>
                      <h5 className="text-sm font-extrabold text-slate-900 mb-1">{item.title}</h5>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGO SCROLLER */}
      <LogoScroller />

      {/* DRIVER VERIFICATION STANDARDS */}
      <section className="py-20 sm:py-28 bg-[#060B14] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-400 text-xs font-bold uppercase tracking-wider border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#FF7A00]" />
                <span>Zero Risk Driver Verification</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Why 10,000+ Drivers Pass Our Rigorous 4-Tier Audit.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                In commercial transportation, manpower failure results in high financial liabilities and supply disruption. VT Logistic Services eliminates this risk through comprehensive screening protocols before any driver is deployed behind the wheel.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <BadgeCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Police Background Verification</h4>
                    <p className="text-xs text-slate-400 mt-1">Cross-jurisdiction criminal record clearance and residential identity audits.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <BadgeCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Aadhaar &amp; HMV License Clearance</h4>
                    <p className="text-xs text-slate-400 mt-1">Real-time Sarathi database verification of Heavy Commercial Vehicle validity.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <BadgeCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Track &amp; Highway Road Testing</h4>
                    <p className="text-xs text-slate-400 mt-1">Practical assessment in braking, reverse docking, and load handling.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <BadgeCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Sobriety &amp; Health Certification</h4>
                    <p className="text-xs text-slate-400 mt-1">Zero-tolerance substance abuse screening and vision &amp; stamina benchmarks.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Metric Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 border border-slate-100">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-xs uppercase font-extrabold tracking-wider text-[#FF7A00] block">Institutional Benchmark</span>
                    <h3 className="text-xl font-extrabold text-slate-900">Compliance Statistics</h3>
                  </div>
                  <ShieldCheck className="w-8 h-8 text-[#FF7A00]" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="text-slate-800">Identity &amp; License Clearance</span>
                    <span className="text-[#FF7A00]">100%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-[#FF7A00] rounded-full w-full" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="text-slate-800">Highway Fleet Road-Test Passed</span>
                    <span className="text-blue-600">96.8%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full w-[96.8%]" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="text-slate-800">On-Time Dispatch Adherence</span>
                    <span className="text-emerald-600">99.2%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full w-[99.2%]" />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={openModal}
                    className="w-full py-3.5 rounded-xl bg-[#060B14] hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Request Driver Deployment</span>
                    <ArrowRight className="w-4 h-4 text-[#FF7A00]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGH-CONVERTING CTA BANNER */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-[#FF7A00] text-xs font-extrabold uppercase tracking-widest">
              <span>Your Trust Our Destination</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ready to Upgrade Your Fleet Operations?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Contact our Jhajjar headquarters or schedule a dedicated vehicle deployment session with our operations coordinators today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
              <button
                type="button"
                onClick={openModal}
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-xl bg-[#FF7A00] hover:bg-[#E06900] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 whitespace-nowrap inline-flex items-center justify-center gap-2"
              >
                <Truck className="w-4 h-4 shrink-0" />
                <span>Schedule Vehicle Deployment</span>
              </button>

              <a
                href="https://wa.me/919053529200?text=Hello%20VT%20Logistic%20Services,%20I%20would%20like%20to%20discuss%20a%20logistics%20partnership."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 whitespace-nowrap inline-flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider border border-slate-300 transition-all shadow-sm hover:-translate-y-0.5 whitespace-nowrap inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#FF7A00] shrink-0" />
                <span>Contact Dispatch Desk</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

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
  Target,
  FileCheck,
  ChevronRight,
  MessageSquare,
  Sparkles,
  Check,
  Activity,
  Navigation,
  Eye,
  BadgeCheck,
} from 'lucide-react';
import LogoScroller from '@/components/LogoScroller';
import { useRequestModal } from '@/components/LayoutClientWrapper';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export default function AboutPage() {
  const { openModal } = useRequestModal();

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* 1. HERO HEADER - LOGIXPRESS CINEMATIC SPLIT WITH HD IMAGERY */}
      <section className="relative w-full bg-[#060B14] text-white overflow-hidden py-16 sm:py-24 lg:py-28">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FF7A00] text-xs font-extrabold uppercase tracking-widest backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-ping" />
                <span>Institutional Fleet & Driver Infrastructure</span>
              </div>

              <h1 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] text-white uppercase">
                Precision Logistics.{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-amber-400 to-orange-300">
                  Reliable Manpower.
                </span>
                Pan-India Movement.
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
                VT Logistic Services is an institutional logistics operator headquartered in Jhajjar, Haryana. We empower manufacturers, bodybuilders, and corporate enterprises with vetted commercial drivers, zero-damage vehicle jockey repositioning, and dedicated freight solutions.
              </p>

              {/* Action Buttons - Responsive Stack on Mobile */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <button
                  type="button"
                  onClick={openModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF7A00] hover:bg-[#E06900] text-white font-display font-extrabold text-[13px] tracking-wider uppercase px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl shadow-[0_10px_25px_rgba(255,122,0,0.35)] hover:shadow-[0_12px_30px_rgba(255,122,0,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
                >
                  <Truck className="w-4 h-4 shrink-0" />
                  <span>Request A Vehicle</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>

                <a
                  href="https://wa.me/919053529200?text=Hello%20VT%20Logistic%20Services,%20I%20would%20like%20to%20inquire%20about%20corporate%20fleet%20and%20driver%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-display font-extrabold text-[13px] tracking-wider uppercase px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl shadow-[0_6px_18px_rgba(37,211,102,0.25)] hover:shadow-[0_10px_22px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="tel:9053529200"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-display font-bold text-[13px] tracking-wider uppercase px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 whitespace-nowrap group"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+91 9053529200</span>
                </a>
              </div>

              {/* Fast Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-300 border-t border-white/10">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7A00]" /> 10,000+ Screened Drivers
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7A00]" /> 100% Zero Towing Damage
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7A00]" /> Jhajjar HQ 24/7 Desk
                </span>
              </div>
            </div>

            {/* Right Visual Showcase Card (HD Dual Image Collage) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Image */}
                <div className="relative h-[380px] sm:h-[420px] rounded-3xl overflow-hidden border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
                  <Image
                    src="/images/truck_bharatbenz_hd.jpg"
                    alt="VT Logistics Heavy Commercial Fleet"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Inset Pill */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#060B14]/85 backdrop-blur-md border border-white/15 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FF7A00] flex items-center justify-center font-bold text-white shadow-md">
                          <Truck className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs uppercase font-extrabold tracking-wider text-[#FF7A00]">Interstate Corridors</p>
                          <p className="text-sm font-bold text-white">Express Fleet Mobilization</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </div>

                {/* Secondary Floating Card */}
                <div className="absolute -top-6 -left-6 hidden sm:flex items-center gap-3 bg-white text-slate-900 px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-100 animate-bounce duration-1000">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#FF7A00] flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase font-bold text-slate-500">Corporate SLA</p>
                    <p className="text-sm font-extrabold text-slate-900">10+ Years Trust</p>
                  </div>
                </div>

                {/* Third Floating Stat Card */}
                <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-white text-slate-900 px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase font-bold text-slate-500">Safety Benchmark</p>
                    <p className="text-sm font-extrabold text-slate-900">100% Verified Crew</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR WITH HIGH-IMPACT METRICS */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 grid grid-cols-2 lg:grid-cols-4 p-6 sm:p-8 gap-5 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-50 text-[#FF7A00] flex items-center justify-center shrink-0 shadow-sm">
              <Users className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="min-w-0">
              <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">10,000+</p>
              <p className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5 leading-tight">Verified Drivers</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 sm:gap-4 sm:pl-5 lg:pl-6 pt-4 sm:pt-0 min-w-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
              <Building className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="min-w-0">
              <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">Jhajjar HQ</p>
              <p className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5 leading-tight">Operational Dispatch</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 sm:gap-4 sm:pl-5 lg:pl-6 pt-4 sm:pt-0 min-w-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="min-w-0">
              <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">100%</p>
              <p className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5 leading-tight">Zero Towing Damage</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 sm:gap-4 sm:pl-5 lg:pl-6 pt-4 sm:pt-0 min-w-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 shadow-sm">
              <Clock className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="min-w-0">
              <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">24/7</p>
              <p className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5 leading-tight">Active Control Room</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CORPORATE PROFILE - LOGIXPRESS OVERLAPPING IMAGE COLLAGE */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Dynamic Multi-Image Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main Large Image: High-Tech Logistics Terminal */}
                <div className="relative h-[420px] sm:h-[480px] w-full sm:w-[90%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                  <Image
                    src="/images/ev_bus_fleet.jpg"
                    alt="VT Logistics Distribution Hub & EV Fleet Staging"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#FF7A00] text-white">
                      HQ DISPATCH CENTER
                    </span>
                    <h4 className="text-lg font-bold mt-2">Jhajjar Fleet Terminal</h4>
                    <p className="text-xs text-slate-200">Integrated Haryana &amp; Delhi-NCR Operations</p>
                  </div>
                </div>

                {/* Overlapping Secondary Image: Chassis Movement & Driveaway */}
                <div className="relative sm:absolute -bottom-8 right-0 sm:right-4 w-full sm:w-[58%] h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white group mt-4 sm:mt-0">
                  <Image
                    src="/images/truck_chassis_hd.jpg"
                    alt="VT Heavy Commercial Chassis Movement"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-bold text-amber-300 uppercase">Chassis &amp; Driveaway Movement</p>
                    <p className="text-xs font-semibold text-white">OEM Yard To Body Builder Transit</p>
                  </div>
                </div>

                {/* Floating Experience Seal */}
                <div className="absolute top-6 -left-4 sm:left-4 bg-[#060B14] text-white p-4 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#FF7A00] flex items-center justify-center font-black text-xl text-white">
                    VT
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Trust</p>
                    <p className="text-sm font-extrabold text-white">Our Destination</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Detailed Story & Value Proposition */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#FF7A00]" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF7A00]">
                  Corporate Profile & Governance
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Engineering Trust In India&apos;s Commercial Transportation.
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Headquartered strategically in <strong className="text-slate-900">Jhajjar, Haryana</strong>, VT Logistic Services addresses the most persistent vulnerabilities in supply chain logistics: unvetted drivers, uncontrolled in-transit transit damages, and erratic vehicle mobilization timelines.
              </p>

              <div className="space-y-4 pt-2">
                {/* Feature 1 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4 hover:border-amber-400/50 hover:bg-amber-50/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#FF7A00] flex items-center justify-center shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Direct Corporate Contracts (No Subcontracting)</h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      All assignments are managed through enforceable institutional SLAs with transparent tariff structures, eliminating third-party broker leakages.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4 hover:border-emerald-400/50 hover:bg-emerald-50/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Zero-Damage Jockey Driveaway Protocol</h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Specialized in bare chassis, coach driveaways, and luxury bus repositioning without risky lowbed towing, saving time and guaranteeing pristine condition.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4 hover:border-blue-400/50 hover:bg-blue-50/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Continuous Telematics & 24/7 Jhajjar Control</h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Live route telemetry, scheduled driver check-ins, automated milestone alerts, and timestamped digital vehicle handover manifests.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Location Badge */}
              <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#FF7A00] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    Registered HQ: Jhajjar, Haryana – 124103, India
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="text-xs font-extrabold text-[#FF7A00] hover:text-[#E06900] uppercase tracking-wider inline-flex items-center gap-1"
                >
                  <span>Visit Office</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLIENT LOGO SCROLLER */}
      <LogoScroller />

      {/* 5. CORE OPERATIONAL PILLARS - RICH VISUAL CARDS WITH HD IMAGES */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#FF7A00] text-xs font-extrabold uppercase tracking-widest mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Full-Spectrum Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Core Operational Architecture
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every logistics requirement demands specialized machinery and dedicated expertise. Here is how we engineer reliability across diverse commercial workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Card 1: Commercial Driver Network */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/truck_freight_hd.jpg"
                  alt="Verified Commercial Driver Deployment & Heavy Freight"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 text-[11px] font-extrabold px-3 py-1 rounded-full bg-[#FF7A00] text-white shadow">
                  10,000+ ROSTER
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-extrabold text-slate-900 text-lg mb-2 group-hover:text-[#FF7A00] transition-colors">
                  Commercial Driver Deployment
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  End-to-end verified heavy commercial drivers deployed for industrial plants, e-commerce long-hauls, and contract freight fleets.
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Background Checked</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            </div>

            {/* Card 2: Jockey Movement */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/ev_bus_flagship.jpg"
                  alt="EV Bus & Commercial Vehicle Jockey Movement"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 text-[11px] font-extrabold px-3 py-1 rounded-full bg-blue-600 text-white shadow">
                  ZERO DAMAGE
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-extrabold text-slate-900 text-lg mb-2 group-hover:text-[#FF7A00] transition-colors">
                  Vehicle Jockey Movement
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Direct road driveaway repositioning for bare chassis, school & luxury passenger buses, heavy trailers, and commercial utility rigs.
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Towing-Free Transport</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            </div>

            {/* Card 3: Pan-India Corridors */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop"
                  alt="Pan India Freight Corridors"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 text-[11px] font-extrabold px-3 py-1 rounded-full bg-emerald-600 text-white shadow">
                  INTERSTATE
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-extrabold text-slate-900 text-lg mb-2 group-hover:text-[#FF7A00] transition-colors">
                  Corridor Freight Transit
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Full truckload and bulk industrial freight operations connecting northern hubs through Rajasthan, Gujarat, and central Indian corridors.
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>99.2% On-Time SLA</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            </div>

            {/* Card 4: 24/7 Control Center */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                  alt="24/7 Telematics & Operations Desk"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 text-[11px] font-extrabold px-3 py-1 rounded-full bg-purple-600 text-white shadow">
                  24/7 TELEMATICS
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-extrabold text-slate-900 text-lg mb-2 group-hover:text-[#FF7A00] transition-colors">
                  Jhajjar Operations Desk
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Active monitoring desk managing emergency driver relief, real-time highway telematics, route optimization, and client coordination.
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Live Distress Response</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VERIFICATION STANDARDS - CINEMATIC HIGH-TECH SECTION */}
      <section className="py-20 sm:py-28 bg-[#060B14] text-white relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none" />

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
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF7A00]/40 transition-colors">
                  <BadgeCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Police Background Verification</h4>
                    <p className="text-xs text-slate-400 mt-1">Cross-jurisdiction criminal record clearance and residential identity audits.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF7A00]/40 transition-colors">
                  <BadgeCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Aadhaar & HMV License Clearance</h4>
                    <p className="text-xs text-slate-400 mt-1">Real-time Sarathi database verification of Heavy Commercial Vehicle validity.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF7A00]/40 transition-colors">
                  <BadgeCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Track & Highway Road Testing</h4>
                    <p className="text-xs text-slate-400 mt-1">Practical assessment in braking, hill-starts, reverse docking, and load handling.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF7A00]/40 transition-colors">
                  <BadgeCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Sobriety & Health Certification</h4>
                    <p className="text-xs text-slate-400 mt-1">Zero-tolerance substance abuse screening and vision & stamina benchmarks.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Live Benchmark Metric Card with HD Image Overlay */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 border border-slate-100">
                {/* Visual Header Image */}
                <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-md group">
                  <Image
                    src="/images/ev_bus_flagship.jpg"
                    alt="VT Screened commercial vehicle operations and EV bus movement"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <p className="text-xs font-bold text-amber-400 uppercase">Screening Division</p>
                      <p className="text-sm font-extrabold">Active Roster Ready</p>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500 text-white">
                      VERIFIED
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-xs uppercase font-extrabold tracking-wider text-[#FF7A00] block">Institutional Benchmark</span>
                    <h3 className="text-xl font-extrabold text-slate-900">Compliance Statistics</h3>
                  </div>
                  <ShieldCheck className="w-8 h-8 text-[#FF7A00]" />
                </div>

                {/* Progress Bar 1 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="text-slate-800">Identity & License Clearance</span>
                    <span className="text-[#FF7A00]">100%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-[#FF7A00] rounded-full w-full" />
                  </div>
                </div>

                {/* Progress Bar 2 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="text-slate-800">Highway Fleet Road-Test Passed</span>
                    <span className="text-blue-600">96.8%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full w-[96.8%]" />
                  </div>
                </div>

                {/* Progress Bar 3 */}
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

      {/* 7. HIGH-CONVERTING CTA BANNER */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-[#FF7A00] text-xs font-extrabold uppercase tracking-widest">
              <span>Your Trust Our Destination</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ready to Upgrade Your Commercial Fleet Operations?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Contact our Jhajjar headquarters or schedule a dedicated vehicle deployment session with our operations coordinators today.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={openModal}
                className="px-8 py-4 rounded-xl bg-[#FF7A00] hover:bg-[#E06900] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                Schedule Vehicle Deployment
              </button>

              <a
                href="https://wa.me/919053529200?text=Hello%20VT%20Logistic%20Services,%20I%20would%20like%20to%20discuss%20a%20logistics%20partnership."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-extrabold text-sm uppercase tracking-wider shadow-md shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 whitespace-nowrap inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-sm uppercase tracking-wider border border-slate-300 transition-all shadow-sm whitespace-nowrap"
              >
                Contact Dispatch Desk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

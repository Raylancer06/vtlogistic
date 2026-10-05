'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Truck,
  Compass,
  Users,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Clock,
  Settings2,
  Building2,
  Sparkles,
  Repeat,
  Layers,
  Check,
  MessageSquare,
} from 'lucide-react';
import { useRequestModal } from '@/components/LayoutClientWrapper';
import QuoteSection from '@/components/QuoteSection';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export default function ServicesPage() {
  const { openModal } = useRequestModal();

  return (
    <div className="w-full">
      {/* 1. HERO SECTION (LOGIXPRESS CALIBER) */}
      <section className="relative w-full bg-[#060B14] text-white overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_fleet.jpg"
            alt="Commercial Fleet Logistics"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060B14] via-[#060B14]/90 to-[#060B14]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FF7A00] text-xs font-extrabold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-ping"></span>
              <span>Enterprise Mobility & Fleet Solutions</span>
            </div>

            <h1 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-white mb-5 uppercase">
              Transportation & Fleet Solutions For Your Business
            </h1>

            <p className="text-sm sm:text-lg text-slate-200 leading-relaxed mb-8">
              Engineered for enterprise logistics managers, manufacturers, fleet operators, and commercial bus enterprises across India.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full pt-2">
              <button
                type="button"
                onClick={openModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF7A00] hover:bg-[#E06900] text-white font-display font-extrabold text-[13px] tracking-wider uppercase px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl shadow-[0_10px_25px_rgba(255,122,0,0.35)] hover:shadow-[0_12px_30px_rgba(255,122,0,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <Truck className="w-4 h-4 shrink-0" />
                <span>Schedule Fleet Deployment</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              {/* WhatsApp Action with Official Icon */}
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
          </div>
        </div>
      </section>

      {/* 2. STATS BAR (BALANCED & RESPONSIVE) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 grid grid-cols-2 lg:grid-cols-4 p-4 sm:p-6 gap-3 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-300 transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-100 text-brand-600 flex items-center justify-center shrink-0 shadow-sm">
              <span className="font-extrabold text-lg sm:text-xl">99.4%</span>
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase truncate">On-Time Transit</p>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate">Corporate SLA adherence</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-amber-300 transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 shadow-sm">
              <span className="font-extrabold text-lg sm:text-xl">10k+</span>
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase truncate">Screened Drivers</p>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate">Active national roster</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-emerald-300 transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
              <span className="font-extrabold text-lg sm:text-xl">100%</span>
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase truncate">Zero Towing Loss</p>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate">Behind-wheel driveaway</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-purple-300 transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 shadow-sm">
              <span className="font-extrabold text-lg sm:text-xl">24/7</span>
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase truncate">Central Dispatch</p>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate">Jhajjar Control Tower</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SECTION 01: FLEET OPERATIONS */}
      <section id="fleet-operations" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                  01 // Service Division
                </span>
                <span className="text-xs font-semibold text-slate-500">Tailored Enterprise SLA</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Dedicated Fleet Operations & Route Optimization
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Operations structured strictly according to specific customer requirements. VT Logistic Services administers dedicated commercial fleets, long-term leasing assistance, spot availability, preventive dispatch management, and precision telematics-backed route optimization.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="font-bold text-slate-900 text-sm block mb-1">Flexible Capacity</span>
                  <p className="text-xs text-slate-600 leading-relaxed">Dynamic scaling for peak volume, seasonal surges, and long-haul corridor links.</p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="font-bold text-slate-900 text-sm block mb-1">Corporate SLAs</span>
                  <p className="text-xs text-slate-600 leading-relaxed">Guaranteed uptime thresholds, prompt replacement protocols, and milestone audit logs.</p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="font-bold text-slate-900 text-sm block mb-1">Scheduled Transit</span>
                  <p className="text-xs text-slate-600 leading-relaxed">Strict corridor milestone tracking with proactive ETA notifications to dispatch heads.</p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-2 bg-[#FF7A00] hover:bg-[#E06900] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all"
                >
                  <span>Schedule Fleet Deployment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 h-80 sm:h-96">
                <Image
                  src="/images/hero_fleet.jpg"
                  alt="Fleet Operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md text-slate-900 shadow-lg">
                  <p className="font-extrabold text-sm">Highway Fleet Convoy</p>
                  <p className="text-xs text-slate-600">Interstate freight corridors continuously monitored</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 02: PAN-INDIA JOCKEY MOVEMENT (FLAGSHIP) & 5 UPGRADED USE CASE CARDS */}
      <section id="jockey-movement" className="py-20 sm:py-28 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                02 // Flagship Service Line
              </span>
              <span className="text-xs font-extrabold uppercase text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full">
                Strict Behind-The-Wheel Driveaway — Zero Flatbeds
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Pan-India Commercial Jockey Movement
            </h2>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <p className="text-sm font-semibold text-brand-600">
                Definition:{' '}
                <span className="font-normal text-slate-700">
                  A professional, credentialed commercial driver is provided to operate and physically drive a customer&apos;s or company&apos;s vehicle safely from one location to another.
                </span>
              </p>
            </div>
          </div>

          {/* Full Bleed Visual Highlight Image */}
          <div className="relative w-full h-80 sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl mb-14">
            <Image
              src="/images/jockey_bus.jpg"
              alt="Pan-India Bus and Commercial Vehicle Jockey Movement"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto p-5 rounded-2xl bg-white/95 backdrop-blur-md text-slate-900 shadow-xl max-w-xl">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span className="font-extrabold text-sm">Certified Multi-Axle & Bus Handlers</span>
              </div>
              <p className="text-xs text-slate-600">
                Specialized in managing air-suspension luxury coaches, multi-axle sleeper buses, EV chassis, and industrial prime movers under zero-damage transit agreements.
              </p>
            </div>
          </div>

          {/* 5 ELEVATED USE CASE CARDS (Addressing Image 3 improvements) */}
          <div className="mb-4">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Key Jockey Movement Use Cases</h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-8">
              Click any category to initiate immediate vehicle allocation or corridor quote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Bus Delivery */}
            <div
              onClick={openModal}
              className="group cursor-pointer bg-white p-7 rounded-3xl border-2 border-slate-200/80 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 opacity-80 group-hover:opacity-100" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200/60 flex items-center justify-center p-3">
                    <Truck className="w-7 h-7 stroke-[2]" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-amber-50 text-amber-700 border border-amber-200">
                    OEM Plant Direct
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                  Bus Delivery
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Direct road transport from OEM chassis manufacturing plants to body fabricators, dealership yards, and private bus fleet operators.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600">
                <span className="uppercase tracking-wider">FACTORY → OPERATOR TRANSIT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Vehicle Relocation */}
            <div
              onClick={openModal}
              className="group cursor-pointer bg-white p-7 rounded-3xl border-2 border-slate-200/80 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-brand-600 opacity-80 group-hover:opacity-100" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-blue-50 text-brand-600 border border-blue-200/60 flex items-center justify-center p-3">
                    <Compass className="w-7 h-7 stroke-[2]" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-blue-50 text-brand-700 border border-blue-200">
                    Rapid Turnaround
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                  Vehicle Relocation
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Fast-turnaround inter-city depot balancing. Moving idle commercial stock to high-demand logistics terminals without flatbed expenses.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600">
                <span className="uppercase tracking-wider">DEPOT LOAD BALANCING</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Depot Movement */}
            <div
              onClick={openModal}
              className="group cursor-pointer bg-white p-7 rounded-3xl border-2 border-slate-200/80 hover:border-emerald-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-80 group-hover:opacity-100" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center p-3">
                    <Building2 className="w-7 h-7 stroke-[2]" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Yard Shuttles
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Depot Movement
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Internal yard reorganization, periodic fitness and RTO test line runs, and ferrying to authorized OEM maintenance facilities.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                <span className="uppercase tracking-wider">YARD & MAINTENANCE SHUTTLES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 4: Fleet Repositioning */}
            <div
              onClick={openModal}
              className="group cursor-pointer bg-white p-7 rounded-3xl border-2 border-slate-200/80 hover:border-purple-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-80 group-hover:opacity-100" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-purple-50 text-purple-600 border border-purple-200/60 flex items-center justify-center p-3">
                    <Sparkles className="w-7 h-7 stroke-[2]" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-purple-50 text-purple-700 border border-purple-200">
                    Seasonal Demand
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Fleet Repositioning
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Rapid geographical reallocation to fulfill festive surges, corporate contracts, conference charters, or regional seasonal spikes.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-600">
                <span className="uppercase tracking-wider">SEASONAL SPIKE MANAGEMENT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 5: Commercial Bare Chassis & Specialized Units */}
            <div
              onClick={openModal}
              className="group cursor-pointer bg-white p-7 rounded-3xl border-2 border-slate-200/80 hover:border-slate-800 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden md:col-span-2 lg:col-span-2"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-slate-700 to-slate-900 opacity-80 group-hover:opacity-100" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-slate-100 text-slate-800 border border-slate-300/60 flex items-center justify-center p-3">
                    <Settings2 className="w-7 h-7 stroke-[2]" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-slate-100 text-slate-800 border border-slate-300">
                    Interstate Transit Bonded
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                  Commercial Bare Chassis & Specialized Units
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Complete driveaway protocols for bare chassis, cab-chassis, tippers, tank trucks, and refuse collection vehicles across state checkpoints with complete transit documentation.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800">
                <span className="uppercase tracking-wider">BARE CHASSIS & SPECIALIZED COMMERCIAL TRUCKS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 03: VERIFIED COMMERCIAL DRIVER DEPLOYMENT */}
      <section id="driver-deployment" className="py-20 sm:py-28 bg-[#060B14] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 bg-white/10 px-3 py-1 rounded-full">
                  03 // Screened Human Capital
                </span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  10,000+ Verified Network
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Verified Commercial Driver Deployment
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Credentialed, thoroughly vetted commercial drivers available for buses, multi-axle heavy trailers, prime movers, and urban delivery vans. We remove the operational liability of commercial staffing with absolute compliance rigor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-white text-sm mb-1">Strict Document Validation</h4>
                  <p className="text-xs text-slate-400">Authentic HMV badge verification, license endorsement cross-checks.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-white text-sm mb-1">Police Background Records</h4>
                  <p className="text-xs text-slate-400">Court record verification and verified residential profiling.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-white text-sm mb-1">Substance & Sobriety Protocol</h4>
                  <p className="text-xs text-slate-400">Pre-dispatch sobriety checks and mandatory annual physicals.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-white text-sm mb-1">Route & Terrain Proficiency</h4>
                  <p className="text-xs text-slate-400">Ghat section certifications, highway night runs, and transit training.</p>
                </div>
              </div>
            </div>

            {/* Engagement models box with Driver image */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/15 space-y-6">
              <div className="relative w-full h-44 rounded-2xl overflow-hidden shadow-inner">
                <Image
                  src="/images/driver_network.jpg"
                  alt="Verified drivers in logistics hub"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white text-sm">Spot Requirements</span>
                    <span className="text-[10px] font-bold uppercase bg-amber-500 text-slate-950 px-2 py-0.5 rounded">
                      On-Demand
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Immediate dispatch to cover driver absenteeism, ad-hoc shifts, or unplanned emergency runs.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white text-sm">Monthly Contract Deployment</span>
                    <span className="text-[10px] font-bold uppercase bg-brand-500 text-white px-2 py-0.5 rounded">
                      Dedicated SLA
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Full-time dedicated crew staffing for bus routes, inter-city line hauls, and plant shuttle schedules.
                  </p>
                </div>
              </div>

              <a
                href="tel:9053529200"
                className="w-full py-4 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                <span>Inquire for Driver Crew Dispatch</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE REQUEST SECTION */}
      <QuoteSection />
    </div>
  );
}

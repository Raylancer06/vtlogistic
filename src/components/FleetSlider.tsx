'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Sparkles,
  Maximize2,
  Gauge,
  Layers,
  Zap,
  Clock,
  Play,
  Pause,
} from 'lucide-react';
import { useRequestModal } from '@/components/LayoutClientWrapper';

export interface FleetVehicle {
  id: string;
  name: string;
  category: 'light' | 'heavy' | 'trailer' | 'ev';
  sizeTag: string;
  spec: string;
  payload: string;
  idealFor: string;
  description: string;
  features: string[];
  image: string;
  badgeColor: string;
}

export const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: 'pickup',
    name: 'Pickup Utility Truck',
    category: 'light',
    sizeTag: 'PICKUP',
    spec: 'Open Body / LCV',
    payload: 'Up to 2.5 Ton',
    idealFor: 'Light consignments, intra-city courier, quick deliveries',
    description: 'High-agility commercial pickup vehicle engineered for fast regional transit, plant transfers, and parcel distribution across narrow and congested city corridors.',
    features: ['High City Maneuverability', 'Fast Point-to-Point Dispatch', 'Verified Commercial Driver'],
    image: '/images/fleet/fleet_pickup.jpg',
    badgeColor: 'bg-amber-500',
  },
  {
    id: '14ft',
    name: '14 FT Closed Container Truck',
    category: 'light',
    sizeTag: '14 FEET',
    spec: 'Closed Container / Open Body',
    payload: 'Up to 4 Ton',
    idealFor: 'Short & medium loads, FMCG, retail inventory, electronics',
    description: 'Weatherproof sealed container body protecting sensitive cargo from rain, dust, and highway hazards. The gold standard for factory-to-hub regional shuttles.',
    features: ['100% Waterproof Enclosure', 'Tamper-Proof Lock Seals', 'GPS Corridor Monitored'],
    image: '/images/fleet/fleet_14ft.jpg',
    badgeColor: 'bg-blue-600',
  },
  {
    id: '17ft',
    name: '17 FT Commercial Cargo Truck',
    category: 'light',
    sizeTag: '17 FEET',
    spec: 'Medium Commercial Carrier',
    payload: 'Up to 5 Ton',
    idealFor: 'Growing enterprise needs, textile distribution, spare parts',
    description: 'Balanced volumetric capacity and payload ratio. Accommodates medium industrial consignments with excellent expressway fuel efficiency and tight scheduling.',
    features: ['Extra Volumetric Cube', 'Interstate Route Ready', 'Scheduled Transit SLAs'],
    image: '/images/fleet/fleet_17ft.jpg',
    badgeColor: 'bg-indigo-600',
  },
  {
    id: '20ft',
    name: '20 FT Heavy Freight Carrier',
    category: 'light',
    sizeTag: '20 FEET',
    spec: 'Closed / Open Body',
    payload: 'Up to 7 Ton',
    idealFor: 'Automotive components, industrial hardware, agricultural cargo',
    description: 'Versatile 20-foot payload platform handling medium-heavy freight consignments with reinforced suspension and high-cube interior height.',
    features: ['Reinforced Floor Bed', 'Multi-City Line-Haul', 'Dual-Crew Ready'],
    image: '/images/fleet/truck_highway_hyderabad.jpg',
    badgeColor: 'bg-sky-600',
  },
  {
    id: '22ft',
    name: '22 FT Heavy Container Truck',
    category: 'heavy',
    sizeTag: '22 FEET',
    spec: 'Heavy Multi-Axle Freight',
    payload: 'Up to 10 Ton',
    idealFor: 'Bigger industrial loads, manufacturing output, primary distribution',
    description: 'BharatBenz and Tata heavy commercial platform designed for long-distance highway hauls, high-speed corridor connectivity, and corporate primary distribution.',
    features: ['Heavy Duty Suspension', 'High-Volume Cargo Box', 'Real-Time Telematics'],
    image: '/images/truck_bharatbenz_hd.jpg',
    badgeColor: 'bg-emerald-600',
  },
  {
    id: '28ft-flatbed',
    name: '28 FT Flatbed Trailer (Open Body)',
    category: 'trailer',
    sizeTag: '28 FT FLATBED',
    spec: 'Open Flatbed Platform',
    payload: 'Up to 25 Ton',
    idealFor: 'Oversized steel coils, infrastructure materials, heavy machinery',
    description: 'Unrestricted open body flat deck with high-tensile lashing points and reinforced steel cross-members for crane-loading heavy machinery and project cargo.',
    features: ['Crane Overhead Loading', 'Certified Cargo Lashings', 'Heavy Axle Rating'],
    image: '/images/fleet/bharatbenz_3723.jpg',
    badgeColor: 'bg-orange-600',
  },
  {
    id: '32ft-sxl',
    name: '32 FT Single Axle (SXL) Container',
    category: 'heavy',
    sizeTag: '32 FT SXL',
    spec: 'Single Axle High Cube',
    payload: 'Up to 7 Ton',
    idealFor: 'High-volume light cargo, e-commerce, white goods, packaging',
    description: 'Maximum cubic capacity for volumetric lightweight cargo. Enables maximum pallet utilization and volumetric freight efficiency without incurring multi-axle toll premiums.',
    features: ['Maximum Cubic Volume', 'E-Commerce Pallet Optimized', 'Fast Toll Clearance'],
    image: '/images/truck_freight_hd.jpg',
    badgeColor: 'bg-violet-600',
  },
  {
    id: '32ft-mxl',
    name: '32 FT Multi-Axle (MXL) Container',
    category: 'heavy',
    sizeTag: '32 FT MXL',
    spec: 'Multi-Axle Heavy Duty',
    payload: 'Up to 18 Ton',
    idealFor: 'Heaviest & largest container loads, export consignments, industrial FMCG',
    description: 'Premier line-haul heavy carrier with multiple rear axles to support heavy payload weight while maintaining supreme highway stability across national corridors.',
    features: ['18-Ton Rated Payload', 'Multi-Axle Weight Distribution', 'Express Line-Haul'],
    image: '/images/fleet/truck_freight.jpg',
    badgeColor: 'bg-blue-700',
  },
  {
    id: 'heavy-trailer',
    name: 'Prime Mover Trailer (20–40 Ton)',
    category: 'trailer',
    sizeTag: 'TRAILER',
    spec: 'Multi-Axle Heavy Haul',
    payload: '20 to 40 Ton',
    idealFor: 'Extra-heavy bulk consignments, project cargo, raw material transport',
    description: 'High horsepower prime mover truck with multi-axle articulated trailer chassis engineered to transport massive industrial loads across inter-state corridors.',
    features: ['Articulated Heavy Prime Mover', 'Hydraulic Multi-Axle Trailer', 'Trained Heavy Pilots'],
    image: '/images/truck_chassis_hd.jpg',
    badgeColor: 'bg-rose-600',
  },
  {
    id: 'ev-truck',
    name: 'Next-Gen Indian EV Commercial Truck',
    category: 'ev',
    sizeTag: 'EV TRUCK',
    spec: 'Zero-Emission Electric Truck',
    payload: 'Clean Sustainable Freight',
    idealFor: 'Corporate green supply chains, zero-emission plant shuttles',
    description: 'Next-generation battery-electric commercial transport vehicle delivering ultra-low operational emissions and ESG compliance for forward-looking enterprises.',
    features: ['Zero Tailpipe Emissions', 'Green Fleet Certification', 'Specialized EV Pilots'],
    image: '/images/fleet/ev_truck_blue.jpg',
    badgeColor: 'bg-teal-600',
  },
];

export default function FleetSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<'all' | 'light' | 'heavy' | 'trailer' | 'ev'>('all');
  const [isPaused, setIsPaused] = useState(false);
  const { openModal } = useRequestModal();

  const filteredVehicles = FLEET_VEHICLES.filter(
    (v) => filter === 'all' || v.category === filter
  );

  // Keep index within bounds if filter changes
  useEffect(() => {
    if (currentIndex >= filteredVehicles.length) {
      setCurrentIndex(0);
    }
  }, [filter, filteredVehicles.length, currentIndex]);

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredVehicles.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, filteredVehicles.length]);

  const currentVehicle = filteredVehicles[currentIndex] || filteredVehicles[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredVehicles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredVehicles.length);
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Category Filter Tabs & Slider Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mb-6">
        {/* Filter Pills - Horizontally scrollable on mobile */}
        <div className="w-full sm:w-auto flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200 overflow-x-auto scrollbar-none">
          {[
            { id: 'all', label: 'All Fleet (10)' },
            { id: 'light', label: 'Light & Medium (1–7T)' },
            { id: 'heavy', label: 'Heavy FTL (10–18T)' },
            { id: 'trailer', label: 'Trailers (20–40T)' },
            { id: 'ev', label: 'Electric EV' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setFilter(tab.id as any);
                setCurrentIndex(0);
              }}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                filter === tab.id
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right Arrow Controls & Play/Pause */}
        <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center transition-colors shadow-sm"
            title={isPaused ? 'Resume auto slide' : 'Pause auto slide'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-600" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 flex items-center justify-center transition-all shadow-sm hover:scale-105 active:scale-95"
            aria-label="Previous Vehicle"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-mono font-bold text-slate-500 px-1">
            {currentIndex + 1} / {filteredVehicles.length}
          </span>
          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 flex items-center justify-center transition-all shadow-sm hover:scale-105 active:scale-95"
            aria-label="Next Vehicle"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Interactive Showcase Slide */}
      {currentVehicle && (
        <div className="relative rounded-3xl overflow-hidden bg-[#0A1322] border border-slate-800 shadow-2xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: HD Photo Showcase with natural cinematic lighting */}
            <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] md:min-h-[480px] bg-slate-950 overflow-hidden group">
              <Image
                src={currentVehicle.image}
                alt={currentVehicle.name}
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle film gradient on edges */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1322] via-transparent to-transparent opacity-80 lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A1322] hidden lg:block opacity-70" />

              {/* Floating Top Pill Badges */}
              <div className="absolute top-5 left-5 z-20 flex flex-wrap items-center gap-2">
                <span className={`px-3.5 py-1.5 rounded-full ${currentVehicle.badgeColor} text-white text-xs font-black tracking-wider uppercase shadow-lg`}>
                  {currentVehicle.sizeTag}
                </span>
                <span className="px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-slate-200 text-xs font-bold tracking-wide uppercase shadow">
                  {currentVehicle.spec}
                </span>
              </div>

              {/* Quick payload watermark indicator */}
              <div className="absolute bottom-4 left-4 z-20 lg:hidden">
                <span className="text-xs font-mono font-bold text-amber-400 bg-slate-950/80 px-3 py-1 rounded-full border border-amber-500/30">
                  Capacity: {currentVehicle.payload}
                </span>
              </div>
            </div>

            {/* Right: Technical Specifications & Deployment Info */}
            <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-gradient-to-b from-[#0A1322] to-[#070D18]">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-black uppercase tracking-widest text-[#FF7A00]">
                    Verified Fleet Unit
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                    SLA ACTIVE
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight mb-2">
                  {currentVehicle.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                  {currentVehicle.description}
                </p>

                {/* Specification Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Payload Capacity</span>
                    <span className="text-sm font-extrabold text-amber-400 block">{currentVehicle.payload}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Body Structure</span>
                    <span className="text-sm font-extrabold text-white block truncate">{currentVehicle.spec}</span>
                  </div>
                </div>

                {/* Best For Tag */}
                <div className="p-3.5 rounded-2xl bg-blue-950/40 border border-blue-500/25 mb-6">
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-blue-400 block mb-1">
                    Optimal Utilization:
                  </span>
                  <p className="text-xs text-slate-200 font-medium leading-relaxed">
                    {currentVehicle.idealFor}
                  </p>
                </div>

                {/* Key Bullet Features */}
                <div className="space-y-2 mb-8">
                  {currentVehicle.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={openModal}
                  className="flex-1 py-3.5 px-5 rounded-xl bg-[#FF7A00] hover:bg-[#E06900] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <Truck className="w-4 h-4 shrink-0" />
                  <span>Request This Truck</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
                <a
                  href="tel:9053529200"
                  className="py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/15 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF7A00]" />
                  <span>Call Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Horizontal Thumbnail Strip for Direct Vehicle Jumping */}
      <div className="mt-5 flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-300">
        {filteredVehicles.map((truck, idx) => (
          <button
            key={truck.id}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`relative min-w-[140px] sm:min-w-[180px] p-3 rounded-2xl border text-left transition-all shrink-0 flex items-center gap-3 ${
              currentIndex === idx
                ? 'border-[#FF7A00] bg-orange-50/80 shadow-md ring-2 ring-orange-400/20'
                : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-900 shrink-0">
              <Image
                src={truck.image}
                alt={truck.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <span className={`text-[10px] font-black uppercase block truncate ${
                currentIndex === idx ? 'text-[#FF7A00]' : 'text-slate-800'
              }`}>
                {truck.sizeTag}
              </span>
              <span className="text-[11px] text-slate-500 font-medium block truncate">
                {truck.payload}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

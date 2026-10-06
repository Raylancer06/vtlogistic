'use client';

import React, { useState } from 'react';
import {
  Truck,
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  MapPin,
  Compass,
  Users,
  Repeat,
  ArrowLeftRight,
  Copy,
  Check,
  Send,
  Zap,
  Calendar,
  AlertCircle,
  Mail,
} from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

const CATEGORIES = [
  { id: 'Fleet Operations (FTL)', label: 'Fleet Operations (FTL)', icon: Truck, badge: '1–40 Ton' },
  { id: 'Jockey Movement', label: 'Jockey Movement', icon: Compass, badge: 'Flagship' },
];

const FTL_VEHICLES = [
  { value: '14 FT (Closed / Open, up to 4 Ton)', label: '14 FT (Closed / Open, up to 4 Ton)' },
  { value: '17 FT (Closed / Open, up to 5 Ton)', label: '17 FT (Closed / Open, up to 5 Ton)' },
  { value: '20 FT (Closed / Open, up to 7 Ton)', label: '20 FT (Closed / Open, up to 7 Ton)' },
  { value: '22 FT (Closed / Open, up to 10 Ton)', label: '22 FT (Closed / Open, up to 10 Ton)' },
  { value: '32 FT Single Axle (SXL, up to 7 Ton)', label: '32 FT Single Axle (SXL, up to 7 Ton)' },
  { value: '32 FT Multi Axle (MXL, up to 18 Ton)', label: '32 FT Multi Axle (MXL, up to 18 Ton)' },
  { value: 'Open Body / Flatbed (Oversized Loads)', label: 'Open Body / Flatbed (Oversized Loads)' },
  { value: 'Container (Enclosed Secure Cargo)', label: 'Container (Enclosed Secure Cargo)' },
  { value: 'Trailer (Heavy Haul, 20–40 Ton)', label: 'Trailer (Heavy Haul, 20–40 Ton)' },
  { value: 'Taurus (Multi-Axle High Payload)', label: 'Taurus (Multi-Axle High Payload)' },
];

const JOCKEY_VEHICLES = [
  { value: 'EV Bus (Zero-Emission Electric Bus)', label: 'EV Bus (Zero-Emission Electric Bus)' },
  { value: 'EV Truck (Indian Commercial Electric Truck)', label: 'EV Truck (Indian Commercial Electric Truck)' },
];

export default function QuoteSection() {
  const [service, setService] = useState('Fleet Operations (FTL)');
  const [vehicle, setVehicle] = useState('14 FT (Closed / Open, up to 4 Ton)');
  const [tonnage, setTonnage] = useState('');
  const [boxes, setBoxes] = useState('');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [urgency, setUrgency] = useState('Immediate (< 2 Hours)');
  const [notes, setNotes] = useState('');
  const [botHoneypot, setBotHoneypot] = useState('');
  const [renderedAt] = useState<number>(() => Date.now());

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successData, setSuccessData] = useState<{
    referenceId: string;
    timestamp: string;
    mailtoUrl?: string;
    whatsAppUrl?: string;
    officialEmail?: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Swap pickup & dropoff
  const handleSwapRoute = () => {
    const temp = pickup;
    setPickup(dropoff);
    setDropoff(temp);
  };

  const handleCopyId = () => {
    if (successData?.referenceId) {
      navigator.clipboard.writeText(successData.referenceId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Client-side phone verification
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number for immediate dispatch confirmation.');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/dispatch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service,
          vehicle,
          pickup,
          dropoff,
          name,
          phone: cleanPhone,
          email,
          urgency,
          website: botHoneypot,
          renderedAt,
          notes: [
            tonnage ? `Tonnage: ${tonnage}` : '',
            boxes ? `Boxes/Bags: ${boxes}` : '',
            notes,
          ].filter(Boolean).join(' | '),
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || 'Failed to submit dispatch');
      }

      setSuccessData({
        referenceId: json.referenceId,
        timestamp: json.timestamp || new Date().toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          day: 'numeric',
          month: 'short',
        }),
        mailtoUrl: json.mailtoUrl,
        whatsAppUrl: json.whatsAppUrl,
        officialEmail: json.officialEmail || 'info@vtlogistic.in',
      });

      // Automatically open WhatsApp in new tab
      if (json.whatsAppUrl) {
        window.open(json.whatsAppUrl, '_blank');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please connect with our hotline directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="enquiry-section" className="relative py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-slate-100 to-white overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-12 left-10 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-12 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Direct Operations Desk Panel */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#060B14] via-[#0B1528] to-[#122240] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

              <div className="relative z-10">
                {/* Pill Status */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-400 text-xs font-extrabold uppercase tracking-widest mb-6">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                  <span>DIRECT DISPATCH CENTRAL DESK</span>
                </div>

                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  Request a Dedicated Vehicle or Professional Crew
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                  Get instant dispatch assessment for driveaway jockey services, long-term commercial driver deployment, or interstate fleet repositioning across India.
                </p>

                {/* Key operational metrics */}
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-extrabold text-white block">&lt; 15 Minutes SLA Response Time</span>
                      <span className="text-[11px] text-slate-400">Rapid desk review & corridor allocation</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-9 h-9 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-extrabold text-white block">100% Background-Verified Drivers</span>
                      <span className="text-[11px] text-slate-400">Police records & commercial HMV endorsements</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-extrabold text-white block">Pan-India Corridors Monitored</span>
                      <span className="text-[11px] text-slate-400">Jhajjar, Haryana central control tower oversight</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom urgent dispatch trigger */}
              <div className="relative z-10 mt-10 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block mb-0.5">
                    Urgent Inquiries Hotline
                  </span>
                  <a
                    href="tel:9053529200"
                    className="text-base sm:text-lg font-extrabold text-white hover:text-amber-400 transition-colors"
                  >
                    +91 9053529200
                  </a>
                </div>
                <a
                  href="https://wa.me/919053529200?text=Hello,%20I%20have%20an%20urgent%20logistics%20requirement."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: High-Functionality Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 bg-white flex flex-col justify-center">
              {successData ? (
                /* Success State with Reference Receipt */
                <div className="py-8 text-center flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-20 h-20 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 shadow-inner">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>

                  <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 mb-1">
                    Request Transmitted To Central Dispatch
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                    Inquiry Confirmed
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mb-6 leading-relaxed">
                    Our operations coordinator in Jhajjar has logged your requirement and is scoping pilot availability and route transit clearance.
                  </p>

                  {/* Reference ID card */}
                  <div className="w-full max-w-md bg-slate-50 border border-slate-200/90 rounded-2xl p-5 mb-6 text-left">
                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-200">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">Manifest Reference</span>
                        <span className="font-mono text-base font-extrabold text-brand-600">
                          {successData.referenceId}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyId}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-all shadow-sm"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Copied' : 'Copy ID'}</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-slate-400 block">Service:</span>
                        <span className="font-semibold text-slate-800">{service}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Urgency:</span>
                        <span className="font-semibold text-slate-800">{urgency}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Route:</span>
                        <span className="font-semibold text-slate-800">{pickup} → {dropoff}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Logged At:</span>
                        <span className="font-semibold text-slate-800">{successData.timestamp}</span>
                      </div>
                    </div>
                  </div>

                  {/* Dual Dispatch Channels (WhatsApp + Email) */}
                  <div className="w-full max-w-md space-y-2.5 mb-5">
                    {successData.whatsAppUrl && (
                      <a
                        href={successData.whatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Chat On WhatsApp (+91 9053529200)</span>
                      </a>
                    )}

                    {successData.mailtoUrl && (
                      <a
                        href={successData.mailtoUrl}
                        className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/20"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Send Via Email ({successData.officialEmail || 'info@vtlogistic.in'})</span>
                      </a>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                    <a
                      href="tel:9053529200"
                      className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                    >
                      <Phone className="w-4 h-4 text-amber-400" />
                      <span>Call Hotline</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSuccessData(null)}
                      className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs uppercase tracking-wider transition-colors"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                /* The Functional Dispatch Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Invisible Honeypot Trap for automated bots */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '-9999px',
                      opacity: 0,
                      pointerEvents: 'none',
                      height: 0,
                      overflow: 'hidden',
                    }}
                  >
                    <label htmlFor="quote-website">Please leave this blank</label>
                    <input
                      type="text"
                      id="quote-website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={botHoneypot}
                      onChange={(e) => setBotHoneypot(e.target.value)}
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                      Configure Your Dispatch Request
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out your corridor and fleet parameters for guaranteed SLA assessment.
                    </p>
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* 1. Category Selection Pills */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2.5">
                      1. Requirement Category
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        const isSelected = service === cat.id;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => {
                              setService(cat.id);
                              if (cat.id === 'Fleet Operations (FTL)') {
                                setVehicle('14 FT (Closed / Open, up to 4 Ton)');
                              } else {
                                setVehicle('EV Bus (Zero-Emission Electric Bus)');
                              }
                            }}
                            className={`p-4 rounded-2xl border text-left transition-all relative flex items-center justify-between ${
                              isSelected
                                ? 'border-brand-600 bg-brand-50/80 text-brand-700 shadow-sm ring-2 ring-brand-500/20'
                                : 'border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 text-slate-700'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                isSelected ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-600'
                              }`}>
                                <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                <span className="text-sm font-extrabold block leading-tight">{cat.label}</span>
                                <span className="text-[11px] text-slate-500 font-medium">
                                  {cat.id === 'Fleet Operations (FTL)' ? 'Dedicated Trucks (1–40 Ton)' : 'Skilled Driver Behind-The-Wheel'}
                                </span>
                              </div>
                            </div>
                            <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                              isSelected ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-600'
                            }`}>
                              {cat.badge}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Commercial Vehicle Type */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      2. Commercial Vehicle Type
                    </label>
                    <div className="relative">
                      <select
                        value={vehicle}
                        onChange={(e) => setVehicle(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-600 bg-white transition-all appearance-none cursor-pointer"
                      >
                        {(service === 'Fleet Operations (FTL)' ? FTL_VEHICLES : JOCKEY_VEHICLES).map((vt) => (
                          <option key={vt.value} value={vt.value}>
                            {vt.label}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                        ▼
                      </div>
                    </div>

                    {/* Conditional Tonnage and Boxes/Bags for FTL */}
                    {service === 'Fleet Operations (FTL)' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                        <div>
                          <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                            Tonnage / Weight
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 5 Ton / 18 Ton / 40 Ton"
                            value={tonnage}
                            onChange={(e) => setTonnage(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-600 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                            No. of Boxes / Bags / Units
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 250 Boxes / 500 Bags"
                            value={boxes}
                            onChange={(e) => setBoxes(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-600 transition-all"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 3. Origin & Destination with Swap button */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        3. Corridor & Route Parameters
                      </label>
                      <button
                        type="button"
                        onClick={handleSwapRoute}
                        className="text-[11px] font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 transition-colors"
                        title="Swap Origin and Destination"
                      >
                        <ArrowLeftRight className="w-3 h-3" />
                        <span>Swap Route</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          required
                          placeholder="Origin (e.g. Gurugram / Jhajjar)"
                          value={pickup}
                          onChange={(e) => setPickup(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-600 transition-all"
                        />
                      </div>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          required
                          placeholder="Destination (e.g. Ahmedabad, GJ)"
                          value={dropoff}
                          onChange={(e) => setDropoff(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-600 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 4. Contact Details & Urgency */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Fleet Head / Enterprise"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-600 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Mobile Number * (10 Digits)
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3.5 rounded-l-xl border border-r-0 border-slate-300 bg-slate-100 text-slate-600 text-xs font-bold">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          placeholder="90535 29200"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                          className="w-full px-4 py-3 rounded-r-xl border border-slate-300 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-600 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Optional Email Input for Corporate Dispatch */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address (Optional — For Official Receipt / Manifest Copy)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="email"
                        placeholder="procurement@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-600 transition-all"
                      />
                    </div>
                  </div>

                  {/* Urgency selector buttons */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                      Deployment Timeframe
                    </label>
                    <div className="grid grid-cols-3 gap-2 text-xs font-bold">
                      {[
                        { id: 'Immediate (< 2 Hours)', icon: Zap, label: 'Immediate (< 2h)' },
                        { id: 'Within 24 Hours', icon: Clock, label: 'Within 24h' },
                        { id: 'Scheduled Date', icon: Calendar, label: 'Scheduled' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setUrgency(item.id)}
                          className={`py-2 px-3 rounded-xl border text-center flex items-center justify-center gap-1.5 transition-all ${
                            urgency === item.id
                              ? 'border-brand-600 bg-brand-50 text-brand-700 font-extrabold shadow-sm'
                              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <item.icon className="w-3.5 h-3.5" />
                          <span>{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic SLA Assurance Banner */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5 text-xs text-slate-600">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Estimated Marshalling:{' '}
                      <strong className="text-slate-900">
                        {urgency === 'Immediate (< 2 Hours)' ? '30–45 Mins' : 'As Scheduled'}
                      </strong>{' '}
                      • Verified HMV Badge Driver Assigned
                    </span>
                  </div>

                  {/* Submit Action Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-brand-600 via-blue-600 to-brand-700 hover:from-brand-700 hover:to-blue-800 text-white font-display text-sm uppercase font-extrabold tracking-wider shadow-[0_8px_25px_rgba(0,102,255,0.32)] hover:shadow-[0_10px_30px_rgba(0,102,255,0.45)] flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75 disabled:pointer-events-none"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>TRANSMITTING MANIFEST...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>TRANSMIT REQUEST FOR VEHICLE / FLEET</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

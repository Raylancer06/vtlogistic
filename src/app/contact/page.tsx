'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  MessageSquare,
  Truck,
  ArrowRight,
  Building,
  Compass,
  Navigation,
  Award,
  Sparkles,
  Radio,
  FileText,
  Check,
} from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Jockey Movement',
    origin: '',
    destination: '',
    details: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submissionResult, setSubmissionResult] = useState<{
    referenceId: string;
    whatsAppUrl: string;
    mailtoUrl: string;
    officialEmail: string;
    timestamp: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to submit inquiry');

      setSubmissionResult({
        referenceId: json.referenceId,
        whatsAppUrl: json.whatsAppUrl,
        mailtoUrl: json.mailtoUrl,
        officialEmail: json.officialEmail || 'info@vtlogistic.in',
        timestamp: json.timestamp || new Date().toLocaleString(),
      });

      if (json.whatsAppUrl) {
        window.open(json.whatsAppUrl, '_blank');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please connect with our hotline.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* 1. HERO BANNER - LOGIXPRESS HIGH-CONTRAST WITH CINEMATIC BACKDROP */}
      <section className="relative w-full bg-[#060B14] text-white overflow-hidden py-16 sm:py-24">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF7A00]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop"
            alt="Logistics Operations Center"
            fill
            priority
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060B14] via-[#060B14]/85 to-[#060B14]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FF7A00] text-xs font-extrabold uppercase tracking-widest backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-ping" />
                <span>National Dispatch & Rapid Mobilization Desk</span>
              </div>

              <h1 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight uppercase">
                Let&apos;s Coordinate Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-amber-400 to-orange-300">
                  Fleet & Routes.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Connect directly with our 24/7 central dispatch desk in Jhajjar, Haryana. Whether you need bare chassis driveaway, commercial driver staffing, or dedicated corridor freight, our logistics coordinators respond immediately.
              </p>
            </div>

            {/* Quick Response Metric Badge */}
            <div className="flex items-center gap-4 bg-white/10 border border-white/20 p-5 rounded-2xl backdrop-blur-md self-start lg:self-auto shrink-0 shadow-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#FF7A00] flex items-center justify-center text-white shrink-0 shadow-md">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#FF7A00] font-extrabold block">
                  Standard Response SLA
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">&lt; 15 Minutes</span>
                <p className="text-[11px] text-slate-300">Live corridor coordination</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION WITH HD IMAGE OFFICE CARD */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left: Contact Details & Visual Headquarters Card */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* HQ Terminal Visual Card */}
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md group">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
                    alt="VT Logistics Jhajjar Dispatch Center"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-[#060B14]/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7A00] text-white text-xs font-extrabold uppercase tracking-wider shadow">
                      <Radio className="w-3.5 h-3.5 animate-pulse" />
                      <span>HQ Control Room</span>
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-extrabold tracking-tight">Jhajjar Operational Terminal</h3>
                    <p className="text-xs text-slate-200">KMP Expressway & Delhi-NCR Commercial Corridor</p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  {/* Phone */}
                  <a
                    href="tel:9053529200"
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-orange-50/50 border border-slate-200/80 transition-all group/item"
                  >
                    <div className="w-11 h-11 rounded-xl bg-orange-100 group-hover/item:bg-[#FF7A00] text-[#FF7A00] group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-slate-500 block">24/7 Operations Hotline</span>
                      <p className="text-base font-extrabold text-slate-900 group-hover/item:text-[#FF7A00] transition-colors">
                        +91 9053529200
                      </p>
                      <span className="text-[11px] text-slate-500">Instant coordinator dispatch desk</span>
                    </div>
                  </a>

                  {/* WhatsApp Direct */}
                  <a
                    href="https://wa.me/919053529200?text=Hello%20VT%20Logistic%20Services,%20I%20have%20an%20urgent%20logistics%20requirement."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200/80 transition-all group/item"
                  >
                    <div className="w-11 h-11 rounded-xl bg-emerald-100 group-hover/item:bg-[#25D366] text-[#25D366] group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                      <WhatsAppIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-slate-500 block">WhatsApp Priority Line</span>
                      <p className="text-base font-extrabold text-slate-900 group-hover/item:text-emerald-600 transition-colors">
                        Chat On WhatsApp
                      </p>
                      <span className="text-[11px] text-slate-500">Live corridor manifests & tracking</span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@vtlogistic.in"
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 transition-all group/item"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-100 group-hover/item:bg-blue-600 text-blue-600 group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-slate-500 block">Official RFPs & Procurement</span>
                      <p className="text-base font-extrabold text-slate-900 group-hover/item:text-blue-600 transition-colors">
                        info@vtlogistic.in
                      </p>
                      <span className="text-[11px] text-slate-500">For enterprise contracts & institutional tenders</span>
                    </div>
                  </a>

                  {/* Headquarters Address */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-slate-500 block">Registered Headquarters</span>
                      <p className="text-sm font-extrabold text-slate-900">Jhajjar, Haryana – 124103, India</p>
                      <span className="text-[11px] text-slate-500">Connecting KMP, NH-48 & Northern Industrial Belts</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Box */}
              <div className="bg-[#060B14] text-white p-6 rounded-3xl border border-slate-800 shadow-xl space-y-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#FF7A00]" />
                  <span className="font-extrabold text-sm uppercase tracking-wide">Enterprise SLA Guarantee</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every driver deployment, chassis move, and route movement is safeguarded by strict background-cleared manpower, zero-damage driveaway protocols, and continuous photographic milestone handovers.
                </p>
              </div>
            </div>

            {/* Right: Interactive Requirement Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md">
              {submissionResult ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-[#25D366] flex items-center justify-center mb-4 shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 mb-1">
                    Delivered To Central Dispatch
                  </span>
                  <h4 className="text-2xl font-extrabold text-slate-900 mb-2">Requirement Transmitted</h4>
                  <p className="text-sm text-slate-600 max-w-md mb-6 leading-relaxed">
                    Your inquiry has been logged for immediate response. A copy is delivered to <strong className="text-slate-900">{submissionResult.officialEmail}</strong> and your request is pre-formatted for WhatsApp.
                  </p>

                  {/* Reference Manifest Card */}
                  <div className="w-full max-w-md bg-slate-50 border border-slate-200/90 rounded-2xl p-4 mb-6 text-left">
                    <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-200">
                      <span className="text-[11px] uppercase font-bold text-slate-500">Manifest Reference</span>
                      <span className="font-mono text-sm font-extrabold text-[#FF7A00]">{submissionResult.referenceId}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                      <div>Official Email: <strong className="text-slate-900">{submissionResult.officialEmail}</strong></div>
                      <div>Logged: <strong className="text-slate-900">{submissionResult.timestamp}</strong></div>
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="w-full max-w-md space-y-2.5 mb-6">
                    {submissionResult.whatsAppUrl && (
                      <a
                        href={submissionResult.whatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Chat On WhatsApp (+91 9053529200)</span>
                      </a>
                    )}

                    {submissionResult.mailtoUrl && (
                      <a
                        href={submissionResult.mailtoUrl}
                        className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/20"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Send Via Email ({submissionResult.officialEmail})</span>
                      </a>
                    )}
                  </div>

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
                      onClick={() => setSubmissionResult(null)}
                      className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs uppercase tracking-wider transition-colors"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <FileText className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                  <div className="border-b border-slate-100 pb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FF7A00] text-[11px] font-extrabold uppercase tracking-wider mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Instant Dispatch Assessment</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900">Transmit Your Requirements</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Our dispatch team scopes vehicles, rates, driver availability, and transit schedules immediately.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enterprise Ltd."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 90535 29200"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="procurement@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Service Requirement
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent bg-white transition-all font-medium"
                    >
                      <option value="Jockey Movement">Jockey Movement (Bare Chassis / Coach Driveaway)</option>
                      <option value="Fleet Operations">Dedicated Fleet Operations Management</option>
                      <option value="Driver Deployment">Commercial Driver Deployment (Spot / Monthly)</option>
                      <option value="Vehicle Relocation">Depot / Yard Vehicle Relocation</option>
                      <option value="Custom Enterprise Solution">Custom Enterprise Mobility SLA</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Origin Point
                      </label>
                      <input
                        type="text"
                        name="origin"
                        value={formData.origin}
                        onChange={handleChange}
                        placeholder="e.g. Jhajjar / OEM Plant"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Destination Point
                      </label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="e.g. Pune / Distribution Hub"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Additional Specifications / Notes
                    </label>
                    <textarea
                      rows={3}
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Vehicle axle count, chassis specifications, timeline..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 px-6 rounded-xl bg-[#FF7A00] hover:bg-[#E06900] text-white font-extrabold text-[13px] uppercase tracking-wider shadow-[0_10px_25px_rgba(255,122,0,0.35)] hover:shadow-[0_12px_30px_rgba(255,122,0,0.5)] flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75 disabled:pointer-events-none"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>TRANSMITTING REQUIREMENT...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 shrink-0" />
                        <span>Transmit To Dispatch Desk</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. HD OPERATIONAL HUBS SHOWCASE - 3 VISUAL PHOTO CARDS */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#FF7A00] text-xs font-extrabold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>National Operations Network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our Active Logistics Corridors
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We operate across critical manufacturing clusters and transport arteries, guaranteeing rapid mobilization and seamless interstate movement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Northern Hub & Highway Freight */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src="/images/hero_fleet.jpg"
                  alt="Northern Industrial Corridors"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-4 left-4 text-[11px] font-extrabold px-3 py-1 rounded-full bg-[#FF7A00] text-white shadow">
                  HQ & CORRIDOR
                </span>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-base font-extrabold">Northern & NCR Corridors</h3>
                  <p className="text-xs text-slate-200">Haryana, Rajasthan, Delhi-NCR, UP</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Direct highway access via KMP Expressway connecting major automotive assembly clusters and industrial freight hubs with minimal transit friction.
                </p>
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Fast Turnaround</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            </div>

            {/* Card 2: Jockey & Chassis Driveaway */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src="/images/jockey_bus.jpg"
                  alt="Jockey Chassis Movement"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-4 left-4 text-[11px] font-extrabold px-3 py-1 rounded-full bg-blue-600 text-white shadow">
                  ZERO-DAMAGE JOCKEY
                </span>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-base font-extrabold">OEM Driveaway & Bodybuilding</h3>
                  <p className="text-xs text-slate-200">Bare Chassis & Luxury Coaches</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Safe professional road driveaways delivering new chassis from manufacturing plants to bodybuilding facilities and customer depots across India.
                </p>
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Zero Towing Damage</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            </div>

            {/* Card 3: Screened Commercial Drivers */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src="/images/driver_network.jpg"
                  alt="Verified Driver Network"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-4 left-4 text-[11px] font-extrabold px-3 py-1 rounded-full bg-emerald-600 text-white shadow">
                  10,000+ CREW
                </span>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-base font-extrabold">Driver Marshalling Yards</h3>
                  <p className="text-xs text-slate-200">Spot & Contract Staffing</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Thoroughly verified HMV commercial drivers ready for immediate on-demand deployment to keep your corporate fleet running on time.
                </p>
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Police & License Audited</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HEADQUARTERS MAP & DIRECTIONS BANNER */}
      <section className="py-16 bg-[#060B14] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 rounded-3xl p-8 sm:p-12 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 text-[#FF7A00] text-xs font-extrabold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Headquarters Location</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Visit Our Central Operations Desk
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                VT Logistic Services, Jhajjar, Haryana – 124103, India. Conveniently situated for easy inspection of commercial vehicles, fleet planning, and corporate agreement discussions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a
                href="https://maps.google.com/?q=Jhajjar,+Haryana+124103"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-extrabold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-md"
              >
                <Navigation className="w-4 h-4 text-[#FF7A00]" />
                <span>Open In Google Maps</span>
              </a>

              <a
                href="https://wa.me/919053529200?text=Hello%20VT%20Logistic%20Services,%20I%20would%20like%20directions%20to%20your%20Jhajjar%20office."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#20BA5A] transition-colors shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

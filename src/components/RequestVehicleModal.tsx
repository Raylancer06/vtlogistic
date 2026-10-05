'use client';

import React, { useState } from 'react';
import {
  X,
  Truck,
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Compass,
  Users,
  Repeat,
  Copy,
  Check,
  Send,
  AlertCircle,
  MapPin,
  Clock,
  Zap,
  Calendar,
  Mail,
} from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

interface RequestVehicleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MODAL_CATEGORIES = [
  { id: 'Jockey Movement', label: 'Jockey Movement', icon: Compass },
  { id: 'Fleet Operations', label: 'Fleet Operations', icon: Truck },
  { id: 'Driver Deployment', label: 'Driver Deployment', icon: Users },
  { id: 'Vehicle Relocation', label: 'Vehicle Relocation', icon: Repeat },
];

export default function RequestVehicleModal({ isOpen, onClose }: RequestVehicleModalProps) {
  const [serviceType, setServiceType] = useState('Jockey Movement');
  const [vehicleType, setVehicleType] = useState('Commercial Bus / Luxury Coach');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [urgency, setUrgency] = useState('Immediate (< 2 Hours)');
  const [notes, setNotes] = useState('');

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

  if (!isOpen) return null;

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

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/dispatch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: serviceType,
          vehicle: vehicleType,
          pickup: origin,
          dropoff: destination,
          name: fullName,
          company: companyName,
          phone: cleanPhone,
          email,
          urgency,
          notes,
        }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Submission failed');

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

      if (json.whatsAppUrl) {
        window.open(json.whatsAppUrl, '_blank');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Error transmitting dispatch. Please call hotline.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-gradient-to-r from-[#060B14] to-[#0B1528] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold tracking-widest uppercase text-amber-400 block">
                Instant Dispatch Desk
              </span>
              <h3 className="text-lg font-extrabold text-white">Schedule Fleet / Vehicle Movement</h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {successData ? (
          /* Confirmation state */
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-extrabold text-slate-900 mb-2">Request Transmitted</h4>
            <p className="text-sm text-slate-600 max-w-md mb-6 leading-relaxed">
              Your vehicle deployment inquiry has been logged in the Jhajjar dispatch tower. Our coordinator will connect within 15 minutes.
            </p>

            <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-6 text-left">
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-200">
                <span className="text-xs uppercase font-bold text-slate-500">Manifest Reference</span>
                <span className="font-mono text-sm font-extrabold text-brand-600">{successData.referenceId}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                <div>Route: <strong className="text-slate-900">{origin} → {destination}</strong></div>
                <div>Category: <strong className="text-slate-900">{serviceType}</strong></div>
              </div>
            </div>

            {/* Dual Transmission Buttons */}
            <div className="w-full space-y-2.5 mb-5">
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
                  <span>Email Official Desk ({successData.officialEmail || 'info@vtlogistic.in'})</span>
                </a>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <a
                href="tel:9053529200"
                className="flex-1 py-3 px-4 rounded-xl bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Hotline</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setSuccessData(null);
                  onClose();
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs uppercase tracking-wider transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Input Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Service Category */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                1. Select Service Category
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                {MODAL_CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = serviceType === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setServiceType(cat.id)}
                      className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                        isSelected
                          ? 'border-brand-600 bg-brand-50/80 text-brand-700 shadow-sm ring-2 ring-brand-500/20'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-brand-600' : 'text-slate-400'}`} />
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Vehicle Type */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                2. Vehicle Classification
              </label>
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-600 bg-white"
              >
                <option value="Commercial Bus / Luxury Coach">Commercial Bus / Multi-Axle Luxury Coach</option>
                <option value="Bare Chassis / EV Platform Driveaway">Bare Chassis / EV Platform Driveaway</option>
                <option value="Heavy Multi-Axle Trailer / Prime Mover">Heavy Multi-Axle Trailer / Prime Mover</option>
                <option value="Light Commercial Vehicle / Delivery Vans">Light Commercial Vehicle / Delivery Vans</option>
                <option value="Plant Internal Shuttles & Tippers">Plant Internal Shuttles & Tippers</option>
                <option value="Other Specialized Commercial Unit">Other Specialized Commercial Fleet</option>
              </select>
            </div>

            {/* Corridors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                  Origin (City / Hub) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Gurugram / Jhajjar"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-600"
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                  Destination (City / Plant) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ahmedabad, Gujarat"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-600"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                  Contact Person / Company
                </label>
                <input
                  type="text"
                  placeholder="Your Name / Enterprise"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-600"
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                  Mobile Number * (10 Digits)
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-300 bg-slate-100 text-slate-600 text-xs font-bold">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="90535 29200"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                    className="w-full px-3.5 py-2.5 rounded-r-xl border border-slate-300 text-sm font-bold text-slate-900 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-600"
                  />
                </div>
              </div>
            </div>

            {/* Optional Email */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                Official Email (Optional — For Manifest & Receipt Delivery)
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  placeholder="procurement@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-600"
                />
              </div>
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                Deployment Urgency
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs font-bold">
                {[
                  { id: 'Immediate (< 2 Hours)', label: 'Immediate (< 2h)' },
                  { id: 'Within 24 Hours', label: 'Within 24h' },
                  { id: 'Scheduled Date', label: 'Scheduled' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setUrgency(item.id)}
                    className={`py-2 px-2.5 rounded-xl border text-center transition-all ${
                      urgency === item.id
                        ? 'border-brand-600 bg-brand-50 text-brand-700 font-extrabold shadow-sm'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Security Guarantee */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>All driver dispatches carry background verification and zero-damage custody.</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-brand-600 to-blue-600 hover:from-brand-700 hover:to-blue-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-brand-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 disabled:opacity-75"
              >
                {isLoading ? (
                  <span>TRANSMITTING...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit to Dispatch Desk</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
              <a
                href="tel:9053529200"
                className="sm:w-auto py-4 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                <span>Call Hotline</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

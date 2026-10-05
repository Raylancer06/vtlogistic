'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Footer({ onRequestVehicle }: { onRequestVehicle?: () => void }) {
  return (
    <footer className="w-full bg-[#060B14] text-slate-300 border-t border-slate-800">
      {/* Top Banner Ribbon - LogiXpress Style */}
      <div className="bg-gradient-to-r from-brand-700 via-brand-600 to-blue-700 text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7 text-amber-300" />
            </div>
            <div>
              <h4 className="font-extrabold text-base sm:text-xl tracking-tight">Need Dedicated Jockey or Commercial Fleet Deployment?</h4>
              <p className="text-xs sm:text-sm text-blue-100 font-medium">Immediate driver verification and pan-India SLA execution within 24 hours.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
            <a
              href="tel:9053529200"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-3 rounded-xl shadow-md transition-all uppercase tracking-wider"
              aria-label="Call +91 9053529200"
            >
              <Phone className="w-4 h-4 text-brand-600" />
              <span>+91 9053529200</span>
            </a>
            <button
              type="button"
              onClick={onRequestVehicle}
              className="inline-flex items-center justify-center gap-2 bg-[#FF7A00] hover:bg-[#E06900] text-white font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-3 rounded-xl shadow-md transition-all uppercase tracking-wider"
            >
              <span>Request A Vehicle</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Company Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-white p-3 rounded-2xl w-fit shadow-md">
              <div className="relative h-11 w-52">
                <Image
                  src="/images/logo.png"
                  alt="Value Trust Logistic Services"
                  fill
                  sizes="208px"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              Premier B2B fleet operations, verified commercial driver deployment, vehicle repositioning, and pan-India jockey movement with guaranteed SLA governance.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300 pt-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>ISO-Aligned Corporate Compliance & Certified Drivers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h5 className="text-xs uppercase font-extrabold tracking-widest text-white mb-2">Navigation</h5>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h5 className="text-xs uppercase font-extrabold tracking-widest text-white mb-2">Our Core Services</h5>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services#fleet-operations" className="hover:text-white transition-colors">
                  Fleet Operations Management
                </Link>
              </li>
              <li>
                <Link href="/services#jockey-movement" className="hover:text-white transition-colors">
                  Pan-India Jockey Movement
                </Link>
              </li>
              <li>
                <Link href="/services#driver-deployment" className="hover:text-white transition-colors">
                  Commercial Driver Deployment
                </Link>
              </li>
              <li>
                <Link href="/services#vehicle-movement" className="hover:text-white transition-colors">
                  Inter-Depot Vehicle Movement
                </Link>
              </li>
              <li>
                <Link href="/services#customized-solutions" className="hover:text-white transition-colors">
                  Customized Enterprise SLAs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h5 className="text-xs uppercase font-extrabold tracking-widest text-white mb-2">Direct Operational Desk</h5>
            <div className="space-y-3 text-sm">
              <a
                href="tel:9053529200"
                className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block leading-none">24/7 Dispatch Hotline</span>
                  <span className="font-bold text-white text-base">+91 9053529200</span>
                </div>
              </a>

              <a
                href="mailto:info@vtlogistic.in"
                className="flex items-center gap-3 text-slate-300 hover:text-brand-400 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block leading-none">Official Communications</span>
                  <span className="font-medium text-white">info@vtlogistic.in</span>
                </div>
              </a>

              <div className="flex items-start gap-3 text-slate-300 pt-1">
                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block leading-none">Central Operations HQ</span>
                  <span className="text-xs text-slate-300">Jhajjar, Haryana – 124103, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} VT Logistic Services. All rights reserved.{' '}
            <span className="text-slate-200 font-semibold">Your Trust Our Destination.</span>
          </p>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              SLA Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

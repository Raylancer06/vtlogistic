'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Truck, Menu, X, ArrowRight, ChevronRight, Mail } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

interface HeaderProps {
  onRequestVehicle?: () => void;
}

export default function Header({ onRequestVehicle }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Notification / Dispatch Ribbon */}
      <div className="bg-[#060B14] text-slate-300 text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-2.5 truncate">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span className="font-extrabold text-slate-200 tracking-wider truncate">PAN-INDIA B2B LOGISTICS</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-slate-400 font-medium truncate">10,000+ Verified Drivers</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs shrink-0">
            <span className="text-slate-400 hidden md:inline">Jhajjar, Haryana HQ</span>
            <span className="text-slate-700 hidden md:inline">|</span>
            <a
              href="https://wa.me/919053529200?text=Hello%20VT%20Logistic%20Services,%20I%20have%20an%20urgent%20logistics%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
              <ChevronRight className="w-3 h-3 hidden sm:inline" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-2 sm:py-2.5'
            : 'bg-white border-b border-slate-100 py-2.5 sm:py-3 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            
            {/* Prominent Responsive HD Logo */}
            <Link href="/" className="flex items-center shrink-0 group py-0.5">
              <div className="relative h-10 sm:h-11 md:h-12 w-48 sm:w-56 md:w-64 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/images/logo.png"
                  alt="Value Trust Logistic Services"
                  fill
                  sizes="(max-width: 640px) 192px, 256px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-semibold tracking-wide uppercase">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative py-1.5 transition-all duration-200 flex items-center gap-1.5 ${
                      active
                        ? 'text-brand-600 font-bold'
                        : 'text-slate-700 hover:text-brand-600 font-semibold'
                    }`}
                  >
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                    )}
                    <span>{link.name}</span>
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Items */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Desktop Call Hotline: Phone icon + number */}
              <a
                href="tel:9053529200"
                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand-400 hover:bg-brand-50/60 text-slate-800 transition-all group"
                aria-label="Call +91 9053529200"
              >
                <div className="w-7 h-7 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="text-[13px] font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  +91 9053529200
                </span>
              </a>

              {/* Mobile Quick Call Button */}
              <a
                href="tel:9053529200"
                className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors"
                aria-label="Call +91 9053529200"
              >
                <Phone className="w-4 h-4 text-[#FF7A00]" />
              </a>

              {/* Request Button */}
              <button
                type="button"
                onClick={() => {
                  if (onRequestVehicle) {
                    onRequestVehicle();
                  } else {
                    const el = document.getElementById('enquiry-section');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/contact';
                    }
                  }
                }}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#FF7A00] hover:bg-[#E06900] text-white font-display text-[11px] sm:text-[13px] uppercase font-extrabold tracking-wider px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-[0_4px_12px_rgba(255,122,0,0.25)] hover:shadow-[0_6px_16px_rgba(255,122,0,0.35)] transition-all duration-200 active:translate-y-0 whitespace-nowrap"
              >
                <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="hidden sm:inline">Request A Vehicle</span>
                <span className="sm:hidden">Request</span>
                <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200 transition-colors focus:outline-none"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Bulletproof 100% Solid White Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-white flex flex-col overflow-y-auto animate-in fade-in duration-200"
          style={{ backgroundColor: '#ffffff' }}
        >
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-200 bg-white sticky top-0 z-10 shadow-sm">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center py-0.5">
              <div className="relative h-10 w-48">
                <Image
                  src="/images/logo.png"
                  alt="Value Trust Logistic Services"
                  fill
                  sizes="192px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors focus:outline-none"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Drawer Body */}
          <div className="px-5 py-6 space-y-6 flex-1 bg-white" style={{ backgroundColor: '#ffffff' }}>
            {/* Navigation Links */}
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all ${
                      active
                        ? 'bg-orange-50 text-[#FF7A00] border border-orange-200 font-extrabold shadow-sm'
                        : 'text-slate-800 hover:bg-slate-50 border border-slate-100'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${active ? 'text-[#FF7A00]' : 'text-slate-400'}`} />
                  </Link>
                );
              })}
            </nav>

            {/* Quick Action Buttons */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              {/* Primary Request Action */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onRequestVehicle) {
                    onRequestVehicle();
                  } else {
                    const el = document.getElementById('enquiry-section');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/contact';
                    }
                  }
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-[#FF7A00] hover:bg-[#E06900] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 transition-all"
              >
                <Truck className="w-4 h-4" />
                <span>Request A Vehicle Now</span>
              </button>

              {/* Call: ONLY Phone icon and Number */}
              <a
                href="tel:9053529200"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-black text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#FF7A00]" />
                <span>+91 9053529200</span>
              </a>

              {/* WhatsApp: Official WhatsApp SVG icon */}
              <a
                href="https://wa.me/919053529200?text=Hello%20VT%20Logistic%20Services,%20I%20have%20an%20urgent%20logistics%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              {/* Official Email */}
              <a
                href="mailto:info@vtlogistic.in"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 text-slate-700 hover:text-slate-900 font-bold text-xs flex items-center justify-center gap-2 border border-slate-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>info@vtlogistic.in</span>
              </a>
            </div>

            {/* Central Operations Pin */}
            <div className="pt-4 text-center text-[11px] text-slate-500 font-medium">
              Central Operations HQ: Jhajjar, Haryana (PIN: 124103)
            </div>
          </div>
        </div>
      )}
    </>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Truck, Menu, X, ArrowRight, ChevronRight, MessageSquare, Mail } from 'lucide-react';

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
              className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 transition-colors whitespace-nowrap"
            >
              <span>24/7 WhatsApp</span>
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - LogiXpress caliber crisp frosted navbar */}
      <header
        className={`sticky top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-2 sm:py-2.5'
            : 'bg-white/98 backdrop-blur-sm border-b border-slate-150 py-2.5 sm:py-3 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            
            {/* Responsive HD Logo */}
            <Link href="/" className="flex items-center shrink-0 group py-0.5">
              <div className="relative h-8 xs:h-10 sm:h-11 md:h-12 w-36 xs:w-48 sm:w-56 md:w-64 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/images/logo.png"
                  alt="Value Trust Logistic Services"
                  fill
                  sizes="(max-width: 480px) 144px, (max-width: 640px) 192px, 256px"
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
            <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
              {/* 24/7 Hotline Pill (Desktop) */}
              <a
                href="tel:9053529200"
                className="hidden md:flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand-400 hover:bg-brand-50/60 text-slate-800 transition-all group"
              >
                <div className="w-7 h-7 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left leading-tight pr-1">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-slate-500">24/7 Hotline</span>
                  <span className="text-[12px] font-bold text-slate-900 group-hover:text-brand-600 transition-colors">+91 9053529200</span>
                </div>
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
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#FF7A00] hover:bg-[#E06900] text-white font-display text-[11px] xs:text-[12px] sm:text-[13px] uppercase font-extrabold tracking-wider px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-[0_4px_15px_rgba(255,122,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,122,0,0.45)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="hidden xs:inline">Request A Vehicle</span>
                <span className="xs:hidden">Request</span>
                <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Dropdown Menu with Full Backdrop Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-x-0 top-full bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl z-50 animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
            <div className="max-w-md mx-auto px-4 py-5 space-y-4">
              
              {/* Navigation Links */}
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-colors ${
                        active
                          ? 'bg-orange-50 text-[#FF7A00] font-extrabold border border-orange-100'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className={`w-4 h-4 ${active ? 'text-[#FF7A00]' : 'text-slate-400'}`} />
                    </Link>
                  );
                })}
              </nav>

              {/* Action Buttons in Mobile Menu */}
              <div className="pt-3 border-t border-slate-100 space-y-2.5">
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
                  className="w-full py-3.5 px-4 rounded-xl bg-[#FF7A00] hover:bg-[#E06900] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 transition-all"
                >
                  <Truck className="w-4 h-4" />
                  <span>Request A Vehicle Now</span>
                </button>

                <a
                  href="https://wa.me/919053529200?text=Hello%20VT%20Logistic%20Services,%20I%20have%20an%20urgent%20logistics%20requirement."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Rapid Dispatch</span>
                </a>

                <a
                  href="tel:9053529200"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FF7A00]" />
                  <span>Call 24/7 Hotline: +91 9053529200</span>
                </a>

                <a
                  href="mailto:info@vtlogistic.in"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 text-slate-600 hover:text-slate-900 font-bold text-xs flex items-center justify-center gap-2 border border-slate-200 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>Official Email: info@vtlogistic.in</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

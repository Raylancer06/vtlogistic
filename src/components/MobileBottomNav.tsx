'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { House, Truck, Send, Info, PhoneCall } from 'lucide-react';

interface MobileBottomNavProps {
  onRequestVehicle?: () => void;
}

export default function MobileBottomNav({ onRequestVehicle }: MobileBottomNavProps) {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isServices = pathname.startsWith('/services');
  const isAbout = pathname.startsWith('/about');
  const isContact = pathname.startsWith('/contact');

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="flex items-center justify-around h-16 px-1 max-w-lg mx-auto">
        {/* 1. Home Tab */}
        <Link
          href="/"
          className={`flex-1 flex flex-col items-center justify-center py-1 transition-all duration-200 active:scale-95 ${
            isHome ? 'text-[#FF7A00]' : 'text-slate-500 hover:text-slate-900'
          }`}
          aria-label="Navigate to Home"
        >
          <House className={`w-5 h-5 transition-transform ${isHome ? 'scale-110 stroke-[2.4]' : 'stroke-[1.8]'}`} />
          <span className={`text-[10px] mt-0.5 tracking-tight ${isHome ? 'font-extrabold text-[#FF7A00]' : 'font-semibold'}`}>
            Home
          </span>
          <span className={`w-1 h-1 rounded-full mt-0.5 transition-all ${isHome ? 'bg-[#FF7A00]' : 'bg-transparent'}`} />
        </Link>

        {/* 2. Services Tab */}
        <Link
          href="/services"
          className={`flex-1 flex flex-col items-center justify-center py-1 transition-all duration-200 active:scale-95 ${
            isServices ? 'text-[#FF7A00]' : 'text-slate-500 hover:text-slate-900'
          }`}
          aria-label="Navigate to Services"
        >
          <Truck className={`w-5 h-5 transition-transform ${isServices ? 'scale-110 stroke-[2.4]' : 'stroke-[1.8]'}`} />
          <span className={`text-[10px] mt-0.5 tracking-tight ${isServices ? 'font-extrabold text-[#FF7A00]' : 'font-semibold'}`}>
            Services
          </span>
          <span className={`w-1 h-1 rounded-full mt-0.5 transition-all ${isServices ? 'bg-[#FF7A00]' : 'bg-transparent'}`} />
        </Link>

        {/* 3. Center Elevated Action Button: Request Vehicle */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={onRequestVehicle}
            className="group relative -top-3.5 flex flex-col items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00] rounded-full active:scale-95 transition-transform"
            aria-label="Request A Commercial Vehicle"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF7A00] via-[#FF8514] to-[#FFA03A] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(255,122,0,0.45)] border-[3px] border-white group-hover:scale-105 transition-all duration-200">
              <Send className="w-5 h-5 ml-0.5" />
            </div>
            <span className="text-[10px] font-extrabold text-slate-800 tracking-tight mt-0.5 group-hover:text-[#FF7A00] transition-colors">
              Request
            </span>
          </button>
        </div>

        {/* 4. About Tab */}
        <Link
          href="/about"
          className={`flex-1 flex flex-col items-center justify-center py-1 transition-all duration-200 active:scale-95 ${
            isAbout ? 'text-[#FF7A00]' : 'text-slate-500 hover:text-slate-900'
          }`}
          aria-label="Navigate to About Us"
        >
          <Info className={`w-5 h-5 transition-transform ${isAbout ? 'scale-110 stroke-[2.4]' : 'stroke-[1.8]'}`} />
          <span className={`text-[10px] mt-0.5 tracking-tight ${isAbout ? 'font-extrabold text-[#FF7A00]' : 'font-semibold'}`}>
            About
          </span>
          <span className={`w-1 h-1 rounded-full mt-0.5 transition-all ${isAbout ? 'bg-[#FF7A00]' : 'bg-transparent'}`} />
        </Link>

        {/* 5. Contact Tab */}
        <Link
          href="/contact"
          className={`flex-1 flex flex-col items-center justify-center py-1 transition-all duration-200 active:scale-95 ${
            isContact ? 'text-[#FF7A00]' : 'text-slate-500 hover:text-slate-900'
          }`}
          aria-label="Navigate to Contact and Hubs"
        >
          <PhoneCall className={`w-5 h-5 transition-transform ${isContact ? 'scale-110 stroke-[2.4]' : 'stroke-[1.8]'}`} />
          <span className={`text-[10px] mt-0.5 tracking-tight ${isContact ? 'font-extrabold text-[#FF7A00]' : 'font-semibold'}`}>
            Contact
          </span>
          <span className={`w-1 h-1 rounded-full mt-0.5 transition-all ${isContact ? 'bg-[#FF7A00]' : 'bg-transparent'}`} />
        </Link>
      </div>
    </nav>
  );
}

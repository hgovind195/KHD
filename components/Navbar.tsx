"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall, Building2, ChevronRight, MessageSquare } from "lucide-react";
import QuoteModal from "./QuoteModal";

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.43-9.875 9.877-9.875 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.887 6.983c-.001 5.446-4.431 9.876-9.877 9.876m0-18.001C6.07 3.784 1.666 8.189 1.666 13.62c0 2.176.568 4.3 1.647 6.17l-1.75 6.39 6.538-1.714a11.83 11.83 0 005.67 1.442h.005c6.046 0 10.963-4.918 10.963-10.965 0-2.93-1.141-5.684-3.213-7.757a10.89 10.89 0 00-7.754-3.213" />
  </svg>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [contactOptionsOpen, setContactOptionsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full glass-header border-b border-[#ECEFEC]">
        {/* Top bar info */}
        <div className="hidden lg:block bg-[#1B1C1C] text-white text-xs py-1.5 font-medium">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-gray-300 text-xs">
                <Building2 className="w-3.5 h-3.5 text-[#355E3B]" />
                Official Corporate Site of Kerala Homes & Developers Pvt. Ltd.
              </span>
            </div>
            <div className="flex items-center gap-6 text-gray-300 text-xs">
              <a href="tel:+917511111000" className="hover:text-[#355E3B] transition-colors flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#355E3B]" />
                +91 75111 11000
              </a>
              <span>Pathanamthitta, Kerala - 689645</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 py-2.5 sm:py-3.5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink">
            <img
              src="https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto/v1785851706/font_tp_pinjpz.png"
              alt="Kerala Homes Logo"
              className="h-9 sm:h-12 md:h-15 lg:h-18 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-sm shrink-0"
            />
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-sm sm:text-base md:text-xl lg:text-2xl leading-tight tracking-tight text-[#1B1C1C] group-hover:text-[#355E3B] transition-colors font-headline">
                Kerala Homes &amp;
              </span>
              <span className="font-bold text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight tracking-normal text-[#2A2B2B] group-hover:text-[#355E3B] transition-colors">
                Developers Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`uppercase text-xs font-bold tracking-widest transition-all py-1 border-b-2 ${
                    isActive
                      ? "text-[#355E3B] border-[#355E3B]"
                      : "text-[#1B1C1C] border-transparent hover:text-[#355E3B] hover:border-[#355E3B]/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile trigger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="relative">
              <button
                type="button"
                onClick={() => setContactOptionsOpen(!contactOptionsOpen)}
                className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#1B1C1C] hover:bg-[#2A2B2B] text-white px-2.5 sm:px-4 py-2 sm:py-2.5 rounded font-bold uppercase text-[10px] sm:text-xs tracking-wider sm:tracking-widest shadow-md hover:shadow-lg transition-all active:scale-95 border border-white/10"
                title="Call or WhatsApp Kerala Homes"
              >
                <PhoneCall className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#355E3B]" />
                <span>Call / Chat</span>
              </button>

              {/* Popover options box */}
              {contactOptionsOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setContactOptionsOpen(false)}
                  ></div>
                  <div className="absolute right-0 mt-2 w-60 sm:w-64 max-w-[calc(100vw-1.5rem)] bg-white border border-[#E0C0B2] rounded-xl shadow-2xl p-3 z-50 animate-fadeIn space-y-2">
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#355E3B] px-2 pt-1">
                      Connect With Kerala Homes
                    </div>

                    <a
                      href="tel:+917511111000"
                      onClick={() => setContactOptionsOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-100 transition-colors text-xs font-bold text-[#1B1C1C]"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#355E3B] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <PhoneCall className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block leading-tight text-[#1B1C1C]">Phone Call</span>
                        <span className="text-[10px] text-gray-500 font-normal">+91 75111 11000</span>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/917511111000?text=Hello%20Kerala%20Homes%20%26%20Developers%2C%20I%20would%20like%20to%20inquire%20about%20your%20projects."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setContactOptionsOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-emerald-50 transition-colors text-xs font-bold text-[#1B1C1C]"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <WhatsappIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block leading-tight text-[#1B1C1C]">WhatsApp Message</span>
                        <span className="text-[10px] text-emerald-600 font-medium">+91 75111 11000</span>
                      </div>
                    </a>
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => setQuoteModalOpen(true)}
              className="hidden md:inline-flex bg-[#355E3B] hover:bg-[#2B4C30] text-white px-5 py-2.5 rounded font-bold uppercase text-xs tracking-widest shadow-md hover:shadow-lg transition-all"
            >
              Get a Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1B1C1C] hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#ECEFEC] shadow-xl px-6 py-6 space-y-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2 px-3 rounded-lg text-sm font-bold uppercase tracking-wider ${
                      isActive ? "bg-[#355E3B] text-white" : "text-[#1B1C1C] hover:bg-gray-100"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+917511111000"
                  className="bg-[#1B1C1C] text-white py-3 px-2 rounded font-bold uppercase text-[11px] tracking-wider shadow text-center flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#355E3B]" />
                  <span>Call</span>
                </a>
                <a
                  href="https://wa.me/917511111000?text=Hello%20Kerala%20Homes%20%26%20Developers%2C%20I%20would%20like%20to%20inquire%20about%20your%20projects."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white py-3 px-2 rounded font-bold uppercase text-[11px] tracking-wider shadow text-center flex items-center justify-center gap-1.5"
                >
                  <WhatsappIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setQuoteModalOpen(true);
                }}
                className="w-full bg-[#355E3B] text-white py-3 rounded font-bold uppercase text-xs tracking-widest shadow text-center"
              >
                Get a Quote
              </button>
            </div>
            <div className="text-center text-xs text-gray-500 font-medium">
              Kerala Homes & Developers Pvt. Ltd.
            </div>
          </div>
        )}
      </header>

      {/* Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
}

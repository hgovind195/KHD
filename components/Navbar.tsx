"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall, Building2, ChevronRight, MapPin } from "lucide-react";
import QuoteModal from "./QuoteModal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
        {/* Top bar info (desktop only) */}
        <div className="hidden lg:block bg-[#1B1C1C] text-white text-xs py-1.5 font-medium">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-gray-300 text-xs">
                <Building2 className="w-3.5 h-3.5 text-[#355E3B]" />
                Official Corporate Site of Kerala Homes &amp; Developers Pvt. Ltd.
              </span>
            </div>
            <div className="flex items-center gap-6 text-gray-300 text-xs">
              <a href="tel:+917511111000" className="hover:text-[#355E3B] transition-colors flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#355E3B]" />
                +91 75111 11000
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#355E3B]" />
                Pathanamthitta &amp; Kochi, Kerala
              </span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0 shrink">
            <img
              src="https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto,w_240/v1785851706/font_tp_pinjpz.png"
              alt="Kerala Homes Logo"
              width={80}
              height={72}
              loading="eager"
              decoding="async"
              className="h-10 sm:h-12 md:h-15 lg:h-18 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-sm shrink-0"
            />
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-extrabold text-sm sm:text-base md:text-xl lg:text-2xl leading-tight tracking-tight text-[#1B1C1C] group-hover:text-[#355E3B] transition-colors font-headline truncate">
                Kerala Homes &amp;
              </span>
              <span className="font-bold text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight tracking-normal text-[#2A2B2B] group-hover:text-[#355E3B] transition-colors truncate">
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
            <a
              href="tel:+917511111000"
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#1E3A8A] hover:bg-[#172554] border border-[#1E3A8A] text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg font-bold uppercase text-[11px] sm:text-xs tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 shrink-0"
              title="Call Kerala Homes & Developers"
            >
              <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              <span>Call</span>
            </a>

            <button
              type="button"
              onClick={() => setQuoteModalOpen(true)}
              className="hidden md:inline-flex bg-[#355E3B] hover:bg-[#2B4C30] text-white px-5 py-2.5 rounded-lg font-bold uppercase text-xs tracking-widest shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              Get a Quote
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 sm:p-2.5 text-[#1B1C1C] bg-white hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors cursor-pointer touch-manipulation relative z-50 shrink-0 border border-gray-200 shadow-sm"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#1B1C1C]" />
              ) : (
                <Menu className="w-6 h-6 text-[#1B1C1C]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Backdrop */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 top-[58px] sm:top-[66px] md:top-[74px] bg-black/50 z-40 lg:hidden backdrop-blur-sm animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-[58px] sm:top-[66px] md:top-[74px] left-0 right-0 z-50 bg-white border-b border-[#ECEFEC] shadow-2xl lg:hidden max-h-[calc(100dvh-58px)] sm:max-h-[calc(100dvh-66px)] overflow-y-auto transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto visible"
              : "opacity-0 -translate-y-3 pointer-events-none invisible"
          }`}
        >
          <div className="px-5 py-6 space-y-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                      isActive
                        ? "bg-[#355E3B] text-white shadow-sm"
                        : "text-[#1B1C1C] hover:bg-gray-100 active:bg-gray-200"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-400"}`} />
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+917511111000"
                  className="bg-[#1E3A8A] hover:bg-[#172554] border border-[#1E3A8A] text-white py-3 rounded-lg font-bold uppercase text-xs tracking-wider shadow flex items-center justify-center gap-2 text-center active:scale-95 transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setQuoteModalOpen(true);
                  }}
                  className="bg-[#355E3B] hover:bg-[#2B4C30] text-white py-3 rounded-lg font-bold uppercase text-xs tracking-widest shadow text-center active:scale-95 transition-all"
                >
                  Get a Quote
                </button>
              </div>
              <div className="text-center text-xs text-gray-500 font-medium pt-2 space-y-1">
                <div className="font-bold text-[#1B1C1C]">Kerala Homes &amp; Developers Pvt. Ltd.</div>
                <div className="text-gray-400 text-[11px] flex items-center justify-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#355E3B]" />
                  Pathanamthitta &amp; Kochi, Kerala
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
}

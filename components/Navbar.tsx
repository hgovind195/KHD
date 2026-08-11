"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall, Building2, ChevronRight } from "lucide-react";
import QuoteModal from "./QuoteModal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
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
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="https://res.cloudinary.com/w1tsvtbe/image/upload/v1785851706/font_tp_pinjpz.png"
              alt="Kerala Homes Logo"
              className="h-12 md:h-15 lg:h-18 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-sm"
            />
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-lg md:text-xl lg:text-2xl leading-tight tracking-tight text-[#1B1C1C] group-hover:text-[#355E3B] transition-colors font-headline">
                Kerala Homes &amp;
              </span>
              <span className="font-bold text-xs md:text-sm lg:text-base leading-tight tracking-normal text-[#2A2B2B] group-hover:text-[#355E3B] transition-colors">
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
          <div className="flex items-center gap-4">
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
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setQuoteModalOpen(true);
                }}
                className="w-full bg-[#355E3B] text-white py-3 rounded font-bold uppercase text-xs tracking-widest shadow text-center"
              >
                Get a Quote
              </button>
              <div className="text-center text-xs text-gray-500 font-medium">
                Kerala Homes & Developers Pvt. Ltd.
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
}

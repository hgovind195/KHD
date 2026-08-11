"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Building2, ChevronRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1B1C1C] text-white border-t-4 border-[#D35400] pt-16 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
        {/* Col 1: Brand Info */}
        <div className="space-y-4">
          <Link href="/" className="flex flex-col">
            <span className="font-extrabold text-xl md:text-2xl tracking-tight text-white font-headline">
              Kerala Homes &amp;
            </span>
            <span className="font-bold text-sm text-gray-300 tracking-normal mt-0.5">
              Developers Pvt. Ltd.
            </span>
          </Link>

          <p className="text-gray-400 text-xs leading-relaxed">
            Leading construction and engineering enterprise in Kerala since 2008. Dedicated to structural integrity, urban design, and architectural perfection.
          </p>

          <div className="flex items-center gap-2 text-xs text-[#D35400] font-semibold pt-2">
            <ShieldCheck className="w-4 h-4 text-[#355E3B]" />
            Associated With Registered Govt. Class A Contractors
          </div>
        </div>

        {/* Col 2: Corporate Divisions */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#D35400] mb-4">
            Our Divisions
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-300">
            <li>
              <Link href="/services" className="hover:text-white flex items-center gap-2 transition-colors">
                <ChevronRight className="w-3.5 h-3.5 text-[#D35400]" />
                Kerala Homes Turnkey Construction
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white flex items-center gap-2 transition-colors">
                <ChevronRight className="w-3.5 h-3.5 text-[#D35400]" />
                Master Plan Engineering Consultancy
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white flex items-center gap-2 transition-colors">
                <ChevronRight className="w-3.5 h-3.5 text-[#D35400]" />
                Innovature Designs Architecture Studio
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white flex items-center gap-2 transition-colors">
                <ChevronRight className="w-3.5 h-3.5 text-[#D35400]" />
                Structural Auditing & Rehabilitation
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Quick Navigation */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#D35400] mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-300">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home Page</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">About Us & Leadership</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors">Engineering & Design Services</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white transition-colors">Signature Projects Portfolio</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">Contact & Location Maps</Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Registered Office */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#D35400] mb-4">
            Registered Office
          </h4>
          <ul className="space-y-3 text-xs text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#D35400] shrink-0 mt-0.5" />
              <span>
                Silver Tower, Opposite Private Bus Stand, Pathanamthitta, Kerala - 689645
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#D35400] shrink-0" />
              <a href="tel:+917511111000" className="hover:text-white">+91 75111 11000</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#D35400] shrink-0" />
              <a href="mailto:info@keralahomes.com" className="hover:text-white">info@keralahomes.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <div>
          © {new Date().getFullYear()} Kerala Homes & Developers Pvt. Ltd. All rights reserved.
        </div>
        <div className="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Quality Management Systems</span>
        </div>
      </div>
    </footer>
  );
}

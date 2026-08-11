"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Building, Compass, PenTool, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function BrandTree() {
  return (
    <section className="relative bg-[#F7FAF3] py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Parent Corporate Identity Banner */}
        <ScrollReveal direction="down">
          <div className="max-w-4xl mx-auto text-center relative group">
            <div className="bg-[#1B1C1C] text-white p-8 md:p-14 rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden">
              {/* Burnt Orange top accent bar */}
              <div className="absolute top-0 left-0 w-full h-2 bg-[#355E3B]"></div>

              <div className="inline-flex items-center gap-3 text-[#355E3B] font-bold text-xs uppercase tracking-[0.3em] mb-4">
                <span className="w-8 h-[2px] bg-[#355E3B]"></span>
                Your Perfect Construction Partner in Kerala
                <span className="w-8 h-[2px] bg-[#355E3B]"></span>
              </div>

              <h2 className="font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-white mb-6 leading-tight">
                KERALA HOMES &<br />DEVELOPERS PVT. LTD.
              </h2>

              <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                A beacon of architectural innovation and structural integrity, steering the future of Kerala’s urban living through specialized engineering, design, and turnkey construction divisions.
              </p>

              <div className="flex justify-center items-center gap-4 text-xs font-semibold uppercase text-gray-400 flex-wrap">
                <span className="flex items-center gap-1 text-[#355E3B]">
                  <ShieldCheck className="w-4 h-4 text-[#355E3B]" /> 10+ Years Trust
                </span>
                <span>•</span>
                <span>Associated With Registered Govt. Class A Contractors</span>
                <span>•</span>
                <span>ISO 9001:2015 Certified</span>
              </div>
            </div>

            {/* Visual Branching Connector Lines */}
            <div className="hidden md:flex flex-col items-center relative h-16 w-full">
              <div className="w-[2px] h-full bg-[#355E3B]"></div>
              <div className="absolute bottom-0 w-[80%] h-[2px] bg-[#355E3B]"></div>
            </div>
            <div className="md:hidden flex justify-center py-6">
              <div className="w-[2px] h-8 bg-[#355E3B]"></div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Organizational Divisions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto mt-6">
          {/* Division 2: Master Plan Engineering (Left Side Entrance) */}
          <ScrollReveal direction="left" delay={100}>
            <div className="bg-white border border-[#E0C0B2] rounded-xl p-7 flex flex-col items-center text-center shadow-lg hover:border-[#355E3B] hover:-translate-y-1 transition-all duration-300 relative group md:scale-95 hover-lift">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full hidden md:block w-[2px] h-4 bg-[#355E3B]"></div>
              <div className="w-full h-28 flex items-center justify-center mb-4 overflow-visible p-1">
                <img
                  src="https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto,w_600/v1785736185/Screenshot_2026-08-01_092139_magic_timyra.png"
                  alt="Master Plan Engineering Consultancy Logo"
                  className="max-h-full max-w-full object-contain transform scale-100 drop-shadow-sm"
                />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500 mb-2 bg-gray-100 px-3 py-1 rounded-full">
                Engineering Consultancy
              </span>
              <h3 className="font-extrabold text-xl md:text-2xl text-[#1B1C1C] mb-3 uppercase">
                MASTER PLAN
              </h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                From planning to project completion, we oversee every detail. Through site supervision, survey verification, contractor coordination, and quality checks, we ensure your project is completed accurately and as planned.
              </p>
              <Link
                href="/services#masterplan"
                className="inline-flex items-center gap-2 text-[#355E3B] font-bold text-xs uppercase tracking-widest border-b-2 border-[#355E3B]/30 pb-1 hover:border-[#355E3B] transition-colors"
              >
                Consult Advisory <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Division 1: Kerala Homes (Upward Center Entrance) */}
          <ScrollReveal direction="up" delay={200}>
            <div className="bg-white border-2 border-[#355E3B] rounded-2xl p-8 md:p-9 flex flex-col items-center text-center shadow-xl hover:-translate-y-2 transition-all duration-300 relative group z-20 md:scale-105 hover-lift">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full hidden md:block w-[2px] h-5 bg-[#355E3B]"></div>
              <div className="w-full h-32 flex items-center justify-center mb-4 overflow-visible p-1">
                <img
                  src="https://res.cloudinary.com/w1tsvtbe/image/upload/v1785851706/font_tp_pinjpz.png"
                  alt="Kerala Homes & Developers Logo"
                  className="max-h-full max-w-full object-contain transform scale-110 drop-shadow-sm"
                />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#355E3B] mb-2 bg-[#355E3B]/10 px-3 py-1 rounded-full border border-[#355E3B]/20">
                Main Construction Branch
              </span>
              <h3 className="font-extrabold text-2xl md:text-3xl text-[#1B1C1C] mb-4 uppercase tracking-tight">
                KERALA HOMES
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                Turnkey residential high-rises, luxury villas, and commercial complexes engineered for durability, modern elegance, and structural safety across Kerala.
              </p>
              <Link
                href="/services#construction"
                className="inline-flex items-center gap-2 text-[#355E3B] font-bold text-xs uppercase tracking-widest border-b-2 border-[#355E3B] pb-1 hover:text-[#2B4C30] hover:border-[#2B4C30] transition-colors"
              >
                Get In Detail <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Division 3: Innovature Designs (Right Side Entrance) */}
          <ScrollReveal direction="right" delay={300}>
            <div className="bg-white border border-[#E0C0B2] rounded-xl p-7 flex flex-col items-center text-center shadow-lg hover:border-[#355E3B] hover:-translate-y-1 transition-all duration-300 relative group md:scale-95 hover-lift">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full hidden md:block w-[2px] h-4 bg-[#355E3B]"></div>
              <div className="w-full h-28 flex items-center justify-center mb-4 overflow-visible p-1">
                <img
                  src="https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto,w_600/v1785737271/bg_nsnrga.png"
                  alt="Innovature Designs Logo"
                  className="max-h-full max-w-full object-contain transform scale-100 drop-shadow-sm"
                />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500 mb-2 bg-gray-100 px-3 py-1 rounded-full">
                Design Studio Division
              </span>
              <h3 className="font-extrabold text-xl md:text-2xl text-[#1B1C1C] mb-3 uppercase">
                INNOVATURE DESIGNS
              </h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                Architectural masterpieces crafted with artistic vision, 3D spatial modeling, and sustainable interior design tailored for luxury living.
              </p>
              <Link
                href="/services#innovature"
                className="inline-flex items-center gap-2 text-[#355E3B] font-bold text-xs uppercase tracking-widest border-b-2 border-[#355E3B]/30 pb-1 hover:border-[#355E3B] transition-colors"
              >
                Explore Studio <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

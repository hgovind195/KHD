"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Building2,
  HardHat,
  Compass,
  FileCheck,
  Eye,
  Target,
  PenTool,
  Clock,
  Lightbulb,
  Key,
  Layers,
  Settings,
  Hammer,
  ArrowRight,
  Handshake,
  X,
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function AboutPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [panDocModalOpen, setPanDocModalOpen] = useState(false);
  const [incDocModalOpen, setIncDocModalOpen] = useState(false);
  const [tanDocModalOpen, setTanDocModalOpen] = useState(false);

  const stats = [
    { number: "100+", label: "PROJECTS COMPLETED", icon: Building2 },
    { number: "12+", label: "YEARS OF EXPERIENCE", icon: Users },
    { number: "35+", label: "ENGINEERS & EXPERTS", icon: HardHat },
    { number: "100%", label: "CLIENT SATISFACTION", icon: ShieldCheck },
    { number: "3", label: "SPECIALIZED DIVISIONS", icon: Layers },
  ];



  const coreValues = [
    {
      icon: Target,
      title: "PRECISION",
      desc: "Engineering accuracy in every detail.",
      color: "text-[#355E3B]",
      bgColor: "bg-[#355E3B]/10",
      borderColor: "border-[#355E3B]/30",
    },
    {
      icon: ShieldCheck,
      title: "QUALITY",
      desc: "Uncompromising quality in materials and workmanship.",
      color: "text-[#D35400]",
      bgColor: "bg-[#D35400]/10",
      borderColor: "border-[#D35400]/30",
    },
    {
      icon: Eye,
      title: "TRANSPARENCY",
      desc: "Clear communication and complete transparency.",
      color: "text-[#1B1C1C]",
      bgColor: "bg-[#1B1C1C]/10",
      borderColor: "border-[#1B1C1C]/30",
    },
    {
      icon: Clock,
      title: "PUNCTUALITY",
      desc: "Delivering projects on time, every time.",
      color: "text-[#D35400]",
      bgColor: "bg-[#D35400]/10",
      borderColor: "border-[#D35400]/30",
    },
    {
      icon: Lightbulb,
      title: "INNOVATION",
      desc: "Embracing new ideas and modern technologies.",
      color: "text-[#355E3B]",
      bgColor: "bg-[#355E3B]/10",
      borderColor: "border-[#355E3B]/30",
    },
    {
      icon: Handshake,
      title: "TRUST",
      desc: "Building lasting relationships based on trust.",
      color: "text-[#1B1C1C]",
      bgColor: "bg-[#1B1C1C]/10",
      borderColor: "border-[#1B1C1C]/30",
    },
  ];

  const milestones = [
    { year: "2014", event: "Established Zeekon Builders to formalize our family’s decades-long construction legacy." },
    { year: "2017", event: "Achieved official recognition and incorporated as a Private Limited company." },
    { year: "2018", event: "Masterplan Engineering Consultancy merged operations with us, significantly expanding our technical design and engineering capabilities." },
    { year: "2020", event: "Innovature Designs joined forces with us to deliver high-end architectural and interior design solutions under one roof." },
    { year: "2025", event: "Crossed 100+ completed landmark developments across Central & Southern Kerala." },
    { year: "2026", event: "As our vision expanded, we established Kerala Homes and Developers Pvt. Ltd. as a dedicated Private Limited entity for major strategic alliances, while maintaining Zeekon Builders as a core firm." },
  ];

  return (
    <div>
      {/* Hero Section with Background & Floating Glass Effect */}
      <section className="relative min-h-[80vh] flex items-center py-24 px-4 md:px-8 border-b-4 border-[#D35400] overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000 z-0"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/w1tsvtbe/image/upload/a_-90/v1786125408/We_Design_Homes_from_Sketch_to_Stunning_Kerala_Villas_kckkev.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50 backdrop-blur-[2px] z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Floating Glass Content Card (Full Width Horizontal Story Tiles) */}
          <div className="lg:col-span-12 bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-3xl shadow-2xl space-y-6 text-white backdrop-saturate-150 hover:border-white/40 transition-all duration-500">
            <div className="inline-flex items-center gap-2 text-[#D35400] text-xs font-extrabold uppercase tracking-widest bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D35400] animate-pulse"></span>
              ABOUT US — KERALA HOMES & DEVELOPERS
            </div>

            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight font-headline leading-none text-white drop-shadow-md">
              BUILDING TRUST. <br />
              <span className="text-[#528F5A]">CREATING LANDMARKS.</span>
            </h1>

            {/* Horizontal Text Tiles for the Story Paragraphs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-white/5 p-5.5 rounded-2xl border border-white/10 space-y-2.5">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D35400] block">Our Foundation & Legacy</span>
                <p className="text-gray-200 text-xs md:text-sm leading-relaxed font-light">
                  &quot;Our roots go back decades to when my father first entered the construction industry, instilling values of quality and uncompromised integrity. When I established Zeekon Builders in 2014, my goal was to bring a modern, professional structure to that solid foundation while preserving our spotless reputation. Over the years, we have earned an unblemished reputation by operating with absolute integrity, delivering exceptional quality, and maintaining a flawless track record of zero legal disputes or client complaints.&quot;
                </p>
              </div>

              <div className="bg-white/5 p-5.5 rounded-2xl border border-white/10 space-y-2.5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#528F5A] block mb-1">Corporate Evolution</span>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    Now, to scale our capabilities and enter major strategic alliances, we have officially transitioned into <strong className="text-white">Kerala Homes and Developers Pvt. Ltd.</strong> Same legacy of trust, broader vision for the future.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-gray-200 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#528F5A] shrink-0" />
                  <span>Integrated Parent Corporation Governing 3 Specialist Divisions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Glass Feature Card */}
          <div className="lg:col-span-12 relative z-10">
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/30 bg-white/10 backdrop-blur-xl p-8 backdrop-saturate-150 hover:border-[#D35400] transition-all duration-500 space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-white/15">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#D35400]/20 border border-[#D35400]/40 flex items-center justify-center text-[#D35400] shrink-0">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-2xl uppercase text-white leading-tight">
                      Associated With Class A Govt. Contractor
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed mt-0.5">
                      Licensed for unlimited civil, commercial, and residential contract valuations across Central and Southern Kerala.
                    </p>
                  </div>
                </div>
                <span className="bg-[#355E3B]/90 backdrop-blur-md border border-white/20 text-white text-[10px] font-extrabold uppercase px-3.5 py-1.5 rounded-full shadow-lg shrink-0">
                  Official Corporate Credential
                </span>
              </div>

              {/* Horizontal Credentials Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs text-gray-200">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#355E3B] shrink-0" />
                  <span className="font-medium">100+ Turnkey Projects Handed Over</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#D35400] shrink-0" />
                  <span className="font-medium">Zero Legal Disputes &amp; Flawless Record</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#355E3B] shrink-0" />
                  <span className="font-medium">3 Integrated Corporate Divisions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Key Statistics Bar with Glassmorphism */}
      <section className="relative z-20 px-4 md:px-8 -mt-12 max-w-7xl mx-auto">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-6 md:p-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center text-center space-y-2 ${idx > 0 && idx % 2 === 0 ? "pt-4 md:pt-0" : ""
                  }`}
              >
                <div className="w-12 h-12 bg-[#F7FAF3] rounded-full flex items-center justify-center border border-[#355E3B]/20 text-[#355E3B] shadow-inner">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-extrabold text-2xl md:text-3xl text-[#1B1C1C]">
                    {stat.number}
                  </h3>
                  <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
                <div className="w-8 h-[2px] bg-[#D35400] rounded-full mt-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* OUR VALUES SECTION (6 Core Principles Grid) */}
      <section className="py-20 px-4 md:px-8 bg-white border-b border-[#ECEFEC]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="text-[#355E3B] text-xs font-extrabold uppercase tracking-widest bg-[#355E3B]/10 px-3.5 py-1 rounded-full border border-[#355E3B]/30 inline-block">
              OUR VALUES —
            </span>
            <h2 className="font-extrabold text-3xl md:text-4xl uppercase text-[#1B1C1C]">
              The Principles That Build Everything We Do.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v, idx) => (
              <div
                key={idx}
                className="bg-[#F7FAF3] border border-[#E0C0B2] rounded-2xl p-7 flex items-start gap-5 shadow-sm hover:shadow-md hover:border-[#355E3B] transition-all hover-lift group"
              >
                <div className={`w-14 h-14 ${v.bgColor} ${v.color} rounded-xl flex items-center justify-center shrink-0 border ${v.borderColor} group-hover:scale-110 transition-transform`}>
                  <v.icon className="w-7 h-7" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-extrabold text-lg uppercase text-[#1B1C1C] tracking-tight">
                    {v.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPACT & ELEGANT VISION & MISSION SECTION FOR ALL 3 FIRMS */}
      <section className="py-16 px-4 md:px-8 bg-[#1B1C1C] text-white border-y-4 border-[#D35400] relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[#D35400] text-xs font-extrabold uppercase tracking-widest bg-[#D35400]/10 px-3.5 py-1 rounded-full border border-[#D35400]/30 inline-block">
              Corporate Vision & Mission
            </span>
            <h2 className="font-extrabold text-3xl md:text-4xl uppercase font-headline tracking-tight">
              OUR THREE DIVISIONS
            </h2>
            <p className="text-gray-300 text-xs md:text-sm">
              Empowering structural excellence, engineering precision, and architectural innovation across Kerala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* 1. Master Plan Engineering */}
            <div className="bg-[#242525] border border-gray-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-[#D35400] transition-all space-y-5">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-12 bg-white p-1.5 rounded-lg flex items-center justify-center shrink-0 border border-gray-200">
                    <img
                      src="https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto,w_600/v1785736185/Screenshot_2026-08-01_092139_magic_timyra.png"
                      alt="Master Plan Engineering"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base md:text-lg text-white uppercase">Master Plan</h3>
                    <span className="text-[10px] text-[#D35400] font-extrabold uppercase tracking-wider block">Engineering Consultancy</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-gray-300">
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D35400] flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> Vision
                    </span>
                    <p className="italic text-gray-200 text-xs leading-relaxed">
                      At MASTERPLAN ENGINEERING CONSULTANCY, we go beyond drawings. We stand with our clients throughout the entire construction journey, ensuring quality, safety, transparency, and complete peace of mind—from foundation to final handover.
                    </p>
                  </div>
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#355E3B] flex items-center gap-1">
                      <Target className="w-3.5 h-3.5" /> Mission
                    </span>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      To provide reliable engineering consultancy through technical excellence, ethical practices, innovative design, and dedicated client support while maintaining the highest standards of quality and professionalism.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Kerala Homes (Middle Card - Main Construction Branch) */}
            <div className="bg-[#242525] border-2 border-[#D35400]/40 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-[#355E3B] transition-all space-y-5 md:scale-105 z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-12 bg-white p-1.5 rounded-lg flex items-center justify-center shrink-0 border border-gray-200">
                    <img
                      src="https://res.cloudinary.com/w1tsvtbe/image/upload/v1785851706/font_tp_pinjpz.png"
                      alt="Kerala Homes"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base md:text-lg text-white uppercase">Kerala Homes</h3>
                    <span className="text-[10px] text-[#355E3B] font-extrabold uppercase tracking-wider block">Turnkey Construction</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-gray-300">
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D35400] flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> Vision
                    </span>
                    <p className="italic text-gray-200 text-xs leading-relaxed">
                      To be one of Kerala's most trusted and progressive construction companies by embracing evolving lifestyle needs, modern architectural trends, sustainable practices, and innovative construction technologies to create future-ready spaces.
                    </p>
                  </div>
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#355E3B] flex items-center gap-1">
                      <Target className="w-3.5 h-3.5" /> Mission
                    </span>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      To build durable, innovative, and high-quality spaces through exceptional craftsmanship, modern construction practices, and a customer -first approach .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Innovature Designs */}
            <div className="bg-[#242525] border border-gray-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-gray-500 transition-all space-y-5">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-12 bg-white p-1.5 rounded-lg flex items-center justify-center shrink-0 border border-gray-200">
                    <img
                      src="https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto,w_600/v1785737271/bg_nsnrga.png"
                      alt="Innovature Designs"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base md:text-lg text-white uppercase">Innovature Designs</h3>
                    <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider block">Architectural Studio</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-gray-300">
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D35400] flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> Vision
                    </span>
                    <p className="italic text-gray-200 text-xs leading-relaxed">
                      At Innovature Design, we promise to transform your vision into meaningful spaces.
                      We are committed to creating designs that balance creativity, functionality, quality, and sustainability. Every project is approached with attention to detail, thoughtful planning, and a deep understanding of our clients’ needs.
                    </p>
                  </div>
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#355E3B] flex items-center gap-1">
                      <Target className="w-3.5 h-3.5" /> Mission
                    </span>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      From the first idea to the final detail, we promise personal attention, transparent communication, innovative solutions, and uncompromising quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations & Memberships */}
      <section className="py-16 px-4 md:px-8 bg-[#F7FAF3] border-b border-[#ECEFEC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-[#355E3B] font-extrabold text-xs uppercase tracking-widest bg-[#355E3B]/10 px-3.5 py-1 rounded-full border border-[#355E3B]/30 inline-block">
              Industry Accreditation
            </span>
            <h2 className="font-extrabold text-3xl md:text-4xl uppercase text-[#1B1C1C]">
              Affiliations & Memberships
            </h2>
            <p className="text-gray-600 text-xs md:text-sm">
              We proudly maintain active memberships with premier national and state builder associations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Membership 1: BAI */}
            <div className="bg-white border-2 border-[#355E3B]/30 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:border-[#355E3B] hover:-translate-y-1 transition-all space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#355E3B]/10 text-[#355E3B] rounded-xl flex items-center justify-center shrink-0 border border-[#355E3B]/20">
                  <Building2 className="w-6 h-6 text-[#355E3B]" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#355E3B] bg-[#355E3B]/10 px-2.5 py-0.5 rounded-full inline-block">
                    Registered Member
                  </span>
                  <h3 className="font-extrabold text-base md:text-lg text-[#1B1C1C] uppercase leading-tight">
                    Member, Builders Association of India (BAI)
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Affiliated with India’s premier national apex body of civil engineering & construction contractors.
                  </p>
                </div>
              </div>
            </div>

            {/* Membership 2: APCAD */}
            <div className="bg-white border-2 border-[#D35400]/30 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:border-[#D35400] hover:-translate-y-1 transition-all space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D35400]/10 text-[#D35400] rounded-xl flex items-center justify-center shrink-0 border border-[#D35400]/20">
                  <Award className="w-6 h-6 text-[#D35400]" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D35400] bg-[#D35400]/10 px-2.5 py-0.5 rounded-full inline-block">
                    Registered Member
                  </span>
                  <h3 className="font-extrabold text-base md:text-lg text-[#1B1C1C] uppercase leading-tight">
                    Member, Association of Private Contractors & Developers (APCAD)
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Promoting state-wide standards in safety, transparent execution, and technical excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Credential 3: Company Incorporation Certificate */}
            <div className="bg-white border-2 border-[#355E3B]/30 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:border-[#355E3B] hover:-translate-y-1 transition-all space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#355E3B]/10 text-[#355E3B] rounded-xl flex items-center justify-center shrink-0 border border-[#355E3B]/20">
                  <ShieldCheck className="w-6 h-6 text-[#355E3B]" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#355E3B] bg-[#355E3B]/10 px-2.5 py-0.5 rounded-full inline-block">
                    Corporate License
                  </span>
                  <h3 className="font-extrabold text-base md:text-lg text-[#1B1C1C] uppercase leading-tight">
                    Company Incorporation Certificate
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Official Certificate of Incorporation under Companies Act, Ministry of Corporate Affairs, Govt. of India.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setIncDocModalOpen(true)}
                  className="inline-flex items-center gap-2 text-[#355E3B] hover:text-[#2B4C30] text-xs font-extrabold uppercase tracking-wider transition-colors group"
                >
                  <Eye className="w-4 h-4 text-[#355E3B] group-hover:scale-110 transition-transform" />
                  <span className="underline underline-offset-4 decoration-[#355E3B]/40 group-hover:decoration-[#355E3B]">View the Document</span>
                </button>
              </div>
            </div>

            {/* Credential 4: Company PAN Card */}
            <div className="bg-white border-2 border-[#1B1C1C]/30 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:border-[#1B1C1C] hover:-translate-y-1 transition-all space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1B1C1C]/10 text-[#1B1C1C] rounded-xl flex items-center justify-center shrink-0 border border-[#1B1C1C]/20">
                  <FileCheck className="w-6 h-6 text-[#1B1C1C]" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1B1C1C] bg-[#1B1C1C]/10 px-2.5 py-0.5 rounded-full inline-block">
                    Statutory Registration
                  </span>
                  <h3 className="font-extrabold text-base md:text-lg text-[#1B1C1C] uppercase leading-tight">
                    Company PAN Card
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Registered corporate Permanent Account Number (PAN) issued by Income Tax Department, Govt. of India.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setPanDocModalOpen(true)}
                  className="inline-flex items-center gap-2 text-[#355E3B] hover:text-[#2B4C30] text-xs font-extrabold uppercase tracking-wider transition-colors group"
                >
                  <Eye className="w-4 h-4 text-[#355E3B] group-hover:scale-110 transition-transform" />
                  <span className="underline underline-offset-4 decoration-[#355E3B]/40 group-hover:decoration-[#355E3B]">View the Document</span>
                </button>
              </div>
            </div>

            {/* Credential 5: Company TAN Number */}
            <div className="bg-white border-2 border-[#D35400]/30 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:border-[#D35400] hover:-translate-y-1 transition-all space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D35400]/10 text-[#D35400] rounded-xl flex items-center justify-center shrink-0 border border-[#D35400]/20">
                  <FileCheck className="w-6 h-6 text-[#D35400]" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D35400] bg-[#D35400]/10 px-2.5 py-0.5 rounded-full inline-block">
                    Tax Registration
                  </span>
                  <h3 className="font-extrabold text-base md:text-lg text-[#1B1C1C] uppercase leading-tight">
                    Company TAN Number
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Official Tax Deduction and Collection Account Number (TAN) allotment letter from Income Tax Dept., Govt. of India.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setTanDocModalOpen(true)}
                  className="inline-flex items-center gap-2 text-[#355E3B] hover:text-[#2B4C30] text-xs font-extrabold uppercase tracking-wider transition-colors group"
                >
                  <Eye className="w-4 h-4 text-[#355E3B] group-hover:scale-110 transition-transform" />
                  <span className="underline underline-offset-4 decoration-[#355E3B]/40 group-hover:decoration-[#355E3B]">View the Document</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Milestones */}
      <section className="py-20 px-4 md:px-8 bg-[#1B1C1C] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#355E3B] font-bold text-xs uppercase tracking-widest block mb-2">
              Growth Journey
            </span>
            <h2 className="font-extrabold text-3xl md:text-4xl uppercase font-headline">
              Key Company Milestones
            </h2>
          </div>

          <div className="relative border-l-2 border-[#D35400] ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#D35400] border-4 border-[#1B1C1C] group-hover:scale-125 transition-transform"></div>
                <div className="md:absolute md:-left-32 md:top-1 font-extrabold text-2xl text-[#355E3B]">
                  {m.year}
                </div>
                <div className="bg-[#2A2B2B] p-6 rounded-xl border border-gray-800 shadow-lg">
                  <p className="text-gray-200 text-sm font-medium">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#355E3B] text-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-extrabold text-3xl md:text-4xl uppercase">
            Work With Kerala’s Most Trusted Construction Partner
          </h2>
          <button
            onClick={() => setQuoteModalOpen(true)}
            className="bg-[#D35400] hover:bg-[#B84700] text-white px-8 py-4 rounded-lg font-bold uppercase text-xs tracking-widest shadow-xl transition-all"
          >
            Schedule Corporate Consultation
          </button>
        </div>
      </section>

      {/* Incorporation Certificate Lightbox Modal */}
      {incDocModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
          <div className="relative max-w-[95vw] sm:max-w-3xl max-h-[92vh] w-full bg-[#1B1C1C] rounded-2xl border border-white/20 p-3.5 sm:p-5 shadow-2xl flex flex-col items-center justify-between my-auto">
            <div className="w-full flex items-center justify-between pb-2.5 sm:pb-3 border-b border-gray-800 shrink-0">
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-white flex items-center gap-1.5 sm:gap-2 leading-tight">
                <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#355E3B] shrink-0" />
                Official Company Incorporation Certificate
              </span>
              <button
                onClick={() => setIncDocModalOpen(false)}
                className="p-1 sm:p-1.5 text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors shrink-0"
                aria-label="Close document modal"
              >
                <X className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </div>
            <div className="w-full h-full p-1.5 my-2 flex items-center justify-center overflow-auto">
              <img
                src="https://res.cloudinary.com/w1tsvtbe/image/upload/v1787920913/0_n7q3yd.webp"
                alt="Kerala Homes Company Incorporation Certificate"
                className="max-h-[65vh] sm:max-h-[70vh] max-w-full object-contain rounded-lg shadow-lg border border-white/10"
              />
            </div>
            <div className="pt-2.5 sm:pt-3 w-full flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 gap-1.5 sm:gap-0 shrink-0">
              <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium text-center sm:text-left">Ministry of Corporate Affairs — Govt. of India</span>
              <a
                href="https://res.cloudinary.com/w1tsvtbe/image/upload/v1787920913/0_n7q3yd.webp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] sm:text-xs font-bold text-[#355E3B] hover:text-[#528F5A] underline underline-offset-2 flex items-center gap-1"
              >
                Open Original File ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {/* PAN Card Lightbox Modal */}
      {panDocModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
          <div className="relative max-w-[95vw] sm:max-w-3xl max-h-[92vh] w-full bg-[#1B1C1C] rounded-2xl border border-white/20 p-3.5 sm:p-5 shadow-2xl flex flex-col items-center justify-between my-auto">
            <div className="w-full flex items-center justify-between pb-2.5 sm:pb-3 border-b border-gray-800 shrink-0">
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-white flex items-center gap-1.5 sm:gap-2 leading-tight">
                <FileCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#355E3B] shrink-0" />
                Official Company PAN Card Document
              </span>
              <button
                onClick={() => setPanDocModalOpen(false)}
                className="p-1 sm:p-1.5 text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors shrink-0"
                aria-label="Close document modal"
              >
                <X className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </div>
            <div className="w-full h-full p-1.5 my-2 flex items-center justify-center overflow-auto">
              <img
                src="https://res.cloudinary.com/w1tsvtbe/image/upload/v1787920041/COMPANY_PAN_oxgxhy.jpg"
                alt="Kerala Homes Company PAN Card Document"
                className="max-h-[65vh] sm:max-h-[70vh] max-w-full object-contain rounded-lg shadow-lg border border-white/10"
              />
            </div>
            <div className="pt-2.5 sm:pt-3 w-full flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 gap-1.5 sm:gap-0 shrink-0">
              <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium text-center sm:text-left">Income Tax Department — Govt. of India</span>
              <a
                href="https://res.cloudinary.com/w1tsvtbe/image/upload/v1787920041/COMPANY_PAN_oxgxhy.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] sm:text-xs font-bold text-[#355E3B] hover:text-[#528F5A] underline underline-offset-2 flex items-center gap-1"
              >
                Open Original File ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {/* TAN Number Lightbox Modal */}
      {tanDocModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
          <div className="relative max-w-[95vw] sm:max-w-3xl max-h-[92vh] w-full bg-[#1B1C1C] rounded-2xl border border-white/20 p-3.5 sm:p-5 shadow-2xl flex flex-col items-center justify-between my-auto">
            <div className="w-full flex items-center justify-between pb-2.5 sm:pb-3 border-b border-gray-800 shrink-0">
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-white flex items-center gap-1.5 sm:gap-2 leading-tight">
                <FileCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#D35400] shrink-0" />
                Official Company TAN Allotment Document
              </span>
              <button
                onClick={() => setTanDocModalOpen(false)}
                className="p-1 sm:p-1.5 text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors shrink-0"
                aria-label="Close document modal"
              >
                <X className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </div>
            <div className="w-full h-full p-1.5 my-2 flex items-center justify-center overflow-auto">
              <img
                src="https://res.cloudinary.com/w1tsvtbe/image/upload/v1787921511/TAN_NUMBER_rz2myh.jpg"
                alt="Kerala Homes Company TAN Allotment Document"
                className="max-h-[65vh] sm:max-h-[70vh] max-w-full object-contain rounded-lg shadow-lg border border-white/10"
              />
            </div>
            <div className="pt-2.5 sm:pt-3 w-full flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 gap-1.5 sm:gap-0 shrink-0">
              <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium text-center sm:text-left">Income Tax Department — Govt. of India</span>
              <a
                href="https://res.cloudinary.com/w1tsvtbe/image/upload/v1787921511/TAN_NUMBER_rz2myh.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] sm:text-xs font-bold text-[#355E3B] hover:text-[#528F5A] underline underline-offset-2 flex items-center gap-1"
              >
                Open Original File ↗
              </a>
            </div>
          </div>
        </div>
      )}

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}

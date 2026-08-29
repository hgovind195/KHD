"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Building, Award, Users, CheckCircle2, ShieldAlert, Layers, MapPin, ChevronLeft, ChevronRight, Maximize2, X, Compass, PenTool, Hammer, Key, PhoneCall } from "lucide-react";
import BrandTree from "@/components/BrandTree";
import QuoteModal from "@/components/QuoteModal";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);

  const [galleryImages, setGalleryImages] = useState([
    {
      id: 6,
      title: "Mr. Joseph Nechikadan (Universal College, Principal)",
      category: "🏛️ Educational Project — Pathanamthitta",
      description: "Total Area: 12,000 Sq. Ft. | Status: Completed (2022)",
      src: "https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto/v1785867721/univer_eallrd.png",
    },
    {
      id: 1,
      title: "Mrs. Ancy Shibu",
      category: "🏠 Residential Project-Perunad",
      description: "Built Area: 1,500 sq. Ft | Year of Completion: 2025",
      src: "https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto/v1785749779/ChatGPT_Image_Aug_3_2026_02_58_25_PM_y0bplz.png",
    },
    {
      id: 2,
      title: "Mr. Rahul",
      category: "🏠Residential Project — Kollam",
      description: "Total Area: 2,000 Sq. Ft. | Status: Completed (2023)",
      src: "https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto/v1787846301/mr_rahul_has4mk.webp",
    },
    {
      id: 3,
      title: "Mr. Sasi Kumar",
      category: "🏠 Residential Project — Aranmula",
      description: "Total Area: 1,500 Sq. Ft. | Status: Completed (2024)",
      src: "https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto/v1785743374/mr_sasi_kumar_hzl1bj.png",
    },
    {
      id: 4,
      title: "Mr. Manu Mohan",
      category: "🏠Residential Project — Mavelikkara",
      src: "https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto/v1785745641/manu_mmohan_lbty9s.png",
      objectPosition: "center 15%",
    },
    {
      id: 5,
      title: "Mr. Jalaludheen",
      category: "🏠 Residential Project — Pathanamthitta",
      description: "4 BHK | Total Area: 2,000 Sq. Ft |Status: Completed (2025)",
      src: "https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto/v1785744265/name_xkrpa5.png",
    },
  ]);

  const scrollGallery = (direction: "left" | "right") => {
    if (direction === "left") {
      setActiveGalleryIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
    } else {
      setActiveGalleryIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
    }
  };

  // Touch and Mouse Swipe/Drag Gesture Handlers
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);

  const minSwipeDistance = 40;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
    setDragDistance(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX !== null) {
      const currentX = e.targetTouches[0].clientX;
      setTouchEndX(currentX);
      setDragDistance(touchStartX - currentX);
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX;
      if (distance > minSwipeDistance) {
        scrollGallery("right");
      } else if (distance < -minSwipeDistance) {
        scrollGallery("left");
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
    setTimeout(() => setDragDistance(0), 50);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.clientX);
    setIsDragging(true);
    setDragDistance(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && touchStartX !== null) {
      const currentX = e.clientX;
      setTouchEndX(currentX);
      setDragDistance(touchStartX - currentX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging && touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX;
      if (distance > minSwipeDistance) {
        scrollGallery("right");
      } else if (distance < -minSwipeDistance) {
        scrollGallery("left");
      }
    }
    setIsDragging(false);
    setTouchStartX(null);
    setTouchEndX(null);
    setTimeout(() => setDragDistance(0), 50);
  };

  const projects = [
    {
      id: "high-rise",
      title: "Universal College Educational Campus",
      category: "Construction",
      location: "Collectorate, Pathanamthitta, Kerala",
      image: "https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto/v1785766841/ChatGPT_Image_Aug_3_2026_03_22_26_PM_i9ho2y.png",
      area: "12,000 sq.ft.",
      units: "An inspiring, functional learning space crafted to support contemporary teaching and student development.",
    },
    {
      id: "wilsons-residence",
      title: "Wilson's Residence",
      category: "Interior",
      location: "Tiruvalla, Pathanamthitta",
      image: "https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto/v1786078952/ChatGPT_Image_Aug_7_2026_10_31_31_AM_gfb4nr.png",
      area: "4,500 sq.ft.",
      units: "Complete interior spatial design, custom teakwood woodwork & central courtyard feature.",
    },
    {
      id: "mathews-residence-masterplan",
      title: "Mathew's Residence",
      category: "Infrastructure",
      location: "Vadasserikkara, Pathanamthitta",
      image: "https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto/v1786114982/ChatGPT_Image_Aug_7_2026_07_48_54_PM_bjki0f.png",
      area: "3,300 sq.ft.",
      units: "Supervision on Structural engineering advisory by Master Plan Consultancy.",
    },
    {
      id: "hotel-24inn",
      title: "Hotel 24inn residency",
      category: "Commercial & Interior",
      location: "Pathanamthitta, Kerala",
      image: "https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto/v1785870848/ChatGPT_Image_Aug_5_2026_12_42_57_AM_chy8pc.png",
      area: "15,500 sq.ft.",
      units: "Bespoke hotel & luxury residency project featuring architectural master planning.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Initial Consultation & Site Analysis",
      desc: "We begin with an in-depth client discussion to understand your vision, requirements, and budget. Our team conducts a comprehensive site visit to evaluate terrain, orientation, and layout possibilities.",
      icon: Users,
    },
    {
      num: "02",
      title: "Architectural Planning & 3D Elevation",
      desc: "Our architects translate your ideas into precise floor plans and realistic 3D elevation designs, giving you a complete visual preview of your dream home before construction begins.",
      icon: Compass,
    },
    {
      num: "03",
      title: "Detailed Estimation & Quotation",
      desc: "We provide a transparent, itemized cost estimation and formal project proposal, ensuring complete financial clarity with no hidden costs before signing agreement terms.",
      icon: PenTool,
    },
    {
      num: "04",
      title: "Construction & Execution",
      desc: "Once approved, structural execution begins. Driven by strict quality control and systematic project management, construction is systematically completed over a typical timeline of 8 to 9 months.",
      icon: Hammer,
    },
    {
      num: "05",
      title: "Turnkey Handover",
      desc: "With a steadfast commitment to punctuality and quality, we complete all interior finishes and final touches to hand over a fully realized, move-in-ready property tailored entirely to your lifestyle.",
      icon: Key,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-[#1B1C1C] text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 transform scale-105 transition-transform duration-10000"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto/v1787673057/ChatGPT_Image_Aug_25_2026_08_17_21_PM_bejzbi.png')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B1C1C] via-[#1B1C1C]/80 to-transparent z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6 animate-fadeUp">
            <div className="inline-flex items-center gap-3 bg-[#355E3B]/80 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest backdrop-blur-md shadow-lg border border-white/10">
              <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
              Official Corporate Portal • Kerala Homes & Developers
            </div>

            <h1 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] font-playfair">
              We Build <span className="text-[#355E3B] font-extrabold transition-colors hover:text-[#42764a]">Your Home</span>
            </h1>

            <p className="text-gray-300 text-base md:text-xl max-w-2xl font-body leading-relaxed">
              Engineering structural excellence and architectural grandeur across Kerala. Backed by 10+ years of contracting mastery and multi-disciplinary divisions.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="bg-[#355E3B] hover:bg-[#2B4C30] text-white px-8 py-4 rounded-lg font-bold uppercase text-xs tracking-widest shadow-xl flex items-center justify-center gap-3 transition-all hover-lift active:scale-95"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/projects"
                className="border-2 border-white/30 hover:border-[#355E3B] bg-white/5 hover:bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-bold uppercase text-xs tracking-widest text-center transition-all hover-lift"
              >
                View Signature Projects
              </Link>
            </div>
          </div>

          {/* Stats Badge */}
          <div className="lg:col-span-4 flex flex-col gap-6 animate-fadeUp">
            <div className="bg-[#355E3B] p-8 rounded-2xl shadow-2xl border border-white/10 flex flex-col justify-between hover-lift animate-pulseGlow">
              <div>
                <span className="text-xs uppercase tracking-widest font-extrabold text-white bg-black/20 px-3 py-1 rounded-full border border-white/10">
                  Excellence Legacy
                </span>
                <h3 className="font-extrabold text-2xl text-white mt-4 mb-2">
                  A Leading Builder In Kerala
                </h3>
                <p className="text-gray-200 text-xs leading-relaxed mb-6">
                  Trusted by thousands of home buyers, institutional developers, and government agencies.
                </p>
              </div>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                <div>
                  <span className="text-4xl font-extrabold text-white leading-none block">10+</span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-200 font-semibold">Years of Engineering</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0 hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-[#355E3B]" />
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-4 text-white hover-lift">
              <div className="w-12 h-12 rounded-xl bg-[#355E3B] flex items-center justify-center shrink-0 shadow-md">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold block">100+ Completed</span>
                <span className="text-xs text-gray-300">Turnkey Projects Delivered On Schedule</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Hierarchy Section */}
      <BrandTree />

      {/* Signature Projects Section */}
      <section className="bg-[#1B1C1C] text-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-[#355E3B] uppercase font-bold text-xs tracking-widest block mb-2">
                  Our Portfolio
                </span>
                <h2 className="font-extrabold text-3xl md:text-5xl uppercase font-headline">
                  Signature Projects
                </h2>
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[#355E3B] font-bold text-xs uppercase tracking-widest hover:underline"
              >
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <ScrollReveal
                key={proj.id}
                direction={idx % 2 === 0 ? "left" : "right"}
                delay={idx * 150}
              >
                <div
                  className="group relative bg-[#2A2B2B] rounded-xl overflow-hidden border border-gray-800 hover:border-[#355E3B] transition-all duration-300 shadow-xl hover-lift h-full flex flex-col justify-between"
                >
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute top-4 left-4 bg-[#355E3B] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-md shadow">
                      {proj.category}
                    </div>
                  </div>

                  <div className="p-6 md:p-8 bg-white text-[#1B1C1C] border-t-4 border-[#355E3B] flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-extrabold text-xl md:text-2xl uppercase mb-2 group-hover:text-[#355E3B] transition-colors">
                        {proj.title}
                      </h3>

                      <p className="text-gray-600 text-xs flex items-center gap-1.5 mb-4">
                        <MapPin className="w-3.5 h-3.5 text-[#355E3B] shrink-0" />
                        {proj.location}
                      </p>

                      <div className="grid grid-cols-2 gap-4 py-3 border-y border-gray-100 text-xs mb-6 font-semibold text-gray-700">
                        <div>
                          <span className="text-gray-400 block text-[10px] uppercase">Built Up Area</span>
                          {proj.area}
                        </div>
                        <div>
                          <span className="text-gray-400 block text-[10px] uppercase">Specs</span>
                          {proj.units}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setQuoteModalOpen(true)}
                      className="w-full py-3 bg-[#1B1C1C] hover:bg-[#355E3B] text-white text-xs font-bold uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Request Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Process Section (Image 2 Connected Dark Green Node Layout) */}
      <section className="py-20 px-4 md:px-8 bg-[#1D2E22] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto space-y-14">
          <ScrollReveal direction="up">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <span className="inline-flex items-center gap-2 text-white text-xs font-extrabold uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                  INDUSTRIAL METHODOLOGY —
                </span>
                <h2 className="font-extrabold text-3xl md:text-5xl uppercase font-headline tracking-tight text-white leading-tight">
                  OUR CONSTRUCTION &amp; DESIGN PROCESS
                </h2>
              </div>
              <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed">
                A disciplined 5-stage engineering workflow ensuring seamless delivery from blueprint model to key handover.
              </p>
            </div>
          </ScrollReveal>

          {/* Connected Steps Grid / Node Bar */}
          <div className="relative">
            {/* Horizontal Connecting Line on Desktop */}
            <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-white/20 z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <ScrollReveal
                  key={idx}
                  direction="up"
                  delay={idx * 120}
                >
                  <div className="flex flex-col items-center text-center space-y-4 group">
                    {/* Circle Icon Node */}
                    <div className="w-20 h-20 rounded-full bg-white text-[#1D2E22] flex items-center justify-center shadow-2xl border-4 border-[#1D2E22] group-hover:bg-[#355E3B] group-hover:text-white transition-all duration-300 group-hover:scale-110 relative">
                      <step.icon className="w-8 h-8" />
                    </div>

                    {/* Step Number & Title */}
                    <div className="space-y-1">
                      <span className="text-[#355E3B] font-extrabold text-sm tracking-wider block">
                        {step.num}
                      </span>
                      <h3 className="font-extrabold text-sm uppercase tracking-wider text-white leading-tight">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-xs leading-relaxed max-w-[220px]">
                      {step.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Happy Customers Center-Popped Carousel Section */}
      <section className="py-20 px-4 md:px-8 bg-[#1B1C1C] text-white border-t border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-[#355E3B] font-bold text-xs uppercase tracking-widest block mb-2">
                Customer Moments
              </span>
              <h2 className="font-extrabold text-3xl md:text-5xl uppercase font-headline">
                HAPPY CUSTOMERS
              </h2>
              <p className="text-gray-300 text-sm md:text-base mt-2">
                Swipe through moments where dream homes became reality
              </p>
            </div>
          </ScrollReveal>

          {/* Locked Navigation Stage */}
          <div className="relative flex items-center justify-center min-h-[480px] my-4">
            {/* Locked Left Arrow Button */}
            <button
              onClick={() => scrollGallery("left")}
              className="absolute left-2 sm:left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-[#355E3B] hover:bg-[#2B4C30] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 border-2 border-white/20"
              aria-label="Previous customer moment"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Locked Right Arrow Button */}
            <button
              onClick={() => scrollGallery("right")}
              className="absolute right-2 sm:right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-[#355E3B] hover:bg-[#2B4C30] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 border-2 border-white/20"
              aria-label="Next customer moment"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Sliding 3-Slot Stage with Swipe & Mouse Drag Support */}
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="flex items-center justify-center gap-4 md:gap-8 w-full max-w-6xl overflow-hidden px-8 select-none cursor-grab active:cursor-grabbing touch-pan-y"
            >
              {(() => {
                const total = galleryImages.length;
                const prevIdx = (activeGalleryIndex - 1 + total) % total;
                const currIdx = activeGalleryIndex;
                const nextIdx = (activeGalleryIndex + 1) % total;

                const visibleSlots = [
                  { img: galleryImages[prevIdx], originalIdx: prevIdx, position: "left" },
                  { img: galleryImages[currIdx], originalIdx: currIdx, position: "center" },
                  { img: galleryImages[nextIdx], originalIdx: nextIdx, position: "right" },
                ];

                return visibleSlots.map((slot) => {
                  const isCenter = slot.position === "center";
                  const img = slot.img;

                  return (
                    <div
                      key={`slot-${slot.position}`}
                      onClick={() => {
                        if (Math.abs(dragDistance) > 10) return;
                        if (!isCenter) {
                          setActiveGalleryIndex(slot.originalIdx);
                        }
                      }}
                      className={`transition-all duration-500 cursor-pointer rounded-2xl overflow-hidden border shrink-0 ${isCenter
                          ? "w-[calc(100vw-3rem)] max-w-[340px] sm:max-w-none sm:w-[380px] md:w-[420px] scale-100 z-30 shadow-[0_25px_60px_rgba(53,94,59,0.45)] border-4 border-[#355E3B] ring-4 ring-[#355E3B]/30 bg-[#2A2B2B]"
                          : "hidden md:block w-48 lg:w-64 scale-85 opacity-35 z-10 border-gray-800 bg-[#2A2B2B]/60 hover:opacity-75 hover:scale-90"
                        }`}
                    >
                      <div className="relative h-64 md:h-80 overflow-hidden">
                        <img
                          key={`img-${img.id}`}
                          src={img.src}
                          alt={img.title}
                          draggable={false}
                          style={{ objectPosition: (img as any).objectPosition || "center center" }}
                          className="w-full h-full object-cover transition-opacity duration-500 animate-fadeIn pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                        <span className="absolute top-3 left-3 bg-[#355E3B] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded shadow-md">
                          {img.category}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (Math.abs(dragDistance) > 10) return;
                            setSelectedGalleryImage(img.src);
                          }}
                          className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="p-5 text-center">
                        <h4
                          className={`font-extrabold uppercase transition-colors ${isCenter ? "text-lg text-[#355E3B]" : "text-xs text-gray-400"
                            }`}
                        >
                          {img.title}
                        </h4>
                        <p className="text-gray-300 text-xs mt-1 leading-relaxed">
                          {img.description || (isCenter ? "Total Area: 1,900 Sq. Ft. | Status: Completed (2018)" : "Click to shift to center")}
                        </p>
                      </div>
                    </div>
                  );
                });
              })()}
            </div>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {galleryImages.map((img, idx) => (
              <button
                key={`dot-${img.id}`}
                onClick={() => setActiveGalleryIndex(idx)}
                className={`transition-all duration-300 rounded-full ${idx === activeGalleryIndex
                    ? "w-8 h-2.5 bg-[#355E3B]"
                    : "w-2.5 h-2.5 bg-gray-600 hover:bg-gray-400"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Lightbox Modal */}
      {selectedGalleryImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center">
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-[#355E3B] transition-colors"
              aria-label="Close image lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedGalleryImage}
              alt="Expanded Gallery View"
              className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl border-2 border-white/20"
            />
          </div>
        </div>
      )}

      {/* Call to Action Banner */}
      <section className="bg-gradient-to-r from-[#355E3B] to-[#2B4C30] text-white py-16 px-4 md:px-8 overflow-hidden">
        <ScrollReveal direction="up">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <span className="bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block border border-white/30">
              Start Building Today
            </span>
            <h2 className="font-extrabold text-3xl md:text-5xl uppercase leading-tight font-headline">
              Ready to Build Your Project with Kerala’s Premier Developer?
            </h2>
            <p className="text-gray-200 text-sm md:text-lg max-w-2xl mx-auto">
              Contact our engineering consultancy or architectural design team for a free site evaluation and structural project estimate.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="bg-white text-[#355E3B] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold uppercase text-xs tracking-widest shadow-xl transition-all hover-lift active:scale-95"
              >
                Get Free Quotation
              </button>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold uppercase text-xs tracking-widest transition-all hover-lift"
              >
                Visit Our Office
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}

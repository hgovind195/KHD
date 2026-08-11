"use client";

import React, { useState } from "react";
import { Building, Compass, PenTool, CheckCircle2, ArrowRight, ShieldCheck, Cpu, HardHat, FileText, PhoneCall } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function ServicesPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeCallId, setActiveCallId] = useState<string | null>(null);

  const servicesList = [
    {
      id: "construction",
      division: "Kerala Homes ",
      title: "Turnkey Residential & Commercial Construction",
      tagline: "End-to-end building solutions from foundation to luxury/budget key handover.",
      icon: Building,
      badgeColor: "bg-[#355E3B]",
      logo: "https://res.cloudinary.com/w1tsvtbe/image/upload/v1785851706/font_tp_pinjpz.png",
      features: [
        "Custom Luxury Villa Construction & Gated Communities",
        "Multi-Story High-Rise Residential Apartments",
        "Commercial Malls, Corporate Arcades & Showrooms",
        "Fixed-cost Contracts with Strict Timeline Guarantees",
        "Associated with Class A Government Contracting Standards",
      ],
      phones: [
        { label: "+91 75111 11000", href: "tel:+917511111000" },
      ],
    },
    {
      id: "engineering",
      division: "Master Plan Engineering Consultancy",
      title: "Complete Engineering Solutions",
      tagline: "From Planning to Perfection – Your Trusted Engineering Partner Since 2017.",
      icon: Compass,
      badgeColor: "bg-[#355E3B]",
      logo: "https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto,w_600/v1785736185/Screenshot_2026-08-01_092139_magic_timyra.png",
      features: [
        "House Plan & Design",
        "Building Permit & Approval Services",
        "Digital Land Survey",
        "Work inspection & Supervision",
        "Working Drawings & Documentation",
        "Structural Design"
      ],
      details:
        "From planning to project completion, Master Plan Engineering Consultancy provides complete engineering solutions under one roof.we provide reliable solutions for residential and commercial projects.",
      phones: [
        { label: "+91 75111 27335", href: "tel:+917511127335" },
      ],
    },
    {
      id: "design-studio",
      division: "Innovature Designs Studio",
      title: "Innovature Architecture & Design consultants ",
      tagline: "The firm focuses on full architecture master planning,interior and retail design,as well as product and branding identity.",
      icon: PenTool,
      badgeColor: "bg-[#1B1C1C]",
      logo: "https://res.cloudinary.com/w1tsvtbe/image/upload/f_auto,q_auto,w_600/v1785737271/bg_nsnrga.png",
      features: [
        "Product & Branding Design",
        " Interior & Retail Design",
        "Architecture & Master Planning",
        "Focuses on detailed spaces closely connected to individual function",
        "Renovation & Heritage Structure Restoration",
      ],
      details:
        "Innovature Designs combines artistic elevation aesthetics with functional spatial efficiency, crafting modern sanctuaries that elevate daily living.",
      phones: [
        { label: "+91 89219 55878", href: "tel:+91 89219 55878" },

      ]
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-[#1B1C1C] text-white py-20 px-4 md:px-8 border-b-4 border-[#355E3B]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-[#355E3B] text-xs font-extrabold uppercase tracking-widest bg-[#355E3B]/10 px-4 py-1.5 rounded-full border border-[#355E3B]/30 inline-block">
            Engineering & Design Capabilities
          </span>
          <h1 className="font-extrabold text-4xl sm:text-6xl uppercase tracking-tight font-headline">
            OUR SPECIALIZED <span className="text-[#355E3B]">DIVISIONS</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            Delivering structural excellence, master planning precision, and luxury architectural design under one corporate umbrella.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 md:px-8 bg-[#F7FAF3]">
        <div className="max-w-7xl mx-auto space-y-16">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                id={service.id === "engineering" ? "masterplan" : service.id === "design-studio" ? "innovature" : service.id}
                className="scroll-mt-28 bg-white border border-[#E0C0B2] rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className={`${service.badgeColor} text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider`}>
                      {service.division}
                    </span>
                  </div>

                  <h2 className="font-extrabold text-3xl md:text-4xl text-[#1B1C1C] uppercase font-headline">
                    {service.title}
                  </h2>

                  <p className="text-gray-600 font-normal text-sm md:text-base">
                    {service.tagline}
                  </p>

                  {service.details && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.details}
                    </p>
                  )}

                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#1B1C1C]">
                      Key Specialties:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-900 font-bold">
                          <CheckCircle2 className="w-4 h-4 text-[#355E3B] shrink-0 mt-0.5" />
                          <span className="font-bold">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3.5">
                    <button
                      onClick={() => setQuoteModalOpen(true)}
                      className="bg-[#355E3B] hover:bg-[#2B4C30] text-white px-6 py-3 rounded-lg font-bold uppercase text-xs tracking-widest flex items-center gap-2 transition-all shadow-md"
                    >
                      <span>Inquire About {service.division}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="relative flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveCallId(activeCallId === service.id ? null : service.id)}
                        className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white px-5 py-3 rounded-lg font-bold uppercase text-xs tracking-widest flex items-center gap-2 transition-all shadow-md active:scale-95 border border-[#1E3A8A]"
                        title="Click to view contact numbers"
                        aria-label="Toggle contact numbers"
                      >
                        <PhoneCall className="w-4 h-4" />
                        <span>Call</span>
                      </button>

                      {activeCallId === service.id && (
                        <div className="flex items-center gap-2 bg-[#1B1C1C] text-white border border-[#1E3A8A] rounded-lg px-4 py-2 text-xs font-bold shadow-xl animate-fadeIn z-20">
                          <span className="text-gray-400 text-[10px] uppercase tracking-wider">Direct:</span>
                          {service.phones ? (
                            service.phones.map((ph, idx) => (
                              <React.Fragment key={idx}>
                                {idx > 0 && <span className="text-gray-600">|</span>}
                                <a
                                  href={ph.href}
                                  className={`${idx === 0 ? "text-[#355E3B] font-extrabold" : "text-white font-semibold"} hover:underline flex items-center gap-1`}
                                >
                                  {ph.label}
                                </a>
                              </React.Fragment>
                            ))
                          ) : (
                            <a href="tel:+917511111000" className="text-[#355E3B] hover:underline font-extrabold">
                              +91 75111 11000
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full bg-[#1B1C1C] text-white p-8 rounded-2xl border-2 border-[#355E3B] shadow-xl text-center space-y-6 relative overflow-hidden">
                    <div className="w-24 h-24 bg-white p-2.5 rounded-2xl flex items-center justify-center mx-auto border-2 border-[#355E3B] shadow-lg overflow-hidden">
                      {service.logo ? (
                        <img
                          src={service.logo}
                          alt={`${service.division} Logo`}
                          className="max-h-full max-w-full object-contain drop-shadow-sm"
                        />
                      ) : (
                        <IconComponent className="w-10 h-10 text-[#355E3B]" />
                      )}
                    </div>

                    <div>
                      <h3 className="font-extrabold text-xl uppercase mb-2">Division Guarantee</h3>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        Backed by Kerala Homes & Developers Pvt. Ltd. Class A Contractor License & ISO Quality Audit standards.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-800 flex justify-center items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-[#355E3B]" />
                      Full Structural & Environmental Warranty
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B1C1C] text-white py-16 px-4 md:px-8 border-t-4 border-[#355E3B] text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-extrabold text-3xl md:text-4xl uppercase">
            Need Custom Structural Engineering or Architectural Blueprinting?
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            Our multi-disciplinary team is ready to evaluate your site plan and provide a detailed BOQ estimate.
          </p>
          <button
            onClick={() => setQuoteModalOpen(true)}
            className="bg-[#355E3B] hover:bg-[#2B4C30] text-white px-8 py-4 rounded-lg font-bold uppercase text-xs tracking-widest shadow-xl transition-all"
          >
            Request Technical Proposal
          </button>
        </div>
      </section>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}

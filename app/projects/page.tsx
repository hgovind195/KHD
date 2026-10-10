"use client";

import React, { useState, useEffect } from "react";
import { MapPin, Building, Calendar, Layers, ArrowRight, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

interface ProjectItem {
  id: string;
  title: string;
  category: "Construction" | "Engineering Consultancy" | "Designs & Drawings" | string;
  division: string;
  location: string;
  year: string;
  status?: string;
  area: string;
  image: string;
  images?: string[];
  description: string;
  imagePosition?: string;
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [modalImgIndex, setModalImgIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === "Escape") {
        setSelectedProject(null);
        setModalImgIndex(0);
      } else if (e.key === "ArrowLeft") {
        const projectImages =
          selectedProject.images && selectedProject.images.length > 0
            ? selectedProject.images
            : [selectedProject.image];
        setModalImgIndex((prev) => (prev > 0 ? prev - 1 : projectImages.length - 1));
      } else if (e.key === "ArrowRight") {
        const projectImages =
          selectedProject.images && selectedProject.images.length > 0
            ? selectedProject.images
            : [selectedProject.image];
        setModalImgIndex((prev) => (prev < projectImages.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const projectsData: ProjectItem[] = [
    {
      id: "proj-edu-1",
      title: "Universal College Educational Campus",
      category: "Construction",
      division: "Kerala Homes & Innovature Designs",
      location: "Collectorate, Pathanamthitta, Kerala",
      year: "2022",
      status: "Completed (2022)",
      area: "12,000 sq.ft.",
      image: "https://res.cloudinary.com/w1tsvtbe/image/upload/v1785766841/ChatGPT_Image_Aug_3_2026_03_22_26_PM_i9ho2y.png",
      description: "An inspiring, functional learning space crafted to support contemporary teaching and student development.",
    },
    {
      id: "proj-1",
      title: "Mathew's Residence",
      category: "Construction",
      division: "Kerala Homes (Construction)",
      location: "Vadasserikara, Pathanamthitta",
      year: "ONGOING",
      status: "ONGOING",
      area: "3500 sq.ft.",
      image: "https://res.cloudinary.com/w1tsvtbe/image/upload/v1785768604/mathew_idondi.png",
      description: "An elite 1.35 Crore residential project blending sophisticated architecture, premium finishes, and opulent design for modern luxury living.",
    },
    {
      id: "proj-2",
      title: "Binu's Residence",
      category: "Engineering Consultancy",
      division: "Kerala Homes & Master Plan Engineering",
      location: "Pynamannu,Pathanamthitta",
      year: "2024",
      status: "Completed",
      area: "2500 sq.ft.",
      image: "https://res.cloudinary.com/w1tsvtbe/image/upload/v1786046877/ChatGPT_Image_Aug_7_2026_01_35_57_AM_wg3pry.png",
      description: "State-of-the-art commercial complex housing corporate headquarters, bank branches, and retail anchor stores with double-glazed glass curtain walling.",
    },
    {
      id: "proj-3",
      title: "Hotel 24inn residency",
      category: "Designs & Drawings",
      division: "Innovature Designs & Kerala Homes",
      location: "Pathananthitta",
      year: "2023",
      status: "Completed (2023)",
      area: "15,500 sq.ft.",
      image: "https://res.cloudinary.com/w1tsvtbe/image/upload/v1785871315/innov_t5ry4b.png",
      images: [
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1785870848/ChatGPT_Image_Aug_5_2026_12_42_57_AM_chy8pc.png",
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1785871315/innov_t5ry4b.png",
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1785872137/ChatGPT_Image_Aug_5_2026_01_03_06_AM_ma3d9p.png",
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1785872413/ChatGPT_Image_Aug_5_2026_01_09_13_AM_ew0oag.png",
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1785872832/fr_h8lujz.png",
      ],
      description: "Bespoke hotel & luxury residency project featuring architectural master planning, high-end hospitality interiors, and state-of-the-art structural craftsmanship in Pathanamthitta.",
    },
    {
      id: "proj-4",
      title: "Mathew's Residence",
      category: "Engineering Consultancy",
      division: "Master Plan Engineering Consultancy",
      location: "Vadasserikkara",
      year: "2026",
      status: "ONGOING",
      area: "3,300 sq.ft.",
      image: "https://res.cloudinary.com/w1tsvtbe/image/upload/v1786114982/ChatGPT_Image_Aug_7_2026_07_48_54_PM_bjki0f.png",
      imagePosition: "object-top",
      images: [
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1786115053/ChatGPT_Image_Aug_7_2026_08_33_00_PM_pw8hxb.png",
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1785944236/str_ryf2lx.png",
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1786046186/ChatGPT_Image_Aug_7_2026_01_25_55_AM_fj2pcg.png",
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1786115614/ChatGPT_Image_Aug_7_2026_08_41_47_PM_b4egvu.png",

      ],
      description: "A modern tropical home featuring clean architectural lines, a spacious terrace, warm wooden accents, and lush greenery. The open carport and elegant façade create a stylish yet welcoming contemporary living space,Supervision on Structural engineering advisory.",
    },
    {
      id: "proj-5",
      title: "Wilson's Residence",
      category: "Designs & Drawings",
      division: "Innovature Designs Studio",
      location: "Tiruvalla, Pathanamthitta",
      year: "2025",
      status: "Completed (2025)",
      area: "4,500 sq.ft.",
      image: "https://res.cloudinary.com/w1tsvtbe/image/upload/v1786042201/ChatGPT_Image_Aug_7_2026_12_18_22_AM_az0ubx.png",
      images: [
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1786078952/ChatGPT_Image_Aug_7_2026_10_31_31_AM_gfb4nr.png",
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1786043420/ChatGPT_Image_Aug_7_2026_12_39_07_AM_ya27ww.png",
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1786043728/ChatGPT_Image_Aug_7_2026_12_43_53_AM_le5fcl.png",
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1786044969/ChatGPT_Image_Aug_7_2026_01_05_49_AM_mfmktz.png",
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1786045229/ChatGPT_Image_Aug_7_2026_01_10_12_AM_ivcw58.png",
      ],
      description: "Complete interior spatial design, custom teakwood woodwork, indoor central courtyard water feature, and acoustic ceiling treatment.",
    },
    {
      id: "proj-6",
      title: "Mr :Ginu George.",
      category: "Designs & Drawings",
      division: "Innovative Designs & Kerala Homes",
      location: "Kochi",
      year: "2023",
      status: "Completed (2023)",
      area: "3,500 sq.ft.",
      image: "https://res.cloudinary.com/w1tsvtbe/image/upload/v1785874399/ChatGPT_Image_Aug_5_2026_01_41_33_AM_oj1flp.png",
      imagePosition: "object-center",
      images: [
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1785873195/ChatGPT_Image_Aug_5_2026_01_22_20_AM_e4mvoq.png",
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1785873750/ChatGPT_Image_Aug_5_2026_01_31_59_AM_epvlwn.png",
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1785874860/ChatGPT_Image_Aug_5_2026_01_50_23_AM_zotckk.png",
      ],
      description: "Tailored to deliver modern comfort and timeless architecture, this custom residential project for Mr. Ginu reflects structural precision, functional spatial design, and premium craftsmanship from foundation to final handover.",
    },
    {
      id: "proj-7",
      title: "Samkutty's Swimming Pool",
      category: "Engineering Consultancy",
      division: "Master Plan Engineering",
      location: "Mylapra, Pathanamthitta",
      year: "2024",
      status: "Completed (2025)",
      area: "750 sq.ft.",
      image: "https://res.cloudinary.com/w1tsvtbe/image/upload/v1786078954/ChatGPT_Image_Aug_7_2026_10_31_49_AM_bnhrsv.png",
      images: [
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1786047880/ChatGPT_Image_Aug_7_2026_01_52_24_AM_rngpsh.png",
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1786049031/ChatGPT_Image_Aug_7_2026_01_50_37_AM_offwd9.png",
        "https://res.cloudinary.com/w1tsvtbe/image/upload/v1786048155/ChatGPT_Image_Aug_7_2026_01_58_20_AM_ypztgi.png",
      ],
      description: "A refreshing and well-designed swimming pool offering a perfect space to relax, unwind, and enjoy quality time with family and friends.",
    },
    {
      id: "proj-9",
      title: "Raju's Residence",
      category: "Construction",
      division: "Kerala Homes",
      location: "Mylapra, Pathanamthitta",
      year: "2024",
      status: "Completed (2024)",
      area: "3300 sq.ft.",
      image: "https://res.cloudinary.com/w1tsvtbe/image/upload/v1786376011/ChatGPT_Image_Aug_10_2026_09_02_28_PM_pq744k.png",
      description: "Turnkey residential villa construction engineered with modern architectural aesthetics, premium structural foundation, and luxury interior woodwork in Mylapra.",
    },
  ];

  const categories = ["All", "Construction", "Engineering Consultancy", "Designs & Drawings"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div>
      {/* Header */}
      <section className="bg-[#1B1C1C] text-white py-20 px-4 md:px-8 border-b-4 border-[#355E3B]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-[#355E3B] text-xs font-extrabold uppercase tracking-widest bg-[#355E3B]/10 px-4 py-1.5 rounded-full border border-[#355E3B]/30 inline-block">
            Engineering & Contracting Portfolio
          </span>
          <h1 className="font-extrabold text-4xl sm:text-6xl uppercase tracking-tight font-headline">
            SIGNATURE <span className="text-[#355E3B]">DEVELOPMENTS</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore landmark residential high-rises, commercial hubs, luxury villas, and civil infrastructure developments executed across Kerala.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-[#ECEFEC] px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase mr-4">
            <Filter className="w-4 h-4 text-[#355E3B]" />
            Filter Category:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${activeFilter === cat
                ? "bg-[#355E3B] text-white shadow-md scale-105"
                : "bg-[#F7FAF3] text-[#1B1C1C] hover:bg-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 md:px-8 bg-[#F7FAF3]">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 shadow-sm max-w-xl mx-auto space-y-4">
              <Building className="w-12 h-12 text-gray-400 mx-auto" />
              <h3 className="font-extrabold text-lg uppercase text-[#1B1C1C]">No Projects Found</h3>
              <p className="text-gray-500 text-xs">There are currently no projects matching the &quot;{activeFilter}&quot; category.</p>
              <button
                onClick={() => setActiveFilter("All")}
                className="bg-[#355E3B] text-white text-xs font-bold uppercase px-5 py-2.5 rounded-full hover:bg-[#2B4C30] transition-colors"
              >
                View All Projects
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-[#E0C0B2] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift flex flex-col group"
                >
                  <div className="relative h-64 md:h-72 bg-[#141515] overflow-hidden flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover ${project.imagePosition || "object-top"} group-hover:scale-105 transition-transform duration-700`}
                    />
                    <div className="absolute top-3 left-3 bg-[#355E3B] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded shadow">
                      {project.category}
                    </div>
                    {project.status && (
                      <div className="absolute bottom-3 right-3">
                        <span className="bg-[#355E3B]/90 backdrop-blur-md text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded border border-white/20 shadow">
                          {project.status}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Sideways Slidable Thumbnail Strip for Multi-Image Projects */}
                  {project.images && project.images.length > 1 && (
                    <div className="px-4 py-2.5 bg-[#F0F4EC] border-b border-gray-200 flex items-center gap-2 overflow-x-auto scrollbar-thin">
                      <span className="text-[9px] font-extrabold uppercase text-[#355E3B] shrink-0 tracking-wider">
                        Slide Gallery ({project.images.length}):
                      </span>
                      {project.images.map((imgUrl, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setSelectedProject(project);
                            setModalImgIndex(i);
                          }}
                          className="w-12 h-9 rounded overflow-hidden border-2 border-white hover:border-[#355E3B] shrink-0 transition-all shadow-sm focus:outline-none"
                          title={`View image ${i + 1}`}
                        >
                          <img src={imgUrl} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-[#355E3B] tracking-widest block mb-1">
                        {project.division}
                      </span>
                      <h3 className="font-extrabold text-xl text-[#1B1C1C] uppercase group-hover:text-[#355E3B] transition-colors leading-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-xs flex items-center gap-1.5 mb-3">
                        <MapPin className="w-3.5 h-3.5 text-[#355E3B] shrink-0" />
                        {project.location}
                      </p>
                      <p className="text-gray-600 text-xs line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-gray-700 uppercase">
                        Area: {project.area}
                      </span>

                      <button
                        onClick={() => {
                          setSelectedProject(project);
                          setModalImgIndex(0);
                        }}
                        className="text-[#355E3B] font-extrabold text-xs uppercase tracking-widest flex items-center gap-1 hover:underline"
                      >
                        View Specs <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Popup Modal Dialog */}
      {selectedProject && (
        <div
          onClick={() => {
            setSelectedProject(null);
            setModalImgIndex(0);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl bg-white border border-[#E0C0B2] shadow-2xl rounded-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto transition-all"
          >
            {(() => {
              const projectImages =
                selectedProject.images && selectedProject.images.length > 0
                  ? selectedProject.images
                  : [selectedProject.image];
              const currentImg = projectImages[modalImgIndex] || selectedProject.image;
              const hasMultiple = projectImages.length > 1;

              return (
                <div className="relative h-72 sm:h-96 md:h-[460px] bg-[#0D0E0E] overflow-hidden shrink-0 flex items-center justify-center">
                  <img
                    key={currentImg}
                    src={currentImg}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-center transition-all duration-300 animate-fadeIn"
                  />
                  {/* Subtle top & bottom gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none z-10"></div>

                  {/* Top Bar: Close Modal & Counter */}
                  <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between z-30">
                    <div className="bg-black/80 backdrop-blur-md text-white text-[10px] sm:text-xs font-extrabold uppercase px-3.5 py-1 rounded-full border border-white/20 shadow">
                      {hasMultiple ? `Image ${modalImgIndex + 1} of ${projectImages.length}` : selectedProject.category}
                    </div>
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        setModalImgIndex(0);
                      }}
                      className="w-9 h-9 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-[#355E3B] transition-colors border border-white/20 shadow-lg z-30"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Category Badge Bottom Left */}
                  <div className="absolute bottom-3.5 left-4 bg-[#355E3B] text-white text-xs font-bold uppercase px-3 py-1 rounded shadow-md z-20">
                    {selectedProject.category}
                  </div>

                  {/* Sliding Arrow Controls for Multiple Images */}
                  {hasMultiple && (
                    <>
                      <button
                        onClick={() =>
                          setModalImgIndex((prev) =>
                            prev > 0 ? prev - 1 : projectImages.length - 1
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#355E3B] text-white flex items-center justify-center shadow-2xl transition-all z-30 border border-white/20"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>

                      <button
                        onClick={() =>
                          setModalImgIndex((prev) =>
                            prev < projectImages.length - 1 ? prev + 1 : 0
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#355E3B] text-white flex items-center justify-center shadow-2xl transition-all z-30 border border-white/20"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      {/* Sideways Scrollable Thumbnail Strip inside Popup */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 max-w-[80%] flex items-center gap-2 overflow-x-auto bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 z-30 shadow-2xl scrollbar-none">
                        {projectImages.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setModalImgIndex(idx)}
                            className={`w-11 h-7 rounded overflow-hidden border-2 transition-all shrink-0 ${modalImgIndex === idx
                              ? "border-[#355E3B] scale-110 shadow-lg"
                              : "border-white/30 opacity-60 hover:opacity-100"
                              }`}
                          >
                            <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
            })()}

            <div className="p-6 md:p-8 space-y-4 overflow-y-auto max-h-[300px]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-[#355E3B] tracking-widest">
                  {selectedProject.division}
                </span>
                <span className="text-xs font-bold uppercase text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded">
                  {selectedProject.year}
                </span>
              </div>
              <h3 className="font-extrabold text-xl md:text-2xl uppercase text-[#1B1C1C] leading-tight">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#355E3B] shrink-0" />
                {selectedProject.location}
              </p>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="grid grid-cols-2 gap-4 bg-[#F7FAF3] p-4 rounded-xl text-xs font-semibold text-gray-700">
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">Built Up Area</span>
                  {selectedProject.area}
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">Status</span>
                  {selectedProject.status || "Completed"}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setModalImgIndex(0);
                    setQuoteModalOpen(true);
                  }}
                  className="w-full py-3 bg-[#355E3B] hover:bg-[#2B4C30] text-white text-xs font-bold uppercase tracking-widest rounded-lg transition-colors shadow-md"
                >
                  Inquire For Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-[#355E3B] text-white py-16 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-extrabold text-3xl md:text-4xl uppercase">
            Have a Specific Plot or Commercial Site in Mind?
          </h2>
          <p className="text-gray-200 text-sm md:text-base">
            Consult with our Master Plan Engineering & Contracting team for an instant feasibility review.
          </p>
          <button
            onClick={() => setQuoteModalOpen(true)}
            className="bg-[#1B1C1C] hover:bg-black text-white px-8 py-4 rounded-lg font-bold uppercase text-xs tracking-widest shadow-xl transition-all"
          >
            Start Project Consultation
          </button>
        </div>
      </section>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}

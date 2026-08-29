"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Phone, Mail, Building, User } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    division: "Kerala Homes (Construction)",
    projectType: "Residential Villa",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    let targetPhone = "917511111000";
    if (formData.division === "Innovature Designs Studio") {
      targetPhone = "918921955878";
    } else if (formData.division.includes("Master Plan")) {
      targetPhone = "917511127335";
    }

    const messageText = `*New Project Quote Request - ${formData.division}*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `✉️ *Email:* ${formData.email || "N/A"}\n` +
      `🏢 *Division:* ${formData.division}\n` +
      `📐 *Category:* ${formData.projectType}\n` +
      `💬 *Details:* ${formData.message || "N/A"}`;

    const encodedMsg = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedMsg}`;

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white border border-[#E0C0B2] shadow-2xl rounded-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto">
        {/* Header */}
        <div className="bg-[#1B1C1C] text-white p-4 sm:p-6 border-b-4 border-[#355E3B] flex justify-between items-center shrink-0">
          <div>
            <span className="text-[#355E3B] text-[10px] sm:text-xs font-bold uppercase tracking-widest block">
              Kerala Homes & Developers
            </span>
            <h3 className="text-lg sm:text-2xl font-extrabold uppercase font-headline leading-tight">
              Request a Project Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-[#25D366] animate-bounce" />
              <h4 className="text-2xl font-bold text-[#1B1C1C]">Redirecting to WhatsApp!</h4>
              <p className="text-gray-600 max-w-md text-sm">
                Thank you, <span className="font-semibold text-[#355E3B]">{formData.name}</span>. Your quote request is being sent directly to our WhatsApp desk.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-[#1B1C1C] mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-2.5 bg-[#F7FAF3] border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#355E3B] focus:ring-1 focus:ring-[#355E3B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#1B1C1C] mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-2.5 bg-[#F7FAF3] border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#355E3B] focus:ring-1 focus:ring-[#355E3B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#1B1C1C] mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-[#F7FAF3] border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#355E3B] focus:ring-1 focus:ring-[#355E3B]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#1B1C1C] mb-1">
                    Target Division
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <select
                      value={formData.division}
                      onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-[#F7FAF3] border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#355E3B] focus:ring-1 focus:ring-[#355E3B]"
                    >
                      <option value="Kerala Homes (Construction)">Kerala Homes (Construction)</option>
                      <option value="Master Plan Engineering">Master Plan Engineering</option>
                      <option value="Innovature Designs Studio">Innovature Designs Studio</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#1B1C1C] mb-1">
                    Project Category
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F7FAF3] border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#355E3B] focus:ring-1 focus:ring-[#355E3B]"
                  >
                    <option value="Residential Villa">Residential Villa</option>
                    <option value="Commercial Complex">Commercial Complex</option>
                    <option value="Infrastructure Consultancy">Infrastructure Consultancy</option>
                    <option value="Renovation & Interior Design">Renovation & Interior Design</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#1B1C1C] mb-1">
                  Project Details / Message
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about plot location, estimated area, budget or specific requirements..."
                  className="w-full p-3 bg-[#F7FAF3] border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#355E3B] focus:ring-1 focus:ring-[#355E3B]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold uppercase text-xs tracking-widest rounded-lg shadow-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.01]"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.37a9.994 9.994 0 004.779 1.203h.005c5.505 0 9.988-4.478 9.989-9.985 0-2.669-1.038-5.176-2.925-7.062A9.923 9.923 0 0012.012 2zm5.835 14.195c-.247.692-1.244 1.309-1.737 1.385-.45.07-1.03.11-2.96-.653-2.47-.978-4.053-3.486-4.178-3.649-.124-.163-.997-1.334-.997-2.544 0-1.21.624-1.808.847-2.054.223-.247.487-.309.65-.309.163 0 .326.002.468.007.151.006.353-.058.552.42.203.49.692 1.692.752 1.815.06.123.098.271.018.432-.079.16-.12.26-.237.397-.118.136-.247.304-.353.409-.118.117-.242.244-.104.48.138.236.615 1.018 1.323 1.648.911.81 1.68 1.06 1.918 1.178.237.118.375.099.513-.059.138-.158.592-.69.75-.927.159-.237.317-.197.534-.118.217.079 1.382.652 1.62.771.237.118.395.178.454.276.059.099.059.574-.188 1.266z" />
                </svg>
                <span>Submit Quote via WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

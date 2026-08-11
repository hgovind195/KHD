"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Building } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Kerala Homes and Developers",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    let targetPhone = "917511111000";
    if (form.subject === "Innovature Designs Studio") {
      targetPhone = "918921955878";
    } else if (form.subject === "Master Plan Engineering Consultancy") {
      targetPhone = "917511127335";
    }

    const messageText = `*New Contact Inquiry - ${form.subject}*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📞 *Phone:* ${form.phone}\n` +
      `✉️ *Email:* ${form.email || "N/A"}\n` +
      `📋 *Subject:* ${form.subject}\n` +
      `💬 *Message:* ${form.message || "N/A"}`;

    const encodedMsg = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedMsg}`;

    window.open(whatsappUrl, "_blank");

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-[#1B1C1C] text-white py-20 px-4 md:px-8 border-b-4 border-[#D35400]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-[#D35400] text-xs font-extrabold uppercase tracking-widest bg-[#D35400]/10 px-4 py-1.5 rounded-full border border-[#D35400]/30 inline-block">
            Get In Touch
          </span>
          <h1 className="font-extrabold text-4xl sm:text-6xl uppercase tracking-tight font-headline">
            CONTACT <span className="text-[#355E3B]">KERALA HOMES</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            Reach out to our corporate headquarters or schedule a face-to-face consultation at our Pathanamthitta registered office.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 md:px-8 bg-[#F7FAF3]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Cards Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[#355E3B] font-bold text-xs uppercase tracking-widest block mb-2">
                Corporate Headquarters
              </span>
              <h2 className="font-extrabold text-3xl uppercase text-[#1B1C1C] font-headline">
                Kerala Homes & Developers Pvt. Ltd.
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-[#E0C0B2] shadow-sm hover:shadow-md transition-all hover-lift flex items-start gap-4">
                <div className="w-12 h-12 bg-[#355E3B]/10 text-[#355E3B] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#D35400]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm uppercase text-[#1B1C1C] mb-1">
                    Registered Office Address
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Silver Tower, Opposite Private Bus Stand,<br />
                    Pathanamthitta, Kerala - 689645, India
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E0C0B2] shadow-sm hover:shadow-md transition-all hover-lift flex items-start gap-4">
                <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm uppercase text-[#1B1C1C] mb-1">
                    Phone & WhatsApp Desk
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Office Line: <strong className="text-[#1B1C1C]">+91 75111 11000</strong>
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E0C0B2] shadow-sm hover:shadow-md transition-all hover-lift flex items-start gap-4">
                <div className="w-12 h-12 bg-[#355E3B]/10 text-[#355E3B] rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#D35400]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm uppercase text-[#1B1C1C] mb-1">
                    Email Desks
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Inquiries: info@keralahomes.com <br />
                    Engineering: masterplan@keralahomes.com <br />
                    Construction: keralahomes0001@gmail.com<br />
                    Architecture: innovaturedesignsstudio@gmail.com
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E0C0B2] shadow-sm hover:shadow-md transition-all hover-lift flex items-start gap-4">
                <div className="w-12 h-12 bg-[#355E3B]/10 text-[#355E3B] rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#355E3B]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm uppercase text-[#1B1C1C] mb-1">
                    Working Hours
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Monday - Saturday: 12:00 AM - 12:00 AM<br />
                    Sunday: Closed (Emergency Site Assistance Available)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-2xl border border-[#E0C0B2] shadow-xl">
            <h3 className="font-extrabold text-2xl uppercase text-[#1B1C1C] mb-2 font-headline flex items-center gap-3">
              <span>Send Direct Message</span>
              <span className="text-xs bg-[#25D366]/15 text-[#25D366] px-3 py-1 rounded-full font-sans lowercase font-semibold flex items-center gap-1 border border-[#25D366]/30">
                via WhatsApp
              </span>
            </h3>
            <p className="text-gray-600 text-xs mb-8">
              Fill out the form below. Submitting will direct your detailed inquiry straight to our official WhatsApp helpline.
            </p>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 bg-[#F7FAF3] rounded-xl p-8 border border-[#355E3B]/30">
                <CheckCircle2 className="w-16 h-16 text-[#25D366] animate-bounce" />
                <h4 className="text-2xl font-bold text-[#1B1C1C]">Redirecting to WhatsApp!</h4>
                <p className="text-gray-600 text-xs max-w-md">
                  Thank you, <span className="font-bold text-[#355E3B]">{form.name}</span>. Your details have been prepared for sending via WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#1B1C1C] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-[#F7FAF3] border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#355E3B]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#1B1C1C] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-[#F7FAF3] border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#355E3B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#1B1C1C] mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-[#F7FAF3] border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#355E3B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#1B1C1C] mb-1">
                    Subject *
                  </label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F7FAF3] border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#355E3B]"
                  >
                    <option value="Kerala Homes and Developers">Kerala Homes and Developers</option>
                    <option value="Master Plan Engineering Consultancy">Master Plan Engineering Consultancy</option>
                    <option value="Innovature Designs Studio">Innovature Designs Studio</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#1B1C1C] mb-1">
                    Your Message / Inquiry (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we assist you with your construction or engineering project?"
                    className="w-full p-4 bg-[#F7FAF3] border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#355E3B]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold uppercase text-xs tracking-widest rounded-lg shadow-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.01]"
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.37a9.994 9.994 0 004.779 1.203h.005c5.505 0 9.988-4.478 9.989-9.985 0-2.669-1.038-5.176-2.925-7.062A9.923 9.923 0 0012.012 2zm5.835 14.195c-.247.692-1.244 1.309-1.737 1.385-.45.07-1.03.11-2.96-.653-2.47-.978-4.053-3.486-4.178-3.649-.124-.163-.997-1.334-.997-2.544 0-1.21.624-1.808.847-2.054.223-.247.487-.309.65-.309.163 0 .326.002.468.007.151.006.353-.058.552.42.203.49.692 1.692.752 1.815.06.123.098.271.018.432-.079.16-.12.26-.237.397-.118.136-.247.304-.353.409-.118.117-.242.244-.104.48.138.236.615 1.018 1.323 1.648.911.81 1.68 1.06 1.918 1.178.237.118.375.099.513-.059.138-.158.592-.69.75-.927.159-.237.317-.197.534-.118.217.079 1.382.652 1.62.771.237.118.395.178.454.276.059.099.059.574-.188 1.266z" />
                  </svg>
                  <span>Send Details via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-12 px-4 border-t border-[#ECEFEC]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h3 className="font-extrabold text-2xl uppercase text-[#1B1C1C]">
            Location Map • Pathanamthitta Headquarters
          </h3>
          <div className="w-full h-96 md:h-[480px] bg-gray-200 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center relative border border-gray-300">
            <iframe
              title="Kerala Homes & Developers Pvt. Ltd. Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.738575700607!2d76.78775587475148!3d9.267637485208404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0615100817464b%3A0xc0bfb1795f9859b5!2sKerala%20Homes%20%26%20Developers%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1786177599643!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

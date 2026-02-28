"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    services: [] as string[],
    goals: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Thank you! We'll get back to you within 24-48 hours.");
        setFormData({
          fullName: "",
          email: "",
          role: "",
          services: [],
          goals: "",
        });
      } else {
        setSubmitMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(value)
        ? prev.services.filter((s) => s !== value)
        : [...prev.services, value],
    }));
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(255,255,255,0.2)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_rgba(255,192,203,0.3)_0%,_transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-[#1a0a2e]/50 font-bold tracking-widest uppercase text-sm mb-4 block">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a0a2e] mb-6 leading-tight">
            Let&apos;s Build Something That Scales
          </h1>
          <p className="text-[#1a0a2e]/70 text-lg mb-4 max-w-2xl mx-auto font-medium">
            If you&apos;re serious about turning content into cashflow, we should talk.
          </p>
          <p className="text-[#1a0a2e]/60 text-base max-w-2xl mx-auto font-medium">
            Whether you&apos;re a creator, brand, or company looking for a reliable content system, this is the first step.
          </p>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/40">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side: Content */}
          <div className="bg-white/80 p-8 rounded-3xl border border-white shadow-sm">
            <h2 className="text-3xl font-bold text-[#1a0a2e] mb-6">Why Reach Out?</h2>
            <div className="space-y-4 text-[#1a0a2e]/70 mb-10 leading-relaxed font-medium">
              <p>If you&apos;re serious about turning content into cashflow, we should talk.</p>
              <p>
                Whether you&apos;re a creator, brand, or company looking for a reliable content system, this is the first step.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl mb-10 border border-white/60">
              <span className="text-sm font-semibold text-[#1a0a2e]/70 mb-4 block uppercase tracking-wider">
                Use this form if you:
              </span>
              <ul className="space-y-4">
                {[
                  "Want a done-for-you content system",
                  "Need consistent, scalable content production",
                  "Are building a long-term creator or brand presence",
                  "Want to explore a strategic partnership",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-pink-600 mt-1 bg-pink-100 rounded-full p-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M5 13l4 4L19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                    <span className="text-[#1a0a2e]/80 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/60">
              <h3 className="font-bold text-[#1a0a2e] text-lg">Prefer a Direct Conversation?</h3>
              <p className="text-[#1a0a2e]/60 text-sm mt-2 font-medium">
                If you&apos;d rather skip forms, schedule a call with our team.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-pink-600 font-bold hover:text-pink-700 transition-colors text-lg mt-3 group"
              >
                Schedule a Call <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <p className="text-[#1a0a2e]/40 text-xs mt-2 font-medium">
                (You can connect this to Calendly or Google Calendar)
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white/80 p-8 lg:p-12 rounded-[2rem] border border-white shadow-sm">
            <h2 className="text-3xl font-bold text-[#1a0a2e] mb-8">
              Tell Us About Your Project
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-bold text-[#1a0a2e]/80 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-pink-100 bg-white text-[#1a0a2e] focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all placeholder:text-[#1a0a2e]/30 shadow-sm"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[#1a0a2e]/80 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-pink-100 bg-white text-[#1a0a2e] focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all placeholder:text-[#1a0a2e]/30 shadow-sm"
                  placeholder="your@email.com"
                />
              </div>

              {/* You Are A Section */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#1a0a2e]/80 mb-2">You Are A:</label>
                <div className="grid grid-cols-2 gap-4">
                  {["Creator", "Agency", "Brand / Business", "Other"].map((role) => (
                    <label key={role} className="flex items-center space-x-2 text-sm font-medium text-[#1a0a2e]/70 cursor-pointer hover:text-pink-600 transition-colors">
                      <input
                        type="radio"
                        name="role"
                        value={role}
                        checked={formData.role === role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-4 h-4 text-pink-500 accent-pink-500 border-pink-200 focus:ring-pink-200"
                      />
                      <span>{role}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* What Are You Looking For Section */}
              <div className="space-y-3 pt-2">
                <label className="block text-sm font-bold text-[#1a0a2e]/80 mb-2">
                  What Are You Looking For?
                </label>
                <div className="space-y-3">
                  {[
                    { value: "growth", label: "Creator Growth System" },
                    { value: "strategy", label: "Brand Content Strategy" },
                    { value: "production", label: "Production Services" },
                    { value: "ai", label: "AI Content Production" },
                    { value: "unsure", label: "Not Sure Yet" },
                  ].map((service) => (
                    <label
                      key={service.value}
                      className="flex items-center space-x-3 text-sm font-medium text-[#1a0a2e]/70 cursor-pointer hover:text-pink-600 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service.value)}
                        onChange={() => handleCheckboxChange(service.value)}
                        className="w-4 h-4 rounded text-pink-500 accent-pink-500 border-pink-200 focus:ring-pink-200"
                      />
                      <span>{service.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <textarea
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-pink-100 bg-white text-[#1a0a2e] focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all placeholder:text-[#1a0a2e]/30 shadow-sm resize-y"
                  placeholder="Briefly Describe Your Goals"
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-black py-4 rounded-xl flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-pink-500/20"
              >
                <span>{isSubmitting ? "Submitting..." : "Book a Strategy Call"}</span>
                {!isSubmitting && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </button>

              {submitMessage && (
                <p
                  className={`text-center text-sm ${
                    submitMessage.includes("Thank you") ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/40">
        <h2 className="text-4xl font-extrabold text-center text-[#1a0a2e] mb-12">Contact Options</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              ),
              title: "Email",
              content: "contact@vidovermedia.com",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              ),
              title: "Phone",
              content: "+1 (800) 123-4567",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              ),
              title: "Schedule a Call",
              content: "Schedule a Zoom call with our team",
            },
          ].map((option, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur border border-white/60 p-8 rounded-3xl text-center hover:bg-white hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-2 transition-all shadow-sm group"
            >
              <div className="flex justify-center mb-6 text-pink-500 group-hover:scale-110 transition-transform">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a0a2e] mb-2">{option.title}</h3>
              <p className="text-[#1a0a2e]/60 font-medium">{option.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center text-[#1a0a2e]/50 text-sm max-w-2xl mx-auto font-medium">
          <p>We work with a limited number of partners each month to maintain quality and performance.</p>
          <p className="mt-1">If it&apos;s a fit, we&apos;ll reach out within 24–48 hours.</p>
        </div>
      </section>
    </main>
  );
}

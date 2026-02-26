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
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-pink-600 via-purple-700 to-blue-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(236,72,153,0.4)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_rgba(99,102,241,0.4)_0%,_transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-white font-bold text-lg mb-4 block">
            Contact <span className="text-white/40">us</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Let&apos;s Build Something That Scales
          </h1>
          <p className="text-white/70 text-lg mb-4 max-w-2xl mx-auto font-medium">
            If you&apos;re serious about turning content into cashflow, we should talk.
          </p>
          <p className="text-white/50 text-base max-w-2xl mx-auto">
            Whether you&apos;re a creator, brand, or company looking for a reliable content system, this is the first step.
          </p>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-br from-purple-900/50 via-[#2d1240] to-[#1a0a2e]">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side: Content */}
          <div className="glass-strong p-8 rounded-3xl">
            <h2 className="text-3xl font-bold text-pink-300 mb-6">Why Reach Out?</h2>
            <div className="space-y-4 text-white/60 mb-10 leading-relaxed">
              <p>If you&apos;re serious about turning content into cashflow, we should talk.</p>
              <p>
                Whether you&apos;re a creator, brand, or company looking for a reliable content system, this is the first step.
              </p>
            </div>

            <div className="glass p-6 rounded-xl mb-10">
              <span className="text-sm font-semibold text-pink-300 mb-4 block">
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
                    <span className="text-pink-400 mt-1 bg-pink-500/20 rounded-full p-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M5 13l4 4L19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                    <span className="text-white/80 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="font-bold text-white text-lg">Prefer a Direct Conversation?</h3>
              <p className="text-white/50 text-sm mt-2">
                If you&apos;d rather skip forms, schedule a call with our team.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-pink-400 font-bold hover:text-pink-300 transition-colors text-lg mt-3"
              >
                Schedule a Call <span className="ml-2">→</span>
              </Link>
              <p className="text-white/30 text-xs mt-2">
                (You can connect this to Calendly or Google Calendar)
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="glass-strong p-8 lg:p-12 rounded-[2rem]">
            <h2 className="text-2xl font-bold text-white mb-8">
              Tell Us About Your Project
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-white/70 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 outline-none transition-all placeholder:text-white/30"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white/70 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 outline-none transition-all placeholder:text-white/30"
                  placeholder="your@email.com"
                />
              </div>

              {/* You Are A Section */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-white/70 mb-2">You Are A:</label>
                <div className="grid grid-cols-2 gap-4">
                  {["Creator", "Agency", "Brand / Business", "Other"].map((role) => (
                    <label key={role} className="flex items-center space-x-2 text-sm text-white/60">
                      <input
                        type="radio"
                        name="role"
                        value={role}
                        checked={formData.role === role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-4 h-4 text-pink-500 accent-pink-500"
                      />
                      <span>{role}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* What Are You Looking For Section */}
              <div className="space-y-3 pt-2">
                <label className="block text-sm font-semibold text-white/70 mb-2">
                  What Are You Looking For?
                </label>
                <div className="space-y-2">
                  {[
                    { value: "growth", label: "Creator Growth System" },
                    { value: "strategy", label: "Brand Content Strategy" },
                    { value: "production", label: "Production Services" },
                    { value: "ai", label: "AI Content Production" },
                    { value: "unsure", label: "Not Sure Yet" },
                  ].map((service) => (
                    <label
                      key={service.value}
                      className="flex items-center space-x-2 text-sm text-white/60"
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service.value)}
                        onChange={() => handleCheckboxChange(service.value)}
                        className="w-4 h-4 rounded text-pink-500 accent-pink-500"
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
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 outline-none transition-all placeholder:text-white/30"
                  placeholder="Briefly Describe Your Goals"
                  rows={3}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-[#1a0a2e] font-black py-4 rounded-xl flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-pink-500/20"
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
      <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-br from-[#1a0a2e] via-purple-900/40 to-pink-900/20">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Contact Options</h2>
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
              className="glass p-8 rounded-2xl text-center hover:bg-white/15 hover:shadow-2xl hover:shadow-pink-500/10 hover:scale-105 transition-all"
            >
              <div className="flex justify-center mb-4 text-pink-400">{option.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
              <p className="text-white/60 font-semibold">{option.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-white/40 text-sm max-w-2xl mx-auto leading-relaxed">
          <p>We work with a limited number of partners each month to maintain quality and performance.</p>
          <p>If it&apos;s a fit, we&apos;ll reach out within 24–48 hours.</p>
        </div>
      </section>
    </main>
  );
}

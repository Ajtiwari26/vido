"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import LiquidGradient from "@/components/LiquidGradient";
import StackingCards from "@/components/StackingCards";
import InfiniteScroll from "@/components/InfiniteScroll";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] pt-32 pb-32 px-6 overflow-visible">
        {/* Blurred Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30 blur-xl"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Extended gradient fade that goes beyond section */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-transparent via-transparent to-transparent z-[1] pointer-events-none" style={{
          background: 'linear-gradient(to top, rgba(252, 224, 240, 0) 0%, rgba(252, 224, 240, 0.3) 30%, rgba(252, 224, 240, 0.6) 60%, transparent 100%)'
        }}></div>

        {/* Liquid animated background */}
        <LiquidGradient
          colors={[
            "rgba(167,180,255,0.25)",
            "rgba(236,130,200,0.2)",
            "rgba(200,170,255,0.2)",
            "rgba(255,200,220,0.25)",
          ]}
        />

        {/* Floating decorative blobs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/25 rounded-full animate-float blur-2xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-pink-200/30 rounded-full animate-float-delayed blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-fuchsia-200/20 animate-morph animate-pulse-glow blur-2xl"></div>

        {/* Spinning decorative ring */}
        <div className="absolute top-1/4 right-10 w-40 h-40 border border-pink-200/20 rounded-full animate-spin-slow pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-10 w-24 h-24 border border-pink-200/15 rounded-full animate-spin-slow pointer-events-none" style={{ animationDirection: "reverse" }}></div>

        <div className="w-full max-w-7xl mx-auto text-center relative z-10 px-4">
          <ScrollReveal delay={0}>
            <h1 className="text-6xl md:text-8xl lg:text-[5rem] font-black tracking-wide mb-8 text-[#1a0a2e] leading-[1.1]">
              Create . Automate . <span className="bg-gradient-to-r from-pink-400 via-rose-500 to-pink-400 animate-text-gradient">Scale.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-[#1a0a2e] mb-12 max-w-2xl mx-auto font-bold">
              We help creators and brands build YouTube channels<br className="hidden md:block" />
              that scale,driving consistent views, engagement, and monthly revenue. 🚀
            </p>
          </ScrollReveal>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            {[
              { stat: "100M+", label: "monthly views generated" },
              { stat: "10+ Years", label: "of YouTube expertise" },
              { stat: "20+", label: "channels scaled" },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={400 + index * 150} direction="scale">
                <div className="bg-white/50 backdrop-blur-xl border border-pink-200/40 rounded-2xl p-6 shadow-sm animate-border-glow hover:scale-105 transition-transform duration-300 min-h-[120px] flex flex-col items-center justify-center">
                  <div className="text-3xl font-extrabold text-[#1a0a2e]">{item.stat}</div>
                  <div className="text-xs text-[#1a0a2e] uppercase tracking-widest mt-1 font-semibold">
                    {item.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>


        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-pink-200/30 rounded-full animate-float-slow blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-purple-200/20 rounded-full animate-float-delayed blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          {/* Text Content */}
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-4xl font-extrabold mb-8 text-[#1a0a2e]">
                Who <span className="text-pink-500">We</span> are
              </h2>
              <p className="text-[#1a0a2e] text-lg leading-relaxed mb-8 font-medium">
                Vidovermedia is a content execution studio built for creators and brands who want more than just views. We design, produce, and manage content systems that turn consistent attention into scalable cashflow. We don&apos;t chase trends. We build repeatable content engines designed for long-term performance.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-pink-400 to-rose-500 text-white px-8 py-3 rounded-xl font-black hover:from-pink-500 hover:to-rose-600 transition-all shadow-lg shadow-pink-500/20 hover:scale-105 animate-shimmer"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>

          {/* Info Cards */}
          <div className="space-y-4">
            {[
              {
                title: "We Don't Guess",
                description: "Every format we build is tested, refined, and scaled using real performance data — not opinions.",
              },
              {
                title: "We Don't Hand Off",
                description: "One integrated team run the entire content pipeline. No freelancers. No bottlenecks. No chaos.",
              },
              {
                title: "We Don't Chase Views",
                description: "We design content to earn — turning attention into long-term cashflow.",
              },
            ].map((card, index) => (
              <ScrollReveal key={index} delay={index * 200} direction="right">
                <div className="group bg-white/60 backdrop-blur border border-white p-6 rounded-2xl hover:bg-white hover:shadow-md hover:shadow-pink-500/5 transition-all cursor-pointer flex justify-between items-center hover:scale-[1.02]">
                  <div>
                    <h3 className="font-extrabold text-xl text-[#1a0a2e] mb-1">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#1a0a2e]">{card.description}</p>
                  </div>
                  <div className="text-[#1a0a2e]/30 group-hover:text-pink-500 group-hover:translate-x-1 transition-all">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle Section */}
      <section className="py-24 px-6 relative">
        {/* Floating blobs — no overflow-hidden so sticky works */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-pink-100/50 animate-morph animate-pulse-glow blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-100/40 animate-morph animate-pulse-glow blur-3xl pointer-events-none" style={{ animationDelay: "2s" }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold mb-4 text-[#1a0a2e]">What We Handle For You</h2>
              <p className="text-[#1a0a2e] font-medium max-w-xl mx-auto">
                We take content execution off your plate so you can stay focused on what adding your workload.
              </p>
            </div>
          </ScrollReveal>

          {/* Service Cards — scroll-driven stacking */}
          <StackingCards cards={[
              {
                number: "01",
                title: "STRATEGY &\nFORMAT DESIGN",
                description: "We analyze your niche, audience, and goals to design repeatable content formats",
                color: "bg-gradient-to-r from-purple-400 to-indigo-500",
                image: "/slidesimages/slide3.png",
              },
              {
                number: "02",
                title: "SCRIPTING &\nDIRECTION",
                description: "Performance-driven scripts designed to engage and retain.",
                color: "bg-gradient-to-r from-rose-300 to-pink-500",
                image: "/slidesimages/slide1.png",
              },
              {
                number: "03",
                title: "EDITING &\nPRODUCTION",
                description: "Polished, professional content execution delivered consistently",
                color: "bg-gradient-to-r from-emerald-200 to-teal-400",
                image: "/slidesimages/slide2.png",
              },
              {
                number: "04",
                title: "POSTING &\nMANAGEMENT",
                description: "Polished, professional content execution delivered consistently",
                color: "bg-gradient-to-r from-sky-300 to-blue-500",
                image: "/slidesimages/slide4.png",
              },
            ]} />

          <ScrollReveal delay={800}>
            <div className="mt-20 text-center">
              <h2 className="text-4xl font-extrabold mb-8 text-[#1a0a2e]">
                Join the <span className="text-[#1a0a2e]/50">team behind</span> the stories
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 to-rose-500 text-white px-10 py-4 rounded-xl font-black hover:from-pink-500 hover:to-rose-600 transition-all shadow-lg shadow-pink-500/20 hover:scale-105 animate-shimmer group"
              >
                Book a Strategy Call
                <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    clipRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    fillRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-200/40 animate-morph animate-pulse-glow blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-200/30 animate-morph animate-pulse-glow blur-3xl" style={{ animationDelay: "3s" }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold mb-4 text-[#1a0a2e]">
                Is Vidovermedia Right For You?
              </h2>
              <p className="text-[#1a0a2e] font-medium">
                Our best client relationships fit these categories. If you&apos;re in, let&apos;s have a conversation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* We Work Best With */}
            <ScrollReveal delay={200} direction="left">
              <div className="bg-white/60 p-10 rounded-3xl border border-white shadow-sm backdrop-blur-md animate-border-glow hover:scale-[1.02] transition-transform">
                <h3 className="text-2xl font-extrabold mb-8 text-[#1a0a2e]">
                  We Work Best With:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Creators building long-term brands",
                    "Founders who value systems over hacks",
                    "Teams who want consistency, not chaos",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="text-green-400 bg-green-500/20 p-1 rounded-full animate-breathe">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-[#1a0a2e] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* We're Not For */}
            <ScrollReveal delay={400} direction="right">
              <div className="bg-white/60 p-10 rounded-3xl border border-white shadow-sm backdrop-blur-md animate-border-glow hover:scale-[1.02] transition-transform">
                <h3 className="text-2xl font-extrabold mb-8 text-[#1a0a2e]">
                  We&apos;re Not For:
                </h3>
                <ul className="space-y-4">
                  {[
                    "One-off video buyers",
                    "Trend-chasers",
                    "Clients looking for cheap output",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="text-red-400 bg-red-500/20 p-1 rounded-full">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            clipRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-[#1a0a2e] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={600}>
            <p className="text-center mt-12 text-sm font-semibold text-[#1a0a2e]">
              You stay focused on growth. We handle the rest.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-100/40 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-100/30 rounded-full animate-float-delayed blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-center text-4xl font-extrabold mb-16 text-[#1a0a2e]">
              What Working With Us Feels Like
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200} direction="scale">
            <div className="rounded-[3rem] py-12 relative group">
              
            

              <div className="flex flex-col gap-6 relative z-10 w-full overflow-hidden">
                <InfiniteScroll direction="left" speed={71} items={[
                  "/thumbnails/WhatsApp Image 2026-03-04 at 00.07.51.jpeg",
                  "/thumbnails/WhatsApp Image 2026-03-04 at 00.07.51 (1).jpeg",
                  "/thumbnails/WhatsApp Image 2026-03-04 at 00.07.51 (2).jpeg",
                  "/thumbnails/WhatsApp Image 2026-03-04 at 00.07.51 (3).jpeg",
                  "/thumbnails/WhatsApp Image 2026-03-04 at 00.07.51 (4).jpeg",
                  "/thumbnails/WhatsApp Image 2026-03-04 at 00.07.51 (5).jpeg",
                  "/thumbnails/WhatsApp Image 2026-03-04 at 00.07.52.jpeg",
                  "/thumbnails/WhatsApp Image 2026-03-04 at 00.07.52 (1).jpeg",
                  "/thumbnails/WhatsApp Image 2026-03-04 at 00.07.52 (2).jpeg"
                ]} />
                <InfiniteScroll direction="right" speed={71} items={[
                  "/thumbnails/WhatsApp Image 2026-03-04 at 00.16.32.jpeg",
                  "/thumbnails/WhatsApp Image 2026-03-04 at 00.16.32 (1).jpeg",
                  "/thumbnails/WhatsApp Image 2026-03-04 at 00.17.59.jpeg",
                  "/thumbnails/WhatsApp Image 2026-03-04 at 00.27.53.jpeg",
                  "/thumbnails/WhatsApp Image 2026-03-04 at 00.27.54.jpeg",
                  "/thumbnails/WhatsApp Image 2026-03-04 at 00.27.54 (1).jpeg",
                  "/thumbnails/WhatsApp Image 2026-03-04 at 00.27.54 (2).jpeg",
                  "/thumbnails/WhatsApp Image 2026-03-04 at 00.27.54 (3).jpeg"
                ]} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

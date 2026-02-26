import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] pt-24 pb-32 px-6 overflow-hidden bg-gradient-to-br from-pink-400 via-rose-500 to-purple-500 animate-gradient">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/40 via-pink-400/20 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-purple-400/30 via-transparent to-transparent blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white">
            Create . Automate . <span className="text-pink-200">Scale.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">
            We help creators and brands build YouTube channels<br className="hidden md:block" />
            that scale driving consistent views, engagement, and monthly revenue. 🚀
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/20 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-extrabold text-white">100M+</div>
              <div className="text-xs text-white/80 uppercase tracking-widest mt-1 font-semibold">
                monthly views generated
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-extrabold text-white">10+ Years</div>
              <div className="text-xs text-white/80 uppercase tracking-widest mt-1 font-semibold">
                of YouTube expertise
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-extrabold text-white">20+</div>
              <div className="text-xs text-white/80 uppercase tracking-widest mt-1 font-semibold">
                channels scaled
              </div>
            </div>
          </div>

          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-pink-600 px-8 py-4 rounded-xl font-bold hover:bg-pink-50 transition-colors shadow-lg shadow-black/10"
            >
              Book a Free Strategy Call
            </Link>
            <Link
              href="#"
              className="bg-black/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-black/30 transition-colors shadow-sm"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-extrabold mb-8 text-[#1a0a2e]">
              Who <span className="text-pink-500">We</span> are
            </h2>
            <p className="text-[#1a0a2e]/80 text-lg leading-relaxed mb-8 font-medium">
              Vidovermedia is a content execution studio built for creators and brands who want more than just views. We design, produce, and manage content systems that turn consistent attention into scalable cashflow. We don&apos;t chase trends. We build repeatable content engines designed for long-term performance.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-pink-400 to-rose-500 text-white px-8 py-3 rounded-xl font-black hover:from-pink-500 hover:to-rose-600 transition-all shadow-lg shadow-pink-500/20"
            >
              Contact Us
            </Link>
          </div>

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
              <div
                key={index}
                className="group bg-white/60 backdrop-blur border border-white p-6 rounded-2xl hover:bg-white hover:shadow-md hover:shadow-pink-500/5 transition-all cursor-pointer flex justify-between items-center"
              >
                <div>
                  <h3 className="font-extrabold text-xl text-[#1a0a2e] mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#1a0a2e]/60">{card.description}</p>
                </div>
                <div className="text-[#1a0a2e]/30 group-hover:text-pink-500 transition-colors">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-white via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-[#1a0a2e]">What We Handle For You</h2>
            <p className="text-[#1a0a2e]/70 font-medium max-w-xl mx-auto">
              We take content execution off your plate so you can stay focused on what adding your workload.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                number: "01",
                title: "STRATEGY &\nFORMAT DESIGN",
                description: "We analyze your niche, audience, and goals to design repeatable content formats",
                color: "bg-gradient-to-br from-pink-200 to-rose-200",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfpiu-ENK9oe1UYV173-jdx0FqFa9nje023Vlq7_LAB68ZlgKeUNYrmt_stEEu9plHS0njQlasujyukAjwXHMgbk8l79vTlD_vwWf_SLG9BOjaDmLQpZpOh5uSBZjAtzBO5kHwNddeUa9LWfQiLZ4BMx7aFWJezqPlW0kZ_a1IAGgVibcTlDP5ZkJGlaqur3jMwdThp0_B0z8ZwwSOgPk1Wa_bUJNUUDL13PeX2y2lmWgaLjinVdo32P6wRc8Wgyg_ATE07jq3fG4",
              },
              {
                number: "02",
                title: "SCRIPTING &\nDIRECTION",
                description: "Performance-driven scripts designed to engage and retain.",
                color: "bg-gradient-to-br from-purple-200 to-fuchsia-200",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4U5xfX4RPl1XMWc4pnHhPJSusjBLIDLC_Vb4m5yGWgTTqaV_K9GpG4c_2Iw0i3GBoLKUpCyrFlfqXW8AhrqWRCoWGJDJOm5wPJcO6IX-P8IY-iX9HdgKnLQU-sH49q8G8IuHL85uAe5X1PMkKZa0S7aTbdfbfc1ks6yvHgvPLSHy_IBZqVySJtzl1HTCAJ9wlQGP5NVrx65VLfLhgGUlRzSU9AIPAo5voAjPwVlU9Cz4_vQVByr3B3VOWDbRRTBL254QVcp0izg8",
              },
              {
                number: "03",
                title: "EDITING &\nPRODUCTION",
                description: "Polished, professional content execution delivered consistently",
                color: "bg-gradient-to-br from-rose-200 to-pink-300",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUwgC7MhVCVvKC-XDE1g1RTEK5RCFsSjVoHNLwrZMhlCQqkv7LiDHaZ5U5NqSkWoHNJNaPFm5wkr_cY90oDZqymP1iQMOHAiySJqwG2LWmHWTJ8hBiGsY3big9DO5U2voQZny3J_UgypM7YfSRIVXgebs_lCf7YZA14RY-0tnv4Hyr5sZHImbDPncUzUegI_L014DxnvmIinqTXMeol423-8GKMyIqGPQXT9KeX4k433ixY2j5sQiYAz2lOL361Hg2J3nchZSvO8k",
              },
              {
                number: "04",
                title: "POSTING &\nMANAGEMENT",
                description: "Polished, professional content execution delivered consistently",
                color: "bg-gradient-to-br from-fuchsia-200 to-purple-200",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCk3xrMWI7kW13kLEaTowRdGkfObXpBMdlJ0zj2VRXxPEAhwFDzyXoJp08HnD8LTo-qYzPG1okLinozCggrXY9oTTIO7BQKqoBwf89IzxCJD3ogzmUMWLX-41OqHyedyweEPideyVmWIBjszXF_tHS_cd0CSuzcAnzW21TGO8aAE4R1sQVeB8IKlL00OVHMIM1YYoW_LUVVAxTuGk0LfMIAJ-aDN693lnvOcRtFfTonZ9k_idBYvlrP-6LHS3yCNdRjSW-POZzlcYo",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`${service.color} rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center overflow-hidden min-h-[350px] shadow-md border border-white/50`}
              >
                <div className="flex-1 text-[#1a0a2e]">
                  <div className="text-6xl font-black opacity-40 mb-4 text-white">
                    {service.number}
                  </div>
                  <h3 className="text-3xl font-extrabold mb-4 uppercase tracking-tight whitespace-pre-line">
                    {service.title}
                  </h3>
                  <p className="text-[#1a0a2e]/80 text-lg font-medium">{service.description}</p>
                </div>
                <div className="flex-1 flex justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={240}
                    height={240}
                    className="w-full max-w-[240px] drop-shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-4xl font-extrabold mb-8 text-[#1a0a2e]">
              Join the <span className="text-[#1a0a2e]/50">team behind</span> the stories
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 to-rose-500 text-white px-10 py-4 rounded-xl font-black hover:from-pink-500 hover:to-rose-600 transition-all shadow-lg shadow-pink-500/20"
            >
              Book a Strategy Call
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  clipRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-[#1a0a2e]">
              Is Vidovermedia Right For You?
            </h2>
            <p className="text-[#1a0a2e]/70 font-medium">
              Our best client relationships fit these categories. If you&apos;re in, let&apos;s have a conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* We Work Best With */}
            <div className="bg-white/60 p-10 rounded-3xl border border-white shadow-sm backdrop-blur-md">
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
                    <span className="text-green-400 bg-green-500/20 p-1 rounded-full">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-[#1a0a2e]/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* We're Not For */}
            <div className="bg-white/60 p-10 rounded-3xl border border-white shadow-sm backdrop-blur-md">
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
                    <span className="text-[#1a0a2e]/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center mt-12 text-sm font-semibold text-[#1a0a2e]/60">
            You stay focused on growth. We handle the rest.
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-white via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-extrabold mb-16 text-[#1a0a2e]">
            What Working With Us Feels Like
          </h2>

          <div className="bg-white/80 backdrop-blur-xl border border-pink-100 rounded-[3rem] p-12 shadow-sm">
            <h4 className="text-lg font-bold mb-8 text-[#1a0a2e]/80">Latest reviews</h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  rating: 4,
                  title: "Like an In-House Team",
                  description: "Clear strategy, strong visuals, and zero micromanagement needed.",
                  name: "Aman Verma",
                  role: "Founder, SaaS Startup",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASh-nn9SoxtGNLD4pV1unjDwP1D8ChxhpiUnyRz4aPx8KfjdX2H50FK8sbeEo0i-Ke8nxqGIUSeVMo3g0tncfAwnLzAHzuk4n6bAjvF3qpoye4M5dKz-Adta0NPtJQkIOJD1UC0LDnzelCLnErEq2zokg6yO9gp8VEH0qBfKwBW8LR3PttjmlDHfv0VG_4PPd72JHr9Oh4xn4zneTNz8Vhmn5j7F1JM8WTFlugmvV89X4HbWyJj2mElnZViKWKCJx6vB-lDU7xELE",
                },
                {
                  rating: 4,
                  title: "Smooth & Structured Process",
                  description: "No chasing, no confusion — just consistent, high-quality output.",
                  name: "Ritika Sharma",
                  role: "Marketing Director",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD04DBIGjy1EKgwhIpltb8x9_ntVkv0hi0b26E2-9YjQcojKPAc_KOjLJ1I049iwcJI0BpI71cDM27ISxeGQe0xpq49AZSjeqOcJ7X5P-dGzqpu4oiOQ-PmQ32PyrUoySU5uYq0zyHHbtQp91kJG0-gb3uQehvAF3_gUJTbrKckF6Q-jfzejorQy0rBozJJRHr1E1Ga7P16bf1YJTxu9h2to-ev_6DvXuAJROTmxGE1MTn8lsE8skp6CkX1_9X6PGG-BTrE3CWAxXE",
                },
                {
                  rating: 4,
                  title: "Designs That Convert.",
                  description: "Better visuals, higher engagement, real results.",
                  name: "Arjun Mehta",
                  role: "YouTube Creator",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnYY4ZlKgOBCTr4R4ZK62PmHkhotdbLnQ52K4NBtPlo7G7maW9g7LWwIM_381NHTJM58nOUy0LsebpK3miGoPPztCoC9xOs4os68zgnIJl3mr2BSdr2sZfETb_HDwqdvxsxQ5yXIGlVyTL_Mt4etoFBGmEZ8d3l-LS2SVnxTTArRrGpCKj4Y-NCGK_KvKAr1o4f_c1q728No9KcLJNQJ3qm4MhokAPbUctQGx_09ZmVsonRoG1qoiPwh_KCJW-_clHkiKSsjZ-mNA",
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/10 transition-all border border-pink-50 shadow-sm"
                >
                  <div>
                    <div className="flex text-pink-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={i < review.rating ? "" : "text-[#1a0a2e]/20"}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <h5 className="font-extrabold text-xl mb-3 text-[#1a0a2e]">{review.title}</h5>
                    <p className="text-[#1a0a2e]/60 text-sm leading-relaxed mb-8">
                      {review.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full ring-2 ring-pink-500/30"
                    />
                    <div>
                      <div className="font-bold text-sm text-[#1a0a2e]">{review.name}</div>
                      <div className="text-xs text-[#1a0a2e]/60">{review.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

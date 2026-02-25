import Link from "next/link";

export const metadata = {
  title: "Services - Vidovermedia",
  description: "Content systems built for scale. We build end-to-end content systems designed to grow attention, consistency, and revenue over time.",
};

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "For Creators",
      subtitle: "Build once. Scale consistently.",
      features: [
        "Content strategy & format design",
        "Scriptwriting & creative direction",
        "Editing & post-production",
        "Publishing, distribution & optimization",
      ],
      outcome: "You focus on visibility and growth. We handle everything behind the scenes.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "For Brands",
      subtitle: "Attention without the chaos.",
      features: [
        "Content strategy aligned with brand positioning",
        "Short-form & long-form production",
        "Editing, publishing, and optimization",
        "Creator-style content without creator dependency",
      ],
      outcome: "Brand visibility that compounds — without managing multiple creators or agencies.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Production Services",
      subtitle: "End-to-End Content Execution.",
      features: [
        "Script execution",
        "Video editing & motion design",
        "Short-form & long-form formats",
        "Consistent turnaround & delivery",
      ],
      outcome: "Professional content, delivered consistently — without operational headaches.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            d="M9.663 17h4.674m-4.674-2h4.674m-9.247 1.107A1 1 0 012 15.17V5.83a1 1 0 011.086-.999l10.457 1.045a1 1 0 01.857.991v1.166m-1.447 9.107L21 14V5.83l-1.086-.999-10.457 1.045a1 1 0 00-.857.991v1.166"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "AI Production",
      subtitle: "Smarter Content. Faster Execution.",
      features: [
        "AI-assisted scripting & ideation",
        "AI voiceovers (where applicable)",
        "AI-enhanced editing workflows",
        "Content repurposing at scale",
      ],
      outcome: "Faster production cycles. Lower friction. Higher leverage.",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(99,102,241,0.3)_0%,_transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(236,72,153,0.3)_0%,_transparent_50%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 block">
            Services
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#6366f1] mb-8 leading-tight">
            Content Systems Built for Scale
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            At Vidovermedia, we don&apos;t offer disconnected services. We build end-to-end content systems designed to grow attention, consistency, and revenue over time.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            Whether you&apos;re a creator, a brand, or a company looking for production support, our role is simple: we take execution off your plate — and make content work harder.
          </p>
        </div>
      </section>

      {/* Service Grid */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <article
                key={index}
                className="bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 p-10 rounded-[40px] shadow-xl flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4 text-[#6366f1]">
                  {service.icon}
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>
                <h3 className="text-xl font-bold mb-6">{service.subtitle}</h3>

                <div className="mb-8">
                  <span className="inline-block border border-gray-300 px-3 py-1 rounded-md text-sm font-semibold mb-4">
                    What We Handle:
                  </span>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-sm mb-2">Outcome:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.outcome}
                  </p>
                </div>

                <div className="mt-auto">
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-[#6366f1] text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors group"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How Engagements Work */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
            How Engagements Work
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            We don&apos;t sell one-off deliverables. We work through ongoing partnerships, because content systems need time to compound.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {["Clear scope", "Predictable execution", "Results-driven collaboration"].map(
              (item, index) => (
                <div key={index} className="flex items-center gap-2 font-medium text-slate-700">
                  <span className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </span>
                  {item}
                </div>
              )
            )}
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-[#6366f1]">
            Ready to Build a Content System That Pays Back?
          </h3>
        </div>
      </section>
    </main>
  );
}

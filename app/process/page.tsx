import Link from "next/link";
import Image from "next/image";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      icon: "🚀",
      color: "from-pink-500 to-pink-600",
      description: "We dive deep into your brand, goals, and target audience. We identify the core message you want to convey and establish the project scope.",
      features: ["Needs Assessment", "Target Audience Analysis"],
    },
    {
      number: "02",
      title: "Strategy & Scripting",
      icon: "📝",
      color: "from-purple-500 to-purple-600",
      description: "Our creative team develops a data-driven content strategy and writes compelling scripts designed to hook viewers in the first 3 seconds.",
      features: ["Storyboarding", "Hook Optimization"],
    },
    {
      number: "03",
      title: "Production & Editing",
      icon: "🎥",
      color: "from-pink-500 to-pink-600",
      description: "We handle the filming or utilize your raw footage. Our editors then apply high-retention editing styles, sound design, and motion graphics.",
      features: ["4K Production", "Motion Graphics"],
    },
    {
      number: "04",
      title: "Quality Control",
      icon: "✓",
      color: "from-indigo-500 to-indigo-600",
      description: "Every frame is reviewed. We ensure the content aligns with platform guidelines and your brand voice before you ever see the first draft.",
      features: ["Internal Review", "Client Feedback Loop"],
    },
    {
      number: "05",
      title: "Delivery & Optimization",
      icon: "📤",
      color: "from-blue-500 to-blue-600",
      description: "We deliver the final assets formatted for each platform. We also provide thumbnail variations and metadata for maximum reach.",
      features: ["Multi-format Export", "Performance Tracking"],
    },
  ];

  const features = [
    {
      icon: "💬",
      title: "Transparent Communication",
      description: "Dedicated Slack channel and weekly updates so you never have to wonder where your project stands.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "⚡",
      title: "Fast Turnaround",
      description: "Optimized workflows allow us to deliver high-quality edits in as little as 48 hours for short-form content.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: "📊",
      title: "Data-Driven Decisions",
      description: "We use retention graphs and A/B testing data to constantly improve the creative direction of your videos.",
      color: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-300/30 blur-[120px] pointer-events-none rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-300/30 blur-[120px] pointer-events-none rounded-full"></div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
          <div className="flex-1 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-white/80 text-pink-600 text-xs font-bold uppercase tracking-wider w-fit shadow-sm">
              <span className="size-2 rounded-full bg-pink-500 animate-pulse"></span>
              Workflow
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight text-[#1a0a2e]">
              From Concept to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500">Viral Reality</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#1a0a2e]/70 max-w-lg leading-relaxed font-medium">
              We have refined our process over hundreds of projects to ensure efficiency and creativity. Here is how we bring your vision to life.
            </p>
            
            <div className="flex gap-4 pt-4">
              <Link
                href="/case-studies"
                className="h-12 px-8 rounded-xl bg-gradient-to-r from-pink-400 to-rose-500 text-white font-black hover:from-pink-500 hover:to-rose-600 transition-all shadow-lg flex items-center shadow-pink-500/20"
              >
                View Portfolio
              </Link>
              <button className="h-12 px-8 rounded-xl bg-white/60 border border-white/80 hover:bg-white text-[#1a0a2e] font-bold transition-colors flex items-center gap-2 shadow-sm">
                <span className="text-2xl text-pink-600">▶</span>
                See it in action
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-300/40 via-transparent to-purple-300/40 rounded-full blur-3xl"></div>
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white/80 border-2 border-white/80 shadow-xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3MGjg_miYJ4NzEzj3HgEkwNOSJAqU1SueA0mhzqXL38-RwRoCHV3dO2LHMSfSDKq4uNx7qU1QwjWpEXe0JgnDc2-mdtlTvy99gJLxM3OTCSIjSMt-sJvnJvwDdsdKzER9Zapud5YC71vBiNXKf6e0PRwo_LRhewA-d5OUB_ECyIVtPIQ4rwoX4JZskjd8ddbMKKgVQoWJGLDRgjVP2IwIzjWam-BJRiM5efmpZJplJrFj6nSSJHcHKzEKUkzsnyMPR9WnetUcv_U"
                alt="Creative technology workspace"
                width={800}
                height={600}
                className="w-full h-full object-cover opacity-90 mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="px-6 py-12 max-w-7xl mx-auto border-y border-white/40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative bg-white/60 p-8 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-pink-500/10 border border-white/80 hover:-translate-y-2 transition-all duration-300 shadow-sm ${
                index >= 3 ? "lg:translate-x-1/2" : ""
              }`}
            >
              <div className="absolute -top-6 left-8 bg-white border border-white/80 p-1 rounded-2xl shadow-sm">
                <div className={`size-14 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center shadow-lg text-3xl`}>
                  {step.icon}
                </div>
              </div>
              
              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#1a0a2e]">{step.title}</h3>
                  <span className="text-6xl font-black text-[#1a0a2e]/5 absolute right-4 top-4 select-none group-hover:text-[#1a0a2e]/10 transition-colors">
                    {step.number}
                  </span>
                </div>
                
                <p className="text-[#1a0a2e]/70 leading-relaxed font-medium">
                  {step.description}
                </p>
                
                <ul className="space-y-2 mt-2">
                  {step.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-[#1a0a2e]/80">
                      <span className="text-green-500 text-lg">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-[#1a0a2e]">
            Why Trust Our Workflow?
          </h2>
          <p className="text-[#1a0a2e]/60 max-w-2xl mx-auto text-lg font-medium">
            We don&apos;t just edit videos; we engineer content for growth. Our process is built on data, transparency, and speed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/60 border border-white p-6 rounded-2xl hover:bg-white hover:-translate-y-1 transition-all flex flex-col items-center text-center gap-4 shadow-sm"
            >
              <div className={`size-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-2 text-3xl shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a0a2e]">{feature.title}</h3>
              <p className="text-sm text-[#1a0a2e]/70 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-pink-400 via-rose-500 to-purple-500 text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 size-64 bg-white/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 size-64 bg-purple-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              Ready to start your project?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl font-medium">
              Stop guessing and start growing. Let&apos;s create content that resonates with your audience and drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
              <Link
                href="/contact"
                className="h-14 px-8 rounded-xl bg-white text-pink-600 font-bold hover:bg-pink-50 transition-colors text-lg shadow-lg flex items-center justify-center"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/services"
                className="h-14 px-8 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 hover:bg-white/30 transition-colors text-lg flex items-center justify-center font-bold"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

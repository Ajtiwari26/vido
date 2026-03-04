import Link from "next/link";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Michael Carter",
      role: "Cosmetic Dentist & Content Creator",
      text: "VidOver Media helped turn my YouTube channel into a serious growth and revenue channel. Their team implemented a clear strategy, optimized thumbnails and built a consistent publishing schedule.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Daniel Foster",
      role: "Finance YouTube Creator",
      text: "In just a few weeks, my finance channel crossed nearly 1 million views and started generating consistent revenue. Their understanding of YouTube growth and audience psychology is exceptional.",
      highlight: "crossed nearly 1 million views and started generating consistent revenue.",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      name: "Ryan Mitchell",
      role: "Digital Entrepreneur",
      text: "They handled everything - niche research, scripting, editing, and publishing. The automation system they built saved me countless hours and helped the channel generate consistent income.",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      name: "Dr. Kevin Morales",
      role: "Healthcare Creator",
      text: "Their team helped me position myself as an authority in my niche. The channel now generates consistent views, subscribers, and new audience opportunities.",
      image: "https://randomuser.me/api/portraits/men/51.jpg"
    },
    {
      name: "Jason Reynolds",
      role: "Founder, Digital Growth Co.",
      text: "Working with VidOver Media was one of the best decisions for our brand. They understood our audience and created a repeatable content system that delivers results.",
      image: "https://randomuser.me/api/portraits/men/62.jpg"
    },
    {
      name: "Andrew Collins",
      role: "Finance Influencer",
      text: "VidOver Media doesn't just edit videos — they build scalable YouTube systems. My channel's performance improved significantly and their exact research is top tier.",
      image: "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
      name: "Sarah Jenkins",
      role: "Tech Reviewer",
      text: "Their team helped me position myself as an authority in my niche. The channel now generates consistent views, subscribers, and brand deals.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Marcus Thorne",
      role: "Gaming Creator",
      text: "The biggest difference was their focus on packaging and strategy. My CTR improved, watch time increased, and the channel started growing predictably.",
      image: "https://randomuser.me/api/portraits/men/82.jpg"
    },
    {
      name: "Nathan Walker",
      role: "Entrepreneur & Creator",
      text: "VidOver Media helped me scale my personal brand through YouTube, automation system made the entire process seamless and efficient.",
      image: "https://randomuser.me/api/portraits/men/29.jpg"
    }
  ];

  return (
    <main className="pt-20 pb-32 relative overflow-hidden">
      {/* Background soft glowing effects to blend with globals.css body gradient */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-purple-300/30 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-pink-300/30 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 pt-16 lg:pt-24">
        
        {/* Intro Section */}
        <div className="flex flex-col items-center text-center mb-24 animate-slide-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/40 backdrop-blur-md px-5 py-2 mb-8 shadow-sm">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
             </span>
             <span className="text-[11px] font-black text-[#1a0a2e] uppercase tracking-widest">Client Success</span>
           </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-[#1a0a2e] drop-shadow-sm">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Testimonials</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-[#1a0a2e] font-semibold leading-relaxed">
            Trusted by creators, professionals, and brands worldwide. See how we turn channels into serious growth and revenue engines.
          </p>
        </div>

        {/* Analytics Grid Section */}
        <div className="mb-32 relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-pink-400/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="space-y-32 relative">
            {[
              {
                id: 1,
                niche: "FINANCE & INVESTING",
                stats: [
                  { value: "+578%", label: "VIEWS (90D)" },
                  { value: "944K+", label: "TOTAL VIEWS" },
                  { value: "$9K+", label: "REVENUE" }
                ],
                title: "From Stagnant to 1 Million+ Views",
                background: "Channel plateaued for 6 months. Audience retention was dropping early.",
                solution: "Introduced high-contrast thumbnails, re-structured hooks, tightened pacing.",
                image: "/images/testimonial/growth1.jpeg",
                color: "from-pink-500 to-rose-500",
                glow: "bg-pink-400/20"
              },
              {
                id: 2,
                niche: "TECH EDUCATION",
                stats: [
                  { value: "2M+", label: "VIEWS (48H)" },
                  { value: "34K+", label: "WATCH HOURS" },
                  { value: "MASSIVE", label: "SUB SPIKE" }
                ],
                title: "Scaling to 2 Million Views Overnight",
                background: "Great content, but thumbnails weren't getting clicked. Dead in algorithm.",
                solution: "Implemented 3-step 'Concept-First' framework focusing on viewer desire.",
                image: "/images/testimonial/growth2.jpeg",
                color: "from-purple-500 to-fuchsia-500",
                glow: "bg-purple-400/20"
              },
              {
                id: 3,
                niche: "ENTREPRENEURSHIP",
                stats: [
                  { value: "1.2M+", label: "MONTHLY VIEWS" },
                  { value: "100K", label: "BASELINE" },
                  { value: "$15K+", label: "MONTHLY REV" }
                ],
                title: "Consistent Cashflow Engine Built",
                background: "Views inconsistent. Some hit 100K, others scraped 5K.",
                solution: "Created repeatable formats and storytelling loops for high retention.",
                image: "/images/testimonial/growth3.jpeg",
                color: "from-blue-500 to-indigo-500",
                glow: "bg-blue-400/20"
              },
              {
                id: 4,
                niche: "LIFESTYLE BRAND",
                stats: [
                  { value: "+400%", label: "NEW RETENTION" },
                  { value: "5x", label: "COMMUNITY ENGAGEMENT" },
                  { value: "SIGNED", label: "BRAND DEALS" }
                ],
                title: "Building Deep Audience Loyalty",
                background: "High subscribers but low returning viewers. Fading connection.",
                solution: "Shifted to personality-driven edits with community callbacks.",
                image: "/images/testimonial/growth4.jpeg",
                color: "from-emerald-400 to-teal-500",
                glow: "bg-emerald-400/20"
              }
            ].map((caseStudy) => (
              <div key={caseStudy.id} className="relative group w-full">
                
                {/* Massive Background Glow */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full ${caseStudy.glow} blur-[120px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700 -z-20`}></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white/40 backdrop-blur-3xl rounded-[3rem] border border-white p-6 md:p-10 shadow-2xl relative overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-2">
                  
                  {/* Background Watermark Number */}
                  <div className="absolute -bottom-10 -right-10 text-[24rem] font-black text-[#1a0a2e]/[0.03] pointer-events-none select-none z-0 tracking-tighter leading-none">
                    0{caseStudy.id}
                  </div>

                  {/* Left Column (Image & Main Stat) - Takes up 7 cols */}
                  <div className="lg:col-span-7 flex flex-col gap-6 z-10 relative">
                    
                    {/* Visual Asset Container */}
                    <div className="relative rounded-[2rem] overflow-hidden group/image w-full bg-[#1a0a2e]/90 flex items-center justify-center border border-white/50 shadow-inner h-full min-h-[300px] md:min-h-[400px] p-2">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/60 via-transparent to-transparent z-10 opacity-70"></div>
                      <Image 
                        src={caseStudy.image} 
                        alt={caseStudy.title}
                        layout="fill"
                        objectFit="contain"
                        className="opacity-90 group-hover/image:opacity-100 group-hover/image:scale-[1.02] transition-all duration-700 rounded-[1.5rem]"
                        priority={caseStudy.id <= 2}
                      />
                       
                       {/* Floating Metric Dashboard */}
                       <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/95 backdrop-blur-2xl rounded-2xl p-4 md:p-6 shadow-2xl border border-white transform translate-y-8 opacity-0 group-hover/image:translate-y-0 group-hover/image:opacity-100 transition-all duration-500 flex justify-between divide-x divide-gray-100">
                         {caseStudy.stats.map((stat, i) => (
                           <div key={i} className={`flex-1 flex flex-col items-center justify-center ${i !== 0 ? 'pl-2 md:pl-4' : ''}`}>
                             <div className={`text-2xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-br ${caseStudy.color} mb-1 drop-shadow-sm text-center`}>
                               {stat.value}
                             </div>
                             <div className="text-[#1a0a2e] font-black uppercase tracking-widest text-[8px] md:text-[10px] text-center">
                               {stat.label}
                             </div>
                           </div>
                         ))}
                       </div>
                    </div>

                  </div>

                  {/* Right Column (Text & Context) - Takes up 5 cols */}
                  <div className="lg:col-span-5 flex flex-col justify-between z-10 pt-2 pb-4">
                    
                    <div className="mb-10 lg:mb-0">
                      <div className="flex items-center gap-3 mb-6">
                         <span className={`px-4 py-2 rounded-full bg-gradient-to-r ${caseStudy.color} text-white font-black text-[10px] uppercase tracking-widest shadow-lg shadow-pink-500/20`}>
                           {caseStudy.niche}
                         </span>
                      </div>
                      
                      <h3 className="text-4xl md:text-[2.75rem] font-black text-[#1a0a2e] leading-[1.05] tracking-tight mb-8">
                        {caseStudy.title}
                      </h3>
                    </div>

                    <div className="space-y-4 mt-auto">
                      {/* Modern Info Boxes */}
                      <div className="bg-white/70 hover:bg-white transition-colors duration-300 rounded-3xl p-6 border border-white shadow-sm hover:shadow-lg relative overflow-hidden group/problem">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-red-100 rounded-full blur-2xl -mr-12 -mt-12 pointer-events-none opacity-50 group-hover/problem:opacity-100 transition-opacity"></div>
                        <h4 className="flex items-center gap-2 font-black text-[#1a0a2e] uppercase tracking-wide text-xs mb-3 relative z-10">
                           <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></div> Context
                        </h4>
                        <p className="text-[#1a0a2e] font-semibold text-sm leading-relaxed relative z-10">
                          {caseStudy.background}
                        </p>
                      </div>

                      <div className="bg-[#1a0a2e] hover:bg-black transition-colors duration-300 rounded-3xl p-6 border border-[#1a0a2e] shadow-xl group/solution relative overflow-hidden">
                        <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${caseStudy.color} rounded-full blur-[40px] opacity-20 group-hover/solution:opacity-40 transition-opacity translate-x-10 translate-y-10 pointer-events-none`}></div>
                        <h4 className="flex items-center gap-2 font-black text-white uppercase tracking-wide text-xs mb-3 relative z-10">
                           <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${caseStudy.color}`}></div> Solution Executed
                        </h4>
                        <p className="text-white/80 font-semibold text-sm leading-relaxed relative z-10">
                          {caseStudy.solution}
                        </p>
                      </div>
                    </div>
                    
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white/60 backdrop-blur-md rounded-[2rem] p-8 border border-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(236,72,153,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col group relative overflow-hidden">
              {/* Subtle hover glow inside card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/0 via-purple-100/0 to-blue-100/0 group-hover:from-pink-100/60 group-hover:to-purple-100/60 transition-all duration-500 z-0 pointer-events-none"></div>

              <div className="relative z-10 flex-1">
                {/* Quote Icon */}
                <div className="opacity-20 mb-6 transform group-hover:scale-110 transition-transform origin-top-left">
                   <svg className="w-10 h-10 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                   </svg>
                </div>
                <p className="text-[#1a0a2e] text-[16px] font-medium leading-relaxed mb-8 relative z-10">
                  {testimonial.text}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto relative z-10 pt-6 border-t border-pink-100/50">
                <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-sm ring-2 ring-transparent group-hover:ring-pink-300 transition-all">
                  <Image src={testimonial.image} alt={testimonial.name} width={56} height={56} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#1a0a2e] text-base group-hover:text-pink-600 transition-colors">{testimonial.name}</h4>
                  <p className="text-[#1a0a2e] text-xs font-bold uppercase tracking-wide mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

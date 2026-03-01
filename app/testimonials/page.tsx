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
             <span className="text-[11px] font-black text-[#1a0a2e]/70 uppercase tracking-widest">Client Success</span>
           </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-[#1a0a2e] drop-shadow-sm">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Testimonials</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-[#1a0a2e]/70 font-semibold leading-relaxed">
            Trusted by creators, professionals, and brands worldwide. See how we turn channels into serious growth and revenue engines.
          </p>
        </div>

        {/* Big Analytics Card 1 */}
        <div className="mb-32 relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
          {/* Card Border Glow */}
          <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-r from-pink-300 to-purple-300 opacity-40 blur-xl animate-pulse-glow pointer-events-none"></div>
          
          <div className="relative rounded-[2.5rem] bg-white/60 backdrop-blur-2xl border border-white p-8 md:p-12 overflow-hidden shadow-[0_20px_60px_-15px_rgba(236,72,153,0.1)]">
            {/* Top Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 bg-white/80 rounded-[1.5rem] p-6 border border-white shadow-sm">
              <div className="text-center md:border-r border-pink-100 last:border-0 relative">
                <p className="text-sm text-[#1a0a2e]/60 mb-1 font-bold tracking-wide uppercase">Views</p>
                <div className="flex items-center justify-center gap-2">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#1a0a2e]">944.3K</h3>
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shadow-md shadow-green-500/20 text-white">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                  </div>
                </div>
                <p className="text-[10px] text-[#1a0a2e]/50 mt-2 font-bold italic">578% more than previous 90 days</p>
              </div>
              <div className="text-center md:border-r border-pink-100 last:border-0 relative">
                <p className="text-sm text-[#1a0a2e]/60 mb-1 font-bold tracking-wide uppercase">Watch hours</p>
                <div className="flex items-center justify-center gap-2">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#1a0a2e]">76.1K</h3>
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shadow-md shadow-green-500/20 text-white">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                  </div>
                </div>
                <p className="text-[10px] text-[#1a0a2e]/50 mt-2 font-bold italic">593% more than previous 90 days</p>
              </div>
              <div className="text-center md:border-r border-pink-100 last:border-0 relative">
                <p className="text-sm text-[#1a0a2e]/60 mb-1 font-bold tracking-wide uppercase">Subscribers</p>
                <div className="flex items-center justify-center gap-2">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#1a0a2e]">+1.1K</h3>
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shadow-md shadow-green-500/20 text-white">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                  </div>
                </div>
                <p className="text-[10px] text-[#1a0a2e]/50 mt-2 font-bold italic">276% more than previous 90 days</p>
              </div>
              <div className="text-center relative">
                <p className="text-sm text-[#1a0a2e]/60 mb-1 font-bold tracking-wide uppercase">Revenue</p>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#1a0a2e]">$9,009.83</h3>
              </div>
            </div>

            {/* Content Bottom Section */}
            <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl text-[#1a0a2e] font-black leading-tight mb-8">
                  Scaled a YouTube Channel to $9,009 Revenue in 90 Days
                </h2>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-white/80 border border-pink-200 rounded-2xl px-6 py-4 shadow-sm">
                    <p className="text-2xl font-black text-pink-600 text-center">944K+</p>
                    <p className="text-[11px] text-[#1a0a2e]/50 text-center font-bold uppercase tracking-widest mt-1">Views</p>
                  </div>
                  <div className="bg-white/80 border border-purple-200 rounded-2xl px-6 py-4 shadow-sm">
                    <p className="text-2xl font-black text-purple-600 text-center">76K</p>
                    <p className="text-[11px] text-[#1a0a2e]/50 text-center font-bold uppercase tracking-widest mt-1">Watch Hours</p>
                  </div>
                  <div className="bg-white/80 border border-indigo-200 rounded-2xl px-6 py-4 shadow-sm">
                    <p className="text-2xl font-black text-indigo-600 text-center">1.1K</p>
                    <p className="text-[11px] text-[#1a0a2e]/50 text-center font-bold uppercase tracking-widest mt-1">Subscribers</p>
                  </div>
                </div>

                <p className="text-[#1a0a2e]/70 text-lg md:text-xl leading-relaxed mb-10 font-medium">
                  Using our automation system, we handled strategy, scripting, thumbnails, and publishing to drive consistent growth and monetization.
                </p>

                <button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-2xl transition-all font-bold text-white shadow-xl shadow-pink-500/20 group">
                  View Growth Breakdown
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
              
              {/* Abstract Graph Representation */}
              <div className="w-full md:w-[45%] h-56 md:h-72 relative bg-white/40 rounded-3xl border border-white outline outline-1 outline-pink-100 shadow-inner overflow-hidden flex items-end mt-8 md:mt-0">
                <div className="absolute top-0 w-full flex flex-col justify-between h-full p-6 pointer-events-none opacity-10">
                  <div className="w-full border-b border-[#1a0a2e]"></div>
                  <div className="w-full border-b border-[#1a0a2e]"></div>
                  <div className="w-full border-b border-[#1a0a2e]"></div>
                  <div className="w-full border-b border-[#1a0a2e]"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-full opacity-30 bg-gradient-to-t from-blue-300 to-transparent pointer-events-none"></div>
                {/* SVG Graph mimics the massive spike */}
                <svg className="w-full h-full drop-shadow-md pb-4 px-2" viewBox="0 0 400 150" preserveAspectRatio="none">
                  <path d="M0,150 L0,140 L100,140 L110,30 L120,40 L130,80 L140,85 L150,90 L160,85 L170,60 L180,50 L190,40 L200,60 L210,60 L220,50 L230,60 L240,45 L250,55 L260,50 L270,60 L280,65 L290,55 L300,60 L310,70 L320,70 L330,65 L340,30 L350,45 L360,55 L370,40 L380,60 L390,80 L400,100 L400,150 Z" fill="rgba(59, 130, 246, 0.2)" />
                  <path d="M0,140 L100,140 L110,30 L120,40 L130,80 L140,85 L150,90 L160,85 L170,60 L180,50 L190,40 L200,60 L210,60 L220,50 L230,60 L240,45 L250,55 L260,50 L270,60 L280,65 L290,55 L300,60 L310,70 L320,70 L330,65 L340,30 L350,45 L360,55 L370,40 L380,60 L390,80 L400,100" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Big Analytics Card 2 */}
        <div className="mb-32 relative animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative rounded-[2.5rem] bg-white/60 backdrop-blur-2xl border border-white p-8 md:p-12 overflow-hidden shadow-[0_20px_60px_-15px_rgba(236,72,153,0.1)]">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-10 w-full justify-between">
               <div className="flex items-center gap-4">
                 <div className="w-14 h-14 bg-pink-100/80 text-pink-600 rounded-2xl flex items-center justify-center shadow-inner border border-pink-200">
                   <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                 </div>
                 <div>
                    <h3 className="text-3xl font-black text-[#1a0a2e]">Massive Audience Reach</h3>
                    <p className="text-[#1a0a2e]/60 text-sm font-bold mt-1">Consistent growth over 12 months</p>
                 </div>
               </div>
            </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white/80 rounded-[1.5rem] p-6 border border-white shadow-sm">
              <div className="text-center md:border-r border-pink-100 last:border-0 relative">
                <p className="text-sm text-[#1a0a2e]/60 mb-1 font-bold tracking-wide uppercase">Views</p>
                <div className="flex items-center justify-center gap-2">
                  <h3 className="text-3xl md:text-5xl font-extrabold text-[#1a0a2e]">12.1M</h3>
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center shadow-md shadow-yellow-400/20 text-white">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                </div>
              </div>
              <div className="text-center md:border-r border-pink-100 last:border-0 relative flex flex-col justify-center">
                <p className="text-sm text-[#1a0a2e]/60 mb-1 font-bold tracking-wide uppercase">Watch time (hours)</p>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#1a0a2e]">811.4K</h3>
              </div>
              <div className="text-center md:border-r border-pink-100 last:border-0 relative flex flex-col justify-center">
                <p className="text-sm text-[#1a0a2e]/60 mb-1 font-bold tracking-wide uppercase">Subscribers</p>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#1a0a2e]">+17.7K</h3>
              </div>
              <div className="text-center relative flex flex-col justify-center">
                <p className="text-sm text-[#1a0a2e]/60 mb-1 font-bold tracking-wide uppercase">Revenue</p>
                <h3 className="text-3xl md:text-4xl font-extrabold text-green-600">$43,394.49</h3>
              </div>
            </div>
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
                <p className="text-[#1a0a2e]/80 text-[16px] font-medium leading-relaxed mb-8 relative z-10">
                  {testimonial.text}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto relative z-10 pt-6 border-t border-pink-100/50">
                <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-sm ring-2 ring-transparent group-hover:ring-pink-300 transition-all">
                  <Image src={testimonial.image} alt={testimonial.name} width={56} height={56} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#1a0a2e] text-base group-hover:text-pink-600 transition-colors">{testimonial.name}</h4>
                  <p className="text-[#1a0a2e]/60 text-xs font-bold uppercase tracking-wide mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

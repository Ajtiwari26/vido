import Link from "next/link";
import Image from "next/image";

export default function CaseStudies() {
  const projects = [
    {
      title: "MrBeast Challenge",
      category: "Entertainment • Creator Collaboration",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAr4PnZFljQooE7aaSXqpi8pVA5OgpZm0pwP7hWX-evp79W8oe2ONE5g1WzmEPWVMPBYCm90bGjiGiix4z5hQJH9R_iGO_juVR1wxUVxbf0MPd0vBQMZ9dbqEBGvMGIVqqJS-sbDlOMDazlc32ipLSE-eFkdNnGd3hrVRugYlZC1HWznz7z_qHB1L9edkWbXPMOPlmsRZxnmvjXsbZSByV2Gd-9e2_TZ97cWubXRmtAHH3w6o2l7v2yXFyKRL0emIlZCZPSxR5hXeo",
      badge: "+12M VIEWS",
      challenge: "Retain 80% audience through the 20-minute mark.",
      result: "Highest retention in channel history.",
    },
    {
      title: "TechReview Unboxing",
      category: "Tech • Product Showcase",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJJ8RHRCBO8usC25IvFKeBSKgOTEd4spRA21hzOngDHH1Z12cLRi-vvNhIH3hkcyzrfSORvxXlZ5VU7qGyCJvQbUZTeDqqMdkTyy58-xlQp8eSlgnWCbz_czp9Sy1kHvxkLepFjsTZ9SCtbjKtqSdTfgOmCs9xa1gO-KrfE-hNlI9NhGB8qx7g_bGBFTa7ws-qLOskOwv8Xd_NtZ-DGhFrPAPbJOAKZAk9H5rKqXL3LEvES5rhLagYMRgBZwz8h380a87s8WFgPmY",
      badge: "15% CTR UP",
      challenge: "Make technical specs engaging for casuals.",
      result: "Video trended #1 on Gaming category.",
    },
    {
      title: "Fitness App Ad",
      category: "Commercial • Health & Tech",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQmqyRiLfAWPMJTJcqXIOnsTEQzxGdGwBTXm9D3CuekxSMHW7DN0tF2hWqxh-SdgmmndXEZLrHPmjq1F7t8CzQKSXSZohjBN-yDUgOTJaXbFsvgtVdK9aGSRMZtOI59G61kmbqB21zs3lC2uQlLnQPs6ZTUbVAwOG09EbLQk6l8z0dM5YxyaeuD55G5i_-2mM0H2AK3_0Xadf3s5_7y0hXNOdOZNSxycXHe0B4HM1YPGcsYEx0GOVmISILCWjbH1qvTbpqSJB8_nc",
      badge: "+300K SIGNUPS",
      challenge: "Convert viewers to app installers in 30s.",
      result: "Lowest CPA in Q4 campaign history.",
    },
    {
      title: "Lost LeBlanc Travel",
      category: "Travel • Cinematic Storytelling",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqfjjpVOdCyggVigMYkMDg6TYWZaT_zBlwi8AMWpB_D2IqehM30CJ7bbYIZIs85miA6umVzI46Lzmz606F-8650fBD2vEdeXlmrMJvqVwHbL-GRUDCBxAsKvPTSeF__C7J6UNNJcR0Onx34YVbNEKqBzy7m5ts-IzY-Ui7-GpYe8xi4xjpz89-4bdECeh3foa_x0xgiqayoXw-Jgni9dRBgpY7kEzdj19_r2_XNPtCvoA_9wb9o6w02x8vUgE9tb1DNMCJsyJXdyA",
      badge: "AWARD WINNER",
      challenge: "Capture the essence of Bali in 4K RAW.",
      result: "Won 'Best Cinematography' 2023.",
    },
    {
      title: "Crypto Explained",
      category: "Finance • Educational Motion",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3EuELNd9yRfN_1XxnH1wJ4lNfRlPxy1E2aXiG_50Obc4yPnb5egcvqO3l8AEpCyi1A5uqz2fd5-B_TjlADFFwEgUTUi4kaesHQAbfYtCD6pgh_WuTSuDwQ1-2zhfUkmQ95K7jmJG9tjVPVqGOiVclDC6Q0b0f_s1XlIBVffTdx7EySBsbTFVmcrMa5_6yy7bdmdybSf_z3ihvfv51F0opelytWWJlAr32xdF7YmnozzWu_J8yyOls5JnYQ_cehjLv0DKpLxlR0z8",
      badge: "+50K NEW USERS",
      challenge: "Simplify blockchain for total beginners.",
      result: "Most shared educational video on platform.",
    },
    {
      title: "Ninja Gaming Highlights",
      category: "Gaming • Fast-Paced Edit",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlQkLCZJ3gesLUZp_rOv0rGEJy2DWsC4rbhHeTfDgeVLwbt32RWj8uI2V4vF6tJggu2GdB-PIrdCbSRV9Nq3aDqYrbPurjc2Ug4hEp551wZ249brQKMmtKfN8BtCAodYZdSNtHi5SjkITB7mIQ-WMZmr0Pg-b9-UdpYj_gydclyNPDLBDlBK3AdyqemblVz0dc3NNBhl57xVpvL2VoBzCAt-pI5mnoCuKTfYthkSqU0U1UimGuYZrb0ExyOw1YkcBtl99OpCvPAk0",
      badge: "VIRAL HIT",
      challenge: "Edit 8 hours of stream into 10 high-octane minutes.",
      result: "4M views within first 24 hours.",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-20 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-purple-400/20 blur-[120px] pointer-events-none rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[600px] h-[600px] bg-blue-400/20 blur-[120px] pointer-events-none rounded-full"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-white/80 backdrop-blur px-4 py-1.5 mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              <span className="text-[11px] font-bold text-pink-600 uppercase tracking-widest">New Case Studies Added</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-8">
              Results Driven <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600">Video Portfolio</span>
            </h1>
            
            <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
              High-impact video content that drives tangible results for top creators and brands. Browse our latest work and see the metrics behind the magic.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white/80 backdrop-blur border border-purple-200 shadow-sm rounded-2xl">
              <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-bold shadow-md transition-all hover:shadow-lg">
                All Projects
              </button>
              <button className="px-6 py-2.5 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-purple-50 text-sm font-bold transition-all">
                Short Form
              </button>
              <button className="px-6 py-2.5 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-purple-50 text-sm font-bold transition-all">
                Long Form
              </button>
              <button className="px-6 py-2.5 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-purple-50 text-sm font-bold transition-all">
                Commercials
              </button>
              <button className="px-6 py-2.5 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-purple-50 text-sm font-bold transition-all">
                Documentary
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border-2 border-purple-200 shadow-lg hover:shadow-2xl hover:border-pink-300 transition-all duration-300">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-md px-3 py-1.5 text-xs font-black text-green-600 shadow-lg border border-white">
                      {project.badge}
                    </span>
                  </div>
                  
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center text-pink-500 shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col flex-1 p-6 bg-gradient-to-br from-white to-purple-50">
                  <div className="mb-5">
                    <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-purple-600 transition-colors">{project.title}</h3>
                    <p className="text-sm font-medium text-gray-500 mt-1">{project.category}</p>
                  </div>
                  
                  <div className="mt-auto grid grid-cols-2 gap-6 pt-6 border-t border-purple-100">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1.5">Challenge</p>
                      <p className="text-xs text-gray-700 font-medium line-clamp-2">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-pink-600 font-bold mb-1.5">The Result</p>
                      <p className="text-xs text-gray-900 font-bold">{project.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Case Study */}
          <div className="mt-32">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl font-black text-gray-900 whitespace-nowrap">Featured Case Study</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-purple-200 to-transparent"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white border-2 border-purple-200 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative min-h-[400px] lg:min-h-full overflow-hidden group">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvvgGck2xQ_voxVZG0OeQpSkhBBsSMzCYzvn3DiB8jw_KbHbENpCBMZYuQQZQ6rPWR6HVTVXggm-zSBclESxX2yOtW4_PepablplpzYC-o4COqRYbghf_MLTpitun3VIO3uhIkUHKcJGG8jWDx5-i3soyK3GkZDVVDHh8meNqqVxa-sHiEgVkrYvlw-aacxdMoZF0iuWA-Q6imlIz4HtZ7_JFe4-yL38mFHtDtZ5oQepZXIbyJ7eF_XjOXVb_pYdMRSxErjI-DAtE"
                    alt="Behind the scenes"
                    width={800}
                    height={600}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="flex flex-col justify-center p-10 lg:p-16 bg-gradient-to-br from-white to-blue-50">
                  <div className="mb-8 flex items-center gap-3">
                    <span className="rounded-full bg-purple-100 px-4 py-1.5 text-xs font-black text-purple-600 border border-purple-200 tracking-wider">DOCUMENTARY</span>
                    <span className="text-xs font-bold text-gray-500">Published 2 days ago</span>
                  </div>
                  
                  <h3 className="text-4xl font-black text-gray-900 mb-6 leading-tight">The Evolution of AI Content Production</h3>
                  
                  <p className="text-gray-600 text-lg mb-10 leading-relaxed font-medium">
                    We partnered with pioneering brands to create a documentary series exploring the future of generative media. The challenge was to visualize complex technical concepts while keeping the narrative grounded in human stories.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-8 mb-12 py-8 border-y border-purple-100">
                    <div>
                      <p className="text-4xl font-black text-purple-600">2.5M</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-2">Total Views</p>
                    </div>
                    <div>
                      <p className="text-4xl font-black text-pink-500">45k</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-2">Shares</p>
                    </div>
                    <div>
                      <p className="text-4xl font-black text-green-500">98%</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-2">Like Ratio</p>
                    </div>
                  </div>
                  
                  <button className="w-fit flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all px-8 py-4 text-sm font-black text-white group shadow-lg">
                    Read Full Case Study
                    <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fillRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">Ready to create your next viral hit?</h2>
          <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Join the top-tier creators and brands scaling their reach with Vidovermedia&apos;s world-class production expertise.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-14 items-center justify-center rounded-2xl bg-white px-10 text-lg font-black text-purple-600 shadow-xl hover:scale-105 transition-all"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}

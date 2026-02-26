import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  const articles = [
    {
      title: "Scripting for Retention: The First 30 Seconds",
      category: "Strategy",
      readTime: "5 min read",
      description: "Hook your audience immediately. We break down the psychology behind viral intros and how to apply it.",
      author: "Alex Chen",
      authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtQ5UZeRZrkng_tw8DYhK5ESLvl7LbUYKNgzuX4JUA0p9yEb36gEnI-odh13Vk9lXDEj-dCkJXLq2ndZf1FypF_1ZA_mmfTQBgddFb-hJjp1vkd5URfcY0oa8w1DcZRFmQpY6C7DkbW2fM4L45f-6U2e9d7tpoNfc4YsMQCr8snb0imy2Jh71cdv-V9LTc2knhXb-EOIv05Y4JLrSWhzRwyWMYugFfu7lr3bplOyPjvVrc9DbTuFxf869kBy7w6_6kEhStYELhvjc",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPEAhmvvivuSIfQSX36KustoCXyZwT-eqbrF2v0tR3VvjgGmz4r_HecTifEbohkCJ7u47zygyl-PGPv7rR1Zh2c3CPc42T_1MhGZXPSENQTacZ_8MP7XRNI5DbjBP0C50K9kJAJ-JRZRBDNDt3E-uhMh1db_xanY9CComq7i9AOWkVwDDxVWs0QkNcodPrCIAjL3wVbl4oeNRpJnlg4XMs376rWOK5H_SDkYFzeTyvYvkuUHZGDjwm7ifFdztegIjJym37xfpQIbA",
    },
    {
      title: "Algorithm Hacks for 2024",
      category: "Algorithm",
      readTime: "7 min read",
      description: "Stop guessing. Here are the 5 metrics the YouTube recommendation engine actually cares about this year.",
      author: "Sarah Jones",
      authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOKZDW7Nx0lolmwRb_6kolmdk1oBO1wIkXRA7aMS_WAiBNXzPzoBVvwkJhcsqHd_pCiNvmpw0S6Y_9RT54xoc0UaWmQVL-pOgvlXZo58wIg9Ksdb6ak-g0NlF-sex4PnwfUeUxpdgVOans6oJBXYMCbVSYq_ka1m8Dp59Y5cjul6fOvpa6rj1-_3LPc2_urHu-OsGeoqR0z3Wxh6Hm2a0WueItspSwBJX3zoS0hKm7u6RYUmFe8FPCFeInumPwDy3YX8tdOLvQZvU",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGswU1ccJNUUJc9ZHedhMeaCV5FGl9FFK6vgCZ5R2VdFZQO0g-ns4FgDPr41h1-Xro-EaGO7CJ6XxJ3WyWLMqvhKMHpAW0Z8gKQc0-43AbUXJPqNSXdI7azNqPscofqpFXWYToVgC4XSgMZ_QSOyex9-TRTjzYpjvmR6CLIVYw6UVxjKYVbKVKx6_9MU8nwwvmhdhxXoKQtwGbk862VpVBJ9y3t0xTVyzODwywkVdov6-HwzUrc6pGKhIAbfGZ1yv-tHA129l28yQ",
    },
    {
      title: "Visual Storytelling: Beyond the Jump Cut",
      category: "Editing",
      readTime: "4 min read",
      description: "How to use b-roll, graphics, and pacing to tell a story without saying a single word.",
      author: "Mike Ross",
      authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHtXgFVWCdH-G1ja3G75VPo6SC9O4MCtwlv0zmvJX1rWr20z-VY6qFT2KeVi5VHkINfJ9vpeds9q7POyVsRtmyrTms3i_EwrSNnPshZBQkLUDRLXffIlB-JV04gmPmAX2hLbtA-CAmAH5PaoDBgb9quknU8fz7lHbbknJ7PnHTCyOVUiUQ0Vf2j3gS34oB3adMKb-Ns1v93Dms1bRcIhTwYmuiTI1_snLVXp3kHonW3MAnv-ajRAvIASkKN1TBLyxhAYgcJEpRKTk",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEtQi9FQyKAJPcz0FvHdwCD51P6evPGnwKCRhTwK9LFssZFNfZNr_faH1tUDE_dJD4aNNOCi-39_CuNX3bWmaowhzgeUQfy40QQqvZJIheyTVCWdeLE3LWcOpqE1bwFWjnC2slCHeNnvysIT4fX-x1IzYsER_Z918_ek3tuS87A8CxNIfRUSR_dt8IW-xuW1NJi802vw9PgQuYMD-sTB7P0p08ezfUNIn7gmvBsWk54fkeS9CY5NldRbgJju621mDPM9fUuApSMjA",
    },
    {
      title: "Scaling to 1 Million Subscribers",
      category: "Growth",
      readTime: "10 min read",
      description: "A case study of three channels that broke the 1M mark in under 12 months with Vidovermedia.",
      author: "David Kim",
      authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNt5r-wDURrApimKDCzHRb_2_-HfQCKGObSFvBAFP7FHjrfYtNW8nIiURzoiX3Olw9RxbNksgY1qF7m4JPD5jtFfEafKqOLodoRN764i1pf4yQxtB8ZUDMIoSq5Sq3iTFHDhkrtZuVFhq94PrPnX6EXGmyHdqVzQiTd9GhI-tn6Rt7MNmyTLrdIr0hHhR0UReKgRyzU1Bh-fOFEnhzLfSZfPWegdE6t9WxtcIPLohniKKkKXRgEDUhXCH35zsMkJ0A0UKvVw97-Oc",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuIo-tTvN9VL2zl7W2sgQo-GUpHkB4Cm6UmnY0IoPxHLrng1DFJPHJZESbnwI0a2kTOFQRNfND4-hRVxaxeweaFZq-HGZVz2rB4TH48jDJHmgeh926A9ZKhbf1YBlowEjLcpBU5KDQqvL8gVcm7gXHGD-2KSWN8UcDXWMkpJ4uwU5pQ6F-5M_gCU1hpNfyQn8iq-P-biUpixz3Opcxrjdq1hkBWnfk3kyKw2Pna1aqtbauh4ixxsj50ubC-7czAAlsJS_bz4xuQd4",
    },
  ];

  const trendingPosts = [
    { title: "Shorts Monetization Guide", date: "Updated 2 days ago" },
    { title: "AI Thumbnails Breakthrough", date: "Updated 5 days ago" },
    { title: "Community Tab Strategy 2024", date: "Updated 1 week ago" },
  ];

  return (
    <main className="pt-20 bg-gradient-to-br from-pink-400 via-rose-500 to-purple-500 min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Insights <span className="text-pink-100">&amp; Strategies</span>
          </h1>
          <p className="text-white/90 font-medium text-lg md:text-xl max-w-2xl leading-relaxed">
            Expert advice on YouTube growth, content strategy, and the creator economy.
          </p>
        </div>

        {/* Featured Article */}
        <div className="group relative w-full overflow-hidden rounded-3xl bg-white border border-pink-100 shadow-xl hover:shadow-pink-500/20 transition-all">
          <div className="grid md:grid-cols-12 gap-0">
            <div className="md:col-span-7 relative h-72 md:h-[450px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-400/20 z-10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdXLFGcbVNRj0n2GpaLJkJz-V3oq5jhaIWzHXpVtMpWScwBx84EAGYYvzWNUth7dcEPkeGv24gD8PQnwWCNMK_mBNPw1JYIv0ddJr-EBFQsmdN2wOnRIPybgy86pyAMycQqjybx60yL7ODTgnwFyFqaQsvMGXrfKGz478V4AawhfVXcITOh2KDkyVJua231LaFMPIwlxMf6h19pJ_AxFj4V_XuQxVj6mEAGRXONXOrkGRpm0cWIK4xAzRqdMuPMii1Bz0f-kg8Sck"
                alt="Futuristic digital interface"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            <div className="md:col-span-5 flex flex-col justify-center p-8 md:p-12 lg:p-14 relative z-20 bg-gradient-to-br from-pink-50 to-purple-50">
              <div className="mb-6 flex items-center gap-3">
                <span className="rounded-full bg-pink-100 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-pink-600">Featured</span>
                <span className="text-xs text-[#1a0a2e]/50 font-semibold tracking-wide">Oct 24, 2023 • 8 min read</span>
              </div>
              
              <h2 className="mb-6 text-3xl lg:text-4xl font-extrabold text-[#1a0a2e] leading-tight group-hover:text-pink-600 transition-colors">
                The Future of YouTube Automation
              </h2>
              
              <p className="mb-8 text-[#1a0a2e]/70 leading-relaxed text-lg font-medium">
                AI and automated workflows are reshaping content creation. Discover how top creators are leveraging new tools to scale.
              </p>
              
              <div className="flex items-center gap-4">
                <Link href="#" className="group/btn inline-flex items-center gap-2 text-pink-600 font-bold hover:text-pink-500 hover:gap-4 transition-all">
                  Read Full Story
                  <svg className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fillRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Articles Grid */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-8 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
                Latest Articles
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <article key={index} className="group flex flex-col overflow-hidden rounded-3xl bg-white border border-pink-50 shadow-md hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="rounded-lg bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-pink-600 uppercase tracking-wider shadow-sm border border-white">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-[#1a0a2e]/50">
                      <svg className="h-4 w-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fillRule="evenodd" />
                      </svg>
                      {article.readTime}
                    </div>
                    
                    <h4 className="mb-3 text-xl font-bold text-[#1a0a2e] group-hover:text-pink-600 transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h4>
                    
                    <p className="mb-6 flex-1 text-sm text-[#1a0a2e]/70 font-medium leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                    
                    <div className="flex items-center justify-between border-t border-pink-100 pt-5 mt-auto">
                      <div className="flex items-center gap-3">
                        <Image
                          src={article.authorImage}
                          alt={article.author}
                          width={32}
                          height={32}
                          className="h-8 w-8 rounded-full ring-2 ring-pink-100"
                        />
                        <span className="text-xs font-bold text-[#1a0a2e]/80">{article.author}</span>
                      </div>
                      <svg className="h-5 w-5 text-pink-500 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button className="flex items-center justify-center gap-2 rounded-full border border-pink-200 bg-white px-8 py-3 text-sm font-bold text-pink-600 hover:bg-pink-50 transition-all duration-300 shadow-md">
                Explore All Articles
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fillRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-10">
            {/* Search */}
            <div className="rounded-3xl bg-white/20 backdrop-blur-md border border-white/40 shadow-sm p-8">
              <h4 className="mb-6 text-lg font-bold text-white flex items-center gap-2">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" fillRule="evenodd" />
                </svg>
                Search
              </h4>
              <div className="relative group">
                <input
                  className="w-full rounded-2xl border border-white/40 bg-white/30 py-3 pl-12 pr-4 text-sm text-white placeholder-white/70 focus:border-white focus:bg-white/40 focus:ring-2 focus:ring-white/50 outline-none transition-all"
                  placeholder="Find insights..."
                  type="text"
                />
                <svg className="absolute left-4 top-3.5 h-5 w-5 text-white/70 group-focus-within:text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" fillRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Newsletter */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 p-8 shadow-2xl text-white">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/20 blur-3xl"></div>
              <div className="relative z-10">
                <h4 className="mb-3 text-2xl font-extrabold">Join the Inner Circle</h4>
                <p className="mb-8 text-white/90 text-sm leading-relaxed font-medium">
                  Get exclusive weekly insights, industry trends, and strategies delivered straight to your inbox.
                </p>
                <form className="flex flex-col gap-4">
                  <input
                    className="w-full rounded-xl border-none bg-black/20 py-3 px-5 text-sm text-white placeholder-white/50 focus:bg-black/30 outline-none transition-all"
                    placeholder="Your best email address"
                    type="email"
                  />
                  <button
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/20 backdrop-blur border border-white/30 py-3 px-6 text-sm font-bold text-white hover:bg-white transition-all hover:text-purple-600 shadow-lg"
                    type="button"
                  >
                    Subscribe Now
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </form>
                <p className="mt-6 text-[10px] text-white/70 text-center font-bold tracking-widest uppercase">
                  No spam, only value.
                </p>
              </div>
            </div>

            {/* Trending */}
            <div className="rounded-3xl bg-white/20 backdrop-blur-md border border-white/40 shadow-sm p-8">
              <h4 className="mb-8 text-lg font-bold text-white flex items-center gap-2">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" fillRule="evenodd" />
                </svg>
                Trending Now
              </h4>
              <div className="flex flex-col gap-6">
                {trendingPosts.map((post, index) => (
                  <div key={index}>
                    <Link href="#" className="group flex items-start gap-5">
                      <span className="text-2xl font-black text-white/50 group-hover:text-white transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h5 className="text-sm font-bold text-white group-hover:text-pink-100 transition-colors leading-tight">
                          {post.title}
                        </h5>
                        <p className="text-[10px] font-bold text-white/70 uppercase tracking-tighter mt-1">
                          {post.date}
                        </p>
                      </div>
                    </Link>
                    {index < trendingPosts.length - 1 && (
                      <div className="h-px w-full bg-white/20 mt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="rounded-3xl bg-white/20 backdrop-blur-md border border-white/40 shadow-sm p-8">
              <h4 className="mb-6 text-lg font-bold text-white">Explore Tags</h4>
              <div className="flex flex-wrap gap-2.5">
                {["Production", "Analytics", "Design", "Marketing", "Tutorials"].map((tag, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="rounded-xl bg-white/30 border border-white/40 px-4 py-2 text-xs font-bold text-white hover:bg-white hover:text-pink-600 transition-all shadow-sm"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

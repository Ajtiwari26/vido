import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About - Vidovermedia",
  description: "Vidovermedia is a content execution studio built for creators and brands who want more than just views.",
};

export default function About() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-700">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-40 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold tracking-widest uppercase text-white/50 mb-4 block">
            About
          </span>
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4">
            Vidovermedia
          </h1>
          <p className="text-xl md:text-2xl font-medium text-pink-200">
            Turning Content Into Cashflow
          </p>
        </div>
      </section>

      {/* Content Card */}
      <section className="max-w-5xl mx-auto px-6 mb-32 relative -mt-8">
        <div className="glass-strong rounded-[2rem] p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
            Turning Content Into Cashflow
          </h2>
          <div className="space-y-8 text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
            <p>
              Vidovermedia was built on a simple belief; content shouldn&apos;t be chaotic — and it definitely shouldn&apos;t be wasted.
            </p>
            <p>
              In a world where everyone is posting, very few are building content that compounds. Most creators and brands struggle not because they lack ideas, but because content becomes a daily operational burden instead of a scalable system.
            </p>
            <p className="font-medium text-pink-300 italic">
              That&apos;s where we come in.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center bg-gradient-to-br from-pink-800/30 via-purple-900/40 to-blue-900/30 py-20 rounded-3xl">
        <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
          Who We Are
        </h2>
        <p className="text-xl text-white/50 max-w-2xl mx-auto mb-10">
          A behind-the-scenes content execution studio for creators an brands who value systems over hacks.
        </p>
        <div className="inline-block glass rounded-full px-8 py-3">
          <p className="text-pink-300 font-semibold text-lg">
            We don&apos;t sell videos. We build content engines.
          </p>
        </div>
      </section>

      {/* Section Cards */}
      <section className="max-w-6xl mx-auto px-6 space-y-16 mb-40">
        {/* Philosophy */}
        <div className="glass-strong rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-center">
          <div className="p-10 md:p-16 md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Philosophy</h3>
            <ul className="space-y-4 text-xl text-white/60">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-4"></span>
                Repeatable systems over reactive trends
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-4"></span>
                Engineered growth, not guesswork
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-4"></span>
                Content that leads to revenue
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 p-6 md:p-10">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp6W-5vk7UxPmoL_U4UE57g2GdLnhWMIj_JGbtsZYOusTo67G3qh04JsCJ3KVuY1U-ddJbvgqbiePUY1riVjoR5rWRylTpvlZ4W_Z30tvC4eVXhCqCrLjoHJzu5tz8eq2mQJut8T8hJd2emKLpzb74eygmLXwOfny2dVowflB8ALkVSegflC9X1n6_lENDdNzX7Dx0P0V9nzhAiGSpOzpychWnI9C2QFl7qI_qeOWkXFDQGIC8dIVV0Wk88HYg5KwIEcQu84rdvg4"
              alt="Team collaborating"
              width={600}
              height={600}
              className="w-full aspect-video md:aspect-square object-cover rounded-[2rem]"
            />
          </div>
        </div>

        {/* How We Work */}
        <div className="glass-strong rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row-reverse items-center">
          <div className="p-10 md:p-16 md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">How We Work</h3>
            <ul className="space-y-4 text-xl text-white/60">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-4"></span>
                No freelancers to manage
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-4"></span>
                No constant follow-ups
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-4"></span>
                One clear workflow
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 p-6 md:p-10">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrpybH-VJJbVlv5D2REgLFjDAXrA5m8Pumu0FHFFaZ145amj5fq2poJSH0r_76onCyz2skMrisEdhsNERRze19y2PPDLv1gVqsqmAmvdRPi2X2xVv2ZXVycGRyaZurQalL8X7TO2bOIlqjvgnIvRAIS_cpTXRri2TycpDOTw3314P85vjgy2S66zwrEE1JUYmuU4nXwLrn8Fv7HT08QG4vueXaXr29ipUtSp8Y2yAsQWEivG9ou3f9k0tyNWfBpkSGEurBukbcqd8"
              alt="Team with laptops"
              width={600}
              height={600}
              className="w-full aspect-video md:aspect-square object-cover rounded-[2rem]"
            />
          </div>
        </div>

        {/* Who We Work With */}
        <div className="glass-strong rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-center">
          <div className="p-10 md:p-16 md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Who We Work With</h3>
            <ul className="space-y-4 text-xl text-white/60">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-4"></span>
                Long-term creators & media brands
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-4"></span>
                Founders who value systems
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-4"></span>
                Teams seeking consistency
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 p-6 md:p-10">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBjdCoZxThyrRj7ZTaNnm9dgBGvldjSxP-EKXTr6ziVtyj1rvcAH2b7FRqFAdMfoKyZS99Zsg4FrwAqqKnH-pz9SQFlZmUIpqNvkLO-3xpEeDtAJax4maa1legnJDcf5E81zKLDXgPkzcz3dIETBH64Dl8pknDW6GAvDVSriTEuza_f-ElkZ_AySzga8HEv5E3cnPaUvvChSuvg56uQKvKWrUCRHgUi2wO14S_IZAjJqFyuQHw9M2mGeqPSWZKKvImKM8SvXditCo"
              alt="Team discussing"
              width={600}
              height={600}
              className="w-full aspect-video md:aspect-square object-cover rounded-[2rem]"
            />
          </div>
        </div>
      </section>

      {/* Why Vidovermedia */}
      <section className="max-w-4xl mx-auto px-6 pb-40 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-4">
          Why Vidovermedia
        </h2>
        <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
          Because <span className="font-bold text-pink-300">content</span> should run in the background and pay back over time.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-[#1a0a2e] px-8 py-4 rounded-xl font-black text-lg transition-all shadow-lg shadow-pink-500/20 group"
        >
          Book a Strategy Call
          <svg
            className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M13 7l5 5m0 0l-5 5m5-5H6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </Link>
      </section>
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Sun, Sparkles, Flower2 } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import hero from "@/assets/hero.jpg";
import flowersLeft from "@/assets/flowers-left.png";
import classesImg from "@/assets/classes.jpg";
import retreatsImg from "@/assets/retreats.jpg";
import onlineImg from "@/assets/online.jpg";
import shopImg from "@/assets/shop.jpg";
import journalImg from "@/assets/journal.jpg";
import book from "@/assets/book.png";
import nina from "@/assets/nina.jpg";
import t1 from "@/assets/t1.jpg";
import t2 from "@/assets/t2.jpg";
import t3 from "@/assets/t3.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const PILLARS = [
  { icon: Sparkles, title: "Move", text: "Awaken your energy" },
  { icon: Heart, title: "Heal", text: "Release & restore your body and mind" },
  { icon: Flower2, title: "Connect", text: "Sisterhood and beautiful souls" },
  { icon: Sun, title: "Shine", text: "Live your purpose and radiate light" },
];

const CARDS = [
  { img: classesImg, tag: "CLASSES", title: "Weekly Qigong and movement classes", to: "/classes", tint: "#E91E63" },
  { img: retreatsImg, tag: "RETREATS", title: "Transformative journeys in paradise", to: "/retreats", tint: "#FFB904" },
  { img: onlineImg, tag: "ONLINE PROGRAMS", title: "Practice from home at your own pace", to: "/online-programs", tint: "#FFB904" },
  { img: shopImg, tag: "SHOP", title: "Clothing and treasures inspired by nature", to: "/shop", tint: "#E91E63" },
  { img: journalImg, tag: "JOURNAL", title: "Inspiration, stories and guidance", to: "/journal", tint: "#E91E63" },
];

const TESTIMONIALS = [
  { img: t1, text: "Nina's classes are a gift. I sleep better, feel lighter and more alive than I have in years.", name: "Gina, Bermuda" },
  { img: t2, text: "Radiant Flower helped me heal my body and fall in love with myself again.", name: "Lisa, Ontario" },
  { img: t3, text: "Every class is filled with joy, beauty and deep feminine energy.", name: "Valerie, Boston" },
];

const PRESS = ["The Royal Gazette", "BERMUDA", "Daily Sun", "GOOD MORNING BERMUDA", "Reach", "VoyageLA"];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src={hero}
          alt="Nina London holding a lotus flower by the Bermuda coast"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width={1600}
          height={1104}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,240,245,0.92)_0%,rgba(255,240,245,0.6)_35%,rgba(255,240,245,0)_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-16">
          <div className="max-w-xl">
            <h1 className="font-display text-6xl md:text-7xl leading-[1.05] rf-gradient-text">
              Awaken Your<br/>Radiance
            </h1>
            <p className="font-script text-3xl text-[#FFB904] mt-4">Live from your heart</p>
            <p className="mt-6 text-[#5c4a55] max-w-md">
              Qigong, dance and wellness for women who are ready to heal, laugh and celebrate life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="rf-gradient-bg text-white text-xs tracking-[0.15em] font-semibold px-6 py-4 rounded-md shadow-lg hover:opacity-90">
                BOOK A CLASS
              </Link>
              <Link to="/retreats" className="border-2 border-[#E91E63] text-[#E91E63] text-xs tracking-[0.15em] font-semibold px-6 py-4 rounded-md hover:bg-[#E91E63] hover:text-white transition">
                OUR RETREATS
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* PILLARS */}
      <section className="relative py-14 bg-white">
        <img src={flowersLeft} alt="" className="absolute left-0 top-0 h-full w-56 object-cover opacity-90 hidden md:block" width={224} height={200} />
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          {PILLARS.map((p) => (
            <div key={p.title} className="text-center">
              <p.icon className="w-9 h-9 mx-auto text-[#E91E63]" strokeWidth={1.5} />
              <h3 className="mt-4 font-semibold text-[#2b2129]">{p.title}</h3>
              <p className="text-sm text-[#6b5560] mt-1 max-w-[160px] mx-auto">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOSSOM */}
      <section className="py-16 bg-[linear-gradient(180deg,#ffffff,#fff6f0)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="font-script text-2xl text-[#2b2129]">It’s your time to</p>
            <h2 className="font-display text-5xl rf-gradient-text tracking-wide">BLOSSOM</h2>
            <div className="w-16 h-px bg-[#E91E63] mx-auto mt-3" />
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-5">
            {CARDS.map((c) => (
              <Link key={c.tag} to={c.to} className="group rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={c.img} alt={c.tag} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={400} height={520} loading="lazy" />
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-md" style={{ background: c.tint }}>
                    <Flower2 className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="pt-8 pb-5 px-3 text-center">
                  <p className="text-[11px] tracking-[0.15em] font-semibold text-[#2b2129]">{c.tag}</p>
                  <p className="text-xs text-[#6b5560] mt-2 leading-snug">{c.title}</p>
                  <p className="mt-3 text-[10px] tracking-[0.2em] font-semibold text-[#E91E63]">LEARN MORE →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl text-center text-[#E91E63]">What women are saying</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-[#fffafc] rounded-lg p-6 shadow-sm flex gap-4">
                <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover shrink-0" width={64} height={64} loading="lazy" />
                <div>
                  <p className="text-sm text-[#3d323a] italic">“{t.text}”</p>
                  <p className="mt-3 text-xs text-[#E91E63]">— {t.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link to="/journal" className="border border-[#f0c8d8] text-[#E91E63] text-xs tracking-[0.15em] font-semibold px-6 py-3 rounded-md hover:bg-[#fff0f5]">
              READ MORE REVIEWS
            </Link>
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section className="py-14 bg-[#fff6f0]">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="font-script text-2xl text-center text-[#E91E63]">As seen &amp; featured in</h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[#6b5560] font-display italic">
            {PRESS.map((p) => (
              <span key={p} className="text-lg opacity-80">{p}</span>
            ))}
          </div>
          <div className="mt-8 grid md:grid-cols-[1fr_auto] items-center gap-8">
            <blockquote className="text-[#5c4a55] max-w-xl mx-auto md:mx-0">
              <span className="text-3xl text-[#E91E63] leading-none">“</span>
              <span className="italic"> Nina London inspires women over 50 to live with vitality, joy and purpose through Qigong, dance and laughter.</span>
              <footer className="mt-2 text-xs tracking-wide text-[#6b5560]">— The Royal Gazette</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section className="relative py-16 overflow-hidden bg-[linear-gradient(90deg,#ffe6ef,#ffefe0)]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[280px_1fr_auto] gap-10 items-center">
          <img src={book} alt="From Siberia to Bermuda" className="w-64 mx-auto drop-shadow-2xl" width={280} height={380} loading="lazy" />
          <div>
            <p className="font-script text-2xl text-[#E91E63]">My book</p>
            <h3 className="font-display text-3xl text-[#2b2129] mt-1">From Siberia to Bermuda.<br/>Live. Love. Laugh.</h3>
            <p className="mt-3 text-[#6b5560] max-w-md">A true story of resilience, healing and finding joy after cancer.</p>
            <button className="mt-5 border border-[#E91E63] text-[#E91E63] text-xs tracking-[0.15em] font-semibold px-6 py-3 rounded-md hover:bg-[#E91E63] hover:text-white transition">
              LEARN MORE
            </button>
          </div>
          <div className="hidden md:block relative">
            <img src={nina} alt="Nina London" className="w-72 h-96 object-cover rounded-lg shadow-lg" width={288} height={384} loading="lazy" />
            <p className="absolute -left-32 top-8 font-script text-xl text-[#E91E63] max-w-[180px] italic">“A story that will make you laugh, cry and believe in the power of a radiant life.”</p>
            <p className="absolute -left-16 bottom-10 font-script text-2xl text-[#E91E63]">Nina ♡</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

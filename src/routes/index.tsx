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
import bookAsset from "@/assets/nina-book.png.asset.json";
import aboutNina from "@/assets/about-nina.jpg.asset.json";
import nina from "@/assets/nina.jpg";
import t1 from "@/assets/t1.jpg";
import t2 from "@/assets/t2.jpg";
import t3 from "@/assets/t3.jpg";
import courseCalming from "@/assets/course-calming.jpg.asset.json";
import courseHealing from "@/assets/course-healing.png.asset.json";
import courseLaugh from "@/assets/course-laugh.jpg.asset.json";

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

const COURSES = [
  {
    img: courseCalming.url,
    title: "Calming the Waters",
    text: "Qi Gong moving and breathing meditation signature class will help you to calm yourself down, cope with stress and relieve anxiety, connect your mind and body and balance them together, release negative emotions and tension that are held inside you. You will feel peaceful and relaxed after the class. It can even help put a smile on your face.",
  },
  {
    img: courseHealing.url,
    title: "Healing Vibes",
    text: "This class I designed for cancer patients, survivors, their families and caregivers. It will help you to stay strong, energetic and optimistic during difficult times. You will learn how to restore energy during and after cancer treatments, to cope with stress, and release negative emotions (fear, worries, anger, and sadness).",
  },
  {
    img: courseLaugh.url,
    title: "Time to Laugh",
    text: "In this class we will do simple laughing and deep breathing exercises. We will also dance! Our bodies cannot differentiate between real laughter and forced laughter. If you just keep laughing, endorphins flood the body and stress and anxiety recedes. Nothing works faster to feel much happier than a good laugh.",
  },
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
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "95% center" }}
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
      <section className="relative py-14 bg-[linear-gradient(90deg,#fde3d4_0%,#fdece0_25%,#fff4ea_60%,#fff6ef_100%)] overflow-hidden">
        <img src={flowersLeft} alt="" className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-64 object-contain object-left pointer-events-none hidden md:block" width={256} height={220} />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-[#f2c7d4]">
            {PILLARS.map((p) => (
              <div key={p.title} className="text-center px-6 py-2">
                <p.icon className="w-10 h-10 mx-auto text-[#E91E63]" strokeWidth={1.25} />
                <h3 className="mt-4 font-semibold text-[#2b2129] tracking-wide">{p.title}</h3>
                <p className="text-sm text-[#6b5560] mt-2 max-w-[160px] mx-auto leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 rf-gradient-bg opacity-20 rounded-3xl blur-2xl" />
            <img
              src={aboutNina.url}
              alt="Nina London"
              className="relative rounded-2xl shadow-xl w-full h-[520px] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="font-script text-2xl text-[#FFB904]">About me</p>
            <h2 className="font-display text-4xl md:text-5xl rf-gradient-text mt-2 leading-tight">
              Hi, I'm Nina London
            </h2>
            <p className="mt-3 text-lg text-[#2b2129] font-medium">
              Wellness guide, dancer & storyteller
            </p>
            <p className="mt-5 text-[#6b5560] leading-relaxed">
              From Siberia to Bermuda, my journey has been one of transformation, healing and joy.
              I teach women to reconnect with their bodies, awaken their inner radiance and
              celebrate life at every age through Qigong, dance and sisterhood.
            </p>
            <Link
              to="/about"
              className="inline-block mt-7 rf-gradient-bg text-white text-xs tracking-[0.2em] font-semibold px-8 py-4 rounded-md shadow-lg hover:opacity-90 transition"
            >
              LEARN MORE
            </Link>
          </div>
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
                </div>
                <div className="pt-5 pb-5 px-3 text-center">

                  <p className="text-[11px] tracking-[0.15em] font-semibold text-[#2b2129]">{c.tag}</p>
                  <p className="text-xs text-[#6b5560] mt-2 leading-snug">{c.title}</p>
                  <p className="mt-3 text-[10px] tracking-[0.2em] font-semibold text-[#E91E63]">LEARN MORE →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-20 bg-[linear-gradient(180deg,#fff6f0,#ffffff)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-script text-2xl text-[#FFB904]">Grow with me</p>
            <h2 className="font-display text-4xl md:text-5xl rf-gradient-text mt-2">Courses</h2>
            <div className="w-16 h-px bg-[#E91E63] mx-auto mt-4" />
            <p className="mt-5 text-[#6b5560] leading-relaxed">
              Guided online journeys designed to help you heal, balance and celebrate life —
              practice from anywhere, at your own pace.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {COURSES.map((c, i) => (
              <div key={c.title} className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition group">
                <div className="h-48 relative flex items-center justify-center" style={{ background: c.tint }}>
                  <span className="font-display text-6xl text-white/90 drop-shadow">0{i + 1}</span>
                </div>
                <div className="p-7 text-center">
                  <h3 className="font-display text-2xl text-[#2b2129]">{c.title}</h3>
                  <p className="mt-3 text-sm text-[#6b5560] leading-relaxed">{c.text}</p>
                  <Link to="/online-programs" className="inline-block mt-5 text-[10px] tracking-[0.2em] font-semibold text-[#E91E63] hover:text-[#c2185b]">
                    LEARN MORE →
                  </Link>
                </div>
              </div>
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
      <section className="relative py-20 overflow-hidden bg-[linear-gradient(90deg,#ffe6ef,#ffefe0)]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[380px_1fr] gap-12 items-center">
          <img src={bookAsset.url} alt="Nina's Book — From Siberia to Bermuda" className="w-full max-w-sm mx-auto drop-shadow-2xl" loading="lazy" />
          <div>
            <p className="font-script text-2xl text-[#E91E63]">My book</p>
            <h3 className="font-display text-4xl text-[#2b2129] mt-1 leading-tight">Nina's Book<br/><span className="text-[#00B8B8]">From Siberia to Bermuda</span></h3>
            <blockquote className="mt-5 text-[#6b5560] italic leading-relaxed max-w-xl border-l-2 border-[#E91E63]/40 pl-5">
              «I am like a rolling stone trying so many continents and countries during my life. It is inexplicable why I have such an irresistible desire for change and the unknown. I would often question myself, "Why am I doing this?" There was no guarantee that I would survive, let alone be successful. But, I kept going and didn't look back. I kept listening and trusting my inner voice and had great faith and unshakeable confidence that I was doing the right things. I didn't want to wake up one morning in Siberia, look back in despair, and regret missed opportunities. I would never have forgiven myself if I didn't try. My great craving for change outweighed my fear of the unknown.»
            </blockquote>
            <button className="mt-6 bg-[#E91E63] text-white text-xs tracking-[0.2em] font-semibold px-8 py-3 rounded-md hover:bg-[#c2185b] transition shadow-lg">
              BUY NOW
            </button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import aboutHero from "@/assets/about-hero.jpg.asset.json";
import bookAsset from "@/assets/nina-book.png.asset.json";
import t1 from "@/assets/t1.jpg";
import t2 from "@/assets/t2.jpg";
import t3 from "@/assets/t3.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Nina London — Radiant Flower" },
      { name: "description", content: "Nina London's story: from a stage 3 cancer diagnosis to becoming a wellness coach helping women bloom at any age." },
    ],
  }),
});

const TESTIMONIALS = [
  {
    img: t1,
    text: "Thank you for another fabulous class with ideas and motions of calming and peaceful ways to cope with stress and worries. Thank you for being a blessing to us and me especially!",
    name: "Alison",
    location: "Bermuda",
  },
  {
    img: t2,
    text: "Using breathing techniques has been extremely helpful in my daily use. Recently I had to have a MRI done and the machine broke down in the middle of my test, and my normal reaction was panic. I quickly remembered that these are the times that I could use the breathing techniques that I had been taught by Nina. I calmly began breathing in through the nose holding the breath and slowly releasing the breath from my mouth, I repeated this over and over until I realized I was concentrating on my refreshed breathing and not the stress that I was finding myself under.",
    name: "Student",
    location: "",
  },
  {
    img: t3,
    text: "I love the Six Healing Sounds Meditation and Nina's comprehensive guidance. It was very informative to learn and practice how we can release our negative emotions.",
    name: "Patricia",
    location: "Bermuda",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Meet Nina" title="About Nina London" subtitle="A journey through fire — and the wings that grew from the ashes." />

      {/* BIO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={aboutHero.url}
          alt="Nina London"
          className="rounded-2xl shadow-xl w-full h-[560px] object-cover"
          width={600}
          height={560}
          loading="lazy"
        />
        <div>
          <p className="font-script text-2xl text-[#FFB904]">My story</p>
          <h2 className="font-display text-4xl md:text-5xl rf-gradient-text mt-2">About Nina London</h2>
          <div className="w-16 h-px bg-[#E91E63] mt-5" />
          <div className="mt-6 space-y-4 text-[#5c4a55] leading-relaxed">
            <p>Six years ago, I was the happiest woman on the planet. I was living in beautiful Bermuda and was ready to start a new career as a Wellness Coach. I was going to get married to a wonderful man. Healthy, toned, active, energetic, and cheerful, I laughed at my age. I was 52 years old.</p>
            <p>Two weeks before my wedding, I was diagnosed with uterine cancer, stage 3. In this one brutal moment, my entire life was split into two parts: before and after.</p>
            <p>It was my choice not to be a victim of my situation, but a winner. I wanted not only survive, but thrive. I began to search, to learn, to practice the ways to improve my health and regain my energy.</p>
            <p>My healing journey was long and arduous, but also truly powerful and transformational.</p>
            <p>From these ashes, like the Phoenix, I slowly unfolded wings I never knew I had and flew high above the ruins of my dreams. I grew into a strong, happy and confident woman that have experience, passion, and knowledge to help other women.</p>
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

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-script text-2xl text-[#FFB904]">Kind words</p>
            <h2 className="font-display text-4xl md:text-5xl rf-gradient-text mt-2">What women are saying</h2>
            <div className="w-16 h-px bg-[#E91E63] mx-auto mt-4" />
            <p className="mt-5 text-[#6b5560] leading-relaxed">
              Real stories from women who have found peace, healing and joy through our
              classes, breathing practices and meditations.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6 items-start">
            {TESTIMONIALS.map((t) => (
              <div key={t.text.slice(0, 20)} className="bg-[#fffafc] rounded-2xl p-7 shadow-sm hover:shadow-md transition flex flex-col">
                <span className="text-5xl text-[#E91E63]/30 font-display leading-none">“</span>
                <p className="text-sm text-[#3d323a] italic leading-relaxed -mt-3">{t.text}</p>
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-[#f0c8d8]/40">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover shrink-0" width={48} height={48} loading="lazy" />
                  <div>
                    <p className="text-sm font-semibold text-[#2b2129]">{t.name}</p>
                    {t.location && <p className="text-xs text-[#E91E63]">{t.location}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

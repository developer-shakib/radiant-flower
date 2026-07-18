import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import retreatsImg from "@/assets/retreats.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/retreats")({
  component: RetreatsPage,
  head: () => ({ meta: [{ title: "Retreats — Radiant Flower" }, { name: "description", content: "Transformative Qigong and wellness retreats in paradise." }] }),
});

const RETREATS = [
  { img: retreatsImg, title: "Bermuda Bloom Retreat", date: "May 12–18, 2026", desc: "Seven days of Qigong, ocean swims, sisterhood and celebration." },
  { img: hero, title: "Bali Radiance Retreat", date: "Sept 3–10, 2026", desc: "Awaken your feminine energy in the jungles and beaches of Bali." },
];

function RetreatsPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Journeys in paradise" title="Radiant Retreats" subtitle="Come home to yourself in the world’s most beautiful places." />
      <section className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-8">
        {RETREATS.map((r) => (
          <article key={r.title} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src={r.img} alt={r.title} className="w-full h-72 object-cover" width={600} height={288} loading="lazy" />
            <div className="p-6">
              <p className="text-xs tracking-widest text-[#FFB904] font-semibold">{r.date}</p>
              <h3 className="font-display text-2xl text-[#E91E63] mt-1">{r.title}</h3>
              <p className="mt-3 text-[#6b5560]">{r.desc}</p>
              <Link to="/contact" className="inline-block mt-4 rf-gradient-bg text-white text-xs tracking-widest font-semibold px-5 py-3 rounded-md">RESERVE MY SPOT</Link>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}

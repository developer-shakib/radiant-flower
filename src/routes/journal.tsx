import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import j from "@/assets/journal.jpg";
import n from "@/assets/nina.jpg";
import s from "@/assets/shop.jpg";

export const Route = createFileRoute("/journal")({
  component: JournalPage,
  head: () => ({ meta: [{ title: "Journal — Radiant Flower" }, { name: "description", content: "Stories, inspiration and love letters from Nina." }] }),
});

const POSTS = [
  { img: j, cat: "REFLECTION", title: "The morning ritual that changed my life", excerpt: "Ten quiet minutes with Qigong, coffee and a candle…" },
  { img: n, cat: "STORY", title: "Bermuda, laughter and second chances", excerpt: "How I learned that healing is not a straight line…" },
  { img: s, cat: "GUIDE", title: "5 flowers that open your heart", excerpt: "The blooms I keep on my altar and why…" },
];

function JournalPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Words from the heart" title="Journal" subtitle="Stories, love letters and gentle wisdom for your radiant life." />
      <section className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-8">
        {POSTS.map((p) => (
          <article key={p.title} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
            <img src={p.img} alt={p.title} className="w-full h-56 object-cover" width={400} height={224} loading="lazy" />
            <div className="p-5">
              <p className="text-[11px] tracking-widest text-[#FFB904] font-semibold">{p.cat}</p>
              <h3 className="mt-1 font-display text-xl text-[#2b2129]">{p.title}</h3>
              <p className="mt-2 text-sm text-[#6b5560]">{p.excerpt}</p>
              <p className="mt-4 text-xs tracking-widest text-[#E91E63] font-semibold">READ MORE →</p>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}

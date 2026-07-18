import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import img from "@/assets/online.jpg";

export const Route = createFileRoute("/online-programs")({
  component: OnlinePage,
  head: () => ({ meta: [{ title: "Online Programs — Radiant Flower" }, { name: "description", content: "Practice Qigong and feminine movement from home." }] }),
});

const PROGRAMS = [
  { name: "21-Day Radiance Reset", price: "$97", desc: "Daily 20-minute Qigong and journaling practice." },
  { name: "Feminine Flow Masterclass", price: "$147", desc: "Six-week dance and embodiment journey." },
  { name: "Bloom Membership", price: "$29/mo", desc: "New classes every week + private circle." },
];

function OnlinePage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Practice from home" title="Online Programs" subtitle="Radiant Flower with you, anytime, anywhere." />
      <section className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-[1fr_1fr] gap-10 items-start">
        <img src={img} alt="" className="rounded-2xl shadow-lg w-full h-[520px] object-cover" width={600} height={520} loading="lazy" />
        <div className="space-y-5">
          {PROGRAMS.map((p) => (
            <div key={p.name} className="bg-[#fffafc] border border-[#f0d5e0] rounded-xl p-5">
              <div className="flex justify-between items-baseline">
                <h3 className="font-display text-xl text-[#2b2129]">{p.name}</h3>
                <span className="text-[#E91E63] font-semibold">{p.price}</span>
              </div>
              <p className="text-sm text-[#6b5560] mt-2">{p.desc}</p>
              <Link to="/contact" className="mt-3 inline-block text-xs tracking-widest text-[#FFB904] font-semibold">JOIN NOW →</Link>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

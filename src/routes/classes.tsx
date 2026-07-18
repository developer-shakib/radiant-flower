import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import img from "@/assets/classes.jpg";

export const Route = createFileRoute("/classes")({
  component: ClassesPage,
  head: () => ({ meta: [{ title: "Classes — Radiant Flower" }, { name: "description", content: "Weekly Qigong and movement classes for women." }] }),
});

const CLASSES = [
  { name: "Morning Qigong", day: "Tuesdays · 8:00 AM", price: "$25" },
  { name: "Feminine Flow Dance", day: "Thursdays · 6:30 PM", price: "$30" },
  { name: "Sunset Beach Movement", day: "Saturdays · 5:30 PM", price: "$35" },
  { name: "Sacred Circle", day: "Sundays · 10:00 AM", price: "$40" },
];

function ClassesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Move · Heal · Shine" title="Weekly Classes" subtitle="Slow, joyful movement to reconnect you with your body and your radiance." />
      <section className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-[1fr_1fr] gap-10 items-start">
        <img src={img} alt="" className="rounded-2xl shadow-lg w-full h-[560px] object-cover" width={600} height={560} loading="lazy" />
        <div className="space-y-4">
          {CLASSES.map((c) => (
            <div key={c.name} className="border border-[#f0d5e0] rounded-xl p-5 flex justify-between items-center bg-[#fffafc]">
              <div>
                <h3 className="font-display text-xl text-[#2b2129]">{c.name}</h3>
                <p className="text-sm text-[#6b5560]">{c.day}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-[#E91E63]">{c.price}</p>
                <Link to="/contact" className="text-xs tracking-widest text-[#FFB904] font-semibold">BOOK →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

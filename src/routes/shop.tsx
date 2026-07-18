import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import shopImg from "@/assets/shop.jpg";
import journalImg from "@/assets/journal.jpg";
import book from "@/assets/book.png";
import classesImg from "@/assets/classes.jpg";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
  head: () => ({ meta: [{ title: "Shop — Radiant Flower" }, { name: "description", content: "Clothing, jewelry and treasures inspired by nature." }] }),
});

const PRODUCTS = [
  { img: shopImg, name: "Hibiscus Silk Scarf", price: "$48" },
  { img: journalImg, name: "Radiant Journal", price: "$32" },
  { img: book, name: "From Siberia to Bermuda", price: "$24" },
  { img: classesImg, name: "Feminine Flow Dress", price: "$89" },
];

function ShopPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Wear your radiance" title="Shop" subtitle="Handpicked pieces to remind you of your beauty every day." />
      <section className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-6">
        {PRODUCTS.map((p) => (
          <div key={p.name} className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-xl">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={400} height={520} loading="lazy" />
            </div>
            <p className="mt-3 font-display text-[#2b2129]">{p.name}</p>
            <p className="text-[#E91E63] font-semibold text-sm">{p.price}</p>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}

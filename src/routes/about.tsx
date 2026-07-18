import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import nina from "@/assets/nina.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({ meta: [{ title: "About — Radiant Flower" }, { name: "description", content: "Meet Nina London and the story behind Radiant Flower." }] }),
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Meet Nina" title="About Radiant Flower" subtitle="A journey from Siberia to Bermuda — teaching women to bloom at any age." />
      <section className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
        <img src={nina} alt="Nina London" className="rounded-2xl shadow-lg w-full h-[520px] object-cover" width={600} height={520} loading="lazy" />
        <div>
          <h2 className="font-display text-3xl text-[#E91E63]">Hi, I’m Nina</h2>
          <p className="mt-4 text-[#5c4a55] leading-relaxed">
            After surviving cancer and rebuilding my life on a tropical island, I discovered the healing magic of
            Qigong, dance and sisterhood. Radiant Flower is my invitation to women everywhere to move, laugh and
            live from the heart.
          </p>
          <p className="mt-4 text-[#5c4a55] leading-relaxed">
            My work has been featured in The Royal Gazette, VoyageLA and Good Morning Bermuda. But the greatest
            reward is the women I meet — bright, brave, blossoming.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

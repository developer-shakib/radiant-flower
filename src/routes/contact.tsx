import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { Mail, MapPin, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({ meta: [{ title: "Contact — Radiant Flower" }, { name: "description", content: "Get in touch to book a class, retreat or say hello." }] }),
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Let’s connect" title="Say Hello" subtitle="For classes, retreats, press or a friendly chat — I would love to hear from you." />
      <section className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-[1fr_1.2fr] gap-10">
        <div className="space-y-6 text-[#5c4a55]">
          <div className="flex gap-3"><Mail className="w-5 h-5 text-[#E91E63] mt-1" /><div><p className="font-semibold">Email</p><p className="text-sm">hello@radiantflower.com</p></div></div>
          <div className="flex gap-3"><MapPin className="w-5 h-5 text-[#E91E63] mt-1" /><div><p className="font-semibold">Studio</p><p className="text-sm">Hamilton, Bermuda</p></div></div>
          <div className="flex gap-3"><Instagram className="w-5 h-5 text-[#E91E63] mt-1" /><div><p className="font-semibold">Instagram</p><p className="text-sm">@radiantflower</p></div></div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="bg-[#fffafc] border border-[#f0d5e0] rounded-2xl p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="First name" className="px-4 py-3 rounded-md border border-[#f0d5e0] bg-white text-sm" />
            <input placeholder="Last name" className="px-4 py-3 rounded-md border border-[#f0d5e0] bg-white text-sm" />
          </div>
          <input placeholder="Email" type="email" className="w-full px-4 py-3 rounded-md border border-[#f0d5e0] bg-white text-sm" />
          <input placeholder="Subject" className="w-full px-4 py-3 rounded-md border border-[#f0d5e0] bg-white text-sm" />
          <textarea placeholder="Your message" rows={5} className="w-full px-4 py-3 rounded-md border border-[#f0d5e0] bg-white text-sm" />
          <button className="rf-gradient-bg text-white text-xs tracking-[0.15em] font-semibold px-6 py-3 rounded-md w-full">SEND MESSAGE</button>
        </form>
      </section>
    </SiteLayout>
  );
}

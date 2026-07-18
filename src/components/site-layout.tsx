import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/classes", label: "CLASSES" },
  { to: "/retreats", label: "RETREATS" },
  { to: "/online-programs", label: "ONLINE PROGRAMS" },
  { to: "/shop", label: "SHOP" },
  { to: "/journal", label: "JOURNAL" },
  { to: "/contact", label: "CONTACT" },
] as const;

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="Radiant Flower" className="h-14 w-auto" width={112} height={112} />
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-[11px] tracking-[0.15em] font-medium text-[#2b2129]">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-[#E91E63] border-b-2 border-[#E91E63] pb-1" }}
              className="hover:text-[#E91E63] transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="rf-gradient-bg text-white text-[11px] tracking-[0.15em] font-semibold px-5 py-3 rounded-md shadow-md hover:opacity-90 transition"
        >
          BOOK A CLASS
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#fff6ef]">
      <div className="bg-[linear-gradient(90deg,#fff0f5,#fff6ef,#fffaf0)] py-10 border-t border-[#f5e6ee]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full rf-gradient-bg flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-display text-lg text-[#E91E63]">Let’s stay connected</p>
              <p className="text-sm text-[#6b5560]">Get inspiration, love letters and events<br/>sent to your soul.</p>
            </div>
          </div>
          <form className="flex gap-2 w-full" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-md border border-[#f0d5e0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF80B4]"
            />
            <button className="rf-gradient-bg text-white text-xs tracking-[0.15em] font-semibold px-6 py-3 rounded-md">
              JOIN US
            </button>
          </form>
          <div className="flex md:justify-end gap-4 text-[#c74e88]">
            <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            <a href="#" aria-label="YouTube"><Youtube className="w-5 h-5" /></a>
            <a href="#" aria-label="Email"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] tracking-[0.15em] text-[#6b5560]">
        <p>© 2025 Radiant Flower</p>
        <div className="flex flex-wrap justify-center gap-5">
          {NAV.slice(1).map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-[#E91E63]">{n.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-36 pb-16 bg-[linear-gradient(135deg,#fff0f5_0%,#fff6ef_50%,#fffaf0_100%)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {eyebrow && <p className="font-script text-2xl text-[#FFB904] mb-2">{eyebrow}</p>}
        <h1 className="font-display text-5xl md:text-6xl rf-gradient-text leading-tight">{title}</h1>
        {subtitle && <p className="mt-5 text-[#6b5560] max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}

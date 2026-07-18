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
        <Link to="/" className="shrink-0 flex items-center gap-3">
          <img src={logo} alt="Nina London" className="h-20 w-auto" width={160} height={160} />
          <span className="hidden sm:block font-display text-xl text-[#2b2129] leading-tight">Nina London<br/><span className="font-script text-[#E91E63] text-base">Radiant Flower</span></span>
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
    <footer className="relative bg-[#1a0f18] text-[#e8dde4] overflow-hidden">
      {/* decorative gradient glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#E91E63,#FFB904,transparent)]" />
      <div aria-hidden className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#E91E63]/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#FFB904]/10 blur-3xl" />

      {/* NEWSLETTER */}
      <div className="relative border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-script text-3xl text-[#FF80B4]">Stay connected</p>
            <h3 className="font-display text-3xl md:text-4xl text-white mt-1">Love letters to your soul</h3>
            <p className="mt-3 text-sm text-[#c9b8c3] max-w-md">
              Inspiration, upcoming retreats and gentle guidance — delivered a few times a month, never spam.
            </p>
          </div>
          <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-md bg-white/5 border border-white/10 text-sm text-white placeholder:text-[#a89aa2] focus:outline-none focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
              />
              <button className="rf-gradient-bg text-white text-xs tracking-[0.2em] font-semibold px-8 py-4 rounded-md shadow-lg hover:opacity-90 transition">
                SUBSCRIBE
              </button>
            </div>
            <p className="mt-3 text-xs text-[#8a7a83]">By subscribing you agree to our privacy policy.</p>
          </form>
        </div>
      </div>

      {/* MAIN */}
      <div className="relative max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-12">
        {/* brand */}
        <div className="md:col-span-4">
          <Link to="/" className="inline-flex items-center gap-3">
            <img src={logo} alt="Nina London" className="h-20 w-auto" width={160} height={160} />
            <span className="font-display text-xl text-white leading-tight">Nina London<br/><span className="font-script text-[#FF80B4] text-base">Radiant Flower</span></span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-[#c9b8c3] max-w-sm">
            Qi Gong, meditation and laughter yoga for women who want to live with vitality, joy and purpose.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Facebook, href: "#", label: "Facebook" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Youtube, href: "#", label: "YouTube" },
              { icon: Mail, href: "mailto:hello@ninalondon.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#FF80B4] hover:bg-[#E91E63] hover:text-white hover:border-[#E91E63] transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* explore */}
        <div className="md:col-span-3">
          <h4 className="text-xs tracking-[0.25em] font-semibold text-white/60 mb-5">EXPLORE</h4>
          <ul className="space-y-3 text-sm">
            {NAV.slice(0, 4).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-[#c9b8c3] hover:text-[#FF80B4] transition-colors">{n.label.charAt(0) + n.label.slice(1).toLowerCase()}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* offerings */}
        <div className="md:col-span-3">
          <h4 className="text-xs tracking-[0.25em] font-semibold text-white/60 mb-5">OFFERINGS</h4>
          <ul className="space-y-3 text-sm">
            {NAV.slice(4).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-[#c9b8c3] hover:text-[#FF80B4] transition-colors">{n.label.charAt(0) + n.label.slice(1).toLowerCase()}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* contact */}
        <div className="md:col-span-2">
          <h4 className="text-xs tracking-[0.25em] font-semibold text-white/60 mb-5">CONTACT</h4>
          <ul className="space-y-3 text-sm text-[#c9b8c3]">
            <li>Bermuda</li>
            <li>
              <a href="mailto:hello@ninalondon.com" className="hover:text-[#FF80B4] transition-colors">hello@ninalondon.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#8a7a83]">
          <p>© {new Date().getFullYear()} Nina London. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FF80B4] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FF80B4] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#FF80B4] transition-colors">Cookies</a>
          </div>
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

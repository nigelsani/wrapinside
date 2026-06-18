"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className={`font-display text-xl font-semibold tracking-tight ${scrolled ? "text-charcoal" : "text-white"}`}>
          Keuken<span className="text-gold">Wrap</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            ["Werkwijze", "#werkwijze"],
            ["Voordelen", "#voordelen"],
            ["Galerij", "#galerij"],
            ["Prijzen", "#prijzen"],
            ["Reviews", "#reviews"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                scrolled ? "text-charcoal/70" : "text-white/80"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <a href="#offerte" className="hidden md:block btn-gold py-3 px-6 text-sm">
          Gratis offerte
        </a>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 ${scrolled ? "text-charcoal" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-beige">
          <div className="px-6 py-4 flex flex-col gap-4">
            {[
              ["Werkwijze", "#werkwijze"],
              ["Voordelen", "#voordelen"],
              ["Galerij", "#galerij"],
              ["Prijzen", "#prijzen"],
              ["Reviews", "#reviews"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-charcoal text-sm font-medium py-2 border-b border-beige/50"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a href="#offerte" className="btn-gold text-center mt-2" onClick={() => setMenuOpen(false)}>
              Gratis offerte
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

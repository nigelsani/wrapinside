export default function Footer() {
  return (
    <>
      {/* Final CTA */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, #C9A96E 0px, #C9A96E 1px, transparent 0px, transparent 60px), repeating-linear-gradient(90deg, #C9A96E 0px, #C9A96E 1px, transparent 0px, transparent 60px)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center reveal">
          <span className="section-label mb-4 block">Klaar voor verandering?</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-white leading-tight mb-6">
            Jouw droomkeuken begint met{" "}
            <em className="not-italic text-gold">één aanvraag</em>
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Vraag vandaag nog je gratis en vrijblijvende offerte aan. We komen
            bij jou langs, meten in en geven persoonlijk kleurenadvies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#offerte" className="btn-gold text-base py-4 px-10">
              Vraag gratis offerte aan
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="tel:+31201234567" className="btn-outline text-base py-4 px-10">
              📞 020 – 123 45 67
            </a>
          </div>
          <p className="text-white/30 text-sm mt-6">Gratis · Vrijblijvend · Reactie binnen 24 uur</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-brown py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <div className="font-display text-xl font-semibold text-white mb-3">
                Keuken<span className="text-gold">Wrap</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Professionele keukenwrapping voor een vernieuwde keuken zonder de kosten van een volledige renovatie.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Diensten</h4>
              <ul className="space-y-2">
                {["Kastdeurtjes wrappen", "Lade fronten", "Zijpanelen", "Blad folie", "Achterwanden"].map(s => (
                  <li key={s}><span className="text-white/40 text-sm hover:text-gold/80 transition-colors cursor-pointer">{s}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Informatie</h4>
              <ul className="space-y-2">
                {["Werkwijze", "Prijzen", "Galerij", "Reviews", "FAQ", "Contact"].map(s => (
                  <li key={s}><span className="text-white/40 text-sm hover:text-gold/80 transition-colors cursor-pointer">{s}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-white/40 text-sm">
                <p>020 – 123 45 67</p>
                <p>info@keukenwrap.nl</p>
                <p>Ma–vr: 08:00–18:00</p>
                <p className="pt-2">Nederland, heel het land</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-xs">
              © 2025 KeukenWrap. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6">
              {["Privacybeleid", "Algemene voorwaarden", "Cookiebeleid"].map(l => (
                <span key={l} className="text-white/25 text-xs hover:text-white/50 transition-colors cursor-pointer">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

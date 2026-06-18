const packages = [
  {
    name: "Kleine keuken",
    desc: "Tot 10 kastdeurtjes",
    price: "Vanaf €995",
    features: [
      "Tot 10 kastdeurtjes & lades",
      "Keuze uit standaard kleurenpalet",
      "Inclusief inmeting & advies",
      "Klaar in 1 werkdag",
      "5 jaar garantie",
    ],
    cta: "Offerte aanvragen",
    highlighted: false,
  },
  {
    name: "Middel keuken",
    desc: "10–20 kastdeurtjes",
    price: "Vanaf €1.695",
    features: [
      "10–20 kastdeurtjes & lades",
      "Keuze uit volledige collectie",
      "Inclusief inmeting & advies",
      "Klaar in 1–2 werkdagen",
      "10 jaar garantie",
      "Gratis panelen & zijkanten",
    ],
    cta: "Meest gekozen",
    highlighted: true,
  },
  {
    name: "Grote keuken",
    desc: "Meer dan 20 kastdeurtjes",
    price: "Vanaf €2.495",
    features: [
      "20+ kastdeurtjes & lades",
      "Premium foliecollectie",
      "Inclusief alle panelen",
      "Klaar in 2–3 werkdagen",
      "10 jaar garantie",
      "Prioriteit planning",
    ],
    cta: "Offerte aanvragen",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="prijzen" className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="section-label">Investering</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white leading-tight mb-4">
            Transparante prijzen, geen verrassingen
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Indicatieprijzen op basis van gemiddelde keukens. De exacte prijs
            hangt af van jouw keuken. Vraag gratis een nauwkeurige offerte aan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`reveal rounded-sm p-8 flex flex-col relative overflow-hidden ${
                pkg.highlighted
                  ? "bg-gold"
                  : "bg-white/5 border border-white/10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 right-0 bg-charcoal text-gold text-xs font-semibold px-4 py-2 tracking-wider uppercase">
                  ★ Populairste keuze
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs uppercase tracking-widest font-medium mb-1 ${pkg.highlighted ? "text-charcoal/60" : "text-white/40"}`}>
                  {pkg.desc}
                </p>
                <h3 className={`font-display text-2xl font-semibold mb-1 ${pkg.highlighted ? "text-charcoal" : "text-white"}`}>
                  {pkg.name}
                </h3>
                <p className={`font-display text-3xl font-semibold mt-4 ${pkg.highlighted ? "text-charcoal" : "text-gold"}`}>
                  {pkg.price}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${pkg.highlighted ? "text-charcoal/80" : "text-white/65"}`}>
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke={pkg.highlighted ? "#2C2420" : "#C9A96E"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#offerte"
                className={`text-center py-3.5 px-6 text-sm font-semibold transition-all duration-200 rounded-sm ${
                  pkg.highlighted
                    ? "bg-charcoal text-white hover:bg-dark-brown"
                    : "border border-white/20 text-white hover:border-gold hover:text-gold"
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-white/35 text-sm mt-8 reveal">
          Alle prijzen zijn exclusief BTW. Gratis inmeting en advies bij jou thuis — volledig vrijblijvend.
        </p>
      </div>
    </section>
  );
}

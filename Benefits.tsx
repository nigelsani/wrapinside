const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L17.5 10L25 11L19.5 16.5L21 24L14 20.5L7 24L8.5 16.5L3 11L10.5 10L14 3Z" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Premium kwaliteit folie",
    desc: "We werken uitsluitend met A-merk vinyl van de hoogste kwaliteit — hittebestendig, vocht­werend en krasbestendig.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.48 4 4 8.48 4 14s4.48 10 10 10 10-4.48 10-10S19.52 4 14 4Z" stroke="#C9A96E" strokeWidth="1.5"/>
        <path d="M14 9v5l3.5 3.5" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Klaar in 1–3 werkdagen",
    desc: "Geen langdurige verbouwing. Ons ervaren team rondt de meeste keukens af in één tot drie werkdagen.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 14h18M14 5l9 9-9 9" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "200+ kleuren en stijlen",
    desc: "Van strak mat zwart tot warm eiken hout, van beton look tot diep navy — er is altijd een folie die past bij jouw interieur.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l4-4 4 4 4-8 4 6 4-10" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Tot 85% goedkoper",
    desc: "Keukenwrapping kost een fractie van een nieuwe keuken, met een vergelijkbaar — of beter — visueel resultaat.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M12 5H7a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M21 3l-9 9M15 3h6v6" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "10 jaar garantie",
    desc: "We staan achter ons werk. De folie gaat minstens 10 jaar mee bij normaal gebruik en goede onderhoud.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4a10 10 0 100 20A10 10 0 0014 4z" stroke="#C9A96E" strokeWidth="1.5"/>
        <path d="M10 14l3 3 5-5" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Duurzame keuze",
    desc: "Door je bestaande keuken te wrappen in plaats van te vervangen, bespaar je op materiaalverspilling en CO₂-uitstoot.",
  },
];

export default function Benefits() {
  return (
    <section id="voordelen" className="py-24 md:py-32 bg-off-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="section-label">Waarom keukenwrapping</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal leading-tight mb-4">
            Alles wat je nodig hebt voor een prachtige keuken
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            KeukenWrap levert een professioneel resultaat dat je niet van een
            nieuwe keuken kunt onderscheiden — tegen een fractie van de prijs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-beige/50">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="reveal bg-cream p-8 hover:bg-white transition-colors duration-300 group"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="mb-5 opacity-80 group-hover:opacity-100 transition-opacity">
                {b.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                {b.title}
              </h3>
              <p className="text-muted text-[15px] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <a href="#offerte" className="btn-gold">
            Vraag gratis offerte aan
          </a>
        </div>
      </div>
    </section>
  );
}

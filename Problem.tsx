export default function Problem() {
  const problems = [
    {
      icon: "💸",
      title: "Een nieuwe keuken kost een fortuin",
      desc: "Een volledige keukenrenovatie kost al snel €15.000 tot €30.000. Inclusief sloopwerk, installateur en nieuwe apparatuur.",
    },
    {
      icon: "🕰️",
      title: "Verouderde kleuren en stijlen",
      desc: "Donker hout, beige tegels en bruine kastjes: jouw keuken voelt gedateerd aan, terwijl alles nog prima functioneert.",
    },
    {
      icon: "🔨",
      title: "Maanden verbouwingsdrukte",
      desc: "Een keuken vervangen betekent weken zonder keuken, stof door het hele huis en eindeloze planning met aannemers.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16 reveal">
          <span className="section-label">Het probleem</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal leading-tight mb-4">
            Je wilt verandering — maar niet de rekening die erbij hoort
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Veel huiseigenaren zitten met dezelfde frustratie: een verouderde
            keuken die nog prima werkt, maar visueel achterblijft.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="reveal bg-white p-8 border border-beige/60 hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl mb-5">{p.icon}</div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                {p.title}
              </h3>
              <p className="text-muted text-[15px] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Divider quote */}
        <div className="mt-20 py-10 border-t border-b border-beige reveal">
          <p className="font-display text-2xl md:text-3xl text-charcoal/80 italic text-center max-w-3xl mx-auto leading-relaxed">
            &ldquo;Waarom een volledig nieuwe keuken kopen als je hem voor een
            fractie van de prijs kunt transformeren?&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

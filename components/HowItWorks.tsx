const steps = [
  {
    num: "01",
    title: "Gratis inmeting & advies",
    desc: "We komen bij jou langs voor een gratis inmeting en kleurenadvies. We bekijken je keuken, bespreken je wensen en presenteren de mooiste opties in jouw stijl.",
    duration: "Gratis — vrijblijvend",
  },
  {
    num: "02",
    title: "Offerte op maat",
    desc: "Binnen 48 uur ontvang je een gedetailleerde offerte met prijs, planning en materiaalomschrijving. Transparant en zonder verborgen kosten.",
    duration: "Binnen 48 uur",
  },
  {
    num: "03",
    title: "Voorbereiding & demontage",
    desc: "Op de dag van uitvoering demonteren we de kastdeurtjes, lades en panelen. We beschermen jouw keuken en werkomgeving zorgvuldig.",
    duration: "Dag 1 — ochtend",
  },
  {
    num: "04",
    title: "Professioneel wrappen",
    desc: "Onze specialisten brengen de folie nauwkeurig aan. Elk stuk wordt volledig glad getrokken, zonder luchtbellen of naden. Strak en precies.",
    duration: "Dag 1–2",
  },
  {
    num: "05",
    title: "Montage & eindcontrole",
    desc: "We monteren alles terug, voeren een uitgebreide kwaliteitscontrole uit en lopen de keuken met jou door. Pas als jij tevreden bent, zijn wij klaar.",
    duration: "Laatste dag",
  },
];

export default function HowItWorks() {
  return (
    <section id="werkwijze" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Sticky left */}
          <div className="lg:sticky lg:top-28 reveal">
            <span className="section-label">Werkwijze</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal leading-tight mb-4">
              Van idee naar droomkeuken in 5 stappen
            </h2>
            <div className="gold-line" />
            <p className="text-muted text-lg leading-relaxed mb-8">
              Ons proces is eenvoudig, snel en volledig op jou afgestemd. Je
              hoeft nergens naar toe — wij komen naar jou.
            </p>
            <a href="#offerte" className="btn-gold">
              Start vandaag
            </a>
          </div>

          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={i}
                className="reveal flex gap-6 pb-10 border-b border-beige/70 last:border-b-0 last:pb-0 pt-10 first:pt-0 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0">
                  <span className="font-display text-4xl font-semibold text-beige group-hover:text-gold transition-colors duration-300">
                    {step.num}
                  </span>
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-display text-xl font-semibold text-charcoal">
                      {step.title}
                    </h3>
                    <span className="text-gold text-xs font-medium bg-gold/8 border border-gold/20 px-2.5 py-0.5 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-muted text-[15px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

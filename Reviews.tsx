const reviews = [
  {
    name: "Sandra van der Berg",
    location: "Amsterdam",
    rating: 5,
    text: "Onze keuken was echt aan vervanging toe, maar een nieuwe keuken konden we ons niet veroorloven. KeukenWrap heeft hem getransformeerd in twee dagen. Het ziet er beter uit dan een nieuwe keuken — iedereen vraagt ernaar!",
    kitchen: "Van donker hout naar mat wit",
  },
  {
    name: "Marco & Lisa Jansen",
    location: "Utrecht",
    rating: 5,
    text: "Super vakkundig werk. De medewerkers waren punctueel, netjes en deden precies wat ze beloofden. Geen verrassingen in de factuur, geen rommel in huis. Absolute aanrader voor iedereen die zijn keuken wil vernieuwen.",
    kitchen: "Navy blauw met goud greepjes",
  },
  {
    name: "Pieter Hoffmann",
    location: "Den Haag",
    rating: 5,
    text: "Ik was sceptisch of wrapping er echt professioneel uit zou zien, maar mijn twijfels zijn volledig weggenomen. De kwaliteit is uitstekend. Voor minder dan €2.000 heb ik een keuken die er als nieuw uitziet.",
    kitchen: "Antraciet grijze keuken",
  },
  {
    name: "Fatima El Idrissi",
    location: "Rotterdam",
    rating: 5,
    text: "Geweldig bedrijf. Het kleurenadvies was heel waardevol — ik had zelf nooit die combinatie gekozen maar het resultaat is prachtig. De keuken is nu mijn favoriete plek in huis.",
    kitchen: "Warm beige Scandinavisch",
  },
  {
    name: "Tom & Emma de Vries",
    location: "Eindhoven",
    rating: 5,
    text: "Wij hadden een huurwoning met een vreselijke bruine 90s keuken. Na de wrapping voelt het als een luxe appartement. Netjes, snel en voor een eerlijke prijs. Doen wat ze beloven.",
    kitchen: "Mat zwart modern",
  },
  {
    name: "Annet Verhoef",
    location: "Groningen",
    rating: 5,
    text: "Na jarenlang twijfelen heb ik de stap genomen en het was de beste beslissing. De communicatie was duidelijk, de werkzaamheden professioneel en het resultaat overweldigend. Vijf sterren!",
    kitchen: "Saliegroen met houten blad",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#C9A96E">
          <path d="M7 1l1.76 3.57L13 5.24l-3 2.92.71 4.14L7 10.27l-3.71 2.03L4 8.16 1 5.24l4.24-.67L7 1z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-off-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="section-label">Ervaringen</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal leading-tight mb-4">
            Wat onze klanten zeggen
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Stars count={5} />
            <span className="font-semibold text-charcoal">4.9/5</span>
            <span className="text-muted text-sm">op basis van 156 reviews</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="reveal bg-white p-7 border border-beige/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <Stars count={r.rating} />
              <p className="text-charcoal/80 text-[15px] leading-relaxed my-4 italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="pt-4 border-t border-beige/50">
                <div className="font-semibold text-charcoal text-sm">{r.name}</div>
                <div className="text-muted text-xs mt-0.5">{r.location} · {r.kitchen}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-16 reveal bg-white border border-beige/60 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["500+", "Tevreden klanten"],
              ["4.9 ★", "Gemiddelde score"],
              ["98%", "Zou ons aanbevelen"],
              ["10 jr", "Garantie op folie"],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="font-display text-2xl md:text-3xl font-semibold text-gold">{stat}</div>
                <div className="text-muted text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

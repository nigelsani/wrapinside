export default function Solution() {
  return (
    <section className="py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="reveal">
            <span className="section-label">De oplossing</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white leading-tight mb-6">
              Keukenwrapping:{" "}
              <span className="text-gold">slimme renovatie</span> voor de
              moderne huiseigenaar
            </h2>
            <div className="gold-line" />
            <p className="text-white/65 text-lg leading-relaxed mb-8">
              Keukenwrapping is het professioneel bekleden van je bestaande
              keukenkastjes, deuren en panelen met hoogwaardige vinyl folie.
              Het resultaat? Een volledig vernieuwde keuken — zonder de chaos
              en kosten van een verbouwing.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Folie beschikbaar in 200+ kleuren en materialen",
                "Vlak, strak en langdurig resultaat",
                "Geen sloopwerk, geen stof, geen gedoe",
                "Klaar in slechts 1–3 werkdagen",
                "10 jaar garantie op de folie",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4.2 7.5L8 2.5" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-white/75 text-[15px]">{item}</span>
                </div>
              ))}
            </div>

            <a href="#offerte" className="btn-gold">
              Vraag gratis offerte aan
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Visual comparison */}
          <div className="reveal grid grid-cols-2 gap-3">
            <div className="space-y-3">
              <div
                className="rounded-sm aspect-[3/4] flex flex-col items-center justify-end p-4"
                style={{
                  background: "linear-gradient(135deg, #4A3728, #6B4C38)",
                }}
              >
                <span className="text-white/60 text-xs tracking-widest uppercase bg-black/30 px-3 py-1 rounded-full">
                  Voorheen
                </span>
              </div>
              <div
                className="rounded-sm aspect-square"
                style={{ background: "linear-gradient(135deg, #3D2B1A, #5C3D25)" }}
              />
            </div>
            <div className="space-y-3 pt-6">
              <div
                className="rounded-sm aspect-square"
                style={{ background: "linear-gradient(135deg, #E8E0D0, #D4C9B5)" }}
              />
              <div
                className="rounded-sm aspect-[3/4] flex flex-col items-center justify-end p-4"
                style={{
                  background: "linear-gradient(135deg, #C9A96E, #E8DFCC)",
                }}
              >
                <span className="text-charcoal/70 text-xs tracking-widest uppercase bg-white/40 px-3 py-1 rounded-full">
                  Na wrapping
                </span>
              </div>
            </div>
            {/* Price comparison overlay */}
            <div className="col-span-2 mt-2 bg-white/5 border border-white/10 rounded-sm p-4 flex justify-around text-center">
              <div>
                <div className="font-display text-2xl font-semibold text-white/40 line-through">€22.000</div>
                <div className="text-white/35 text-xs mt-0.5">Nieuwe keuken</div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="font-display text-2xl font-semibold text-gold">€2.500</div>
                <div className="text-white/50 text-xs mt-0.5">Keukenwrapping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

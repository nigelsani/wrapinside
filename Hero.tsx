export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background gradient pattern */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1A1A1A 0%, #2C2420 40%, #1A1A1A 100%)",
        }}
      />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C9A96E 0px, #C9A96E 1px, transparent 0px, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Kitchen illustration — abstract panels */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden hidden lg:block">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "linear-gradient(to right, #1A1A1A, transparent 30%)",
            zIndex: 2,
          }}
        />
        {/* Abstract kitchen cabinet grid */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 1 }}>
          <div className="grid grid-cols-3 gap-3 p-12 w-full h-full">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="rounded-sm"
                style={{
                  background: i % 3 === 0
                    ? "rgba(201,169,110,0.15)"
                    : i % 3 === 1
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,169,110,0.12)",
                  aspectRatio: i < 6 ? "4/3" : "4/5",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-2xl">
          <span className="section-label text-gold/80 mb-6 block">
            Keukenwrapping specialist
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.15] text-balance mb-6">
            Geef je keuken een compleet nieuwe uitstraling{" "}
            <em className="not-italic text-gold">zonder</em> een nieuwe keuken
            te kopen
          </h1>

          <div className="gold-line mb-6" />

          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Met keukenwrapping vernieuw je jouw keukenkastjes, deuren en
            panelen snel, strak en betaalbaar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#offerte" className="btn-gold text-base py-4 px-8">
              Vraag gratis offerte aan
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#galerij" className="btn-outline text-base py-4 px-8">
              Bekijk mogelijkheden
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-14 flex flex-wrap gap-8">
            {[
              ["500+", "tevreden klanten"],
              ["10 jr", "garantie op folie"],
              ["€ 2.500", "gemiddeld bespaard"],
            ].map(([stat, label]) => (
              <div key={label} className="flex flex-col">
                <span className="font-display text-2xl font-semibold text-gold">{stat}</span>
                <span className="text-white/50 text-sm mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}

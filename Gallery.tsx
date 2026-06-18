"use client";
import { useState, useRef, useCallback } from "react";

const kitchens = [
  {
    name: "Moderne mat-zwarte keuken",
    before: { label: "Verouderd donker hout", bg: "linear-gradient(145deg, #3D2B1A 0%, #5C3D25 40%, #4A3020 100%)" },
    after: { label: "Strak mat zwart", bg: "linear-gradient(145deg, #1A1A1A 0%, #2A2A2A 50%, #1A1A1A 100%)" },
  },
  {
    name: "Warme beige Scandinavische stijl",
    before: { label: "Bruine MDF kastjes", bg: "linear-gradient(145deg, #6B4C38 0%, #8B5E3C 40%, #5C3D25 100%)" },
    after: { label: "Licht Scandinavisch eiken", bg: "linear-gradient(145deg, #D4C4A0 0%, #E8DFCC 50%, #C9B896 100%)" },
  },
  {
    name: "Diep navy met goud accent",
    before: { label: "Verouderde witte laminaat", bg: "linear-gradient(145deg, #C8C0B0 0%, #D8D0C0 50%, #C0B8A8 100%)" },
    after: { label: "Diep navy blauw", bg: "linear-gradient(145deg, #1B2B4B 0%, #243558 50%, #1A2A48 100%)" },
  },
];

function BeforeAfterSlider({ kitchen }: { kitchen: typeof kitchens[0] }) {
  const [position, setPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  return (
    <div className="space-y-3">
      <div
        ref={sliderRef}
        className="ba-slider rounded-sm overflow-hidden select-none"
        style={{ aspectRatio: "4/3" }}
        onMouseDown={(e) => {
          dragging.current = true;
          updatePosition(e.clientX);
        }}
        onMouseMove={(e) => { if (dragging.current) updatePosition(e.clientX); }}
        onMouseUp={() => { dragging.current = false; }}
        onMouseLeave={() => { dragging.current = false; }}
        onTouchStart={(e) => {
          dragging.current = true;
          updatePosition(e.touches[0].clientX);
        }}
        onTouchMove={(e) => {
          if (dragging.current) updatePosition(e.touches[0].clientX);
        }}
        onTouchEnd={() => { dragging.current = false; }}
      >
        {/* Before */}
        <div
          className="absolute inset-0 flex flex-col"
          style={{ background: kitchen.before.bg }}
        >
          {/* Cabinet grid simulation - before */}
          <div className="absolute inset-4 grid grid-cols-3 grid-rows-2 gap-2 opacity-30">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border border-white/20 rounded-sm" />
            ))}
          </div>
          <span className="absolute bottom-4 left-4 text-white/70 text-xs bg-black/30 px-3 py-1 rounded-full">
            ← {kitchen.before.label}
          </span>
        </div>

        {/* After */}
        <div
          className="ba-after flex flex-col"
          style={{ width: `${position}%`, background: kitchen.after.bg }}
        >
          {/* Cabinet grid simulation - after */}
          <div className="absolute inset-4 grid grid-cols-3 grid-rows-2 gap-2 opacity-20">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border border-white/30 rounded-sm" />
            ))}
          </div>
          <span className="absolute bottom-4 right-4 text-white/90 text-xs bg-black/30 px-3 py-1 rounded-full whitespace-nowrap" style={{ minWidth: 'max-content' }}>
            {kitchen.after.label} →
          </span>
        </div>

        {/* Handle */}
        <div className="ba-handle" style={{ left: `calc(${position}% - 1.5px)` }} />
      </div>
      <p className="text-charcoal font-medium text-sm">{kitchen.name}</p>
      <p className="text-muted text-xs">Sleep de lijn om voor/na te vergelijken</p>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="galerij" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="section-label">Resultaten</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal leading-tight mb-4">
            Voor & na: zie het verschil zelf
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Sleep de balk om de transformatie van voor naar na te zien.
            Elke keuken is met dezelfde kastjes — alleen de folie is anders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {kitchens.map((k, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <BeforeAfterSlider kitchen={k} />
            </div>
          ))}
        </div>

        {/* Folie swatches */}
        <div className="mt-20 reveal">
          <p className="text-center text-muted text-sm mb-6 tracking-wide uppercase text-xs">Populaire folie kleuren</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Mat Zwart", bg: "#1A1A1A" },
              { name: "Warm Wit", bg: "#F5F0E8" },
              { name: "Donker Eiken", bg: "#5C3D25" },
              { name: "Licht Eiken", bg: "#C4A87A" },
              { name: "Zand Beige", bg: "#D4C4A0" },
              { name: "Navy Blauw", bg: "#1B2B4B" },
              { name: "Saliegroen", bg: "#7B9B7A" },
              { name: "Antraciet", bg: "#3C3C3C" },
              { name: "Mat Grijs", bg: "#9A9A9A" },
              { name: "Terracotta", bg: "#C17F5A" },
            ].map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-1.5">
                <div
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform"
                  style={{ background: s.bg }}
                  title={s.name}
                />
                <span className="text-muted text-[10px] text-center leading-none">{s.name}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted text-sm mt-4">En nog 190+ andere kleuren en materialen beschikbaar</p>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Hoe lang gaat de folie mee?",
    a: "Bij normaal gebruik en goed onderhoud gaat de folie 10 jaar of langer mee. We geven dan ook 10 jaar garantie op het materiaal. Goede kwaliteit vinyl is hittebestendig, vochtwerend en bestand tegen dagelijks gebruik.",
  },
  {
    q: "Kan ik de keuken daarna gewoon schoonmaken?",
    a: "Absoluut. De folie is heel eenvoudig te reinigen met een vochtige doek en mild schoonmaakmiddel. Schuurmiddelen en agressieve chemicaliën moet je vermijden, maar verder is het onderhoud minimal.",
  },
  {
    q: "Hoe lang duurt de behandeling?",
    a: "Een gemiddelde keuken is klaar in 1 tot 3 werkdagen. Kleine keukens doen we vaak in één dag. We geven je altijd een realistische planning vooraf, zodat je weet wat je kunt verwachten.",
  },
  {
    q: "Wat als ik de folie later wil verwijderen?",
    a: "Dat kan! De folie laat bij professionele verwijdering geen schade achter. Dit maakt het ook een interessante optie voor huurwoningen. De kastjes blijven volledig intact.",
  },
  {
    q: "Welke keukens zijn geschikt voor wrapping?",
    a: "Vrijwel elke keuken is geschikt — van IKEA tot maatwerkkeukens. Kastjes van MDF, spaanplaat, hout of laminaat kunnen allemaal worden gewrapt. We beoordelen dit tijdens de gratis inmeting.",
  },
  {
    q: "Wat kost een gemiddelde keuken?",
    a: "De kosten hangen af van het aantal deurtjes, lades en panelen. Een gemiddelde keuken kost tussen de €1.500 en €3.500. Voor een exacte prijs doen we altijd een gratis vrijblijvende inmeting.",
  },
  {
    q: "Moeten we tijdens de werkzaamheden weg?",
    a: "Dat hoeft niet. Je kunt gewoon thuis blijven. We werken netjes en beschermen de omgeving. Wel is het fijn als het keukengebied vrij toegankelijk is.",
  },
  {
    q: "Kunnen jullie ook het blad of de achterwand wrappen?",
    a: "In veel gevallen kunnen we ook het aanrechtblad, de zijpanelen en de achterwand behandelen. Dit bespreken we bij de inmeting. Zo kun je voor een volledig vernieuwd resultaat kiezen.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Veelgestelde vragen</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal leading-tight mb-4">
            Alles wat je wilt weten
          </h2>
        </div>

        <div className="space-y-1">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal border border-beige/60 bg-white hover:border-gold/30 transition-colors"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-charcoal text-[15px] leading-snug">{faq.q}</span>
                <span
                  className={`w-6 h-6 flex-shrink-0 rounded-full border border-beige flex items-center justify-center transition-all duration-200 ${
                    open === i ? "bg-gold border-gold rotate-45" : ""
                  }`}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1v8M1 5h8" stroke={open === i ? "white" : "#C9A96E"} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-muted text-[15px] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <p className="text-muted mb-4">Staat jouw vraag er niet bij?</p>
          <a href="#offerte" className="btn-gold">
            Stel je vraag direct
          </a>
        </div>
      </div>
    </section>
  );
}

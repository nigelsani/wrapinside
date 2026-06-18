"use client";
import { useState } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    kitchenSize: "",
    style: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="offerte" className="py-24 md:py-32 bg-off-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left info */}
          <div className="reveal">
            <span className="section-label">Gratis offerte</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal leading-tight mb-4">
              Vraag je vrijblijvende offerte aan
            </h2>
            <div className="gold-line" />
            <p className="text-muted text-lg leading-relaxed mb-10">
              Vul het formulier in en we nemen binnen 24 uur contact met je op
              voor een gratis inmeting en kleurenadvies bij jou thuis.
            </p>

            <div className="space-y-5">
              {[
                { icon: "📍", title: "Gratis inmeting aan huis", desc: "We komen bij jou langs — volledig gratis en vrijblijvend." },
                { icon: "⚡", title: "Reactie binnen 24 uur", desc: "Je hoort van ons binnen één werkdag." },
                { icon: "📋", title: "Gedetailleerde offerte", desc: "Transparante prijs, geen verborgen kosten." },
                { icon: "🔒", title: "100% vrijblijvend", desc: "Geen verplichting. Alleen als jij tevreden bent." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-charcoal text-sm">{item.title}</div>
                    <div className="text-muted text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-beige">
              <p className="text-muted text-sm mb-3">Liever direct bellen?</p>
              <a href="tel:+31201234567" className="font-display text-2xl font-semibold text-charcoal hover:text-gold transition-colors">
                020 – 123 45 67
              </a>
              <p className="text-muted text-xs mt-1">Ma–vr 08:00 – 18:00</p>
            </div>
          </div>

          {/* Form */}
          <div className="reveal bg-white border border-beige/60 p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gold/10 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M6 14l5.5 5.5L22 8" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-semibold text-charcoal mb-3">
                  Aanvraag ontvangen!
                </h3>
                <p className="text-muted text-[15px] leading-relaxed">
                  Bedankt voor je aanvraag, {form.name.split(" ")[0]}. We nemen binnen 24 uur contact met je op voor een gratis afspraak.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-charcoal mb-6">
                  Jouw gegevens
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-charcoal/60 uppercase tracking-wider mb-1.5 block">
                      Naam *
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      placeholder="Voor- en achternaam"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-charcoal/60 uppercase tracking-wider mb-1.5 block">
                      E-mailadres *
                    </label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="naam@email.nl"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-charcoal/60 uppercase tracking-wider mb-1.5 block">
                      Telefoonnummer *
                    </label>
                    <input
                      className="form-input"
                      type="tel"
                      name="phone"
                      placeholder="06 – 12 34 56 78"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-charcoal/60 uppercase tracking-wider mb-1.5 block">
                      Woonplaats
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      name="city"
                      placeholder="Amsterdam"
                      value={form.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-charcoal/60 uppercase tracking-wider mb-1.5 block">
                      Keuken formaat
                    </label>
                    <select
                      className="form-input"
                      name="kitchenSize"
                      value={form.kitchenSize}
                      onChange={handleChange}
                    >
                      <option value="">Selecteer...</option>
                      <option value="small">Klein (tot 10 deurtjes)</option>
                      <option value="medium">Middel (10–20 deurtjes)</option>
                      <option value="large">Groot (20+ deurtjes)</option>
                      <option value="unknown">Weet ik niet</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-charcoal/60 uppercase tracking-wider mb-1.5 block">
                      Gewenste stijl
                    </label>
                    <select
                      className="form-input"
                      name="style"
                      value={form.style}
                      onChange={handleChange}
                    >
                      <option value="">Selecteer...</option>
                      <option value="modern">Modern / Mat</option>
                      <option value="scandinavian">Scandinavisch / Licht</option>
                      <option value="dark">Donker / Stoer</option>
                      <option value="natural">Naturel / Houtlook</option>
                      <option value="advice">Advies gewenst</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-charcoal/60 uppercase tracking-wider mb-1.5 block">
                    Aanvullende informatie
                  </label>
                  <textarea
                    className="form-input resize-none"
                    name="message"
                    rows={3}
                    placeholder="Vertel ons meer over je keuken of wensen (optioneel)..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="btn-gold w-full justify-center py-4 text-base mt-2"
                >
                  Vraag gratis offerte aan
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <p className="text-muted text-xs text-center mt-2">
                  Volledig vrijblijvend · Geen spam · Wij bellen jou terug
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

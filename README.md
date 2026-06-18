# KeukenWrap — Landing Page

Premium Dutch-language landing page for a kitchen wrapping company. Built with Next.js 14 and Tailwind CSS.

## 🚀 Deploy to Vercel (3 stappen)

### Optie 1: Via Vercel CLI
```bash
npm install
npx vercel
```

### Optie 2: Via GitHub + Vercel Dashboard
1. Push dit project naar een GitHub repo
2. Ga naar [vercel.com](https://vercel.com) en klik **Add New Project**
3. Selecteer je repo — Vercel detecteert Next.js automatisch
4. Klik **Deploy** — klaar!

## 💻 Lokaal ontwikkelen

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Structuur

```
keukenwrap/
├── app/
│   ├── globals.css       # Global styles, fonts, utilities
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Nav.tsx           # Sticky navigation
│   ├── Hero.tsx          # Hero section
│   ├── Problem.tsx       # Problem section
│   ├── Solution.tsx      # Solution section
│   ├── Benefits.tsx      # Benefits grid
│   ├── Gallery.tsx       # Before/after interactive slider
│   ├── HowItWorks.tsx    # 5-step process
│   ├── Pricing.tsx       # Pricing packages
│   ├── Reviews.tsx       # Customer testimonials
│   ├── FAQ.tsx           # Accordion FAQ
│   ├── QuoteForm.tsx     # Lead capture form
│   ├── Footer.tsx        # Footer + final CTA
│   └── ScrollReveal.tsx  # Scroll animation hook
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## 🎨 Design

- **Kleuren:** Warm wit (`#FAFAF8`), donker houtskool (`#1A1A1A`), warm beige (`#E8E0D0`), goud accent (`#C9A96E`)
- **Typografie:** Playfair Display (koppen) + Inter (body)
- **Stijl:** Modern luxury, premium home renovation

## 📝 Aanpassingen

- **Telefoonnummer:** Zoek naar `020 – 123 45 67` en vervang
- **E-mail:** Zoek naar `info@keukenwrap.nl` en vervang
- **Prijzen:** Aanpassen in `components/Pricing.tsx`
- **Bedrijfsnaam:** Aanpassen in `Nav.tsx` en `Footer.tsx`
- **Form backend:** `QuoteForm.tsx` → vervang `setSubmitted(true)` met je eigen API call

## 🔗 Form integreren

Om het formulier te koppelen aan een echte backend (bijv. Netlify Forms, Formspree, of eigen API):

```tsx
// In QuoteForm.tsx, vervang de handleSubmit functie:
const handleSubmit = async (e: React.MouseEvent) => {
  e.preventDefault();
  const res = await fetch('/api/quote', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  if (res.ok) setSubmitted(true);
};
```

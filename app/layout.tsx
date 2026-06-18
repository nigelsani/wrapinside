import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KeukenWrap | Nieuwe uitstraling zonder nieuwe keuken",
  description:
    "Met keukenwrapping vernieuw je jouw keukenkastjes, deuren en panelen snel, strak en betaalbaar. Vraag vandaag nog je gratis offerte aan.",
  keywords: "keukenwrapping, keuken renoveren, keukenkastjes wrappen, vinyl wrap keuken, keuken moderniseren",
  openGraph: {
    title: "KeukenWrap – Geef je keuken een compleet nieuwe uitstraling",
    description: "Betaalbare keukenwrapping voor een moderne keuken zonder hoge verbouwkosten.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}

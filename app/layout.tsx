import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { landingData } from "@/data/landing";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://salaobeauty.demo"),
  title: "Salão Beauty | Cortes, Mechas e Produções de Beleza Premium",
  description:
    "Agende seu horário no Salão Beauty, espaço dedicado a cortes autorais, mechas personalizadas, produção de eventos e mentoria profissional.",
  openGraph: {
    title: "Salão Beauty | Cortes, Mechas e Produções de Beleza Premium",
    description:
      "Agende seu horário no Salão Beauty, espaço dedicado a cortes autorais, mechas personalizadas, produção de eventos e mentoria profissional.",
    url: "https://salaobeauty.demo/",
    images: [
      {
        url: "/beauty/logo.png",
        width: 1200,
        height: 630,
        alt: landingData.business.name,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[var(--bg)] font-sans text-[var(--text)]">
        {children}
      </body>
    </html>
  );
}

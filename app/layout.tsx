import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Révolution de l'IA dans le Génie Civil — Masterclass BTP",
  description: "Découvrez comment l'Intelligence Artificielle transforme le secteur du BTP. Automatisez vos rapports, gagnez du temps, et boostez votre productivité sur chantier.",
  keywords: "IA, génie civil, BTP, masterclass, automatisation, intelligence artificielle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

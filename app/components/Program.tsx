"use client";
import { useEffect, useRef, useState } from "react";

const modules = [
  {
    time: "Module 1",
    title: "Positionnement professionnel",
    points: [
      "Branding personnel BTP",
      "Réputation professionnel",
      "Visibilité numérique",
      "Stratégie de carrière",
    ],
  },
  {
    time: "Module 2",
    title: "Communication digitale",
    points: [
      "Création de contenus pro",
      "Valorisation des réalisations",
      "Communication BTP",
      "Visibilité professionnel",
    ],
  },
  {
    time: "Module 3",
    title: "LinkedIn professionnel",
    points: [
      "Optimisation du profil",
      "Titre et bio impactants",
      "Développement du réseau",
      "Recherche d'opportunuités",
    ],
  },
  {
    time: "Module 4",
    title: "Monétisation & Opportunuités IA",
    points: [
      "Création de services IA & BTP",
      "Formations et ebooks",
      "Consulting assistés par IA",
      "Revenus complémentaires",
    ],
  },
];

export default function Program() {
  const [open, setOpen] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#0d1526",
        padding: "100px 40px",
        borderTop: "1px solid rgba(255,107,43,0.1)",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: "60px" }}>
          <span className="section-label">Le programme</span>
          <span className="orange-line" />
          <h2
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: "700",
              lineHeight: "1.2",
            }}
          >
            3 heures qui changent votre{" "}
            <span style={{ color: "#FF6B2B" }}>façon de travailler</span>
          </h2>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {modules.map((mod, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                background: open === i ? "rgba(255,107,43,0.07)" : "rgba(30,45,90,0.25)",
                border: `1px solid ${open === i ? "rgba(255,107,43,0.3)" : "rgba(200,214,229,0.08)"}`,
                borderRadius: "6px",
                overflow: "hidden",
                transition: "all 0.3s ease",
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "24px 28px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  textAlign: "left",
                }}
              >
                <div>
                  <div style={{ color: "#FF6B2B", fontSize: "0.75rem", fontFamily: "Space Grotesk, sans-serif", fontWeight: "600", marginBottom: "4px", letterSpacing: "0.05em" }}>
                    {mod.time}
                  </div>
                  <div style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: "600", fontSize: "1rem", color: "#F8FAFC", lineHeight: "1.4" }}>
                    {mod.title}
                  </div>
                </div>
                <span
                  style={{
                    color: "#FF6B2B",
                    fontSize: "1.2rem",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                    flexShrink: 0,
                  }}
                >
                  +
                </span>
              </button>

              {open === i && (
                <div style={{ padding: "0 28px 24px" }}>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {mod.points.map((pt, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          color: "#C8D6E5",
                          fontSize: "0.88rem",
                          lineHeight: "1.6",
                        }}
                      >
                        <span style={{ color: "#FF6B2B", flexShrink: 0, marginTop: "3px" }}>→</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bonus */}
        <div
          className="reveal"
          style={{
            marginTop: "32px",
            padding: "24px 28px",
            background: "linear-gradient(135deg, rgba(255,215,0,0.06), rgba(255,107,43,0.06))",
            border: "1px solid rgba(255,215,0,0.2)",
            borderRadius: "6px",
            display: "flex",
            gap: "16px",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "1.5rem" }}>🎁</span>
          <div>
            <div style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: "700", color: "#FFD700", marginBottom: "4px", fontSize: "0.9rem" }}>
              BONUS INCLUS
            </div>
            <div style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: "600", fontSize: "0.95rem", marginBottom: "6px" }}>
              Pack des prompts IA spéciaux BTP
            </div>
            <p style={{ color: "#C8D6E5", fontSize: "0.85rem", lineHeight: "1.6" }}>
              Copiez-collez directement dans ChatGPT ou Claude : rapports de chantier, analyses de béton, 
              planning, correspondances — prêts à l&apos;emploi dès la fin de la masterclass.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

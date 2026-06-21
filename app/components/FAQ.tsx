"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Faut-il des compétences en informatique pour suivre cette masterclass ?",
    a: "Non. La masterclass est conçue pour des professionnels du BTP, pas des informaticiens. Si vous savez utiliser WhatsApp, vous avez le niveau requis. Tout est expliqué étape par étape avec des démonstrations en direct.",
  },
  {
    q: "Est-ce que ça fonctionne pour les petites structures ?",
    a: "Surtout pour les petites structures ! Les outils présentés sont gratuits ou très peu coûteux. Un entrepreneur individuel ou une PME de 10 personnes a encore plus à gagner qu'une grande entreprise, car chaque heure récupérée a plus de valeur.",
  },
  {
    q: "Les outils sont-ils disponibles en Afrique de l'Ouest ?",
    a: "Oui. Nous sélectionnons spécifiquement des outils accessibles depuis Dakar, Abidjan, Bamako, Ouagadougou et toute la région. Certains nécessitent un VPN basique, nous vous expliquons comment faire.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Le paiement se fait en ligne via Wave, Orange Money ou carte bancaire. Vous recevez une confirmation immédiate par email avec le lien de connexion à la session.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      style={{
        background: "#0A0F1E",
        padding: "100px 40px",
        borderTop: "1px solid rgba(200,214,229,0.06)",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ marginBottom: "60px" }}>
          <span className="section-label">FAQ</span>
          <span className="orange-line" />
          <h2
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: "700",
            }}
          >
            Questions fréquentes
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderBottom: "1px solid rgba(200,214,229,0.08)",
                padding: "0",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "24px 0",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "20px",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: "600",
                    fontSize: "0.95rem",
                    color: open === i ? "#FF6B2B" : "#F8FAFC",
                    lineHeight: "1.5",
                    transition: "color 0.2s",
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    color: "#FF6B2B",
                    fontSize: "1.4rem",
                    lineHeight: "1",
                    transform: open === i ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform 0.25s ease",
                    flexShrink: 0,
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <p
                  style={{
                    color: "#8ba4c0",
                    fontSize: "0.88rem",
                    lineHeight: "1.8",
                    paddingBottom: "24px",
                    paddingRight: "32px",
                  }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div style={{ marginTop: "64px", textAlign: "center" }}>
          <p style={{ color: "#C8D6E5", marginBottom: "24px", fontSize: "0.9rem" }}>
            Une autre question ? Contactez-nous directement sur WhatsApp
          </p>
          <a
            href="#inscription"
            className="btn-primary"
            style={{ fontSize: "1rem", padding: "16px 36px" }}
          >
            Je réserve ma place →
          </a>
        </div>
      </div>
    </section>
  );
}

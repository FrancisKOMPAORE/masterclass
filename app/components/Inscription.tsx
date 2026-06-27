"use client";
import { useEffect, useRef } from "react";

// ← Mettez votre lien de paiement ici (Stripe, Wave, PayDunya, Paylink, etc.)
const PAYMENT_LINK = "https://xliiwqsf.mychariow.shop/prd_7vk1s6w2";

export default function Inscription() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="inscription"
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, #0A0F1E 0%, #1E2D5A 50%, #0A0F1E 100%)",
        padding: "120px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, rgba(255,107,43,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, #FF6B2B, transparent)",
        }}
      />

      <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center" }}>
        {/* Urgency badge */}
        <div className="reveal" style={{ marginBottom: "28px" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(255,107,43,0.15)",
              border: "1px solid rgba(255,107,43,0.4)",
              borderRadius: "100px",
              padding: "6px 18px",
              fontSize: "0.78rem",
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: "600",
              color: "#FF6B2B",
              letterSpacing: "0.08em",
            }}
          >
            🔥 Accès limité — Places disponibles
          </span>
        </div>

        <h2
          className="reveal"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: "800",
            lineHeight: "1.15",
            marginBottom: "20px",
          }}
        >
          Prêt à reprendre le contrôle{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #FF6B2B, #FFD700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            de votre temps ?
          </span>
        </h2>

        <p
          className="reveal"
          style={{
            color: "#C8D6E5",
            fontSize: "1rem",
            lineHeight: "1.8",
            marginBottom: "50px",
            fontWeight: "300",
          }}
        >
          Deux sessions live, en ligne, avec échanges en temps réel. <br/>
          Toutes les ressources téléchargeables. <br/>
          Un investissement qui se rentabilise dès la première semaine.
        </p>

        {/* Price card */}
        <div
          className="reveal"
          style={{
            background: "rgba(10,15,30,0.8)",
            border: "1px solid rgba(255,107,43,0.25)",
            borderRadius: "12px",
            padding: "48px 40px",
            marginBottom: "20px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top shine */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "200px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,107,43,0.6), transparent)",
            }}
          />

          <div style={{ marginBottom: "8px" }}>
            <span style={{ color: "#8ba4c0", fontSize: "0.85rem", textDecoration: "line-through" }}>
              Valeur réelle : 10 000 FCFA
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "8px", marginBottom: "6px" }}>
            <span
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "4rem",
                fontWeight: "800",
                color: "#F8FAFC",
                lineHeight: "1",
              }}
            >
              2 500
            </span>
            <span style={{ color: "#C8D6E5", fontSize: "1.1rem", fontFamily: "Space Grotesk, sans-serif" }}>
              FCFA
            </span>
          </div>
          <div style={{ color: "#8ba4c0", fontSize: "0.82rem", marginBottom: "36px" }}>
            Paiement unique · Accès aux supports et aux prompts
          </div>

          {/* Inclus list */}
          <div
            style={{
              textAlign: "left",
              marginBottom: "36px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {[
              "2 jours de masterclass live avec Q&A",
              "Accompagnement personnalisé",
              "Pack des prompts IA & BTP téléchargeables",
              "Accès au groupe WhatsApp participants",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "#C8D6E5",
                  fontSize: "0.9rem",
                }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "rgba(255,107,43,0.15)",
                    border: "1px solid rgba(255,107,43,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.65rem",
                    color: "#FF6B2B",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>

          {/* Payment button */}
          <a
            href={PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              fontSize: "1.1rem",
              padding: "20px",
              borderRadius: "6px",
            }}
          >
            Je réserve ma place — 2 500 FCFA
          </a>

          <p style={{ color: "#8ba4c0", fontSize: "0.78rem", marginTop: "16px" }}>
            Paiement sécurisé · Wave · Orange Money · Carte bancaire
          </p>
        </div>

        {/* Guarantee */}
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "16px 24px",
            background: "rgba(30,45,90,0.3)",
            borderRadius: "8px",
            textAlign: "left",
          }}
        >
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    icon: "⏱️",
    metric: "70%",
    label: "de temps gagné sur la rédaction",
    detail: "Ce que vous faisiez en 4h se fait en moins d'une heure. Vos rapports partent le soir même.",
  },
  {
    icon: "📊",
    metric: "×3",
    label: "plus de projets suivis simultanément",
    detail: "Avec l'automatisation du suivi, un chef de projet peut piloter trois fois plus de chantiers.",
  },
  {
    icon: "🎯",
    metric: "95%",
    label: "de fiabilité sur les analyses documentaires",
    detail: "L'IA ne loupe pas une clause dans un CCTP de 200 pages. Vous, si — c'est humain.",
  },
  {
    icon: "💰",
    metric: "–40%",
    label: "d'erreurs coûteuses évitées",
    detail: "Vérifications croisées automatiques entre plans, devis et situations de travaux.",
  },
];

const testimonials = [
  {
    name: "Amadou D.",
    role: "Conducteur de travaux, Dakar",
    quote: "Avant cette formation, je passais mes nuits à rédiger des rapports. Maintenant c'est réglé avant 18h.",
    avatar: "AD",
  },
  {
    name: "Marie-Claire S.",
    role: "Ingénieure structure, Abidjan",
    quote: "J'étais sceptique sur l'IA dans notre métier. Après la masterclass, j'ai changé d'avis en deux heures.",
    avatar: "MS",
  },
  {
    name: "Ibrahim K.",
    role: "Chef de projet BTP, Bamako",
    quote: "Le retour sur investissement a été immédiat. La semaine suivante, j'avais récupéré 10h sur mon planning.",
    avatar: "IK",
  },
];

function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        fontFamily: "Space Grotesk, sans-serif",
        fontSize: "2.8rem",
        fontWeight: "800",
        color: "#FF6B2B",
        lineHeight: "1",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.7)",
        transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      {target}{suffix}
    </div>
  );
}

export default function Results() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
        background: "linear-gradient(160deg, #060B18 0%, #0A0F1E 100%)",
        padding: "100px 40px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "70px" }}>
          <span className="section-label">Les résultats</span>
          <span className="orange-line" style={{ margin: "12px auto 20px" }} />
          <h2
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: "700",
              lineHeight: "1.2",
            }}
          >
            Ce que vous gagnez{" "}
            <span style={{ color: "#FF6B2B" }}>concrètement</span>
          </h2>
          <p style={{ color: "#C8D6E5", maxWidth: "480px", margin: "16px auto 0", lineHeight: "1.7", fontWeight: "300" }}>
            Pas des promesses abstraites. Des gains mesurables, rapportés par des professionnels
            BTP qui ont suivi la formation.
          </p>
        </div>

        {/* Benefits grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "80px" }}>
          {benefits.map((b, i) => (
            <div
              key={i}
              className="glass-card reveal"
              style={{ padding: "32px 28px", transitionDelay: `${i * 0.1}s` }}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: "16px" }}>{b.icon}</div>
              <CountUp target={b.metric} />
              <div
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  color: "#C8D6E5",
                  margin: "8px 0 12px",
                  lineHeight: "1.4",
                }}
              >
                {b.label}
              </div>
              <p style={{ color: "#8ba4c0", fontSize: "0.83rem", lineHeight: "1.7" }}>{b.detail}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="reveal" style={{ marginBottom: "20px" }}>
          <h3
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "28px",
              color: "#C8D6E5",
            }}
          >
            Ce que disent les participants
          </h3>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card reveal"
              style={{
                padding: "28px",
                transitionDelay: `${i * 0.15}s`,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "24px",
                  fontSize: "2.5rem",
                  color: "rgba(255,107,43,0.15)",
                  fontFamily: "Georgia, serif",
                  lineHeight: "1",
                }}
              >
                &ldquo;
              </div>
              <p style={{ color: "#C8D6E5", fontSize: "0.9rem", lineHeight: "1.75", marginBottom: "24px", fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #FF6B2B, #1E2D5A)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: "700",
                    fontSize: "0.75rem",
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: "600", fontSize: "0.88rem" }}>{t.name}</div>
                  <div style={{ color: "#8ba4c0", fontSize: "0.78rem" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

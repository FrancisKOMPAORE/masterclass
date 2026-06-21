"use client";
import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Rédaction automatisée",
    desc: "Dictez ou photographiez votre chantier. L'IA génère vos comptes-rendus, PV, et rapports de suivi en quelques secondes — dans votre style, avec votre terminologie.",
    tools: ["ChatGPT", "Claude", "Notion AI"],
  },
  {
    num: "02",
    title: "Analyse de documents techniques",
    desc: "Plans, CCTP, métrés, devis — l'IA lit, compare, et vous donne une synthèse en langage humain. Fini les heures passées à éplucher des DCEM de 300 pages.",
    tools: ["Claude", "Google NotebookLM", "GPT-4o"],
  },
  {
    num: "03",
    title: "Automatisation des suivis",
    desc: "Planning, relances, indicateurs — l'IA surveille, alerte, et produit vos dashboards automatiquement. Vous intervenez seulement sur les points critiques.",
    tools: ["Make.com", "Zapier", "Airtable IA"],
  },
  {
    num: "04",
    title: "Aide à la décision sur chantier",
    desc: "En cas de problème technique, l'IA propose des solutions basées sur les normes en vigueur (DTU, Eurocode) et les données de votre projet.",
    tools: ["Copilot", "ChatGPT", "Claude"],
  },
];

export default function Solution() {
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
        background: "#0A0F1E",
        padding: "100px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(30,45,90,0.6) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div className="reveal" style={{ marginBottom: "70px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "30px" }}>
          <div>
            <span className="section-label">La solution</span>
            <span className="orange-line" />
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: "700",
                lineHeight: "1.2",
                maxWidth: "500px",
              }}
            >
              L&apos;IA comme{" "}
              <span style={{ color: "#FF6B2B" }}>assistant de chantier</span>{" "}
              disponible 24h/24
            </h2>
          </div>
          <p style={{ color: "#C8D6E5", maxWidth: "320px", lineHeight: "1.8", fontWeight: "300", paddingTop: "8px" }}>
            Pas de la science-fiction. Des outils que vous pouvez utiliser dès demain matin, 
            sans formation informatique, sans budget énorme.
          </p>
        </div>

        {/* Steps grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2px" }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                padding: "36px 28px",
                background: i % 2 === 0 ? "rgba(30,45,90,0.2)" : "rgba(15,26,58,0.4)",
                borderTop: "1px solid rgba(200,214,229,0.06)",
                borderLeft: "1px solid rgba(200,214,229,0.06)",
                position: "relative",
                transition: "background 0.3s ease",
                transitionDelay: `${i * 0.1}s`,
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,107,43,0.06)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  i % 2 === 0 ? "rgba(30,45,90,0.2)" : "rgba(15,26,58,0.4)";
              }}
            >
              {/* Step number */}
              <div
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "3rem",
                  fontWeight: "800",
                  color: "rgba(255,107,43,0.8)",
                  lineHeight: "1",
                  marginBottom: "20px",
                  letterSpacing: "-0.02em",
                }}
              >
                {step.num}
              </div>

              <h3
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  marginBottom: "12px",
                  lineHeight: "1.4",
                }}
              >
                {step.title}
              </h3>
              <p style={{ color: "#8ba4c0", fontSize: "0.88rem", lineHeight: "1.75", marginBottom: "24px" }}>
                {step.desc}
              </p>

              {/* Tools tags */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {step.tools.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      fontSize: "0.7rem",
                      padding: "3px 10px",
                      background: "rgba(255,107,43,0.1)",
                      border: "1px solid rgba(255,107,43,0.2)",
                      borderRadius: "100px",
                      color: "#FF6B2B",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

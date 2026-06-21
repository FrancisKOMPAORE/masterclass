"use client";
import { useEffect, useRef } from "react";

const problems = [
  {
    icon: "📋",
    title: "Des rapports qui engloutissent vos journées",
    desc: "Comptes-rendus de chantier, PV de réception, notes techniques... Vous passez des heures à rédiger des documents que personne ne lit en entier.",
    stat: "4h/jour",
    statLabel: "perdu en rédaction",
  },
  {
    icon: "🔁",
    title: "Les mêmes tâches, encore et encore",
    desc: "Calculs de métrés, suivi de planning, relances fournisseurs — des tâches chronophages qui reviennent chaque semaine sans valeur ajoutée réelle.",
    stat: "60%",
    statLabel: "du temps sur le non-essentiel",
  },
  {
    icon: "⚠️",
    title: "Tout repose sur vous seul",
    desc: "Pas de délégation possible quand la connaissance est dans votre tête. Vous devenez le goulot d'étranglement de votre propre équipe.",
    stat: "1 sur 3",
    statLabel: "cadres BTP en surcharge chronique",
  },
];

export default function Problem() {
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
      ref={sectionRef}
      style={{
        background: "#060B18",
        padding: "100px 40px",
        position: "relative",
      }}
    >
      {/* Orange accent border top */}
      <div style={{ position: "absolute", top: 0, left: "40px", right: "40px", height: "1px", background: "linear-gradient(90deg, transparent, #FF6B2B, transparent)" }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: "60px" }}>
          <span className="section-label">Le problème</span>
          <span className="orange-line" />
          <h2
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: "700",
              lineHeight: "1.2",
              maxWidth: "600px",
            }}
          >
            Votre expertise mérite mieux que du{" "}
            <span style={{ color: "#FF6B2B" }}>travail de secrétaire</span>
          </h2>
          <p style={{ color: "#C8D6E5", marginTop: "16px", maxWidth: "520px", lineHeight: "1.7", fontWeight: "300" }}>
            Le secteur BTP génère autant de paperasse que de béton. Pendant ce temps,
            vos projets attendent votre attention réelle.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {problems.map((p, i) => (
            <div
              key={i}
              className={`glass-card reveal`}
              style={{
                padding: "32px",
                position: "relative",
                overflow: "hidden",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              {/* Top accent line */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #FF6B2B, transparent)" }} />

              <div style={{ fontSize: "2rem", marginBottom: "20px" }}>{p.icon}</div>
              <h3
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginBottom: "12px",
                  lineHeight: "1.4",
                }}
              >
                {p.title}
              </h3>
              <p style={{ color: "#8ba4c0", fontSize: "0.9rem", lineHeight: "1.7", marginBottom: "24px" }}>{p.desc}</p>

              {/* Stat */}
              <div style={{ borderTop: "1px solid rgba(200,214,229,0.1)", paddingTop: "20px" }}>
                <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6rem", fontWeight: "700", color: "#FF6B2B" }}>
                  {p.stat}
                </div>
                <div style={{ color: "#C8D6E5", fontSize: "0.78rem", marginTop: "2px" }}>{p.statLabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Connecting sentence */}
        <div
          className="reveal"
          style={{
            marginTop: "60px",
            padding: "32px 40px",
            background: "linear-gradient(135deg, rgba(255,107,43,0.08), rgba(30,45,90,0.3))",
            border: "1px solid rgba(255,107,43,0.2)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontSize: "2rem" }}>💡</div>
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1rem", lineHeight: "1.6", color: "#C8D6E5", flex: 1 }}>
            <strong style={{ color: "#F8FAFC" }}>Ce n&apos;est pas une question de compétence, c&apos;est une question d&apos;outils.</strong>{" "}
            Les professionnels BTP les plus performants ne travaillent pas plus — ils travaillent autrement, avec l&apos;IA comme levier.
          </p>
        </div>
      </div>
    </section>
  );
}

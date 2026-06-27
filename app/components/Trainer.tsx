"use client";
import { useEffect, useRef } from "react";

export default function Trainer() {
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
        background: "#080D1C",
        padding: "100px 40px",
        borderTop: "1px solid rgba(200,214,229,0.06)",
      }}
    >
      <div className="flex flex-col md:flex-row"
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Avatar block */}
        <div className="reveal md:w-1/2">
          <div
            style={{
              width: "100%",
              maxWidth: "360px",
              aspectRatio: "1",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              position: "relative",
              overflow: "hidden",
            }}
          >

            {/* Replace with actual photo */}
              <img style={{borderRadius:"12px"}} src="pp.png" alt=""/>
          </div>
        </div>

        {/* Text block */}
        <div className="md:w-1/2">
          <div className="reveal">
            <span className="section-label">Votre formateur</span>
            <span className="orange-line" />
          </div>

          <h2
            className="reveal"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
              fontWeight: "700",
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            Sa&#39;id DIAKHATÉ<br />
            <span style={{ color: "#FF6B2B" }}>Expert IA & Génie Civil</span>
          </h2>

          <p
            className="reveal"
            style={{
              color: "#C8D6E5",
              lineHeight: "1.8",
              marginBottom: "28px",
              fontWeight: "300",
              fontSize: "0.95rem",
            }}
          >
            Ingénieur en Génie civil. Fondateur de{" "}
            <strong style={{ color: "#F8FAFC" }}>SUNU DIGITAL +</strong>, structure spécialisée
            dans la transformation digitale des entreprises du BTP en Afrique de l&apos;Ouest.
          </p>

          <p
            className="reveal"
            style={{
              color: "#C8D6E5",
              lineHeight: "1.8",
              fontWeight: "300",
              fontSize: "0.95rem",
              marginBottom: "32px",
            }}
          >
            J&apos;accompagne des ingénieurs, conducteurs de travaux et chefs de projet
            à intégrer les outils numériques dans leur quotidien — sans jargon, sans théorie inutile,
            avec des résultats concrets dès la première semaine.
          </p>

          {/* Credibility tags */}
          <div className="reveal" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["Génie Civil", "IA appliquée", "BTP Afrique"].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "6px 14px",
                  background: "rgba(30,45,90,0.5)",
                  border: "1px solid rgba(200,214,229,0.15)",
                  borderRadius: "100px",
                  fontSize: "0.78rem",
                  color: "#C8D6E5",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

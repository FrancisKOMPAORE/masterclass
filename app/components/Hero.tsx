"use client";
import BlueprintBg from "./BlueprintBg";

export default function Hero() {
  return (
    <section
      className="clip-diagonal"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #0A0F1E 0%, #0f1a3a 60%, #1E2D5A 100%)",
        overflow: "hidden",
        paddingBottom: "80px",
      }}
    >
      <BlueprintBg />

      {/* Orange glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,107,43,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "120px 40px 60px",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255,107,43,0.12)",
            border: "1px solid rgba(255,107,43,0.35)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "32px",
          }}
        >
          <span style={{ fontSize: "0.7rem", background: "#FF6B2B", borderRadius: "100px", padding: "2px 8px", fontFamily: "Space Grotesk, sans-serif", fontWeight: "700", letterSpacing: "0.1em" }}>
            MASTERCLASS
          </span>
          <span style={{ color: "#C8D6E5", fontSize: "0.82rem", fontFamily: "Inter, sans-serif" }}>
            BTP · Génie Civil · Intelligence Artificielle
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
            fontWeight: "700",
            lineHeight: "1.1",
            marginBottom: "28px",
            maxWidth: "820px",
          }}
        >
          La Révolution de l&apos;IA
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #FF6B2B, #FFD700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            dans le Génie Civil.
          </span>
        </h1>

        <p
          style={{
            color: "#C8D6E5",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: "1.7",
            maxWidth: "580px",
            marginBottom: "44px",
            fontWeight: "300",
          }}
        >
          Vos rapports qui s&apos;accumulent, vos journées qui s&apos;épuisent en tâches répétitives —
          cette masterclass vous montre comment l&apos;IA change concrètement le quotidien des
          professionnels BTP.
        </p>

        {/* CTA Group */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
          <a href="#inscription" className="btn-primary" style={{ fontSize: "1.05rem", padding: "18px 40px" }}>
            Réserver ma place →
          </a>
          <a
            href="#video"
            style={{
              color: "#C8D6E5",
              textDecoration: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9rem",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#FF6B2B")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#C8D6E5")}
          >
            <span
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid rgba(200,214,229,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
              }}
            >
              ▶
            </span>
            Voir la présentation
          </a>
        </div>

        {/* Social proof strip */}
        <div
          style={{
            marginTop: "64px",
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
            borderTop: "1px solid rgba(200,214,229,0.1)",
            paddingTop: "32px",
          }}
        >
          {[
            { val: "3h", label: "de contenu pratique" },
            { val: "100%", label: "axé terrain BTP" },
            { val: "+8", label: "outils IA à découvrir" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "#FF6B2B",
                  lineHeight: "1",
                }}
              >
                {stat.val}
              </div>
              <div style={{ color: "#C8D6E5", fontSize: "0.82rem", marginTop: "4px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

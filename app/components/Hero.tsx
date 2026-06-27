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
            gap: "12px",
            background: "rgba(255,107,43,0.12)",
            border: "1px solid rgba(255,107,43,0.35)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "32px",
          }}
        >
          <span style={{ fontSize: "0.7rem", background: "#FF6B2B", borderRadius: "100px", padding: "4px 12px", fontFamily: "Space Grotesk, sans-serif", fontWeight: "600", letterSpacing: "0.1em" }}>
            MASTERCLASS
          </span>
          <span style={{ color: "#C8D6E5", fontSize: "0.82rem", fontWeight:600, fontFamily: "Inter, sans-serif" }}>
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
          Maitriser l&apos;IA
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #FF6B2B, #FFD700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            en 02 jours.
          </span>
        </h1>

        <p
          style={{
            color: "#C8D6E5",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: "1.7",
            maxWidth: "580px",
            marginBottom: "28px",
            fontWeight: "300",
          }}
        >
            Les outils, les méthodes et les applications concrètes pour transformer votre façon de travailler et développer vos projets.
        </p>

          <p
              style={{
                  background: "linear-gradient(45deg, #FFD700, #FF6B2B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "32px",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap:"8px"
              }}
          >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z" stroke="#FFD700" stroke-width="1.5"></path> <path opacity="0.5" d="M7 4V2.5" stroke="#FFD700" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M17 4V2.5" stroke="#FFD700" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M2.5 9H21.5" stroke="#FFD700" stroke-width="1.5" stroke-linecap="round"></path> <path d="M18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z" fill="#FFD700"></path> <path d="M18 13C18 13.5523 17.5523 14 17 14C16.4477 14 16 13.5523 16 13C16 12.4477 16.4477 12 17 12C17.5523 12 18 12.4477 18 13Z" fill="#FFD700"></path> <path d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z" fill="#FFD700"></path> <path d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z" fill="#FFD700"></path> <path d="M8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17Z" fill="#FFD700"></path> <path d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z" fill="#FFD700"></path> </g></svg>
                   Du 03 au 04 Juillet 2026 (via Google Meet)
          </p>

        {/* CTA Group */}
        <div style={{ display: "flex", gap: "22px", flexWrap: "wrap", alignItems: "center" }}>
          <a href="#inscription" className="btn-primary" style={{ fontSize: "1.05rem", padding: "12px 26px" }}>
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
            { val: "2 Jours", label: "de contenu pratique" },
            { val: "100%", label: "axé terrain BTP" },
            { val: "+9", label: "outils IA à découvrir" },
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

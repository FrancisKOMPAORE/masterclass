"use client";
import { useState } from "react";

export default function VideoSection() {
  // Replace this with your actual YouTube video ID or Vimeo ID
  const VIDEO_ID = "dQw4w9WgXcQ"; // ← Remplacer par votre vrai ID vidéo

  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="video"
      className="clip-diagonal-rev"
      style={{
        background: "linear-gradient(160deg, #0f1a3a 0%, #1E2D5A 100%)",
        padding: "120px 40px 140px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative element */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "-100px",
          transform: "translateY(-50%)",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "1px solid rgba(255,107,43,0.15)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span className="section-label">Présentation</span>
          <span className="orange-line" style={{ margin: "12px auto 20px" }} />
          <h2
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: "700",
              marginBottom: "16px",
            }}
          >
            Découvrez ce qui vous attend
          </h2>
          <p style={{ color: "#C8D6E5", maxWidth: "500px", margin: "0 auto", lineHeight: "1.7", fontWeight: "300" }}>
            Trois heures qui changeront votre rapport au travail sur chantier.
            Concret, pratique, applicable dès le lendemain.
          </p>
        </div>

        {/* Video player */}
        <div
          style={{
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,107,43,0.2)",
          }}
        >
          {!playing ? (
            // Thumbnail / cover
            <div
              onClick={() => setPlaying(true)}
              style={{
                width: "100%",
                paddingBottom: "56.25%",
                position: "relative",
                cursor: "pointer",
                background: "linear-gradient(135deg, #0f1a3a, #1E2D5A)",
              }}
            >
              {/* Thumbnail placeholder — remplacer par une vraie image de thumbnail */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                  background: "linear-gradient(135deg, rgba(10,15,30,0.9), rgba(30,45,90,0.8))",
                }}
              >
                {/* Play button */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #FF6B2B, #ff8c5a)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    boxShadow: "0 0 40px rgba(255,107,43,0.5)",
                    transition: "transform 0.3s ease",
                  }}
                  className="play-btn"
                >
                  ▶
                </div>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1rem", color: "#C8D6E5" }}>
                  Regarder la présentation de la masterclass
                </p>
                <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.8rem", color: "#8ba4c0" }}>
                  3 min · Extrait gratuit
                </span>
              </div>
            </div>
          ) : (
            // Actual embed (YouTube)
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                src="TERANGA BTP SOLUTION.mp4"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Présentation Masterclass IA BTP"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import {CheckCircle} from "lucide-react";

export default function VideoSection() {
  // Replace this with your actual YouTube video ID or Vimeo ID
  const VIDEO_ID = "dQw4w9WgXcQ"; // ← Remplacer par votre vrai ID vidéo

  const [playing, setPlaying] = useState(false);

    const whatYouLearn = [
        "Réaliser une étude de marché",
        "Construire un Business Plan complet",
        "Produire des études techniques",
        "Générer des métrés et des DQE",
        "Créer des plannings",
        "Automatiser les rapports de chantier",
    ];

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
            02 jours qui changeront votre rapport au travail sur chantier.
            Concret, pratique, applicable dès le lendemain.
          </p>
        </div>

          <section className="border-gray-100 shadow-sm p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {whatYouLearn.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                          <CheckCircle
                              size={17}
                              className="text-orange-500 flex-shrink-0 pt-5"
                          />
                          <span className="text-white leading-relaxed">
                      {item}
                    </span>
                      </div>
                  ))}
              </div>
          </section>
      </div>
    </section>
  );
}

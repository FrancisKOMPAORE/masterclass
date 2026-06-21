"use client";
export default function Footer() {
  return (
    <footer
      style={{
        background: "#060B18",
        borderTop: "1px solid rgba(200,214,229,0.06)",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px", marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "28px",
                height: "28px",
                background: "linear-gradient(135deg, #FF6B2B, #ff8c5a)",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: "800",
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              BTP
            </div>
            <span style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: "600", color: "#C8D6E5", fontSize: "0.85rem" }}>
              SUNU DIGITAL + · Masterclass IA
            </span>
          </div>

          <nav style={{ display: "flex", gap: "28px" }}>
            {[
              { label: "Le programme", href: "#programme" },
              { label: "La vidéo", href: "#video" },
              { label: "S'inscrire", href: "#inscription" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: "#8ba4c0",
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(200,214,229,0.06)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ color: "#4a5568", fontSize: "0.78rem" }}>
            © {new Date().getFullYear()} SUNU DIGITAL +. Tous droits réservés.
          </p>
          <p style={{ color: "#4a5568", fontSize: "0.78rem" }}>
            Dakar, Sénégal · contact@sunudigital.com
          </p>
        </div>
      </div>
    </footer>
  );
}

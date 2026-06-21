"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "16px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(10,15,30,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,107,43,0.15)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "32px",
            height: "32px",
            background: "linear-gradient(135deg, #FF6B2B, #ff8c5a)",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: "700",
            fontFamily: "Space Grotesk, sans-serif",
          }}
        >
          BTP
        </div>
        <span
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: "600",
            fontSize: "0.9rem",
            color: "#F8FAFC",
            letterSpacing: "0.02em",
          }}
        >
          MASTERCLASS
        </span>
      </div>

      <a
        href="#inscription"
        className="btn-primary"
        style={{ padding: "10px 24px", fontSize: "0.85rem", animation: "none" }}
      >
        Je m&apos;inscris →
      </a>
    </nav>
  );
}

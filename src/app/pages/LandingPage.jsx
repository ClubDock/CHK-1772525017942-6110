import React from "react";
import { useNavigate } from "react-router-dom"
export default function LandingPage({}) {
  const navigate = useNavigate();
  const onEnter = () => {
    navigate("/dashboard");
  };
  return (
    <div
      style={{
        display: "flex", flexDirection: "column",
        height: "100vh", background: "#090e1a",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        color: "#e2e8f0", position: "relative", overflow: "hidden",
      }}
    >
      {/* ── Star background ── */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute", borderRadius: "50%",
            width:  Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            background: "#ffffff33",
            top:  `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* ── Top bar ── */}
      <div style={{ padding: "18px 32px", display: "flex", alignItems: "center", gap: 10, position: "relative", zIndex: 1 }}>
        <div style={{ width: 28, height: 28, background: "linear-gradient(135deg,#3b82f6,#1d4ed8)", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>
          🛡
        </div>
        <span style={{ fontWeight: 700, fontSize: 16, color: "#fff" }}>ClubDock</span>
      </div>

      {/* ── Hero ── */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 10vw", gap: "8vw", position: "relative", zIndex: 1 }}>

        {/* Left copy */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "clamp(38px,5vw,64px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 10 }}>
            ClubDock
          </h1>
          <p style={{ fontSize: 18, color: "#94a3b8", marginBottom: 36 }}>
            The operating system for student clubs.
          </p>

          {/* Google Sign-in */}
          <button
            onClick={onEnter}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              background: "#fff", color: "#111",
              padding: "13px 24px", borderRadius: 10,
              border: "none", cursor: "pointer",
              transition:"0.2s",
              fontWeight: 600, fontSize: 15, marginBottom: 36,
            }}>
          
            <span style={{ fontWeight: 800, fontSize: 16, color: "#4285f4" }}>G</span>
            Sign in with Google
          </button>

          {/* Feature bullets */}
          {[
            "Organize your club missions.",
            "Manage events & tasks",
            "Build your member portfolios.",
          ].map((f) => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, color: "#cbd5e1", fontSize: 15 }}>
              <span style={{ color: "#22c55e", fontSize: 16, fontWeight: 700 }}>✓</span>
              {f}
            </div>
          ))}
        </div>

        {/* Right illustration */}
        <div style={{ flex: 1, position: "relative", height: 340, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: 110 }}>🚀</div>

          {/* Floating card 1 */}
          <div style={{ position: "absolute", top: "8%", left: "0%", background: "#1a2235", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, fontSize: 13, border: "1px solid #1e2a3a" }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e" }} />
            <div>
              <div style={{ color: "#fff", fontWeight: 600 }}>Design Banner</div>
              <div style={{ height: 4, background: "#22c55e", borderRadius: 2, marginTop: 4, width: 80 }} />
            </div>
          </div>

          {/* Floating card 2 */}
          <div style={{ position: "absolute", top: "10%", right: "0%", background: "#1a2235", borderRadius: 10, padding: "10px 14px", fontSize: 13, border: "1px solid #1e2a3a" }}>
            <div style={{ color: "#f59e0b", fontWeight: 600, marginBottom: 6 }}>Workshop</div>
            <div style={{ display: "flex", gap: 5 }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: "#3b82f6" }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// shared-styles.js  — import { s } from './shared-styles'

export const s = {
  // ── Layout ──────────────────────────────────────────────────
  app: {
    display: "flex", height: "100vh",
    fontFamily: "'DM Sans','Segoe UI',sans-serif",
    background: "#0d1117", color: "#e2e8f0", overflow: "hidden",
  },
  sidebar: {
    width: 210, background: "#0c1220",
    borderRight: "1px solid #1e2a3a",
    display: "flex", flexDirection: "column", flexShrink: 0,
  },
  logo: {
    display: "flex", alignItems: "center", gap: 10,
    padding: "18px 18px 14px", borderBottom: "1px solid #1e2a3a",
  },
  logoIcon: {
    width: 28, height: 28,
    background: "linear-gradient(135deg,#3b82f6,#1d4ed8)",
    borderRadius: 7, display: "flex",
    alignItems: "center", justifyContent: "center", fontSize: 13,
  },
  logoText: { fontWeight: 700, fontSize: 15, color: "#fff", letterSpacing: "-0.3px" },
  nav: {
    padding: "12px 10px", flex: 1,
    display: "flex", flexDirection: "column", gap: 2,
  },
  navItem: (active) => ({
    display: "flex", alignItems: "center", gap: 10,
    padding: "9px 12px", borderRadius: 8, cursor: "pointer",
    fontSize: 13.5, fontWeight: active ? 600 : 400,
    background: active ? "#2563eb" : "transparent",
    color: active ? "#fff" : "#94a3b8",
    transition: "all 0.15s",
  }),
  signout: {
    padding: "14px 20px", fontSize: 13, color: "#64748b",
    borderTop: "1px solid #1e2a3a",
    display: "flex", alignItems: "center", gap: 8, cursor: "pointer",
  },

  // ── Main ────────────────────────────────────────────────────
  main:    { flex: 1, overflow: "auto", background: "#111827" },
  topbar:  {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "10px 20px", borderBottom: "1px solid #1e2a3a",
    background: "#0c1220",
  },
  dots:    { display: "flex", gap: 6 },
  dot:     (c) => ({ width: 12, height: 12, borderRadius: "50%", background: c }),
  content: { padding: "28px 32px" },

  // ── Typography ──────────────────────────────────────────────
  pageTitle: {
    fontSize: 22, fontWeight: 700, color: "#f1f5f9",
    display: "flex", alignItems: "center", gap: 10, marginBottom: 24,
  },

  // ── Components ──────────────────────────────────────────────
  btn: {
    padding: "9px 18px", borderRadius: 8, border: "none",
    fontWeight: 600, fontSize: 13.5, cursor: "pointer",
    display: "inline-flex", alignItems: "center", gap: 6,
    background: "#2563eb", color: "#fff",
  },
  card: {
    background: "#1a2235", borderRadius: 12,
    border: "1px solid #1e2a3a", padding: "18px",
  },
  pill: (active) => ({
    padding: "6px 16px", borderRadius: 20,
    border: `1px solid ${active ? "#2563eb" : "#2d3748"}`,
    background: active ? "#2563eb" : "transparent",
    color: active ? "#fff" : "#94a3b8",
    fontSize: 13, fontWeight: active ? 600 : 400, cursor: "pointer",
  }),
};

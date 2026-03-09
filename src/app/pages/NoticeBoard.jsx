import React from "react";
import { s } from "../../styles/shared-styles";
import { NOTICES } from "../../config/constants";

export default function NoticeBoard() {
  return (
    <div style={s.content}>
      {/* ── Header ── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 style={s.pageTitle}>Notice Board 🔔</h1>
        <button style={s.btn}>+ Post Notice</button>
      </div>

      {/* ── Notice list ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {NOTICES.map((n, i) => (
          <div key={i} style={{ ...s.card, borderLeft: "3px solid #3b82f6" }}>
            {/* Top row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ background: "#1d3461", color: "#93c5fd", fontSize: 11, padding: "2px 8px", borderRadius: 5, fontWeight: 600 }}>
                  {n.tag}
                </span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "#f1f5f9" }}>{n.title}</span>
              </div>
              <span style={{ fontSize: 12, color: "#475569", whiteSpace: "nowrap", marginLeft: 16 }}>{n.time}</span>
            </div>

            <p style={{ fontSize: 13.5, color: "#94a3b8", lineHeight: 1.6, marginBottom: 10 }}>{n.body}</p>
            <span style={{ fontSize: 12, color: "#475569" }}>Posted by {n.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

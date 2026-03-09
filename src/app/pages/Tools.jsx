import React from "react";
import { s } from "../../styles/shared-styles";
import { TOOLS } from "../../config/constants";

export default function Tools() {
  return (
    <div style={s.content}>
      <h1 style={s.pageTitle}>Tools 🔧</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
        {TOOLS.map((t) => (
          <div key={t.name} style={{ ...s.card, cursor: "pointer" }}>
            {/* Icon */}
            <div
              style={{
                width: 44, height: 44, borderRadius: 10,
                background: t.color + "22",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, marginBottom: 12,
              }}
            >
              {t.icon}
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#f1f5f9", marginBottom: 6 }}>{t.name}</div>
            <div style={{ fontSize: 12.5, color: "#64748b", lineHeight: 1.5 }}>{t.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

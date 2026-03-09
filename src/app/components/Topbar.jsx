import React from "react";
import { s } from "../../styles/shared-styles";

export default function Topbar() {
  return (
    <div style={s.topbar}>
      {/* Traffic-light dots */}
      <div style={s.dots}>
        <div style={s.dot("#ef4444")} />
        <div style={s.dot("#f59e0b")} />
        <div style={s.dot("#22c55e")} />
      </div>

      {/* Theme toggle (visual only — wire up dark/light later) */}
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ fontSize: 16 }}>☀️</span>
        <span style={{ fontSize: 16 }}>🌙</span>
        <div style={{ width: 40, height: 22, background: "#2563eb", borderRadius: 11, position: "relative" }}>
          <div style={{ position: "absolute", right: 3, top: 3, width: 16, height: 16, background: "#fff", borderRadius: "50%" }} />
        </div>
      </div>
    </div>
  );
}

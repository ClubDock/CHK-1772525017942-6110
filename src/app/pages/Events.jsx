import React, { useState } from "react";
import { s } from "../../styles/shared-styles";
import { EVENTS } from "../../config/constants";

export default function Events() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"       ? EVENTS :
    filter === "Upcoming"  ? EVENTS.filter((e) => !e.status) :
                             EVENTS.filter((e) => e.status === "Done");

  return (
    <div style={s.content}>
      {/* ── Header ── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 style={s.pageTitle}>Events 📅</h1>
        <button style={s.btn}>+ Add Event</button>
      </div>

      {/* ── Filter pills ── */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {["All", "Upcoming", "Completed"].map((f) => (
          <button key={f} onClick={() => setFilter(f)} style={s.pill(filter === f)}>
            {f}
          </button>
        ))}
      </div>

      {/* ── Event cards ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        {filtered.map((ev, i) => (
          <div
            key={i}
            style={{
              ...s.card,
              borderTop: `3px solid ${ev.typeColor}`,
              position: "relative",
            }}
          >
            {ev.status && (
              <span style={{ position: "absolute", top: 14, right: 14, fontSize: 12, color: "#22c55e", fontWeight: 600 }}>
                Done
              </span>
            )}

            {/* Type badge */}
            <span
              style={{
                background: ev.typeColor + "33", color: ev.typeColor,
                fontSize: 11, fontWeight: 700,
                padding: "3px 10px", borderRadius: 20,
                display: "inline-block", marginBottom: 10,
              }}
            >
              {ev.type}
            </span>

            <h3 style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9", marginBottom: 8 }}>{ev.title}</h3>
            <p style={{ fontSize: 13, color: "#64748b", marginBottom: 14, lineHeight: 1.5 }}>{ev.desc}</p>

            {[["📅", ev.date], ["🕐", ev.time], ["📍", ev.location]].map(([icon, val]) => (
              <div key={val} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#94a3b8", marginBottom: 6 }}>
                <span>{icon}</span> {val}
              </div>
            ))}

            <div style={{ borderTop: "1px solid #1e2a3a", marginTop: 12, paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 13, color: "#64748b" }}>👥 {ev.attendees} attendees</span>
              <span style={{ color: "#475569" }}>›</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

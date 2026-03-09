import React from "react";
import { s } from "../../styles/shared-styles";
import { ACTIVITY } from "../../config/constants";

export default function ClubHQ({ setPage }) {
  return (
    <div style={s.content}>
      {/* ── Page header ── */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <h1 style={s.pageTitle}>
          Robotics Club <span style={{ fontSize: 18 }}>👥</span>
        </h1>
      </div>

      {/* ── Welcome banner ── */}
      <div
        style={{
          ...s.card,
          background: "linear-gradient(135deg,#1a2a4a 0%,#1a2235 100%)",
          marginBottom: 20, display: "flex",
          alignItems: "center", justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 12 }}>
            Welcome to Robotics Club!
          </h2>
          <div
            style={{
              background: "#0f1e35", borderRadius: 8,
              padding: "8px 14px", display: "inline-flex",
              alignItems: "center", gap: 8, fontSize: 13,
              color: "#93c5fd", marginBottom: 16,
            }}
          >
            📅 Next Event: Robotics Workshop — April 12
          </div>

          <div style={{ fontSize: 13, color: "#94a3b8", marginBottom: 8 }}>Progress</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ flex: 1, height: 6, background: "#1e3a5f", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ width: "58%", height: "100%", background: "linear-gradient(90deg,#3b82f6,#60a5fa)", borderRadius: 3 }} />
            </div>
            <span style={{ fontSize: 13, color: "#94a3b8", whiteSpace: "nowrap" }}>
              Tasks Completed: 7 / 12
            </span>
          </div>
        </div>
        <div style={{ fontSize: 64, opacity: 0.5, marginLeft: 20 }}>📊</div>
      </div>

      {/* ── Two-column grid ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 260px", gap: 20 }}>

        {/* Activity feed */}
        <div style={s.card}>
          <h3 style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 16 }}>
            Recent Activity
          </h3>
          {ACTIVITY.map((a, i) => (
            <div
              key={i}
              style={{
                display: "flex", alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: i < ACTIVITY.length - 1 ? "1px solid #1e2a3a" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 28, height: 28, borderRadius: 7,
                    background: "#0f1623", display: "flex",
                    alignItems: "center", justifyContent: "center", fontSize: 13,
                  }}
                >
                  {a.icon}
                </div>
                <span style={{ fontSize: 13.5, color: "#cbd5e1" }}>{a.text}</span>
              </div>
              <span style={{ fontSize: 12, color: "#475569", whiteSpace: "nowrap", marginLeft: 12 }}>
                {a.time}
              </span>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

          {/* Stats grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { label: "Members", val: 12, icon: "👥" },
              { label: "Tasks",   val: 12, icon: "✅" },
              { label: "Events",  val: 3,  icon: "📅" },
              { label: "Pending", val: 5,  icon: "⏰" },
            ].map((st) => (
              <div key={st.label} style={{ ...s.card, padding: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: "#64748b" }}>{st.label}</span>
                  <span style={{ fontSize: 16 }}>{st.icon}</span>
                </div>
                <div style={{ fontSize: 26, fontWeight: 700, color: "#fff" }}>{st.val}</div>
              </div>
            ))}
          </div>

          {/* Upcoming events mini */}
          <div style={s.card}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>Upcoming Events</span>
              <span
                style={{ fontSize: 12, color: "#3b82f6", cursor: "pointer" }}
                onClick={() => setPage("events")}
              >
                View all
              </span>
            </div>
            <div
              style={{
                background: "#0f1623", borderRadius: 8,
                padding: "10px 12px", display: "flex",
                justifyContent: "space-between", alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>Robotics Workshop</div>
                <div style={{ fontSize: 12, color: "#64748b" }}>April 12</div>
              </div>
              <span
                style={{
                  background: "#1d4ed8", color: "#93c5fd",
                  fontSize: 11, padding: "3px 8px",
                  borderRadius: 5, fontWeight: 600,
                }}
              >
                Workshop
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

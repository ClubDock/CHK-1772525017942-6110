import React, { useState } from "react";
import { s } from "../../styles/shared-styles";
import { MEMBERS } from "../../config/constants";

const FILTERS = ["All", "President", "Core Team", "Member", "Mentor"];

export default function YourCrew() {
  const [filter,         setFilter]         = useState("All");
  const [selectedMember, setSelectedMember] = useState(MEMBERS[1]);

  const filtered =
    filter === "All"
      ? MEMBERS
      : MEMBERS.filter((m) => m.role === filter || m.section === filter.toUpperCase());

  const sections = [...new Set(filtered.map((m) => m.section))];

  return (
    <div style={s.content}>
      {/* ── Header ── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h1 style={s.pageTitle}>Your Crew 👥</h1>
        <button style={s.btn}>👤+ Add Member</button>
      </div>

      {/* ── Filter pills ── */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {FILTERS.map((f) => (
          <button key={f} onClick={() => setFilter(f)} style={s.pill(filter === f)}>{f}</button>
        ))}
      </div>

      {/* ── Two-column layout ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 20 }}>

        {/* Member list */}
        <div>
          {sections.map((sec) => (
            <div key={sec} style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#475569", letterSpacing: "0.08em", marginBottom: 10 }}>
                {sec}
              </div>
              {filtered.filter((m) => m.section === sec).map((member) => (
                <div
                  key={member.name}
                  onClick={() => setSelectedMember(member)}
                  style={{
                    ...s.card,
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    marginBottom: 8, cursor: "pointer",
                    border:      selectedMember?.name === member.name ? "1px solid #3b82f6" : "1px solid #1e2a3a",
                    background:  selectedMember?.name === member.name ? "#1a2a45" : "#1a2235",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    {/* Avatar */}
                    <div
                      style={{
                        width: 38, height: 38, borderRadius: "50%",
                        background: "linear-gradient(135deg,#2d3748,#1e2a3a)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 15, fontWeight: 700, color: "#94a3b8",
                      }}
                    >
                      {member.name[0]}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#f1f5f9" }}>{member.name}</div>
                      <div style={{ fontSize: 12, color: "#64748b" }}>{member.skill}</div>
                    </div>
                  </div>
                  <div style={{ color: "#f59e0b", fontWeight: 600, fontSize: 14 }}>★ {member.score}</div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Detail panel */}
        {selectedMember && (
          <div style={{ ...s.card, alignSelf: "start" }}>
            {/* Avatar + name */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div
                style={{
                  width: 54, height: 54, borderRadius: 12,
                  background: "linear-gradient(135deg,#2d3748,#1e2a3a)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20, fontWeight: 700, color: "#94a3b8",
                }}
              >
                {selectedMember.name[0]}
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>{selectedMember.name}</div>
                <span style={{ background: "#1d3461", color: "#93c5fd", fontSize: 11, padding: "2px 8px", borderRadius: 5, fontWeight: 600 }}>
                  {selectedMember.role}
                </span>
              </div>
            </div>

            {/* Meta rows */}
            {[
              ["Role",       selectedMember.role],
              ["Core Skill", selectedMember.skill],
              ["Joined",     selectedMember.joined || "Sep 2025"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 10 }}>
                <span style={{ color: "#64748b" }}>{k}</span>
                <span style={{ color: "#e2e8f0", fontWeight: 500 }}>{v}</span>
              </div>
            ))}

            {/* Reliability score */}
            <div style={{ borderTop: "1px solid #1e2a3a", paddingTop: 12, marginTop: 4 }}>
              <div style={{ fontSize: 12, color: "#64748b", marginBottom: 8 }}>Reliability Score</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ color: "#f59e0b" }}>★</span>
                <span style={{ fontWeight: 700, fontSize: 18, color: "#fff" }}>{selectedMember.score}</span>
                <div style={{ flex: 1, height: 6, background: "#1e2a3a", borderRadius: 3 }}>
                  <div style={{ width: `${(selectedMember.score / 10) * 100}%`, height: "100%", background: "linear-gradient(90deg,#f59e0b,#fbbf24)", borderRadius: 3 }} />
                </div>
              </div>
            </div>

            {/* Contributions */}
            {selectedMember.contributions && (
              <div style={{ borderTop: "1px solid #1e2a3a", paddingTop: 12 }}>
                <div style={{ fontSize: 11, color: "#64748b", marginBottom: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Recent Contributions
                </div>
                {selectedMember.contributions.map((c) => (
                  <div key={c.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: "#cbd5e1" }}>{c.name}</span>
                    <span style={{ color: c.status === "done" ? "#22c55e" : "#3b82f6", fontSize: 14 }}>
                      {c.status === "done" ? "✓" : "🕐"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

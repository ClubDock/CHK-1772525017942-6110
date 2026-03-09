import React from "react";
import { s } from "../../styles/shared-styles";
import { TASKS } from "../../config/constants";

const COLUMNS = [
  { key: "open",       label: "Open Tasks",  icon: "⊗", iconColor: "#ef4444", badgeBg: "#f59e0b" },
  { key: "inprogress", label: "In Progress", icon: "🕐", iconColor: "#3b82f6", badgeBg: "#3b82f6" },
  { key: "submitted",  label: "Submitted",   icon: "⬆", iconColor: "#8b5cf6", badgeBg: "#8b5cf6" },
  { key: "completed",  label: "Completed",   icon: "✓", iconColor: "#22c55e", badgeBg: "#22c55e" },
];

export default function ThingsToDo() {
  return (
    <div style={s.content}>
      {/* ── Header ── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 style={s.pageTitle}>Things To Do 🚩</h1>
        <button style={s.btn}>+ Add Task</button>
      </div>

      {/* ── Kanban columns ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
        {COLUMNS.map((col) => (
          <div
            key={col.key}
            style={{
              background: "#1a2235", borderRadius: 14,
              border: "1px solid #1e2a3a", padding: 16, minHeight: 340,
            }}
          >
            {/* Column header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: col.iconColor, fontSize: 16 }}>{col.icon}</span>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: "#e2e8f0" }}>{col.label}</span>
              </div>
              <div
                style={{
                  background: col.badgeBg, color: "#fff",
                  borderRadius: "50%", width: 22, height: 22,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 700,
                }}
              >
                {TASKS[col.key].length}
              </div>
            </div>

            {/* Task cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {TASKS[col.key].map((task, i) => (
                <div
                  key={i}
                  style={{
                    background: "#0f1623", borderRadius: 10,
                    padding: "13px 14px", border: "1px solid #1e2a3a",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 12 }}>
                    <div
                      style={{
                        width: 9, height: 9, borderRadius: "50%",
                        background: task.color, marginTop: 3, flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: 13.5, fontWeight: 500, color: "#e2e8f0", lineHeight: 1.4 }}>
                      {task.title}
                    </span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#475569" }}>
                    <span>{task.assignee}</span>
                    <span>{task.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Footer add button ── */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
        <button style={s.btn}>+ Add Task</button>
      </div>
    </div>
  );
}

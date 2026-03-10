import React from "react";

export default function Login({ onLogin }) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#090e1a",
        fontFamily: "DM Sans, Segoe UI, sans-serif",
        color: "#e2e8f0",
      }}
    >
      <div
        style={{
          width: "360px",
          padding: "40px",
          borderRadius: "12px",
          background: "#111827",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>ClubDock</h1>

        <p style={{ marginBottom: "30px", color: "#94a3b8" }}>
          The operating system for student clubs
        </p>

        <button
          onClick={onLogin}
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "15px",
            background: "#ffffff",
            color: "#111",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
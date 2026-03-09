import React from "react";
import { s } from "../../styles/shared-styles";
import { NAV } from "../../config/constants";

export default function Sidebar({ page, setPage, onSignOut }) {
  return (
    <div style={s.sidebar}>
      {/* Logo */}
      <div style={s.logo}>
        <div style={s.logoIcon}>🛡</div>
        <span style={s.logoText}>ClubDock</span>
      </div>

      {/* Nav links */}
      <nav style={s.nav}>
        {NAV.map((n) => (
          <div
            key={n.id}
            onClick={() => setPage(n.id)}
            style={s.navItem(page === n.id)}
          >
            <span>{n.icon}</span> {n.label}
          </div>
        ))}
      </nav>

      {/* Sign out */}
      <div style={s.signout} onClick={onSignOut}>
        ↩ Sign Out
      </div>
    </div>
  );
}

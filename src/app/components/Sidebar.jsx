import React from "react";
import { s } from "../../styles/shared-styles";
import { NAV } from "../../config/constants";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar({ page, setPage, onSignOut }) {
  const navigate = useNavigate();
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
  <Link
    key={n.id}
    to={n.path}
    style={{
      textDecoration: "none",
      color: "inherit"
    }}
  >
    <div
      style={s.navItem(page === n.id)}
      onClick={() => {
        setPage(n.id)
        navigate(n.path)
      }}
    >
      <span>{n.icon}</span> {n.label}
    </div>
  </Link>
))} 
      </nav>

      {/* Sign out */}
    <div
  style={s.signout}
  onClick={() => {
    onSignOut();
    navigate("/");
  }}
>
  ↪ Sign Out
</div>  
    </div>
  );
}

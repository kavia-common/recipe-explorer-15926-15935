import React from "react";
import { theme } from "../theme";

// PUBLIC_INTERFACE
export default function Header({ route, onNavigate, favoritesCount, user }) {
  /** Renders top navigation header. */
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <button
          className="brand btn icon"
          style={{
            background: "#ecfdf5",
            borderColor: "#bbf7d0",
            color: theme.colors.primary,
          }}
          onClick={() => onNavigate("home")}
        >
          🥗 Recipe Explorer
        </button>

        <nav className="nav-links" aria-label="Main">
          <button
            className={`nav-link btn icon ${route === "home" ? "active" : ""}`}
            onClick={() => onNavigate("home")}
          >
            Browse
          </button>
          <button
            className={`nav-link btn icon ${route === "favorites" ? "active" : ""}`}
            onClick={() => onNavigate("favorites")}
          >
            Favorites {favoritesCount > 0 ? `(${favoritesCount})` : ""}
          </button>
          <button
            className={`nav-link btn icon ${route === "profile" ? "active" : ""}`}
            onClick={() => onNavigate("profile")}
          >
            Profile
          </button>
        </nav>

        <div style={{ marginLeft: "auto", display: "flex", gap: 10 }}>
          {user ? (
            <div className="btn icon" title={user.email}>
              <img
                alt="avatar"
                src={user.avatar}
                style={{ width: 26, height: 26, borderRadius: 999 }}
              />
              <span style={{ color: "#111827", fontWeight: 600 }}>{user.name}</span>
            </div>
          ) : (
            <button className="btn primary" onClick={() => onNavigate("signin")}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

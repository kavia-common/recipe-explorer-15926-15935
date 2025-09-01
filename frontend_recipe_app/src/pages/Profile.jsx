import React, { useState } from "react";

// PUBLIC_INTERFACE
export default function Profile({ user, onUpdate, onSignOut }) {
  /** Profile management with editable fields. */
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    avatar: user?.avatar || "",
  });

  return (
    <div className="container main">
      <h2 className="section-title">Profile</h2>
      {!user ? (
        <p className="helper">You are not signed in.</p>
      ) : (
        <div className="panel" style={{ maxWidth: 520 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
            <img
              alt="avatar"
              src={form.avatar}
              style={{ width: 64, height: 64, borderRadius: 999 }}
              onError={(e) => { e.currentTarget.src = "https://i.pravatar.cc/100?img=1"; }}
            />
            <strong>{user.name}</strong>
          </div>

          <div className="field">
            <label>Name</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="field">
            <label>Email</label>
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div className="field">
            <label>Avatar URL</label>
            <input value={form.avatar} onChange={(e) => setForm({ ...form, avatar: e.target.value })} />
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn primary" onClick={() => onUpdate(form)}>Save</button>
            <button className="btn" onClick={onSignOut}>Sign out</button>
          </div>
        </div>
      )}
    </div>
  );
}

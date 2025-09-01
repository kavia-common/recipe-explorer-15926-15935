import React, { useState } from "react";
import { theme } from "../theme";

// PUBLIC_INTERFACE
export default function SignIn({ onSuccess }) {
  /** Sign-in screen adapted from provided assets with Google/Facebook buttons. */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    // Mock authentication: accept any email/password
    onSuccess({ email, name: email.split("@")[0] || "Guest", avatar: "https://i.pravatar.cc/100?img=12" });
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-card" role="main" aria-label="Sign In">
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: theme.colors.text }}>Hello,</div>
          <div style={{ color: "#374151" }}>Welcome Back!</div>
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
        </div>

        <div className="field">
          <label>Enter Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
          />
        </div>

        <div style={{ textAlign: "left", marginBottom: 8 }}>
          <button className="btn" onClick={() => alert("Forgot Password clicked")} type="button">
            Forgot Password?
          </button>
        </div>

        <button className="btn primary" style={{ width: "100%" }} onClick={signIn} id="sign-in-btn">
          <span>Sign In</span>
        </button>

        <div className="divider">Or Sign in With</div>

        <div style={{ display: "flex", gap: 12 }}>
          <button
            className="btn"
            aria-label="Sign in with Google"
            onClick={() => onSuccess({ email: "googleuser@example.com", name: "Google User", avatar: "https://i.pravatar.cc/100?img=32" })}
            style={{ background: "#fff" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20" aria-hidden="true">
              <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.153 7.961 3.039l5.657-5.657C35.214 6.053 29.919 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"/>
              <path fill="#FF3D00" d="M6.306 14.691l6.571 4.815C14.652 15.061 18.961 12 24 12c3.059 0 5.842 1.153 7.961 3.039l5.657-5.657C35.214 6.053 29.919 4 24 4c-7.938 0-14.735 4.627-17.694 10.691z"/>
              <path fill="#4CAF50" d="M24 44c5.153 0 9.86-1.97 13.409-5.182l-6.191-5.238C29.141 35.091 26.715 36 24 36c-5.201 0-9.616-3.323-11.277-7.958l-6.54 5.034C9.114 39.331 16.002 44 24 44z"/>
              <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-0.793 2.238-2.237 4.162-4.086 5.58l6.191 5.238C39.018 40.428 44 33.999 44 24c0-1.341-.138-2.651-.389-3.917z"/>
            </svg>
            <span>Google</span>
          </button>

          <button
            className="btn"
            aria-label="Sign in with Facebook"
            onClick={() => onSuccess({ email: "fbuser@example.com", name: "Facebook User", avatar: "https://i.pravatar.cc/100?img=5" })}
            style={{ background: "#fff", color: "#1877F2" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.49v-9.294H9.847V11.06h2.968V8.414c0-2.94 1.793-4.544 4.413-4.544 1.255 0 2.335.093 2.648.135v3.07h-1.818c-1.428 0-1.704.679-1.704 1.675v2.31h3.406l-.444 3.646h-2.962V24h5.806C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"
                fill="currentColor"
              />
            </svg>
            <span>Facebook</span>
          </button>
        </div>

        <p className="helper" style={{ marginTop: 12, marginBottom: 0 }}>
          Don’t have an account? <strong style={{ color: theme.colors.accent }}>Sign up</strong>
        </p>
      </div>
    </div>
  );
}

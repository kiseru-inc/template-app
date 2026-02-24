import { APP } from "../config/app";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #eee", marginTop: 80, padding: "32px 0", background: "#fafafa" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px", fontSize: 14, color: "#666" }}>
        <div>{APP.name}</div>
        <div style={{ marginTop: 8 }}>
          © {new Date().getFullYear()} {APP.name}
        </div>
      </div>
    </footer>
  );
}

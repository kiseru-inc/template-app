import Link from "next/link";
import { APP } from "..config/app";

export function Header() {
  return (
    <header style={{ borderBottom: "1px solid #eee", padding: "14px 0", background: "#fff" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px", display: "flex", justifyContent: "space-between" }}>
        <strong>{APP.name}</strong>
        <nav style={{ display: "flex", gap: 12 }}>
          {APP.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

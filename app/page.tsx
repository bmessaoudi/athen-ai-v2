import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Home page</h1>
      <Link
        href="/mantine-catalog"
        style={{
          display: "inline-block",
          margin: "20px 0",
          padding: "10px 20px",
          background: "#228be6",
          color: "white",
          borderRadius: "4px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Visualizza Catalogo Mantine
      </Link>
    </div>
  );
}

import { ImageResponse } from "next/og";
export const alt = "SYM POS — Restaurant operations that keep working locally.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#20352c",
        color: "#f8faf4",
        display: "flex",
        flexDirection: "column",
        padding: "70px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 38 }}
      >
        <span
          style={{
            display: "flex",
            background: "#cfed85",
            color: "#20352c",
            padding: "8px 20px",
            borderRadius: 12,
            fontWeight: 800,
          }}
        >
          S
        </span>
        SYM POS
      </div>
      <div
        style={{
          fontSize: 69,
          lineHeight: 1.1,
          letterSpacing: -3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>Run your restaurant.</span>
        <span style={{ color: "#cfed85" }}>Not your Internet connection.</span>
      </div>
      <div style={{ display: "flex", fontSize: 23, color: "#c6d2bc" }}>
        Ordering · Preparation · Billing · Inventory · Reports
      </div>
    </div>,
    size,
  );
}

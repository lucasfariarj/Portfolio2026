import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0f",
          fontFamily: "sans-serif",
          fontWeight: 800,
          fontSize: 88,
          letterSpacing: "-0.03em",
        }}
      >
        <span style={{ color: "#f5f5f7" }}>lf</span>
        <span style={{ color: "#8b5cf6" }}>.</span>
      </div>
    ),
    { ...size }
  );
}

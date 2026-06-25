import { ImageResponse } from "next/og";

export const alt = "Velora Interiors — Premium Interior Design Studio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1F1F1F",
          color: "#FAF7F2",
          fontFamily: '"Playfair Display"',
        }}
      >
        {/* Decorative line */}
        <div
          style={{
            width: 80,
            height: 2,
            backgroundColor: "#C9B79C",
            marginBottom: 24,
          }}
        />
        <h1
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            margin: 0,
            color: "#FAF7F2",
          }}
        >
          <span style={{ color: "#C9B79C" }}>V</span>elora Interiors
        </h1>
        <p
          style={{
            fontSize: 20,
            fontWeight: 400,
            color: "#C9B79C",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginTop: 8,
          }}
        >
          Where Vision Meets Space
        </p>
        <div
          style={{
            width: 80,
            height: 2,
            backgroundColor: "#C9B79C",
            marginTop: 24,
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}

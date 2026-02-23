import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #060D1F 0%, #121C3B 55%, #0B1E32 100%)",
          color: "white",
          padding: "70px"
        }}
      >
        <div
          style={{
            width: 90,
            height: 90,
            borderRadius: 18,
            background: "linear-gradient(135deg, #3C63F3 0%, #06B6D4 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 36,
            fontWeight: 700
          }}
        >
          AI
        </div>
        <div style={{ marginTop: 24, fontSize: 68, fontWeight: 800 }}>AISimplified</div>
        <div style={{ marginTop: 18, fontSize: 54, fontWeight: 700 }}>AI Voice Agent Platform</div>
        <div style={{ marginTop: 14, fontSize: 32, color: "#C7D2FE" }}>
          Build Intelligent AI Voice Agents. Scale Without Limits.
        </div>
      </div>
    ),
    { ...size }
  );
}

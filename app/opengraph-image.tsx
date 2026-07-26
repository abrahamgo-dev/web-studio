import { ImageResponse } from "next/og";

export const alt = "Fen Web Studio - elegant websites for small businesses";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px",
        color: "#f5f3f0",
        background:
          "radial-gradient(circle at top right, rgba(255,106,46,0.30), transparent 28%), radial-gradient(circle at 18% 12%, rgba(255,178,56,0.16), transparent 20%), linear-gradient(135deg, #0a0a0a 0%, #14100d 45%, #1c1512 100%)",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          fontSize: "28px",
          fontWeight: 700,
          letterSpacing: "-0.03em",
        }}
      >
        <div
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #ff6a2e, #ffb238)",
            color: "#0f0d0c",
            fontSize: "24px",
            fontWeight: 800,
          }}
        >
          F
        </div>
        <div>Fen Web Studio</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div
          style={{
            display: "flex",
            width: "fit-content",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: "999px",
            padding: "12px 20px",
            background: "rgba(255,255,255,0.06)",
            fontSize: "22px",
            textTransform: "uppercase",
            letterSpacing: "0.22em",
          }}
        >
          Premium web design
        </div>
        <div
          style={{
            fontSize: "82px",
            lineHeight: 1,
            fontWeight: 800,
            letterSpacing: "-0.05em",
            maxWidth: "900px",
          }}
        >
          Elegant websites that build trust and convert.
        </div>
        <div
          style={{
            fontSize: "30px",
            lineHeight: 1.35,
            color: "#cfc9c0",
            maxWidth: "920px",
          }}
        >
          For small businesses that need a site to look refined, feel clear, and
          help win better clients.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "24px",
          color: "#cfc9c0",
        }}
      >
        <div>fenwebstudio.com</div>
        <div style={{ color: "#ffb238" }}>Design. Build. Care.</div>
      </div>
    </div>,
    size,
  );
}

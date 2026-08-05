import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { profile } from "./data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social card, generated at build time so it always matches the live site
 * (no stale screenshot to maintain).
 */
export default async function OpengraphImage() {
  const photo = await readFile(
    path.join(process.cwd(), "public", "Images", "momen-hamza.jpeg"),
  );
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  const metrics = [
    { value: "96.7%", label: "Agent routing accuracy" },
    { value: "95%", label: "MRI test accuracy" },
    { value: "80%", label: "mAP@0.5 · YOLOv8" },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #07070c 0%, #120c26 55%, #1b0f3a 100%)",
          color: "#f5f5fa",
          fontFamily: "sans-serif",
          padding: 64,
        }}
      >
        {/* glow */}
        <div
          style={{
            position: "absolute",
            top: -180,
            left: 320,
            width: 700,
            height: 500,
            borderRadius: 9999,
            background: "rgba(139,92,246,0.35)",
            filter: "blur(120px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                color: "#c4b5fd",
                fontSize: 22,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              <div style={{ width: 40, height: 2, background: "#8b5cf6" }} />
              AI & Machine Learning Engineer
            </div>

            <div
              style={{
                fontSize: 78,
                fontWeight: 700,
                marginTop: 26,
                lineHeight: 1.05,
                letterSpacing: -2,
              }}
            >
              {profile.name}
            </div>

            <div
              style={{
                fontSize: 30,
                color: "#a5a5b8",
                marginTop: 20,
                maxWidth: 620,
                lineHeight: 1.35,
              }}
            >
              Computer vision · multilingual NLP · agentic RAG — built end to
              end, deployed live, measured.
            </div>
          </div>

          <div style={{ display: "flex", gap: 18 }}>
            {metrics.map((metric) => (
              <div
                key={metric.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "16px 22px",
                  borderRadius: 18,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <div style={{ fontSize: 34, fontWeight: 700, color: "#c4b5fd" }}>
                  {metric.value}
                </div>
                <div style={{ fontSize: 17, color: "#9c9cae", marginTop: 4 }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 340,
          }}
        >
          <img
            src={photoSrc}
            alt=""
            width={320}
            height={420}
            style={{
              width: 320,
              height: 420,
              objectFit: "cover",
              borderRadius: 28,
              border: "1px solid rgba(255,255,255,0.16)",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}

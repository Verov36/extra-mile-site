import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Shared social card. Uses system fonts so it renders with no network access. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f2f5ee",
          padding: 72,
          borderBottom: "24px solid #a8481a",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "#a8481a" }}>{site.name}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, color: "#18263b", lineHeight: 1.08 }}>
            You didn&apos;t start a business to do paperwork at 9 p.m.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 34, color: "#4a586b" }}>
            Quotes, review replies, email and paperwork. Finished the same day.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 32, fontWeight: 700, color: "#18263b" }}>
          {site.phone.display}
        </div>
      </div>
    ),
    size,
  );
}

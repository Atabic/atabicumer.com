import { DATA } from "@/data/resume";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? DATA.name;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "80px",
          background: "black",
          color: "white",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, textAlign: "center" }}>
          {title}
        </div>
        <div style={{ fontSize: 32, marginTop: 24, color: "#a1a1aa" }}>
          {DATA.name}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

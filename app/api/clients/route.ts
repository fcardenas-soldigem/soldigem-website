import { NextResponse } from "next/server";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const dir = join(process.cwd(), "public", "clientes");
    const base = "/clientes";
    const files = await readdir(dir);
    const images = files
      .filter((f) => /\.(png|jpg|jpeg|svg|webp)$/i.test(f))
      .map((f) => {
        const label = f.replace(/\.[^.]+$/, "").replace(/[._-]+/g, " ").trim();
        return { src: `${base}/${encodeURIComponent(f)}`, alt: label };
      });
    return NextResponse.json({ ok: true, images });
  } catch {
    return NextResponse.json({ ok: false, images: [] });
  }
}



import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import mammoth from "mammoth";

export async function GET() {
  const candidates = [
    join(process.cwd(), "public", "Servicios_Soldigem.docx"),
    join(process.cwd(), "public", "docs", "Servicios_Soldigem.docx"),
    join(process.cwd(), "public", "docs", "services.docx"),
  ];
  let buffer: Buffer | null = null;
  let picked = "";
  for (const p of candidates) {
    try {
      buffer = await readFile(p);
      picked = p;
      break;
    } catch {
      // try next path
    }
  }
  if (!buffer) {
    return NextResponse.json({ ok: false, error: "services docx not found" }, { status: 404 });
  }
  const { value } = await mammoth.convertToHtml({ buffer });
  const sections = Array.from(value.matchAll(/<h[12]>(.*?)<\/h[12]>[\s\S]*?(?=<h[12]>|$)/g)).map((m) => {
    const html = m[0];
    const title = m[1]?.replace(/<[^>]+>/g, "").trim();
    return { title, html };
  });
  return NextResponse.json({ ok: true, picked, sections });
}



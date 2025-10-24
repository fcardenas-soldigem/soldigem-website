import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  nombre: z.string().min(2),
  empresa: z.string().min(1),
  email: z.string().email(),
  mensaje: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries());
    const parsed = schema.parse(data);

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Soldigem <noreply@soldigem.com>",
      to: [process.env.CONTACT_TO_EMAIL || "fcardenas@soldigem.com.pe"],
      subject: `Nuevo contacto: ${parsed.nombre} — ${parsed.empresa}`,
      replyTo: parsed.email,
      text: `${parsed.mensaje}\n\nNombre: ${parsed.nombre}\nEmpresa: ${parsed.empresa}\nEmail: ${parsed.email}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Error";
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}



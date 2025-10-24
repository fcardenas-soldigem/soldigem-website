import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesMeta, type ServiceSlug } from "@/components/services/data";

type DocSection = { title?: string; html: string };
type ServicesResp = { sections?: DocSection[] } | null;

async function fetchSections(): Promise<ServicesResp> {
  try {
    const res = await fetch("/api/services", { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: ServiceSlug }> }) {
  const { slug } = await params;
  const meta = servicesMeta[slug];
  if (!meta) notFound();

  const data = await fetchSections();
  const match = data?.sections?.find((s) => (s.title || "").toLowerCase().includes(meta.title.toLowerCase()));

  return (
    <main className="max-w-5xl mx-auto px-6 md:px-8 py-24">
      <h1 className="text-3xl md:text-4xl font-semibold">{meta.title}</h1>
      <p className="text-white/70 mt-2">{meta.summary}</p>

      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <section className="space-y-4 rounded-2xl border bg-card/60 p-6">
          <h2 className="text-xl font-medium">Problema</h2>
          <p className="text-white/70">Identificamos fricciones en el proceso actual y su impacto en costos, tiempos y experiencia.</p>
          <h2 className="text-xl font-medium">Nuestra solución</h2>
          <ul className="list-disc ml-5 text-white/70">
            <li>Implementación ágil con foco en resultados.</li>
            <li>Automatización y observabilidad end‑to‑end.</li>
            <li>Buenas prácticas de seguridad y compliance.</li>
          </ul>
        </section>
        <section className="space-y-4 rounded-2xl border bg-card/60 p-6">
          <h2 className="text-xl font-medium">Entregables & SLA</h2>
          <p className="text-white/70">Alcance, cronograma, canal de soporte y niveles de servicio definidos.</p>
          <h2 className="text-xl font-medium">Beneficios medibles (KPIs)</h2>
          <ul className="list-disc ml-5 text-white/70">
            <li>Reducción de tiempos (TTR/MTTR)</li>
            <li>Ahorro en OPEX/CAPEX</li>
            <li>Satisfacción del usuario</li>
          </ul>
        </section>
      </div>

      {match && (
        <div className="mt-12 rounded-2xl border bg-card/60 p-6">
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: match.html }} />
        </div>
      )}

      <div className="mt-10">
        <Link href="/es#contact" className="underline">Solicitar propuesta</Link>
      </div>
    </main>
  );
}



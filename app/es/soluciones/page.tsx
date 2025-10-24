import Link from "next/link";

const items = [
  { t: "Mesa de ayuda", d: "Tickets, SLAs y automatización de derivaciones.", k: "helpdesk" },
  { t: "Compras", d: "Procure-to-Pay, aprobaciones y control de gasto.", k: "compras" },
  { t: "Inventario", d: "Stock en tiempo real, reposición y alertas.", k: "inventario" },
  { t: "BackOffice", d: "Onboarding, activos, accesos y auditoría.", k: "backoffice" },
];

export default function SolucionesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 md:px-8 py-24">
      <h1 className="text-3xl md:text-4xl font-display font-semibold">Soluciones</h1>
      <p className="text-white/70 mt-2">Casos de uso listos para acelerar operaciones con IA y automatización.</p>

      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        {items.map((i) => (
          <div key={i.k} className="rounded-2xl border bg-card/60 p-6">
            <div className="text-lg font-medium text-white/90">{i.t}</div>
            <div className="text-sm text-white/60 mt-2">{i.d}</div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link className="underline" href="/es#contact">Solicitar propuesta</Link>
      </div>
    </main>
  );
}



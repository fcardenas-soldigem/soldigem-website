import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Placeholder: redirigir a /es en producción */}
      <section className="flex items-center justify-center h-[60vh]">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Bienvenido a Soldigem</h1>
          <p className="text-muted-foreground mt-2">Cargando…</p>
          <Link className="underline mt-4 inline-block" href="/es">
            Ir a la página principal
          </Link>
        </div>
      </section>
    </main>
  );
}

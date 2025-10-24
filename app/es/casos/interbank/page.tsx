export default function InterbankCase() {
  return (
    <main className="max-w-5xl mx-auto px-6 md:px-8 py-24">
      <h1 className="text-3xl md:text-4xl font-display font-semibold">Caso: Interbank</h1>
      <p className="text-white/70 mt-3">Resumen del proyecto y resultados logrados.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <section className="rounded-2xl border bg-card/60 p-6">
          <h2 className="text-xl font-medium">Contexto</h2>
          <p className="text-white/70 mt-2">Optimización de activos TI y soporte con SLAs.</p>
        </section>
        <section className="rounded-2xl border bg-card/60 p-6">
          <h2 className="text-xl font-medium">Resultados</h2>
          <ul className="list-disc ml-5 text-white/70 mt-2">
            <li>Ahorro operativo</li>
            <li>Mejora en tiempos de atención</li>
            <li>Mayor disponibilidad</li>
          </ul>
        </section>
      </div>
    </main>
  );
}



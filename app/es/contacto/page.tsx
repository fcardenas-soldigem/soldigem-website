import { ContactForm as HomeContact } from "../page";

export default function Contacto() {
  return (
    <main className="max-w-xl mx-auto px-6 md:px-8 py-24 text-center">
      <h1 className="text-3xl md:text-4xl font-display font-semibold">Contáctanos</h1>
      <p className="text-white/70 mt-2">Agenda una demo o solicita una propuesta.</p>
      <div className="mt-8">
        {/* Reusar el formulario de Home */}
        <HomeContact />
      </div>
    </main>
  );
}



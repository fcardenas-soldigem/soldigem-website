import Link from "next/link";
import {
  Monitor,
  Wrench,
  Package,
  ShoppingCart,
  Code,
  Brain,
  BarChart3,
  Cloud,
} from "lucide-react";
import { servicesMeta, ServiceSlug } from "@/components/services/data";

const iconMap: Record<ServiceSlug, React.ElementType> = {
  "centros-de-control": Monitor,
  "soporte-y-reparaciones": Wrench,
  "gestion-de-activos-ti": Package,
  "procure-smart": ShoppingCart,
  "software-factory": Code,
  "agentes-ia": Brain,
  "ai-analytics": BarChart3,
  "habilitacion-cloud-gcp": Cloud,
};

export default function PortafolioSoluciones() {
  const servicios = Object.entries(servicesMeta) as [ServiceSlug, typeof servicesMeta[ServiceSlug]][];

  return (
    <section className="relative w-full min-h-screen py-20 overflow-hidden bg-black">
      {/* Gradiente de fondo con los colores de la marca */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d9667b]/20 via-black to-[#515a73]/20" />
      
      {/* Overlay para mayor profundidad */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
      
      {/* Contenido */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white mb-4">
          Portafolio de Soluciones
        </h2>
        <p className="text-white/60 text-lg mb-16 max-w-3xl">
          Descubre nuestro catálogo completo de servicios especializados en tecnología y transformación digital
        </p>
        
        {/* Grid de soluciones - estilo columnas */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {servicios.map(([slug, meta]) => {
            const Icon = iconMap[slug];
            return (
              <Link
                key={slug}
                href={`/es/servicios/${slug}`}
                className="group relative rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm border border-white/10 p-6 md:p-8 hover:border-[#d9667b]/50 hover:from-white/[0.12] hover:to-white/[0.05] transition-all duration-500 overflow-hidden"
              >
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d9667b]/0 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                
                {/* Contenido de la tarjeta */}
                <div className="relative z-10">
                  {/* Ícono con fondo circular */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-[#d9667b]/20 to-[#515a73]/20 border border-white/10 group-hover:border-[#d9667b]/50 group-hover:from-[#d9667b]/30 group-hover:to-[#515a73]/30 transition-all duration-500">
                      <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#d9667b] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-base md:text-lg font-semibold text-white/90 text-center mb-4 min-h-[3rem] flex items-center justify-center group-hover:text-white transition-colors leading-tight">
                    {meta.title}
                  </h3>
                  
                  {/* Línea divisoria */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
                  
                  {/* Descripción */}
                  <p className="text-xs md:text-sm text-white/60 text-center leading-relaxed group-hover:text-white/80 transition-colors">
                    {meta.summary}
                  </p>

                  {/* Indicador de hover */}
                  <div className="mt-6 flex justify-center">
                    <span className="text-xs text-[#d9667b] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                      Ver más
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

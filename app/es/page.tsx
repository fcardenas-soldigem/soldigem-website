"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, Monitor, Wrench, Package, ShoppingCart, Code, Brain, BarChart3, Cloud, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "./json-ld";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LogosMarquee, ClientsMarquee } from "@/components/sections/logos-marquee";
import { TestimonialSection } from "@/components/sections/testimonial";

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "¿Quiénes somos?" },
  { id: "stats", label: "Resultados" },
  { id: "services", label: "Servicios" },
  { id: "why", label: "¿Por qué?" },
  { id: "cases", label: "Casos" },
  { id: "contact", label: "Contacto" },
  { id: "links", label: "Links" },
];

export default function SoldigemES() {
  const [active, setActive] = useState<string>("hero");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.6 };
    const cb: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    };
    observer.current = new IntersectionObserver(cb, options);
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.current?.observe(el);
    });
    return () => observer.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <JsonLd />
      <Navbar active={active} />
      <Hero />
      <About />
      <Stats />
      <Services />
      <LogosMarquee />
      <TestimonialSection />
      <Why />
      <Contact />
      <Links />
      <Footer />
    </div>
  );
}

function Navbar({ active }: { active: string }) {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${solid ? "bg-[#0B1220]/90 backdrop-blur border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="#hero" className="flex items-center">
          <Image src="/soldigemnamewhite.png" alt="Soldigem" width={120} height={32} className="h-8 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={`text-sm font-medium transition-colors ${active === s.id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
              {s.label}
            </a>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden"><Menu className="h-5 w-5" /></Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="mt-8 flex flex-col gap-4">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="text-sm text-foreground">
                  {s.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onVisibility = () => {
      if (document.visibilityState === "visible" && !v.ended) {
        v.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);
  return (
    <section id="hero" className="relative h-[100svh] flex items-center justify-center overflow-hidden scroll-mt-16">
      {/* Fondo: video + overlay oscuro */}
      <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" autoPlay muted playsInline preload="metadata" poster="/logo.svg">
        <source src="/A_cinematic_abstract_202509081700_z7rkh.mp4?v=2" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/80" />

      {/* Capa grid sutil al estilo Scale */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      {/* Blobs de color */}
      <div className="absolute -z-0 inset-0 pointer-events-none" aria-hidden>
        <div className="absolute w-[60vw] h-[60vw] bg-[#d9667b]/10 blur-[120px] rounded-full -top-20 -left-20" />
        <div className="absolute w-[50vw] h-[50vw] bg-[#263659]/10 blur-[120px] rounded-full -bottom-20 -right-20" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-white/80 backdrop-blur mb-6"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-[#d9667b] animate-pulse" />
          <span className="text-center">Nuevo: Agentes de IA para ProcureSmart</span>
          <Link href="#services" className="text-[#d9667b] hover:text-[#bf8969] transition-colors whitespace-nowrap">Ver más</Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-br from-[#d9667b] via-[#515a73] to-[#263659] bg-clip-text text-transparent font-display px-2"
        >
          Tecnología que libera tu negocio.
        </motion.h1>

        {/* Logos de confianza */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 sm:mt-10"
        >
          <p className="text-xs sm:text-sm uppercase tracking-wider text-white/60">Confiado por equipos líderes</p>
          <ClientsMarquee />
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const [activeTab, setActiveTab] = useState<'trayectoria' | 'experiencia' | 'escalabilidad'>('trayectoria');

  const tabs = [
    {
      id: 'trayectoria' as const,
      title: 'Trayectoria',
      description: '+10 años implementando soluciones en banca y retail.',
    },
    {
      id: 'experiencia' as const,
      title: 'Experiencia',
      description: 'Equipo senior en infraestructura, software e IA.',
    },
    {
      id: 'escalabilidad' as const,
      title: 'Escalabilidad',
      description: 'Modelos replicables con datos y automatización.',
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black to-[#0a1929] scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-light">¿Quiénes somos?</h2>
          <p className="mt-3 sm:mt-4 text-white/60 text-base sm:text-lg max-w-3xl mx-auto px-4">
            Somos un partner tecnológico que combina experiencia bancaria, ingeniería y analítica para acelerar proyectos TI con foco en resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contenido izquierdo - Tabs */}
          <div className="space-y-4 sm:space-y-6">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`w-full text-left p-4 sm:p-6 rounded-xl border transition-all ${
                  activeTab === tab.id
                    ? 'border-[#d9667b]/50 bg-gradient-to-br from-[#d9667b]/10 to-transparent'
                    : 'border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-white/20'
                }`}
              >
                <h3 className={`font-semibold text-base sm:text-lg mb-1 sm:mb-2 ${activeTab === tab.id ? 'text-[#d9667b]' : 'text-white/90'}`}>
                  {tab.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{tab.description}</p>
              </motion.button>
            ))}
          </div>

          {/* Visualización 3D derecha */}
          <div className="relative lg:block">
            <div className="relative w-full h-[600px]" style={{ perspective: "1500px" }}>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* TRAYECTORIA - Timeline 2D Vertical */}
                {activeTab === 'trayectoria' && (
                  <div className="relative w-full h-full flex items-center justify-center px-8">
                    <div className="relative w-full max-w-md">
                      {/* Línea vertical del timeline */}
                      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#d9667b]/20 via-[#d9667b] to-[#d9667b]/20" />
                      
                      {/* Hitos del timeline */}
                      <div className="space-y-12 py-8">
                        {[
                          { year: '2014', title: 'Fundación', desc: 'Inicio de operaciones' },
                          { year: '2016', title: 'Primer proyecto bancario', desc: 'Expansión al sector financiero' },
                          { year: '2018', title: 'Expansión retail', desc: 'Diversificación de clientes' },
                          { year: '2020', title: 'Cloud transformation', desc: 'Migración a la nube' },
                          { year: '2024', title: 'IA & Analytics', desc: 'Soluciones con inteligencia artificial' },
                        ].map((milestone, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.15, duration: 0.5 }}
                            className="relative flex items-start gap-6"
                          >
                            {/* Nodo */}
                            <div className="relative z-10 flex-shrink-0">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d9667b] to-[#bf8969] border-4 border-[#0a1929] shadow-xl flex items-center justify-center">
                                <span className="text-white font-bold text-sm">{milestone.year}</span>
                              </div>
                            </div>
                            
                            {/* Contenido */}
                            <div className="flex-1 pt-2">
                              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-[#d9667b]/40 transition-all">
                                <h4 className="text-white font-semibold text-base mb-1">{milestone.title}</h4>
                                <p className="text-white/60 text-sm">{milestone.desc}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* EXPERIENCIA - Grid de Competencias */}
                {activeTab === 'experiencia' && (
                  <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-xl">
                      {[
                        { title: 'Infraestructura', desc: 'Diseño y optimización de centros de datos', years: '7 años', color: '#515a73' },
                        { title: 'Cloud GCP', desc: 'Migración y gestión en Google Cloud', years: '6 proyectos', color: '#3b82f6' },
                        { title: 'IA & Analytics', desc: 'Modelos predictivos y dashboards', years: 'En desarrollo', color: '#10b981' },
                        { title: 'Software Factory', desc: 'ERP personalizado para 10 clientes activos', years: '10 clientes', color: '#d9667b' },
                        { title: 'Data Engineering', desc: 'ETL, pipelines y arquitectura de datos', years: '20+ pipelines', color: '#bf8969' },
                        { title: 'Ciberseguridad', desc: 'Auditorías y cumplimiento normativo', years: 'ISO 27001', color: '#8b5cf6' },
                      ].map((area, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.5 }}
                          className="relative rounded-xl border p-5 hover:scale-105 transition-transform"
                          style={{
                            background: `linear-gradient(135deg, ${area.color}15, ${area.color}05)`,
                            borderColor: `${area.color}40`,
                            boxShadow: `0 4px 20px ${area.color}20`,
                          }}
                        >
                          {/* Badge con años */}
                          <div 
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold mb-3"
                            style={{
                              background: area.color,
                              color: '#000',
                            }}
                          >
                            {area.years}
                          </div>
                          
                          {/* Título */}
                          <h4 
                            className="text-base font-bold mb-2"
                            style={{ color: area.color }}
                          >
                            {area.title}
                          </h4>
                          
                          {/* Descripción */}
                          <p className="text-xs text-white/60 leading-relaxed">
                            {area.desc}
                          </p>
                          
                          {/* Línea decorativa */}
                          <div 
                            className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl"
                            style={{
                              background: `linear-gradient(to right, ${area.color}60, transparent)`,
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ESCALABILIDAD - Pirámide con Base Abajo */}
                {activeTab === 'escalabilidad' && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative w-full max-w-lg">
                      {/* Niveles de la pirámide - del más pequeño (arriba) al más grande (abajo) */}
                      <div className="flex flex-col items-center gap-6 py-12">
                        {[
                          { label: 'Automatización Total', width: 280, color: '#10b981', level: 4 },
                          { label: 'Modelos Replicables', width: 340, color: '#3b82f6', level: 3 },
                          { label: 'Integración de Datos', width: 400, color: '#d9667b', level: 2 },
                          { label: 'Infraestructura Base', width: 460, color: '#515a73', level: 1 },
                        ].map((level, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30, scaleX: 0 }}
                            animate={{ opacity: 1, y: 0, scaleX: 1 }}
                            transition={{ delay: idx * 0.15, duration: 0.6, type: "spring" }}
                            className="relative rounded-xl border"
                            style={{
                              width: `${level.width}px`,
                              height: '70px',
                              background: `linear-gradient(135deg, ${level.color}25, ${level.color}08)`,
                              borderColor: `${level.color}50`,
                              boxShadow: `0 8px 32px ${level.color}25`,
                            }}
                          >
                            <div className="absolute inset-0 flex items-center justify-center gap-4">
                              {/* Número de nivel */}
                              <div 
                                className="w-10 h-10 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0"
                                style={{
                                  background: level.color,
                                  color: '#000',
                                }}
                              >
                                {level.level}
                              </div>
                              
                              {/* Etiqueta */}
                              <span 
                                className="text-base font-bold text-center"
                                style={{ color: level.color }}
                              >
                                {level.label}
                              </span>
                            </div>
            </motion.div>
          ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const CountUp = ({ end, duration = 1500, prefix = "", suffix = "", formatter }: { end: number; duration?: number; prefix?: string; suffix?: string; formatter?: (n: number) => string }) => {
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);
    const startedRef = useRef(false);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && !startedRef.current) {
              startedRef.current = true;
              const start = performance.now();
              const animate = (t: number) => {
                const progress = Math.min(1, (t - start) / duration);
                setValue(end * progress);
                if (progress < 1) requestAnimationFrame(animate);
              };
              requestAnimationFrame(animate);
            }
          });
        },
        { threshold: 0.6 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, [end, duration]);

    const display = formatter ? formatter(value) : Math.floor(value).toLocaleString("es-PE");
    return (
      <div ref={ref} className="text-4xl font-semibold text-primary">
        {prefix}
        {display}
        {suffix}
      </div>
    );
  };

  const Stat = ({ children, label }: { children: React.ReactNode; label: string }) => (
    <div className="text-center">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        {children}
      </motion.div>
      <div className="text-sm text-muted-foreground mt-2">{label}</div>
    </div>
  );

  return (
    <section id="stats" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 scroll-mt-16">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        <Stat label="ahorrados a clientes">
          <CountUp end={500} prefix="+S/" suffix="k" />
        </Stat>
        <Stat label="entregas on-time">
          <CountUp end={95} suffix="%" />
        </Stat>
        <Stat label="suministros tecnológicos entregados">
          <CountUp end={1000} prefix="+" />
        </Stat>
        <Stat label="equipos repotenciados">
          <CountUp end={1000} prefix="+" />
        </Stat>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { t: "Centros de Control", d: "Diseño e implementación de centros de monitoreo y operación.", icon: Monitor },
    { t: "Soporte y Reparaciones", d: "Incluye cambio de carcasas HP, Lenovo, Dell.", icon: Wrench },
    { t: "Gestión de Activos TI", d: "Inventario, lifecycle y optimización de costos.", icon: Package },
    { t: "ProcureSmart", d: "Venta de equipos y periféricos.", icon: ShoppingCart },
    { t: "Software Factory", d: "ERP para pymes, integraciones, QA.", icon: Code },
    { t: "Agentes de IA", d: "Automatización de flujos y chatbots.", icon: Brain },
    { t: "AI & Analytics", d: "Dashboards de compras, ventas e inventario.", icon: BarChart3 },
    { t: "Cloud en GCP", d: "Habilitación y gestión en Google Cloud Platform.", icon: Cloud },
  ];

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [content, setContent] = useState<string>("");

  type ServiceSection = { title: string; html: string };
  type ServicesResponse = { ok: boolean; sections?: ServiceSection[] };

  const openService = async (title: string) => {
    setActive(title);
    try {
      const res = await fetch("/api/services");
      if (res.ok) {
        const data: ServicesResponse = await res.json();
        const match = data.sections?.find((s) => s.title?.toLowerCase().includes(title.toLowerCase()));
        setContent(match?.html || "<p>Contenido próximamente.</p>");
      } else {
        setContent("<p>No se encontró services.docx en /public/docs.</p>");
      }
    } catch {
      setContent("<p>Error cargando contenido.</p>");
    }
    setOpen(true);
  };

  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden scroll-mt-16">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d9667b]/10 via-black to-[#515a73]/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
      
      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-light text-white mb-2 sm:mb-3">
            Portafolio de Soluciones
          </h2>
          <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Descubre nuestro catálogo completo de servicios especializados
          </p>
        </div>
        
        {/* Grid de servicios - estilo columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {items.map((s) => {
            const Icon = s.icon;
            return (
              <motion.button
                key={s.t}
                onClick={() => openService(s.t)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm border border-white/10 p-5 md:p-6 hover:border-[#d9667b]/50 hover:from-white/[0.12] hover:to-white/[0.05] transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d9667b]/0 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                
                {/* Contenido */}
                <div className="relative z-10">
                  {/* Ícono circular */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[#d9667b]/20 to-[#515a73]/20 border border-white/10 group-hover:border-[#d9667b]/50 group-hover:from-[#d9667b]/30 group-hover:to-[#515a73]/30 transition-all duration-500">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#d9667b] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-sm md:text-base font-semibold text-white/90 text-center mb-3 min-h-[2.5rem] flex items-center justify-center group-hover:text-white transition-colors leading-tight">
                    {s.t}
                  </h3>
                  
                  {/* Línea divisoria */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3" />
                  
                  {/* Descripción */}
                  <p className="text-xs md:text-sm text-white/60 text-center leading-relaxed group-hover:text-white/80 transition-colors">
                    {s.d}
                  </p>

                  {/* Indicador */}
                  <div className="mt-4 flex justify-center">
                    <span className="text-xs text-[#d9667b] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                      Ver más
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
            </motion.button>
            );
          })}
        </div>
      </div>

      {/* Modal de detalles */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">{active || "Servicio"}</DialogTitle>
          </DialogHeader>
          <div className="prose prose-invert max-w-none mt-4" dangerouslySetInnerHTML={{ __html: content }} />
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Why() {
  const [currentCase, setCurrentCase] = useState(0);

  const cases: { t: string; pain: string; sol: string; res: string; icon: React.ElementType }[] = [
    {
      t: "Centro de Control de Seguridad (CCTV)",
      pain: "Eventos se detectan tarde; poca trazabilidad y reacción reactiva.",
      sol: "Diseñamos e implementamos centros de control sobre Q‑SYS: integración de cámaras/NVR, dashboards, videowall y SOPs digitales.",
      res: "Tiempo de verificación ↓ 52%; falsas alarmas ↓ 27%; escalados correctos ↑ 31%.",
      icon: Monitor,
    },
    {
      t: "Compras lentas y costosas",
      pain: "Procesos largos, poca visibilidad de precios y contratos.",
      sol: "ProcureSmart + acuerdos con vendors para cotizar, comparar y cerrar más rápido.",
      res: "Lead time de compra ↓ 38%; ahorro promedio 11% en costos.",
      icon: ShoppingCart,
    },
    {
      t: "Activos TI desordenados",
      pain: "Inventario desactualizado, equipos o licencias sin uso.",
      sol: "Gestión de activos end‑to‑end: inventario, etiquetado, CMDB y tableros de control.",
      res: "Utilización de activos ↑ 28%; compras innecesarias evitadas.",
      icon: Package,
    },
    {
      t: "Soporte y reparaciones lentas",
      pain: "Tickets reabiertos, SLA incumplidos y falta de repuestos.",
      sol: "Mesa de ayuda + repuestos + control de calidad de reparación.",
      res: "Cumplimiento SLA 98%; re‑aperturas ↓ 29%.",
      icon: Wrench,
    },
    {
      t: "Datos dispersos, reportes tardíos",
      pain: "Demoras para decidir; información en silos.",
      sol: "Data foundation, ETL y BI con dashboards ejecutivos y operativos.",
      res: "Reportes en horas (no días); errores operativos ↓ 18%.",
      icon: BarChart3,
    },
    {
      t: "Costos en nube y seguridad",
      pain: "Gastos impredecibles y riesgos por configuraciones.",
      sol: "Landing zone en GCP, FinOps y automatización de seguridad.",
      res: "Costos nube ↓ 19%; postura de seguridad fortalecida.",
      icon: Cloud,
    },
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const caso = cases[currentCase];
  const Icon = caso.icon;

  return (
    <section id="why" className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 scroll-mt-16 bg-gradient-to-b from-black to-[#0a1929]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-light">¿Por qué elegirnos?</h2>
          <p className="mt-2 sm:mt-3 text-white/50 text-sm sm:text-base">Desafío → Solución → Impacto</p>
        </div>

        {/* Título del caso actual */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/5 border border-white/10">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#d9667b] flex-shrink-0" strokeWidth={1.5} />
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white/90 text-left">{caso.t}</h3>
          </div>
          <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2">
            <span className="text-xs text-white/40">
              {currentCase + 1} de {cases.length}
            </span>
          </div>
        </div>

        {/* Cards del caso con animación */}
        <motion.div
          key={currentCase}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10"
        >
          {/* Card 1: Desafío */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#d9667b]/50 to-pink-600/50 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-[#1a1a2e]/90 to-black border border-[#d9667b]/20 hover:border-[#d9667b]/40 transition-all h-full">
              <div className="w-10 h-10 rounded-lg bg-[#d9667b]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#d9667b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h4 className="text-base font-semibold text-[#d9667b] mb-3 tracking-wide uppercase text-xs">Desafío</h4>
              <p className="text-sm text-white/70 leading-relaxed">{caso.pain}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-[#d9667b]/50 to-transparent" />
            </div>
          </div>

          {/* Card 2: Solución */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-cyan-600/50 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-[#1a1a2e]/90 to-black border border-blue-500/20 hover:border-blue-500/40 transition-all h-full">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-base font-semibold text-blue-500 mb-3 tracking-wide uppercase text-xs">Solución</h4>
              <p className="text-sm text-white/70 leading-relaxed">{caso.sol}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-blue-500/50 to-transparent" />
            </div>
          </div>

          {/* Card 3: Impacto */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/50 to-green-600/50 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-[#1a1a2e]/90 to-black border border-emerald-500/20 hover:border-emerald-500/40 transition-all h-full">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-base font-semibold text-emerald-500 mb-3 tracking-wide uppercase text-xs">Impacto</h4>
              <p className="text-sm text-white/70 leading-relaxed">{caso.res}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-emerald-500/50 to-transparent" />
        </div>
      </div>
        </motion.div>

        {/* Controles de navegación */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevCase}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#d9667b]/50 transition-all group"
            aria-label="Caso anterior"
          >
            <ChevronLeft className="w-5 h-5 text-white/60 group-hover:text-[#d9667b] transition-colors" />
          </button>

          {/* Indicadores */}
          <div className="flex gap-2">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCase(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentCase
                    ? "w-8 bg-[#d9667b]"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Ir al caso ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextCase}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#d9667b]/50 transition-all group"
            aria-label="Caso siguiente"
          >
            <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-[#d9667b] transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
}


function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 scroll-mt-16">
      <div className="max-w-xl mx-auto text-center px-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Hablemos</h2>
        <p className="text-muted-foreground mt-2">Agenda una demo o solicita una propuesta.</p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

const ContactSchema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre"),
  empresa: z.string().min(1, "Ingresa tu empresa"),
  email: z.string().email("Email inválido"),
  mensaje: z.string().min(10, "Cuéntanos más detalles (min 10 caracteres)"),
});

type ContactInputs = z.infer<typeof ContactSchema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInputs>({ resolver: zodResolver(ContactSchema) });

  const onSubmit = async (data: ContactInputs) => {
    const form = new FormData();
    Object.entries(data).forEach(([k, v]) => form.append(k, v));
    const res = await fetch("/api/contact", { method: "POST", body: form });
    if (res.ok) {
      setSent(true);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3 text-left">
      <div>
        <input {...register("nombre")} placeholder="Nombre" className="w-full px-3 py-2 rounded bg-background border" />
        {errors.nombre && <p className="text-xs text-red-400 mt-1">{errors.nombre.message}</p>}
      </div>
      <div>
        <input {...register("empresa")} placeholder="Empresa" className="w-full px-3 py-2 rounded bg-background border" />
        {errors.empresa && <p className="text-xs text-red-400 mt-1">{errors.empresa.message}</p>}
      </div>
      <div>
        <input type="email" {...register("email")} placeholder="Email" className="w-full px-3 py-2 rounded bg-background border" />
        {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <textarea {...register("mensaje")} placeholder="Mensaje" className="w-full px-3 py-2 rounded bg-background border min-h-28" />
        {errors.mensaje && <p className="text-xs text-red-400 mt-1">{errors.mensaje.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Enviando…" : "Agendar demo"}</Button>
      {sent && <p className="text-sm text-green-400">Mensaje enviado. Te contactaremos pronto.</p>}
    </form>
  );
}

function Links() {
  return (
    <section id="links" className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 bg-card/40 scroll-mt-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
        <Link className="underline text-sm sm:text-base" href="https://linkedin.com/company/soldigem" target="_blank">LinkedIn</Link>
        <Link className="underline text-sm sm:text-base" href="https://wa.me/51986705342" target="_blank">WhatsApp</Link>
        <Link className="underline text-sm sm:text-base" href="https://blog.soldigem.com" target="_blank">Blog</Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 sm:py-10 px-4 sm:px-6 md:px-8 border-t">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image src="/isotiposdg.png" alt="Soldigem" width={32} height={32} className="h-7 w-7 sm:h-8 sm:w-8" />
          <span className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">© {new Date().getFullYear()} Soldigem. Todos los derechos reservados.</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
          <Link href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors">Legal</Link>
          <Link href="#terms" className="text-muted-foreground hover:text-foreground transition-colors">Términos</Link>
        </div>
      </div>
    </footer>
  );
}



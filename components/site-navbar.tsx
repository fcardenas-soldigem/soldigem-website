"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Menu, Calendar } from "lucide-react";
import { useTheme } from "next-themes";

export function SiteNavbar({ locale = "es" }: { locale?: string }) {
  const [solid, setSolid] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const base = `/${locale}`;
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${solid ? "bg-black/80 backdrop-blur border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 py-8 flex items-center justify-between">
        <Link href={`${base}`} className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Soldigem" width={80} height={80} />
          <span className="font-medium text-2xl">Soldigem</span>
        </Link>
        <nav className="hidden md:flex items-center gap-12">
          <Link href={`${base}#services`} className="text-xl text-muted-foreground hover:text-foreground">Servicios</Link>
          <Link href={`${base}/servicios`} className="text-xl text-muted-foreground hover:text-foreground">Catálogo</Link>
          <Link href={`${base}/soluciones`} className="text-xl text-muted-foreground hover:text-foreground">Soluciones</Link>
          <Link href={`${base}/casos/interbank`} className="text-xl text-muted-foreground hover:text-foreground">Casos</Link>
          <Link href={`${base}/nosotros`} className="text-xl text-muted-foreground hover:text-foreground">Nosotros</Link>
          <Link href={`${base}/blog`} className="text-xl text-muted-foreground hover:text-foreground">Blog</Link>
          <div className="flex items-center gap-3">
            <Switch checked={theme === "light"} onCheckedChange={(v) => setTheme(v ? "light" : "dark")} />
            <Link href={`${base}/contacto`}>
              <Button size="default" className="text-xl py-7 px-8">Agendar demo <Calendar className="ml-2 h-6 w-6" /></Button>
            </Link>
          </div>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden"><Menu className="h-5 w-5" /></Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="mt-8 flex flex-col gap-4">
              {[{ href: `${base}#services`, label: "Servicios" }, { href: `${base}/servicios`, label: "Catálogo" }, { href: `${base}/soluciones`, label: "Soluciones" }, { href: `${base}/casos/interbank`, label: "Casos" }, { href: `${base}/nosotros`, label: "Nosotros" }, { href: `${base}/blog`, label: "Blog" }].map(i => (
                <Link key={i.href} href={i.href} className="text-sm text-foreground">{i.label}</Link>
              ))}
              <div className="pt-4">
                <Link href={`${base}/contacto`}><Button className="w-full">Agendar demo</Button></Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}



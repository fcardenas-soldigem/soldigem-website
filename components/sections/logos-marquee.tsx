"use client";
import { motion } from "framer-motion";
// Usamos <img> nativo para evitar optimización y mostrar cualquier PNG/JPG local sin fricción
import { useEffect, useState } from "react";

export function LogosMarquee() {
  const defaults: { src: string; alt: string }[] = [];

  const [images, setImages] = useState<{ src: string; alt: string }[] | null>(null);
  useEffect(() => {
    let mounted = true;
    const ts = Date.now();
    fetch(`/api/partners?ts=${ts}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setImages(Array.isArray(data?.images) && data.images.length > 0 ? data.images : defaults);
      })
      .catch(() => setImages(defaults));
    return () => {
      mounted = false;
    };
  }, []);

  const list = images ?? defaults;
  const track = list.concat(list);
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center text-xs tracking-widest text-white/60 uppercase">Partners</h3>
        <div className="mt-6 relative overflow-hidden min-h-24">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, -800] }}
            transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
            className="flex items-center gap-16 opacity-95 hover:[animation-play-state:paused]"
          >
            {track.map((p, i) => (
              <img
                key={`${p.src}-${i}`}
                src={p.src}
                alt={p.alt || "partner"}
                loading="lazy"
                className="h-16 md:h-20 w-auto object-contain saturate-150"
                style={{ filter: "drop-shadow(0 0 12px rgba(255,255,255,0.06))" }}
              />
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
        </div>
      </div>
    </section>
  );
}

export function ClientsMarquee() {
  const defaults: { src: string; alt: string }[] = [];
  const [images, setImages] = useState<{ src: string; alt: string }[] | null>(null);
  useEffect(() => {
    let mounted = true;
    const ts = Date.now();
    fetch(`/api/clients?ts=${ts}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setImages(Array.isArray(data?.images) && data.images.length > 0 ? data.images : defaults);
      })
      .catch(() => setImages(defaults));
    return () => {
      mounted = false;
    };
  }, []);

  const list = images ?? defaults;
  const track = list.concat(list);
  return (
    <div className="mt-6 relative overflow-hidden min-h-40">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, -800] }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
        className="flex items-center gap-16 opacity-95 hover:[animation-play-state:paused]"
      >
        {track.map((p, i) => (
          <img
            key={`${p.src}-${i}`}
            src={p.src}
            alt={p.alt || "cliente"}
            loading="lazy"
            className="h-32 md:h-36 w-auto object-contain max-w-xs"
            style={{ filter: "drop-shadow(0 0 12px rgba(255,255,255,0.06))" }}
          />
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
}



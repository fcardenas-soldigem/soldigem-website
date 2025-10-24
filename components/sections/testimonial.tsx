"use client";
import { motion } from "framer-motion";

export function TestimonialSection() {
  return (
    <section className="py-24 px-6 md:px-8">
      <motion.blockquote
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center font-display text-4xl md:text-6xl font-semibold text-white/90"
      >
        “El futuro de tu industria empieza aquí.”
      </motion.blockquote>
      <div className="mt-6 text-center text-sm text-white/60"></div>
    </section>
  );
}



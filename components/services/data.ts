export type ServiceSlug =
  | "centros-de-control"
  | "soporte-y-reparaciones"
  | "gestion-de-activos-ti"
  | "procure-smart"
  | "software-factory"
  | "agentes-ia"
  | "ai-analytics"
  | "habilitacion-cloud-gcp";

export const servicesMeta: Record<
  ServiceSlug,
  { title: string; summary: string }
> = {
  "centros-de-control": {
    title: "Centros de Control",
    summary: "Diseño, videowalls, redundancia y monitoreo en tiempo real.",
  },
  "soporte-y-reparaciones": {
    title: "Soporte y Reparaciones",
    summary:
      "Incluye cambio de carcasas HP, Lenovo, Dell; diagnóstico 24–48h.",
  },
  "gestion-de-activos-ti": {
    title: "Gestión de Activos TI",
    summary: "Inventario, lifecycle y optimización de costos.",
  },
  "procure-smart": {
    title: "ProcureSmart",
    summary: "Venta de equipos y periféricos con entregas 24–72h.",
  },
  "software-factory": {
    title: "Software Factory",
    summary: "ERP para pymes, integraciones, QA y CI/CD.",
  },
  "agentes-ia": {
    title: "Agentes de IA",
    summary: "Automatización de flujos, chatbots e IA predictiva.",
  },
  "ai-analytics": {
    title: "AI & Analytics",
    summary: "Dashboards e insights de compras, ventas e inventario.",
  },
  "habilitacion-cloud-gcp": {
    title: "Habilitación Cloud en GCP",
    summary: "Migración, arquitectura, optimización de costos y seguridad.",
  },
};



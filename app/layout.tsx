import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.soldigem.com.pe"),
  title: {
    default: "Soldigem — Tecnología que libera tu negocio | Soluciones TI Perú",
    template: "%s | Soldigem"
  },
  description:
    "Optimizamos la gestión de activos, infraestructura y procesos TI con soluciones inteligentes basadas en datos e inteligencia artificial. Líderes en transformación digital en Perú.",
  keywords: [
    "soluciones TI Perú",
    "transformación digital",
    "gestión de activos TI",
    "infraestructura tecnológica",
    "inteligencia artificial",
    "cloud computing",
    "Google Cloud Platform",
    "software factory",
    "agentes de IA",
    "ProcureSmart",
    "centros de control",
    "data analytics",
    "ciberseguridad",
    "ERP personalizado",
    "consultoría tecnológica",
    "soporte técnico Perú",
    "soluciones empresariales",
    "automatización de procesos",
    "migración cloud",
    "data engineering"
  ],
  authors: [{ name: "Soldigem" }],
  creator: "Soldigem",
  publisher: "Soldigem",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://www.soldigem.com.pe",
    siteName: "Soldigem",
    title: "Soldigem — Tecnología que libera tu negocio",
    description: "Optimizamos la gestión de activos, infraestructura y procesos TI con soluciones inteligentes basadas en datos e inteligencia artificial.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Soldigem - Soluciones tecnológicas"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soldigem — Tecnología que libera tu negocio",
    description: "Optimizamos la gestión de activos, infraestructura y procesos TI con soluciones inteligentes basadas en datos e inteligencia artificial.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Agregar cuando tengas el código
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

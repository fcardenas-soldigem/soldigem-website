import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Soldigem — Tecnología que libera tu negocio",
  description:
    "Optimizamos la gestión de activos, infraestructura y procesos TI con soluciones inteligentes basadas en datos e inteligencia artificial.",
  metadataBase: new URL("https://www.soldigem.com"),
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultSEO = {
  title: "Soldigem — Tecnología que libera tu negocio",
  description:
    "Optimizamos la gestión de activos, infraestructura y procesos TI con soluciones inteligentes basadas en datos e inteligencia artificial.",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://www.soldigem.com",
    siteName: "Soldigem",
  },
  twitter: {
    cardType: "summary_large_image",
  },
};

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

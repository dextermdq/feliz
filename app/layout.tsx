import type { Metadata } from "next";
import { Archivo_Narrow, Inter } from "next/font/google";
import "@/src/styles/globals.css";

const archivo = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Super Mayorista Feliz — Precios Mayoristas Sin Mínimo",
  description: "Compra mayorista en línea sin mínimo de compra. Precios bajos, retiro en el día. Super Mayorista Feliz, Mar del Plata.",
  metadataBase: new URL("https://feliz.mayorista.com.ar"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
      </head>
      <body
        className={`${archivo.variable} ${inter.variable} bg-feliz-gris-100 text-feliz-negro font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

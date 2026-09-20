import Link from "next/link";
import { ArrowDown, MessageCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full h-[420px] md:h-[500px] bg-feliz-negro flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/carrousel/hero-supermercado.jpg')`,
        }}
      />
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-feliz-negro/75" />

      {/* Contenido */}
      <div className="relative max-w-container w-full mx-auto page-margin z-10 flex flex-col items-start justify-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-space-xs px-space-md py-1 bg-feliz-amarillo text-feliz-negro font-label-caps text-label-caps font-bold rounded-full mb-space-sm uppercase tracking-wider">
          <span>🔥</span>
          <span>LISTA DE PRECIOS RENOVADA</span>
        </div>

        {/* Título */}
        <h1 className="font-archivo font-bold text-display-hero md:text-5xl uppercase text-feliz-blanco tracking-tight max-w-3xl leading-none">
          OFERTONES <span className="text-feliz-amarillo">DE LA SEMANA</span>
        </h1>

        {/* Descripción */}
        <p className="font-body-lg text-body-lg text-feliz-gris-100 mt-space-sm max-w-2xl">
          Precios directos de fábrica sin necesidad de comprar por mayorista tradicional. Llevate
          todo lo que tu negocio o tu casa necesitan.
        </p>

        {/* Botones */}
        <div className="mt-space-xl flex flex-wrap items-center gap-space-md">
          <Link
            href="#ofertas-semana"
            className="px-space-xl py-3.5 bg-feliz-rojo text-feliz-blanco font-label-caps text-label-caps font-bold rounded-lg hover:bg-feliz-rojo-oscuro transition-colors tracking-wider uppercase inline-flex items-center gap-space-xs shadow-md"
          >
            <span>VER OFERTAS IMPERDIBLES</span>
            <ArrowDown className="w-5 h-5" />
          </Link>
          <a
            href="https://wa.me/5492235550199"
            target="_blank"
            rel="noopener noreferrer"
            className="px-space-lg py-3.5 bg-feliz-blanco text-feliz-negro font-label-caps text-label-caps font-bold rounded-lg hover:bg-feliz-gris-100 transition-colors tracking-wider uppercase inline-flex items-center gap-space-xs shadow-sm"
          >
            <MessageCircle className="w-5 h-5 text-feliz-rojo" />
            <span>PEDIR LISTA COMPLETA</span>
          </a>
        </div>
      </div>
    </section>
  );
}

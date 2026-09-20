"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    titulo: "Sin mínimo de compra",
    subtitulo: "Compra 1 unidad o 1000. Tú decides.",
    bg: "bg-gradient-to-r from-feliz-rojo to-feliz-rojo-oscuro",
    cta: "Empezá ahora",
  },
  {
    id: 2,
    titulo: "Precios mayoristas",
    subtitulo: "Los mejores precios de Mar del Plata.",
    bg: "bg-gradient-to-r from-feliz-negro to-feliz-gris-900",
    cta: "Ver ofertas",
  },
  {
    id: 3,
    titulo: "Retiro en el día",
    subtitulo: "Compra por la mañana, retira por la tarde.",
    bg: "bg-gradient-to-r from-feliz-amarillo via-yellow-400 to-feliz-amarillo",
    cta: "Cómo comprar",
    ctaText: "text-feliz-negro",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, [autoplay]);

  const prev = () => {
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
    setAutoplay(false);
  };

  const next = () => {
    setCurrent((p) => (p + 1) % slides.length);
    setAutoplay(false);
  };

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] overflow-hidden rounded-lg md:rounded-2xl">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 ${slide.bg} transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-full flex flex-col items-center justify-center page-margin text-center">
            <h2 className="text-display-hero font-archivo font-bold text-feliz-blanco mb-space-sm leading-tight">
              {slide.titulo}
            </h2>
            <p className={`text-body-lg mb-space-xl ${
              slide.ctaText || "text-feliz-gris-100"
            }`}>
              {slide.subtitulo}
            </p>
            <button className="px-space-lg py-space-sm bg-feliz-blanco text-feliz-rojo font-semibold rounded-lg hover:bg-feliz-gris-100 transition-colors">
              {slide.cta}
            </button>
          </div>
        </div>
      ))}

      {/* Controles */}
      <button
        onClick={prev}
        className="absolute left-margin top-1/2 -translate-y-1/2 z-10 bg-feliz-blanco/80 hover:bg-feliz-blanco p-2 rounded-full transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6 text-feliz-negro" />
      </button>
      <button
        onClick={next}
        className="absolute right-margin top-1/2 -translate-y-1/2 z-10 bg-feliz-blanco/80 hover:bg-feliz-blanco p-2 rounded-full transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6 text-feliz-negro" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrent(idx);
              setAutoplay(false);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === current
                ? "bg-feliz-blanco w-8"
                : "bg-feliz-blanco/50 hover:bg-feliz-blanco/70"
            }`}
            aria-label={`Ir a slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

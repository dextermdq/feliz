'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const TOPBAR_MESSAGES = [
  'SIN MÍNIMO DE COMPRA',
  'PRECIOS MAYORISTAS PARA TODOS',
  'RETIRÁ EN ALIÓ 3232 — MAR DEL PLATA',
];

export function TopBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Rotar mensajes cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TOPBAR_MESSAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-feliz-amarillo h-[36px] flex items-center justify-between px-gutter">
      {/* Carrusel de 3 mensajes — desktop muestra los 3, mobile alterna */}
      <div className="flex-1 flex gap-space-lg overflow-hidden">
        {/* Desktop: mostrar los 3 */}
        <div className="hidden md:flex gap-space-lg flex-1">
          {TOPBAR_MESSAGES.map((msg, idx) => (
            <div
              key={idx}
              className="text-feliz-negro font-archivo font-bold text-body-sm flex items-center whitespace-nowrap"
            >
              {msg}
            </div>
          ))}
        </div>

        {/* Mobile: carrusel alternado */}
        <div className="md:hidden flex-1 flex items-center">
          <div
            className="text-feliz-negro font-archivo font-bold text-body-sm transition-opacity duration-500"
            key={`msg-${activeIndex}`}
          >
            {TOPBAR_MESSAGES[activeIndex]}
          </div>
        </div>
      </div>

      {/* Links a la derecha */}
      <div className="flex gap-space-lg ml-space-lg items-center">
        <Link
          href="#"
          className="text-feliz-negro font-inter text-body-sm font-medium hover:underline hidden sm:block"
        >
          Mis pedidos
        </Link>
        <span className="hidden sm:block text-feliz-negro text-body-sm">|</span>
        <Link
          href="#"
          className="text-feliz-negro font-inter text-body-sm font-medium hover:underline"
        >
          Ayuda
        </Link>
      </div>
    </div>
  );
}

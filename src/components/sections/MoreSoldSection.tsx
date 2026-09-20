'use client';

import { useState } from "react";
import { ShoppingCart, TrendingUp } from "lucide-react";
import type { Product } from "@/src/types";

interface MoreSoldSectionProps {
  productos: Product[];
}

export function MoreSoldSection({ productos }: MoreSoldSectionProps) {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    productos.reduce((acc, p) => ({ ...acc, [p.id]: 1 }), {})
  );

  const handleQuantityChange = (productId: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + delta),
    }));
  };

  if (!productos.length) return null;

  return (
    <section>
      <div className="flex items-center justify-between mb-space-lg">
        <div className="flex flex-col">
          <div className="flex items-center gap-space-xs">
            <TrendingUp className="w-8 h-8 text-feliz-rojo" />
            <h2 className="font-headline-lg text-headline-lg text-feliz-negro uppercase tracking-tight">
              LOS MÁS VENDIDOS
            </h2>
          </div>
          <p className="font-body-md text-body-md text-feliz-gris-500">
            Los básicos que nunca pueden faltar en tu despensa o negocio.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-space-xs">
          <span className="font-label-caps text-label-caps text-feliz-gris-500">
            8 de {productos.length} artículos top
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {productos.slice(0, 8).map((product) => (
          <div
            key={product.id}
            className="bg-feliz-blanco rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
          >
            {/* Badge */}
            <span className="absolute top-space-sm left-space-sm z-10 px-2.5 py-0.5 bg-feliz-amarillo text-feliz-negro font-label-badge text-label-badge font-bold rounded-full shadow-sm">
              TOP VENTAS
            </span>

            {/* Imagen */}
            <div className="relative w-full aspect-square mb-space-sm rounded-lg overflow-hidden bg-feliz-gris-100 flex items-center justify-center p-2">
              <img
                src={product.imagenes[0] || ""}
                alt={product.nombre}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col flex-grow">
              <span className="font-body-sm text-body-sm text-feliz-gris-500 uppercase tracking-wider font-semibold">
                {product.marca}
              </span>
              <h3 className="font-headline-md text-headline-md text-feliz-negro leading-snug line-clamp-2 mt-0.5">
                {product.nombre}
              </h3>
              <span className="inline-block mt-space-xs font-label-badge text-label-badge text-feliz-negro bg-feliz-gris-100 px-2 py-0.5 rounded font-semibold w-fit text-xs">
                {product.unidadVenta} x {product.unidadesPorBulto}
              </span>

              {/* Precio */}
              <div className="mt-space-md">
                <span className="font-price-xl text-price-xl text-feliz-rojo font-bold leading-none">
                  $ {(product.precioMayorista / 100).toFixed(0)}
                </span>
                <div className="font-body-sm text-body-sm text-feliz-gris-500 mt-0.5">
                  $ {(product.precioMayorista / 100).toFixed(0)} x un. / ${" "}
                  {(
                    (product.precioMayorista * product.unidadesPorBulto) /
                    100
                  ).toFixed(0)}{" "}
                  x {product.unidadVenta}
                </div>
              </div>
            </div>

            {/* Selector de cantidad + Agregar */}
            <div className="mt-space-md flex flex-col gap-space-xs">
              <div className="flex items-center rounded-lg bg-feliz-gris-100 p-1 w-full justify-between">
                <button
                  onClick={() => handleQuantityChange(product.id, -1)}
                  className="w-8 h-8 rounded bg-feliz-blanco text-feliz-negro font-bold flex items-center justify-center hover:bg-feliz-gris-200 transition-colors"
                >
                  −
                </button>
                <span className="font-headline-md text-headline-md font-bold px-2">
                  {quantities[product.id] || 1}
                </span>
                <button
                  onClick={() => handleQuantityChange(product.id, 1)}
                  className="w-8 h-8 rounded bg-feliz-blanco text-feliz-negro font-bold flex items-center justify-center hover:bg-feliz-gris-200 transition-colors"
                >
                  +
                </button>
              </div>
              <button className="w-full py-2.5 bg-feliz-rojo text-feliz-blanco font-label-caps text-label-caps font-bold rounded-lg hover:bg-feliz-rojo-oscuro transition-colors flex items-center justify-center gap-1">
                <ShoppingCart className="w-4 h-4" />
                <span>AGREGAR</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

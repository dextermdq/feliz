import Link from "next/link";
import { Package } from "lucide-react";

export function CTASection() {
  return (
    <section className="w-full bg-feliz-rojo text-feliz-blanco py-space-2xl my-space-lg shadow-sm">
      <div className="max-w-container mx-auto page-margin flex flex-col md:flex-row items-center justify-between gap-space-lg">
        <div className="flex flex-col max-w-2xl text-center md:text-left">
          <span className="font-label-caps text-label-caps uppercase text-feliz-amarillo font-bold tracking-widest mb-space-xs">
            VENTA DIRECTA AL PÚBLICO Y COMERCIOS
          </span>
          <h2 className="font-headline-lg text-headline-lg font-bold uppercase leading-tight text-feliz-blanco">
            PRECIOS DE MAYORISTA, SIN MÍNIMO DE COMPRA
          </h2>
          <p className="font-body-lg text-body-lg text-feliz-blanco mt-space-xs">
            Accedé a la misma tarifa que un almacén o distribuidora. Te llevás una unidad o un
            pallet entero al precio más bajo de Mar del Plata.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Link
            href="/categorias"
            className="px-space-xl py-4 bg-feliz-amarillo text-feliz-negro font-label-caps text-label-caps font-bold rounded-lg hover:bg-yellow-300 transition-colors uppercase tracking-wider inline-flex items-center gap-space-xs shadow-md"
          >
            <Package className="w-6 h-6" />
            <span>VER CATÁLOGO COMPLETO</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

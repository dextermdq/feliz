import Link from "next/link";
import { categorias } from "@/src/data/categorias";

export function CategoriesGrid() {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-space-lg">
        <div className="flex items-center gap-space-xs">
          <div className="w-2.5 h-7 bg-feliz-rojo rounded-full" />
          <h2 className="font-archivo font-bold text-headline-lg text-feliz-negro uppercase tracking-tight">
            CATEGORÍAS MAYORISTAS
          </h2>
        </div>
        <Link
          href="/categorias"
          className="font-label-caps text-label-caps font-bold text-feliz-rojo hover:underline tracking-wider uppercase inline-flex items-center gap-1"
        >
          <span>TODAS LAS CATEGORÍAS</span>
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
        {categorias.map((cat) => (
          <Link key={cat.id} href={`/c/${cat.slug}`} className="group">
            <div className="relative h-44 rounded-xl overflow-hidden shadow-sm bg-feliz-negro flex items-end p-space-md hover:shadow-md transition-shadow group">
              {/* Imagen de fondo */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url('${cat.imagen}')` }}
              />
              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-feliz-negro/60 group-hover:bg-feliz-negro/50 transition-colors" />

              {/* Contenido */}
              <div className="relative z-10">
                <span className="font-headline-md text-headline-md font-bold text-feliz-blanco uppercase tracking-wide group-hover:text-feliz-amarillo transition-colors">
                  {cat.nombre}
                </span>
                <p className="font-body-sm text-body-sm text-feliz-gris-100">
                  +{cat.cantidadProductos} productos
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

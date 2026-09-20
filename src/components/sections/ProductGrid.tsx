import Link from "next/link";
import { ProductCard } from "@/src/components/product";
import type { Product } from "@/src/types";

interface ProductGridProps {
  titulo: string;
  descripcion?: string;
  productos: Product[];
  verTodo?: {
    texto: string;
    href: string;
  };
}

export function ProductGrid({
  titulo,
  descripcion,
  productos,
  verTodo,
}: ProductGridProps) {
  if (productos.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-space-lg">
        <div>
          <h2 className="text-2xl md:text-3xl font-archivo font-bold text-feliz-negro">
            {titulo}
          </h2>
          {descripcion && (
            <p className="text-body-sm text-feliz-gris-500 mt-1">
              {descripcion}
            </p>
          )}
        </div>
        {verTodo && (
          <Link
            href={verTodo.href}
            className="text-feliz-rojo font-semibold text-sm hover:underline whitespace-nowrap"
          >
            {verTodo.texto} →
          </Link>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {productos.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

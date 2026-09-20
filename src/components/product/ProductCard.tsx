'use client';

import { useState } from 'react';
import { Product } from '@/src/types';
import { Badge } from '@/src/components/common/Badge';
import { PriceDisplay } from './PriceDisplay';
import { QuantitySelector } from './QuantitySelector';

interface ProductCardProps {
  product: Product;
  onAdd?: (qty: number) => void;
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const isOutOfStock = product.stock === 'sin-stock';
  const porUnidad = Math.ceil(product.precioMayorista / product.unidadesPorBulto);

  const handleAddClick = () => {
    if (!isOutOfStock && onAdd) {
      onAdd(quantity);
      setQuantity(1);
    }
  };

  return (
    <div
      className={`
        bg-feliz-blanco rounded-3xl shadow-soft
        hover:shadow-md transition-shadow duration-200
        flex flex-col h-full overflow-hidden
        ${isOutOfStock ? 'opacity-60' : ''}
      `}
    >
      {/* Imagen */}
      <div className="relative w-full aspect-square bg-feliz-blanco flex items-center justify-center overflow-hidden">
        <img
          src={product.imagenes[0] || ''}
          alt={product.nombre}
          className="w-full h-full object-contain"
        />

        {/* Badges */}
        {(product.enOferta || product.destacado) && (
          <div className="absolute top-space-md left-space-md flex flex-col gap-space-xs">
            {product.enOferta && <Badge variant="oferta" text="OFERTA" />}
            {product.destacado && <Badge variant="destacado" text="DESTACADO" />}
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-space-md p-space-lg flex-grow">
        {/* Marca */}
        <p className="text-body-sm text-feliz-gris-500 font-medium">
          {product.marca}
        </p>

        {/* Nombre */}
        <h3 className="text-body-lg font-bold text-feliz-negro line-clamp-2">
          {product.nombre}
        </h3>

        {/* Bulto */}
        <p className="text-body-sm text-feliz-gris-500">
          Bulto x {product.unidadesPorBulto} u.
        </p>

        {/* Precio */}
        <PriceDisplay
          actual={product.precioMayorista}
          anterior={product.precioAnterior}
          porUnidad={porUnidad}
        />

        {/* Selector cantidad + Botón */}
        {!isOutOfStock ? (
          <div className="flex flex-col gap-space-md mt-auto">
            <QuantitySelector
              qty={quantity}
              onChange={setQuantity}
              max={product.stock !== 'ultimas-unidades' ? undefined : 5}
            />
            <button
              onClick={handleAddClick}
              className="
                w-full py-space-md bg-feliz-rojo text-feliz-blanco
                font-bold text-body-md rounded-lg
                hover:bg-feliz-rojo-oscuro transition-colors
              "
            >
              AGREGAR
            </button>
          </div>
        ) : (
          <div className="mt-auto pt-space-md border-t border-feliz-gris-100">
            <a
              href="#"
              className="
                w-full block text-center py-space-md text-feliz-rojo
                font-bold text-body-md hover:underline
              "
            >
              Avisame
            </a>
          </div>
        )}
      </div>

      {/* Footer con marca - sutil */}
      <div className="border-t border-feliz-gris-100 px-space-lg py-space-sm">
        <p className="text-xs text-feliz-gris-500 text-center font-medium">
          {product.marca}
        </p>
      </div>
    </div>
  );
}

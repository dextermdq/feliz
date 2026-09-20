'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/src/types/index';

interface MegaMenuProps {
  categorias: Category[];
  onClose: () => void;
}

export function MegaMenu({ categorias, onClose }: MegaMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    categorias[0] || null
  );

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Desktop: Panel fullscreen */}
      <div className="hidden md:flex fixed top-[calc(36px+64px+64px)] left-0 right-0 bg-feliz-blanco shadow-md z-50 border-t border-feliz-gris-100">
        <div className="max-w-container mx-auto w-full flex">
          {/* Columna izq: Categorías */}
          <div className="w-64 bg-feliz-gris-100 border-r border-feliz-gris-500">
            <nav className="flex flex-col">
              {categorias.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-space-lg py-space-md text-left border-b border-feliz-gris-500 transition-colors ${
                    selectedCategory?.id === cat.id
                      ? 'bg-feliz-negro text-feliz-amarillo font-bold'
                      : 'text-feliz-negro hover:bg-feliz-gris-500 hover:bg-opacity-20'
                  }`}
                >
                  <div className="font-archivo font-bold text-body-md">
                    {cat.nombre}
                  </div>
                  <div className="text-body-sm text-feliz-gris-500">
                    {cat.cantidadProductos} productos
                  </div>
                </button>
              ))}
            </nav>
          </div>

          {/* Columna dcha: Subcategorías + imagen */}
          {selectedCategory && (
            <div className="flex-1 p-space-xl flex gap-space-xl">
              {/* Subcategorías en 3-4 columnas */}
              <div className="flex-1 grid grid-cols-3 gap-space-lg">
                {selectedCategory.subcategorias.map((subcat) => (
                  <Link
                    key={subcat.id}
                    href={`/categorias/${selectedCategory.slug}/${subcat.slug}`}
                    className="group"
                    onClick={onClose}
                  >
                    <div className="text-body-md font-bold text-feliz-negro group-hover:text-feliz-rojo transition-colors">
                      {subcat.nombre}
                    </div>
                    <div className="text-body-sm text-feliz-gris-500">
                      Ver productos →
                    </div>
                  </Link>
                ))}
              </div>

              {/* Imagen categoría */}
              {selectedCategory.imagen && (
                <div className="w-64 flex-shrink-0">
                  <Image
                    src={selectedCategory.imagen}
                    alt={selectedCategory.nombre}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile: Drawer lateral */}
      <div className="md:hidden fixed left-0 top-0 bottom-0 w-80 bg-feliz-blanco shadow-md z-50 overflow-y-auto">
        {/* Header del drawer */}
        <div className="sticky top-0 bg-feliz-negro text-feliz-blanco px-space-lg py-space-md flex items-center justify-between border-b border-feliz-gris-900">
          <h2 className="font-archivo font-bold text-headline-md">CATEGORÍAS</h2>
          <button
            onClick={onClose}
            className="p-space-sm hover:opacity-75 transition-opacity"
            aria-label="Cerrar menú"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Categorías con acordeones */}
        <nav className="divide-y divide-feliz-gris-100">
          {categorias.map((cat) => (
            <details
              key={cat.id}
              className="group cursor-pointer"
              onToggle={(e) => {
                if ((e.target as HTMLDetailsElement).open) {
                  setSelectedCategory(cat);
                }
              }}
            >
              <summary className="px-space-lg py-space-md bg-hover:bg-feliz-gris-100 flex items-center justify-between select-none">
                <div className="flex-1">
                  <div className="font-archivo font-bold text-body-md text-feliz-negro">
                    {cat.nombre}
                  </div>
                  <div className="text-body-sm text-feliz-gris-500">
                    {cat.cantidadProductos} productos
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-feliz-rojo group-open:rotate-180 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>

              {/* Subcategorías */}
              <nav className="bg-feliz-gris-100 divide-y divide-feliz-gris-500">
                {cat.subcategorias.map((subcat) => (
                  <Link
                    key={subcat.id}
                    href={`/categorias/${cat.slug}/${subcat.slug}`}
                    className="block px-space-lg py-space-md text-feliz-negro hover:bg-feliz-amarillo transition-colors"
                    onClick={onClose}
                  >
                    <div className="font-inter text-body-md">
                      {subcat.nombre}
                    </div>
                  </Link>
                ))}
              </nav>
            </details>
          ))}
        </nav>
      </div>
    </>
  );
}

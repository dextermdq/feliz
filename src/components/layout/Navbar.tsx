'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MegaMenu } from './MegaMenu';
import { Category } from '@/src/types/index';

interface NavbarProps {
  categorias?: Category[];
  onMegaMenuOpen?: (isOpen: boolean) => void;
}

export function Navbar({ categorias = [], onMegaMenuOpen }: NavbarProps) {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const handleToggleMegaMenu = () => {
    const newState = !megaMenuOpen;
    setMegaMenuOpen(newState);
    onMegaMenuOpen?.(newState);
  };

  return (
    <>
      <nav className="bg-feliz-negro border-b border-feliz-gris-900 sticky top-[calc(100vh-36px)] md:relative md:top-0 z-30">
        <div className="max-w-container mx-auto px-gutter">
          <div className="flex items-center gap-space-lg h-16 overflow-x-auto md:overflow-visible">
            {/* CATEGORÍAS — abre mega menú */}
            <button
              onClick={handleToggleMegaMenu}
              className="flex items-center gap-space-sm text-feliz-amarillo hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-archivo font-bold text-body-md">
                CATEGORÍAS
              </span>
            </button>

            <div className="hidden md:flex items-center gap-space-lg flex-1">
              {/* SIN MÍNIMO */}
              <Link
                href="/"
                className="flex items-center gap-space-sm text-feliz-amarillo hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                <span className="font-archivo font-bold text-body-md">
                  SIN MÍNIMO DE COMPRA
                </span>
              </Link>

              {/* TODOS LOS MEDIOS DE PAGO */}
              <Link
                href="/como-comprar"
                className="flex items-center gap-space-sm text-feliz-amarillo hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <span className="font-archivo font-bold text-body-md">
                  TODOS LOS MEDIOS DE PAGO
                </span>
              </Link>

              {/* TE ARMAMOS EL PEDIDO */}
              <a
                href="https://wa.me/5492235550199"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-space-sm text-feliz-amarillo hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378l-.36-.187A9.879 9.879 0 0012.004 2c5.528 0 10.037 4.467 10.037 9.963 0 1.896-.438 3.729-1.222 5.373l-.196.392a9.86 9.86 0 01-3.606 3.606l-.392.196c-1.644.784-3.477 1.222-5.373 1.222-5.496 0-9.963-4.509-9.963-10.037 0-1.897.438-3.729 1.222-5.373l.187-.36A9.87 9.87 0 016.51 3.051 9.879 9.879 0 0112.051 2" />
                </svg>
                <span className="font-archivo font-bold text-body-md">
                  TE ARMAMOS EL PEDIDO
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mega Menu */}
      {megaMenuOpen && (
        <MegaMenu
          categorias={categorias}
          onClose={() => {
            setMegaMenuOpen(false);
            onMegaMenuOpen?.(false);
          }}
        />
      )}
    </>
  );
}

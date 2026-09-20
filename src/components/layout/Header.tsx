'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';

interface HeaderProps {
  cartCount?: number;
}

export function Header({ cartCount = 0 }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-subtle">
      {/* TOP BAR AMARILLO */}
      <div className="h-9 bg-feliz-amarillo text-feliz-negro flex items-center justify-center page-margin font-label-caps text-label-caps font-bold tracking-wider text-center select-none overflow-hidden text-ellipsis whitespace-nowrap">
        SIN MÍNIMO DE COMPRA · PRECIOS MAYORISTAS PARA TODOS · RETIRÁ EN ALIÓ 3232, MAR DEL PLATA
      </div>

      {/* HEADER NEGRO */}
      <div className="h-20 bg-feliz-negro page-margin">
        <div className="max-w-container h-full mx-auto flex items-center justify-between gap-gutter">
          {/* LOGO + MARCA */}
          <Link href="/" className="flex items-center gap-space-sm flex-shrink-0">
            <Image
              src="/logo.jpg"
              alt="FELIZ mayorista"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col leading-none hidden sm:block">
              <span className="font-archivo font-bold text-headline-md text-feliz-blanco">SUPER MAYORISTA</span>
              <span className="font-archivo font-bold text-headline-md text-feliz-amarillo">
                FELIZ <span className="text-feliz-rojo">•</span>
              </span>
            </div>
          </Link>

          {/* BÚSQUEDA */}
          <div className="flex-1 max-w-2xl hidden md:block mx-space-md">
            <div className="relative flex items-center w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="¿Qué estás buscando?"
                className="w-full h-11 pl-space-lg pr-12 rounded-lg bg-feliz-blanco text-feliz-negro font-body-md text-body-md placeholder:text-feliz-gris-500 focus:outline-none focus:ring-2 focus:ring-feliz-amarillo border border-feliz-gris-100"
              />
              <button className="absolute right-1 w-9 h-9 flex items-center justify-center rounded-lg bg-feliz-rojo text-feliz-blanco hover:bg-feliz-rojo-oscuro transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ACCIONES DERECHA */}
          <div className="flex items-center gap-space-lg flex-shrink-0">
            {/* INICIAR SESIÓN */}
            <Link
              href="/ingresar"
              className="flex items-center gap-space-xs text-feliz-blanco hover:text-feliz-amarillo transition-colors font-label-caps text-label-caps"
            >
              <User className="w-6 h-6 text-feliz-amarillo" />
              <span className="hidden lg:inline">INICIAR SESIÓN</span>
            </Link>

            {/* CARRITO */}
            <Link
              href="/carrito"
              className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg bg-feliz-gris-900/20 hover:bg-feliz-gris-900/30 transition-colors text-feliz-blanco relative"
            >
              <ShoppingCart className="w-6 h-6 text-feliz-amarillo" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-feliz-rojo text-feliz-blanco font-label-badge text-label-badge font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center border-2 border-feliz-negro">
                  {cartCount}
                </span>
              )}
              <div className="hidden md:flex flex-col leading-tight">
                <span className="font-label-caps text-label-caps text-feliz-gris-500">MI CARRITO</span>
                <span className="font-label-badge text-label-badge text-feliz-amarillo font-bold">$ 0</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="h-12 bg-feliz-negro border-t border-feliz-gris-900/20 page-margin">
        <div className="max-w-container h-full mx-auto flex items-center justify-between">
          <nav className="flex items-center gap-space-sm sm:gap-space-md w-full overflow-x-auto select-none">
            <Link
              href="/categorias"
              className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg text-feliz-blanco hover:text-feliz-amarillo font-label-caps text-label-caps transition-colors whitespace-nowrap"
            >
              <Menu className="w-5 h-5 text-feliz-amarillo" />
              <span>CATEGORÍAS</span>
            </Link>
            <Link
              href="/sin-minimo"
              className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg text-feliz-blanco hover:text-feliz-amarillo font-label-caps text-label-caps transition-colors whitespace-nowrap"
            >
              <span>✓</span>
              <span>SIN MÍNIMO DE COMPRA</span>
            </Link>
            <Link
              href="/medios-pago"
              className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg text-feliz-blanco hover:text-feliz-amarillo font-label-caps text-label-caps transition-colors whitespace-nowrap"
            >
              <span>💳</span>
              <span>TODOS LOS MEDIOS DE PAGO</span>
            </Link>
            <Link
              href="/arma-tu-pedido"
              className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg text-feliz-blanco hover:text-feliz-amarillo font-label-caps text-label-caps transition-colors whitespace-nowrap"
            >
              <span>📦</span>
              <span>TE ARMAMOS EL PEDIDO</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

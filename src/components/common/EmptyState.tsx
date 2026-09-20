'use client';

import Link from 'next/link';

interface EmptyStateAction {
  label: string;
  href: string;
}

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: EmptyStateAction;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-space-2xl px-gutter text-center">
      {/* Icono placeholder */}
      <div className="mb-space-xl">
        <svg
          className="w-16 h-16 text-feliz-gris-500 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      </div>

      {/* Título */}
      <h3 className="text-headline-md font-bold text-feliz-negro mb-space-sm">
        {title}
      </h3>

      {/* Descripción */}
      {description && (
        <p className="text-body-md text-feliz-gris-500 mb-space-lg max-w-sm">
          {description}
        </p>
      )}

      {/* Botón de acción */}
      {action && (
        <Link
          href={action.href}
          className="
            inline-block px-space-xl py-space-md bg-feliz-rojo text-feliz-blanco
            font-bold text-body-md rounded-lg hover:bg-feliz-rojo-oscuro
            transition-colors
          "
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}

'use client';

import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-space-sm text-body-sm text-feliz-gris-500 overflow-x-auto pb-space-xs"
    >
      {items.map((item, idx) => (
        <div key={`${item.label}-${idx}`} className="flex items-center gap-space-sm whitespace-nowrap">
          {item.href ? (
            <Link
              href={item.href}
              className="text-feliz-rojo hover:underline transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-feliz-negro font-medium">{item.label}</span>
          )}
          {idx < items.length - 1 && <span className="text-feliz-gris-500">/</span>}
        </div>
      ))}
    </nav>
  );
}

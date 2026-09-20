'use client';

interface BadgeProps {
  variant: 'oferta' | 'destacado' | 'stock' | 'nuevo';
  text: string;
}

export function Badge({ variant, text }: BadgeProps) {
  const variantStyles = {
    oferta: 'bg-feliz-rojo text-feliz-blanco',
    destacado: 'bg-feliz-amarillo text-feliz-negro',
    stock: 'bg-feliz-verde text-feliz-blanco',
    nuevo: 'bg-blue-500 text-feliz-blanco',
  };

  return (
    <span
      className={`
        inline-block px-space-md py-space-xs rounded-full
        text-label-badge font-bold
        ${variantStyles[variant]}
      `}
    >
      {text}
    </span>
  );
}

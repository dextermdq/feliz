'use client';

interface PriceDisplayProps {
  actual: number;
  anterior?: number;
  porUnidad?: number;
}

export function PriceDisplay({ actual, anterior, porUnidad }: PriceDisplayProps) {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div className="flex flex-col gap-space-sm">
      <div className="flex items-center gap-space-md">
        <span className="text-price-lg font-bold text-feliz-rojo">
          {formatter.format(actual)}
        </span>
        {anterior && anterior > actual && (
          <span className="text-body-sm line-through text-feliz-gris-500">
            {formatter.format(anterior)}
          </span>
        )}
      </div>
      {porUnidad !== undefined && (
        <span className="text-body-sm text-feliz-gris-500">
          $ {porUnidad.toLocaleString('es-AR')} por unidad
        </span>
      )}
    </div>
  );
}

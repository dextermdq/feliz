'use client';

interface QuantitySelectorProps {
  qty: number;
  onChange: (n: number) => void;
  max?: number;
}

export function QuantitySelector({ qty, onChange, max }: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (qty > 1) {
      onChange(qty - 1);
    }
  };

  const handleIncrement = () => {
    if (!max || qty < max) {
      onChange(qty + 1);
    }
  };

  return (
    <div className="flex items-center gap-space-md">
      <button
        onClick={handleDecrement}
        disabled={qty <= 1}
        aria-label="Restar cantidad"
        className="
          w-11 h-11 flex items-center justify-center
          border border-feliz-gris-500 rounded-lg
          text-feliz-gris-500 font-bold
          hover:bg-feliz-gris-100 disabled:opacity-50 disabled:cursor-not-allowed
          transition-colors
        "
      >
        −
      </button>
      <span className="text-body-md font-semibold min-w-8 text-center">
        {qty}
      </span>
      <button
        onClick={handleIncrement}
        disabled={max !== undefined && qty >= max}
        aria-label="Sumar cantidad"
        className="
          w-11 h-11 flex items-center justify-center
          border border-feliz-gris-500 rounded-lg
          text-feliz-gris-500 font-bold
          hover:bg-feliz-gris-100 disabled:opacity-50 disabled:cursor-not-allowed
          transition-colors
        "
      >
        +
      </button>
    </div>
  );
}

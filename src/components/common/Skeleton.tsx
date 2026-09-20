'use client';

interface SkeletonProps {
  variant: 'card' | 'text' | 'line';
  count?: number;
}

export function Skeleton({ variant, count = 1 }: SkeletonProps) {
  const variantClasses = {
    card: 'w-full aspect-square rounded-3xl',
    text: 'w-3/4 h-6 rounded-lg',
    line: 'w-full h-4 rounded-lg',
  };

  return (
    <div className="space-y-space-md">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className={`
            ${variantClasses[variant]}
            bg-gradient-to-r from-feliz-gris-100 via-feliz-blanco to-feliz-gris-100
            bg-[length:200%_100%] animate-pulse
          `}
        />
      ))}
    </div>
  );
}

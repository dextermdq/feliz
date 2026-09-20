const benefits = [
  {
    icon: "shopping_basket",
    titulo: "Sin mínimo de compra",
    descripcion: "Llevás justo lo que necesitás, desde una unidad.",
    bgColor: "bg-feliz-rojo",
    textColor: "text-feliz-blanco",
  },
  {
    icon: "price_check",
    titulo: "Precios mayoristas reales",
    descripcion: "Descuentos agresivos por bulto cerrado y por unidad.",
    bgColor: "bg-feliz-amarillo",
    textColor: "text-feliz-negro",
  },
  {
    icon: "bolt",
    titulo: "Retiro en el día",
    descripcion: "Directo en nuestro local mayorista de calle Alió.",
    bgColor: "bg-feliz-negro",
    textColor: "text-feliz-amarillo",
  },
  {
    icon: "support_agent",
    titulo: "Armamos tu pedido",
    descripcion: "Mandanos tu lista por WhatsApp y lo preparamos.",
    bgColor: "bg-[#25D366]",
    textColor: "text-feliz-blanco",
  },
];

export function BenefitsStrip() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
      {benefits.map((benefit, idx) => (
        <div
          key={idx}
          className="flex items-start gap-space-md p-space-sm rounded-xl bg-surface-container-low/50"
        >
          <div className={`w-12 h-12 rounded-xl ${benefit.bgColor} ${benefit.textColor} flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5`}>
            <span className="material-symbols-outlined text-2xl">
              {benefit.icon}
            </span>
          </div>
          <div className="flex flex-col pt-0.5">
            <span className="font-headline-md text-headline-md text-feliz-negro leading-tight font-bold">
              {benefit.titulo}
            </span>
            <span className="font-body-sm text-body-sm text-feliz-gris-500 mt-0.5">
              {benefit.descripcion}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function HowToBuySection() {
  const steps = [
    {
      number: 1,
      titulo: "Elegí tus productos",
      descripcion:
        "Explorá el catálogo mayorista y agregá lo que necesites al carrito, o simplemente pasanos una foto o texto con tu lista de compras.",
    },
    {
      number: 2,
      titulo: "Armá el pedido",
      descripcion:
        "Confirmá tu carrito online o envianos el pedido directo por WhatsApp. Un asesor te confirma stock inmediato y el monto total final sin sorpresas.",
    },
    {
      number: 3,
      titulo: "Retiralo o coordinamos envío",
      descripcion:
        "Retirás gratis en el acto en nuestra sucursal de Alió 3232 con carga en tu auto, o te enviamos el flete coordinado en todo Mar del Plata.",
    },
  ];

  return (
    <section className="w-full bg-feliz-blanco py-space-2xl my-space-lg shadow-sm">
      <div className="max-w-container mx-auto page-margin">
        <div className="text-center max-w-xl mx-auto mb-space-2xl">
          <span className="font-label-caps text-label-caps text-feliz-rojo font-bold uppercase tracking-wider">
            CÓMO COMPRAR EN FELIZ
          </span>
          <h2 className="font-headline-lg text-headline-lg text-feliz-negro uppercase tracking-tight mt-1">
            SÚPER FÁCIL Y AL TOQUE
          </h2>
          <p className="font-body-md text-body-md text-feliz-gris-500 mt-space-xs">
            Comprás como más te quede cómodo: por la web, por WhatsApp o en la sucursal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center p-space-lg rounded-xl bg-feliz-gris-100"
            >
              <div className="w-16 h-16 rounded-full bg-feliz-amarillo text-feliz-negro font-headline-lg text-headline-lg font-bold flex items-center justify-center shadow-md mb-space-md">
                {step.number}
              </div>
              <h3 className="font-headline-md text-headline-md text-feliz-negro uppercase font-bold">
                {step.titulo}
              </h3>
              <p className="font-body-md text-body-md text-feliz-gris-500 mt-space-xs">
                {step.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

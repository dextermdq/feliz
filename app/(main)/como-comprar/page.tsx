import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo Comprar | Super Mayorista Feliz",
  description: "Guía paso a paso: cómo comprar en Super Mayorista Feliz. Formas de pago, envíos y horarios.",
};

export default function ComoComprar() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-feliz-rojo text-feliz-blanco py-section">
        <div className="max-w-container mx-auto page-margin">
          <h1 className="text-display-hero md:text-display-hero-mobile font-archivo font-bold mb-space-lg">
            Cómo Comprar
          </h1>
          <p className="text-body-lg max-w-2xl">
            Cinco sencillos pasos para hacer tu primer pedido en Super Mayorista Feliz.
          </p>
        </div>
      </section>

      {/* Pasos */}
      <section className="py-section">
        <div className="max-w-container mx-auto page-margin">
          <h2 className="text-headline-lg md:text-headline-lg-mobile text-feliz-negro mb-space-2xl font-archivo font-bold text-center">
            5 Pasos Simples
          </h2>
          <div className="space-y-space-lg max-w-3xl mx-auto">
            {/* Paso 1 */}
            <div className="flex gap-space-lg">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-feliz-rojo text-feliz-blanco font-archivo font-bold text-headline-md">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-headline-md text-feliz-negro font-archivo font-bold mb-space-sm">
                  Elegí Productos
                </h3>
                <p className="text-body-md text-feliz-gris-500">
                  Navegá nuestro catálogo y encuentra lo que necesitas. Desde 1 unidad, sin mínimos.
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex gap-space-lg">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-feliz-rojo text-feliz-blanco font-archivo font-bold text-headline-md">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-headline-md text-feliz-negro font-archivo font-bold mb-space-sm">
                  Armá tu Carrito
                </h3>
                <p className="text-body-md text-feliz-gris-500">
                  Añade los productos al carrito. Puedes revisar y modificar en cualquier momento.
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="flex gap-space-lg">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-feliz-rojo text-feliz-blanco font-archivo font-bold text-headline-md">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-headline-md text-feliz-negro font-archivo font-bold mb-space-sm">
                  Revisá el Total
                </h3>
                <p className="text-body-md text-feliz-gris-500">
                  Verifica cantidades, precios y descuentos por volumen. Todo claro y transparente.
                </p>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="flex gap-space-lg">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-feliz-rojo text-feliz-blanco font-archivo font-bold text-headline-md">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-headline-md text-feliz-negro font-archivo font-bold mb-space-sm">
                  Confirmá tu Pedido
                </h3>
                <p className="text-body-md text-feliz-gris-500">
                  Envía tu pedido por WhatsApp o (próximamente) pagá online. Te contactamos de inmediato.
                </p>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="flex gap-space-lg">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-feliz-rojo text-feliz-blanco font-archivo font-bold text-headline-md">
                  5
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-headline-md text-feliz-negro font-archivo font-bold mb-space-sm">
                  Retirá o Coordiná Envío
                </h3>
                <p className="text-body-md text-feliz-gris-500">
                  Retirá en Alió 3232 o coordinamos envío a tu provincia. Todo rápido y seguro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formas de Pago */}
      <section className="bg-feliz-gris-100 py-section">
        <div className="max-w-container mx-auto page-margin">
          <h2 className="text-headline-lg md:text-headline-lg-mobile text-feliz-negro mb-space-2xl font-archivo font-bold text-center">
            Formas de Pago
          </h2>
          <div className="grid md:grid-cols-3 gap-space-lg">
            {/* Efectivo */}
            <div className="bg-feliz-blanco p-space-xl rounded-lg shadow-subtle">
              <h3 className="text-headline-md text-feliz-negro mb-space-md font-archivo font-bold">
                💵 Efectivo
              </h3>
              <p className="text-body-md text-feliz-gris-500">
                Paga en efectivo al retirar o contra entrega en provincia.
              </p>
            </div>

            {/* Transferencia */}
            <div className="bg-feliz-blanco p-space-xl rounded-lg shadow-subtle">
              <h3 className="text-headline-md text-feliz-negro mb-space-md font-archivo font-bold">
                🏦 Transferencia Bancaria
              </h3>
              <p className="text-body-md text-feliz-gris-500">
                Transferencia directa a nuestra cuenta. Datos disponibles al confirmar.
              </p>
            </div>

            {/* MercadoPago */}
            <div className="bg-feliz-blanco p-space-xl rounded-lg shadow-subtle">
              <h3 className="text-headline-md text-feliz-negro mb-space-md font-archivo font-bold">
                🟢 MercadoPago
              </h3>
              <p className="text-body-md text-feliz-gris-500">
                Próximamente. Tarjeta, efectivo y billeteras digitales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Envíos y Horarios */}
      <section className="py-section">
        <div className="max-w-container mx-auto page-margin">
          <div className="grid md:grid-cols-2 gap-section">
            {/* Envíos */}
            <div>
              <h2 className="text-headline-lg md:text-headline-lg-mobile text-feliz-rojo mb-space-xl font-archivo font-bold">
                Envíos
              </h2>
              <div className="space-y-space-lg">
                <div>
                  <h3 className="text-headline-md text-feliz-negro font-archivo font-bold mb-space-sm">
                    Retiro Local
                  </h3>
                  <p className="text-body-md text-feliz-gris-500">
                    Retirá tu pedido en Alió 3232, Mar del Plata. Coordinamos el horario contigo.
                  </p>
                </div>
                <div>
                  <h3 className="text-headline-md text-feliz-negro font-archivo font-bold mb-space-sm">
                    Envío a Provincia
                  </h3>
                  <p className="text-body-md text-feliz-gris-500">
                    Coordinamos envío a cualquier parte de Buenos Aires y provincia. Costo según destino.
                  </p>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div>
              <h2 className="text-headline-lg md:text-headline-lg-mobile text-feliz-rojo mb-space-xl font-archivo font-bold">
                Horarios de Atención
              </h2>
              <div className="bg-feliz-gris-100 p-space-xl rounded-lg">
                <div className="space-y-space-md">
                  <div className="flex justify-between">
                    <span className="text-body-md font-medium text-feliz-negro">Lunes a Viernes</span>
                    <span className="text-body-md text-feliz-gris-500">8:00 AM - 17:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-body-md font-medium text-feliz-negro">Sábado</span>
                    <span className="text-body-md text-feliz-gris-500">8:00 AM - 13:00 PM</span>
                  </div>
                  <div className="flex justify-between border-t border-feliz-gris-500 pt-space-md mt-space-md">
                    <span className="text-body-md font-medium text-feliz-negro">Domingos</span>
                    <span className="text-body-md text-feliz-gris-500">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

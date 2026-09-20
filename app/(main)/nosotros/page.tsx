import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes Somos | Super Mayorista Feliz",
  description: "Conocé la historia de Super Mayorista Feliz. Mayorista de confianza en Mar del Plata sin mínimo de compra desde 2020.",
};

export default function AcercaDe() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-feliz-amarillo py-section">
        <div className="max-w-container mx-auto page-margin">
          <h1 className="text-display-hero md:text-display-hero-mobile font-archivo font-bold text-feliz-negro mb-space-lg">
            Quiénes Somos
          </h1>
          <p className="text-body-lg text-feliz-gris-500 max-w-2xl">
            Super Mayorista Feliz es tu socio de confianza en compras mayoristas. Fundada en 2020 en Mar del Plata, ofrecemos precios mayoristas sin mínimo de compra.
          </p>
        </div>
      </section>

      {/* Misión */}
      <section className="py-section">
        <div className="max-w-container mx-auto page-margin">
          <div className="grid md:grid-cols-2 gap-section">
            <div>
              <h2 className="text-headline-lg md:text-headline-lg-mobile text-feliz-rojo mb-space-xl font-archivo font-bold">
                Nuestra Misión
              </h2>
              <p className="text-body-lg text-feliz-gris-500 mb-space-lg">
                Democratizar el acceso a precios mayoristas para pequeños y medianos comerciantes. Sin mínimos, sin complicaciones, solo buenos precios y servicio rápido.
              </p>
              <p className="text-body-lg text-feliz-gris-500">
                Ubicados en Alió 3232, Mar del Plata, somos el mayorista de referencia para emprendedores y pequeños negocios que buscan crecer.
              </p>
            </div>
            <div className="bg-feliz-gris-100 rounded-lg p-space-2xl flex items-center justify-center min-h-64">
              <p className="text-body-sm text-feliz-gris-500 text-center">
                [Foto de depósito — placeholder]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="bg-feliz-gris-100 py-section">
        <div className="max-w-container mx-auto page-margin">
          <h2 className="text-headline-lg md:text-headline-lg-mobile text-feliz-negro mb-space-2xl font-archivo font-bold text-center">
            ¿Por Qué Elegirnos?
          </h2>
          <div className="grid md:grid-cols-4 gap-space-lg">
            {/* Card 1 */}
            <div className="bg-feliz-blanco p-space-xl rounded-lg shadow-subtle">
              <div className="text-3xl mb-space-lg text-feliz-rojo">✓</div>
              <h3 className="text-headline-md text-feliz-negro mb-space-md font-archivo font-bold">
                Sin Mínimo
              </h3>
              <p className="text-body-md text-feliz-gris-500">
                Compra 1 unidad o 1000. No hay mínimos, tú decides.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-feliz-blanco p-space-xl rounded-lg shadow-subtle">
              <div className="text-3xl mb-space-lg text-feliz-amarillo">💰</div>
              <h3 className="text-headline-md text-feliz-negro mb-space-md font-archivo font-bold">
                Precios Mayoristas
              </h3>
              <p className="text-body-md text-feliz-gris-500">
                Acceso a precios mayoristas reales sin intermediarios.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-feliz-blanco p-space-xl rounded-lg shadow-subtle">
              <div className="text-3xl mb-space-lg text-feliz-verde">⚡</div>
              <h3 className="text-headline-md text-feliz-negro mb-space-md font-archivo font-bold">
                Retiro Rápido
              </h3>
              <p className="text-body-md text-feliz-gris-500">
                Coordiná retiro mismo día. Envío a provincia también disponible.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-feliz-blanco p-space-xl rounded-lg shadow-subtle">
              <div className="text-3xl mb-space-lg text-feliz-rojo">🤝</div>
              <h3 className="text-headline-md text-feliz-negro mb-space-md font-archivo font-bold">
                Servicio Personal
              </h3>
              <p className="text-body-md text-feliz-gris-500">
                Equipo dedicado a resolver tus dudas y necesidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-section">
        <div className="max-w-container mx-auto page-margin">
          <h2 className="text-headline-lg md:text-headline-lg-mobile text-feliz-negro mb-space-2xl font-archivo font-bold text-center">
            Nuestro Equipo
          </h2>
          <div className="grid md:grid-cols-3 gap-space-xl">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="bg-feliz-gris-100 rounded-lg p-space-2xl mb-space-lg h-48 flex items-center justify-center">
                  <p className="text-body-sm text-feliz-gris-500">[Foto miembro {i}]</p>
                </div>
                <h3 className="text-headline-md text-feliz-negro mb-space-xs font-archivo font-bold">
                  Persona {i}
                </h3>
                <p className="text-body-sm text-feliz-gris-500">
                  Rol en el equipo
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

# Prompt para Google Antigravity / Claude Code — Super Mayorista Feliz (Fase 1: Front-end)

> Copiá todo lo que está debajo de la línea y pegalo como primer mensaje en Antigravity (o en Claude Code).
> Está escrito para que el agente primero genere un plan y recién después escriba código.

---

## ROL

Actuás como desarrollador front-end senior especializado en e-commerce. Vas a construir el sitio web de **Super Mayorista Feliz**, un supermercado mayorista de Mar del Plata, Argentina.

Antes de escribir una sola línea de código: generá un **plan de implementación** con el árbol de archivos, el orden de trabajo y las decisiones técnicas. Esperá mi confirmación. Después implementá por etapas, verificando visualmente cada pantalla en el navegador antes de pasar a la siguiente.

---

## 0. REGLA DE ORO: `CLAUDE.md`

**Lo primero que creás, antes que el plan y antes que cualquier código, es el archivo `CLAUDE.md` en la raíz del proyecto.** Es la memoria del proyecto: todo lo que se decide vive ahí, no en el chat. Si se corta la sesión, cualquier agente tiene que poder abrir ese archivo y seguir sin preguntarme nada.

### Estructura obligatoria de `CLAUDE.md`

```markdown
# Super Mayorista Feliz — Sitio web

## 1. Contexto del negocio
(nombre, rubro, dirección, horarios, propuesta de valor, público)

## 2. Stack y versiones
(cada dependencia con su versión exacta y por qué está)

## 3. Comandos
(dev, build, lint, typecheck, test — los que realmente funcionan en este repo)

## 4. Estructura de carpetas
(árbol comentado, qué va en cada lugar)

## 5. Design tokens
(la paleta, tipografías, radios, sombras y espaciados del punto 4 de este prompt,
 copiados textualmente — son la fuente de verdad)

## 6. Convenciones de código
(naming, server vs client components, cómo se formatean precios,
 dónde van los textos, qué está prohibido)

## 7. Modelo de datos
(los types, y la regla de que todo pasa por src/lib/api.ts)

## 8. Estado del proyecto
(checklist de las 10 etapas del punto 16: hecho / en curso / pendiente)

## 9. Decisiones tomadas
(log corto y fechado: qué se decidió, por qué, y qué alternativa se descartó)

## 10. Pendiente para la Fase 2
(login, listas de precios por cliente, checkout con Mercado Pago, panel admin —
 con el listado de los TODO: y en qué archivo quedó cada uno)
```

### Reglas de uso

- **Al empezar cada sesión o cada etapa:** leé `CLAUDE.md` primero. No repreguntes nada que ya esté escrito ahí.
- **Al terminar cada etapa del punto 16:** actualizá el punto 8 (estado) y, si hubo alguna decisión técnica, agregá una línea al punto 9. Commit aparte con el mensaje `docs: actualiza CLAUDE.md tras etapa N`.
- **Cuando yo cambie un requerimiento en el chat:** lo primero que hacés es reflejarlo en `CLAUDE.md`, y recién después tocás el código. El chat es volátil, el archivo no.
- **Cuando una decisión de este prompt y `CLAUDE.md` se contradigan:** gana `CLAUDE.md` si es posterior, pero avisámelo explícitamente antes de seguir.
- **Mantenelo corto.** Es un archivo de referencia, no un diario. Si supera unas 200 líneas, movés el detalle a `/docs/` y dejás el link.
- Si vas a trabajar también en Antigravity o en otro agente, creá `AGENTS.md` en la raíz con una sola línea: `Ver CLAUDE.md`. No dupliques el contenido.

---

## 0.1 ECONOMÍA DE TOKENS

Trabajá con el mínimo consumo posible sin perder precisión. Reglas duras:

**Lectura**
- Nunca leas un archivo entero para buscar algo: primero `Grep`/`Glob`, después `Read` solo el rango de líneas que importa.
- No releas un archivo que acabás de editar "para verificar". Si el edit no falló, se aplicó.
- Contexto por sesión: `CLAUDE.md` + los archivos de la etapa actual. Nada más.

**Escritura**
- Editá con diffs puntuales, nunca reescribiendo el archivo completo por un cambio de tres líneas.
- **No pegues código en el chat.** Escribí el archivo y decime la ruta. Si necesito ver algo, te lo pido.
- Nada de READMEs, comentarios explicativos largos ni archivos de documentación que no pedí.

**Datos mock — esto es lo que más tokens ahorra**
- No tipees 100 productos a mano. Escribí un script `scripts/seed.ts` de ~80 líneas con arrays de marcas, formatos y rangos de precio por categoría, y que genere el JSON. Corrés el script una vez y commiteás `src/data/productos.json`. El script es la fuente de verdad, no el JSON.
- Lo mismo para las imágenes placeholder: generalas con un script, no una por una.

**Conversación**
- Cero preámbulos ("Ahora voy a...", "Perfecto, entonces..."). Ejecutá y reportá.
- Al terminar cada etapa: máximo 5 líneas — qué se hizo, qué archivos, qué falta, qué decisión necesito.
- No me pidas confirmación de cosas ya definidas en este prompt o en `CLAUDE.md`. Preguntá solo si hay una contradicción real o una decisión irreversible.
- Si te equivocás, corregí y seguí. No expliques el error en tres párrafos.
- Corré `/compact` al cerrar cada etapa, después de actualizar `CLAUDE.md`. El estado vive en el archivo, no en el contexto.

**Verificación**
- Una captura por etapa, no una por componente.
- `npm run typecheck` antes de `npm run build`; es más barato y falla antes.

---

## 0.2 INSUMOS DE DISEÑO QUE TE PASO

Antes de arrancar vas a encontrar en el repo dos carpetas con material real. **Miralas primero.**

```
/design-ref/            ← maquetas hechas en Google Stitch (NO se compila, es referencia)
  screens/*.png           capturas de cada pantalla → esto manda sobre cualquier
                          descripción escrita de este prompt si se contradicen
  stitch-export/          HTML/CSS que exportó Stitch
/public/brand/          ← logo real de la empresa
  logo.svg                versión principal, color
  logo-blanco.svg         versión para fondos oscuros (header y footer)
  isotipo.svg             solo el símbolo, para favicon y mobile
  favicon.ico, icon.png, apple-icon.png, og-image.png
```

### Cómo usar `/design-ref/`

- Las capturas son la **fuente de verdad visual**: espaciados, jerarquía, tamaños de tipografía y composición salen de ahí.
- El HTML de Stitch es **referencia, no código de producción**. Es markup plano, sin componentes, sin responsive real y con clases repetidas. **No lo pegues en la app.** Leelo para extraer valores (tamaños, pesos, gaps) y reescribí todo como componentes React tipados.
- Si una pantalla de Stitch no existe, seguí la descripción escrita de este prompt.
- Si una captura contradice este prompt, **gana la captura** — pero avisámelo en una línea antes de implementarla.
- `/design-ref/` va en `.gitignore`? **No.** Se commitea, pero se excluye del build (no la importes desde `src/`).

### Cómo usar el logo

- Header y footer (fondo negro) → `logo-blanco.svg`
- Mobile, donde no entra el wordmark → `isotipo.svg`
- Los SVG se importan como componente o vía `next/image`; **no** los rediseñes ni los recolorees.
- Extraé del SVG los hex exactos del logo y **corregí con ellos la paleta del punto 4.1** (mis valores de rojo y amarillo son una aproximación tomada de una foto). Dejá anotado el cambio en `CLAUDE.md` → punto 9.
- Configurá favicon, `apple-icon` y `og-image` en `src/app/` siguiendo la convención de Next.

---

## 1. CONTEXTO DE NEGOCIO

- **Nombre:** Super Mayorista Feliz
- **Rubro:** mayorista de consumo masivo (almacén, bebidas, limpieza, perfumería, golosinas, lácteos, congelados)
- **Dirección:** Alió 3232, Mar del Plata, Buenos Aires, Argentina
- **Horario:** Lunes a sábado de 8 a 17 hs
- **Propuesta de valor, en este orden de jerarquía:**
  1. **Sin mínimo de compra** (es el diferencial más fuerte, tiene que verse en el header)
  2. Precios bajos mayoristas
  3. Productos de alta rotación
  4. Atención a comercios: kioscos, almacenes, despensas, bares, restaurantes, vecinos
- **Público:** dueños de comercios chicos y medianos que compran desde el celular, muchas veces con conexión lenta. El sitio tiene que ser **mobile-first y liviano**.
- **Canal actual:** Instagram `@feliz.supermayorista` y WhatsApp. El sitio debe convivir con eso, no reemplazarlo.

---

## 2. ALCANCE DE ESTA FASE

**Esta fase es SOLO front-end.** No implementes backend, base de datos ni autenticación real.

Incluye:
- Todas las pantallas públicas, maquetadas y navegables
- Datos **mock** tipados, en archivos separados (`/src/data/*.ts`), fáciles de reemplazar más adelante por una API
- Carrito funcionando en estado de cliente (persistido en `localStorage`)
- Envío del pedido armado por **WhatsApp** (link `wa.me` con el detalle formateado)

**Dejá preparado, pero NO implementado:**
- Login / registro de clientes mayoristas → dejá las rutas `/ingresar` y `/crear-cuenta` maquetadas, con el formulario visual y un `TODO:` claro en el handler
- Listas de precios por tipo de cliente → el tipo `Product` ya debe contemplar `precioMinorista` y `precioMayorista`, y un `PriceContext` que hoy siempre devuelve el mayorista
- Checkout con Mercado Pago → botón visible con estado deshabilitado y tooltip "Próximamente"
- Panel de administración

Toda la capa de datos tiene que estar detrás de funciones tipo `getProducts()`, `getCategories()`, `getOffers()` en `/src/lib/api.ts`, que hoy leen los mocks. Cambiar a una API real debe ser cambiar solo ese archivo.

---

## 3. STACK Y CONVENCIONES

- **Next.js 15** (App Router) + **TypeScript** en modo estricto
- **Tailwind CSS v4** + **shadcn/ui** para componentes base
- **Zustand** para el estado del carrito (con middleware `persist`)
- **lucide-react** para iconos
- `next/image` para todas las imágenes, con `sizes` correctos
- Sin `any`. Todos los modelos en `/src/types/index.ts`
- Componentes de servidor por defecto; `"use client"` solo donde haga falta interactividad
- Textos en **español rioplatense** (voseo en los CTAs: "Comprá", "Pedí", "Armá tu pedido")
- Formato de precios: `Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" })`
- Commits chicos y descriptivos por cada etapa terminada

---

## 4. REFERENCIA VISUAL

La referencia de **estructura y layout** es `mayorista.multienvasesonline.com.ar`: header denso de e-commerce mayorista, barra superior de anuncios, buscador protagonista al centro, mega menú de categorías, bloques de categorías con foto a sangre y tipografía grande encima, tarjetas de producto claras sobre fondo oscuro.

**Importante:** tomá de ahí la *organización de la información y las proporciones*, no los assets. No copies su logo, sus fotos, su nombre ni sus textos. Todo el contenido, las imágenes y la paleta son de Super Mayorista Feliz.

### 4.1 Paleta

La marca de Feliz es rojo + amarillo (logo: círculo amarillo con aro rojo). Usá la estructura oscura de la referencia con los colores propios:

```css
--feliz-rojo:        #E30613;  /* color de marca, ofertas, precios, CTAs primarios */
--feliz-rojo-oscuro: #B3040F;  /* hover de CTAs */
--feliz-amarillo:    #FFE000;  /* acentos, badges, destacados, iconos del nav */
--feliz-negro:       #0D0D0D;  /* fondo de header, footer y bloques hero */
--feliz-gris-900:    #1A1A1A;  /* superficies oscuras secundarias */
--feliz-gris-100:    #F2F2F2;  /* fondo de tarjetas y del body */
--feliz-gris-500:    #6B6B6B;  /* texto secundario */
--feliz-blanco:      #FFFFFF;
--feliz-verde:       #25D366;  /* solo WhatsApp */
```

Reglas de color:
- Fondo general del sitio: blanco / `--feliz-gris-100`. Header, footer y bloques hero: negro.
- **El amarillo nunca lleva texto blanco.** Sobre amarillo, texto negro.
- Precio y badge de oferta: rojo. Precio tachado: gris 500.
- El CTA primario ("Agregar al carrito", "Comprar") es rojo con texto blanco; el secundario es amarillo con texto negro.
- Verificá contraste AA (4.5:1) en todo texto.

### 4.2 Tipografía

- Títulos: **Archivo** (Google Fonts), peso 700/800, `tracking-tight`, títulos de sección en mayúscula o con la segunda palabra en bold (ej. "Ofertas **de la semana**")
- Cuerpo: **Inter**, 400/500/600
- Cargadas con `next/font/google`, con `display: "swap"`

### 4.3 Estilo de componentes

- Radios: `12px` en tarjetas, `8px` en botones y inputs, pill (`9999px`) en badges y chips de filtro
- Sombras suaves, nunca duras: `0 2px 8px rgba(0,0,0,.06)` en reposo, `0 8px 24px rgba(0,0,0,.12)` en hover
- Espaciado en escala de 4px. Contenedor máximo `1440px` con padding lateral de `16px` en mobile y `32px` en desktop
- Transiciones de 150–200ms en hover. Nada de animaciones largas.

---

## 5. RUTAS

```
/                         Home
/categorias               Todas las categorías
/c/[slug]                 Listado de productos de una categoría (con subcategorías)
/p/[slug]                 Ficha de producto
/ofertas                  Productos con descuento vigente
/buscar?q=                Resultados de búsqueda
/carrito                  Carrito completo
/ingresar                 Login (maqueta, sin lógica)
/crear-cuenta             Registro mayorista (maqueta, sin lógica)
/nosotros                 Quiénes somos
/como-comprar             Cómo comprar / formas de pago / envíos
/contacto                 Contacto + mapa + horarios
/preguntas-frecuentes     FAQ
```

---

## 6. LAYOUT GLOBAL

### 6.1 Barra superior (fondo amarillo, texto negro, 36px de alto)

Carrusel de 3 mensajes que rota cada 5s, o los tres visibles en desktop:
- "SIN MÍNIMO DE COMPRA"
- "PRECIOS MAYORISTAS PARA TODOS"
- "RETIRÁ EN ALIÓ 3232 — MAR DEL PLATA"

A la derecha, dos links chicos: "Mis pedidos" y "Ayuda".

### 6.2 Header (fondo negro, sticky al hacer scroll)

Tres zonas en una fila:
- **Izquierda:** `/public/brand/logo-blanco.svg`, alto de 40px en desktop y 32px en mobile, linkeado a `/`, con `aria-label="Super Mayorista Feliz — Inicio"`
- **Centro:** buscador ancho (máx. 560px), fondo blanco, placeholder "¿Qué estás buscando?", con sugerencias en dropdown al escribir (filtrado sobre los mocks, con debounce de 250ms)
- **Derecha:** "Iniciar sesión" (icono usuario) y "Mi carrito" (icono carrito con badge rojo de cantidad, abre el drawer)

En mobile: logo + icono de lupa + icono de carrito; el buscador se expande a pantalla completa al tocar la lupa.

### 6.3 Barra de navegación (fondo negro, borde inferior sutil)

Cuatro entradas con icono amarillo a la izquierda:
- ☰ **CATEGORÍAS** → abre el mega menú
- **SIN MÍNIMO DE COMPRA**
- **TODOS LOS MEDIOS DE PAGO**
- **TE ARMAMOS EL PEDIDO** (link a WhatsApp)

**Mega menú:** panel a pantalla completa bajo el header. Columna izquierda con las categorías principales; al hacer hover, la derecha muestra sus subcategorías en 3–4 columnas más una imagen de la categoría. En mobile es un drawer lateral con acordeones.

### 6.4 Footer (fondo negro)

Cuatro columnas:
1. **Newsletter** — "Suscribite y enterate de las ofertas" + input + botón amarillo "AVISARME"
2. **Contacto** — Alió 3232, Mar del Plata · WhatsApp · email · horarios
3. **Información** — Cómo comprar · Envíos · Formas de pago · Preguntas frecuentes · Términos y condiciones · Políticas de privacidad
4. **Seguinos** — iconos de Instagram, Facebook y WhatsApp + logos de medios de pago en escala de grises

Barra inferior: "© 2026 Super Mayorista Feliz. Todos los derechos reservados."

### 6.5 Botón flotante de WhatsApp

Círculo verde abajo a la derecha, con tooltip "¿Te ayudamos con tu pedido?" que aparece a los 8 segundos. No debe tapar el CTA de las fichas de producto en mobile.

---

## 7. ÁRBOL DE CATEGORÍAS (mock)

Generá al menos **8 categorías principales**, cada una con 4–8 subcategorías:

- **ALMACÉN** — aceites y vinagres · arroz y legumbres · fideos y pastas secas · conservas · harinas · azúcar y endulzantes · yerba, café y té · salsas y aderezos
- **BEBIDAS** — gaseosas · aguas y saborizadas · jugos y polvos · cervezas · vinos · aperitivos y espirituosas · energizantes · isotónicas
- **LÁCTEOS Y FRESCOS** — leches · yogures · quesos · manteca y crema · fiambres · huevos
- **CONGELADOS** — papas y rebozados · hamburguesas y milanesas · helados · empanadas y tartas · pescados
- **LIMPIEZA** — lavandina y desinfectantes · detergentes · jabón en polvo y suavizantes · limpiadores de piso · papel higiénico y rollos · bolsas de residuo · insecticidas · accesorios
- **PERFUMERÍA** — shampoo y acondicionador · jabones · pañales · higiene femenina · cuidado bucal · afeitado · cuidado de la piel
- **GOLOSINAS Y SNACKS** — chocolates · caramelos y chicles · alfajores · galletitas · papas fritas y snacks · frutos secos
- **DESCARTABLES Y BAZAR** — vasos y platos · bandejas y envases · servilletas · film y aluminio · bolsas · utensilios

Cada categoría necesita: `id`, `slug`, `nombre`, `imagen`, `icono`, `subcategorias[]`, `cantidadProductos`.

---

## 8. MODELO DE DATOS MOCK

```ts
export type Producto = {
  id: string;
  slug: string;
  nombre: string;              // "ACEITE DE GIRASOL NATURA 900ML"
  marca: string;
  descripcion: string;
  categoriaId: string;
  subcategoriaId: string;
  imagenes: string[];
  sku: string;
  unidadVenta: "unidad" | "bulto" | "caja" | "pack";
  unidadesPorBulto: number;     // ej. 12
  precioMayorista: number;      // por unidad de venta
  precioMinorista: number;
  precioAnterior?: number;      // si hay oferta, para el tachado
  enOferta: boolean;
  destacado: boolean;
  stock: "disponible" | "ultimas-unidades" | "sin-stock";
  etiquetas?: string[];         // "NUEVO", "MÁS VENDIDO", "PRECIO CUIDADO"
};
```

Generá **entre 80 y 120 productos** mock repartidos entre todas las categorías, con nombres, marcas argentinas reales del rubro (La Serenísima, Arcor, Ala, Quilmes, Marolio, etc.), precios verosímiles en pesos argentinos de 2026 y descripciones cortas. Para las imágenes usá placeholders consistentes (`/public/productos/*.webp` con un generador de placeholder o `next/image` con `placeholder="blur"`), nunca fotos tomadas de otros sitios.

---

## 9. HOME — SECCIONES EN ORDEN

1. **Hero / carrusel** de 3 slides a ancho completo (altura 420px desktop, 260px mobile): "OFERTONES DE LA SEMANA", "SIN MÍNIMO DE COMPRA", "RETIRÁ HOY EN ALIÓ 3232". Cada slide con título grande, bajada de una línea y botón. Autoplay de 6s, pausable, con flechas y dots accesibles.
2. **Franja de beneficios** (4 items con icono sobre fondo claro): Sin mínimo de compra · Precios mayoristas · Retiro en el día · Te armamos el pedido por WhatsApp
3. **Categorías destacadas** — grilla de 8 tarjetas con foto a sangre, overlay oscuro y el nombre en mayúscula blanca encima. 4 columnas en desktop, 2 en mobile.
4. **Ofertas de la semana** — carrusel horizontal de tarjetas de producto con badge rojo de descuento. Link "Ver todas las ofertas".
5. **Banda de marca** a ancho completo, fondo rojo: "Precios de mayorista, sin mínimo de compra" + botón amarillo "Ver catálogo completo".
6. **Más vendidos** — grilla de 8 productos destacados.
7. **Bloque "Cómo comprar"** — 3 pasos numerados con icono: Elegí tus productos → Armá el pedido → Retiralo o coordinamos el envío.
8. **Bloque local** — mapa embebido de Alió 3232, horarios, teléfono y botón "Cómo llegar".

---

## 10. TARJETA DE PRODUCTO

Fondo blanco, radio 12px, sombra suave, hover que eleva:
- Imagen cuadrada arriba, `object-contain` sobre fondo blanco
- Badges arriba a la izquierda: `-25%` en rojo si hay oferta, "MÁS VENDIDO" en amarillo si está destacado
- Marca en gris 500, 12px
- Nombre en 2 líneas máximo con `line-clamp-2`, bold, 14px
- Unidad de venta: "Bulto x 12 u." en gris
- Precio grande en rojo; si hay `precioAnterior`, tachado en gris arriba
- Precio por unidad calculado, chico: "$1.041 por unidad"
- Selector de cantidad (− n +) y botón rojo a ancho completo "AGREGAR"
- Si `stock === "sin-stock"`: tarjeta en opacidad 60%, botón deshabilitado con texto "Sin stock" y link "Avisame cuando llegue"

---

## 11. LISTADO DE CATEGORÍA (`/c/[slug]`)

- Breadcrumb arriba
- Título de la categoría + cantidad de resultados
- **Sidebar de filtros** (drawer en mobile): subcategoría, marca (checkboxes con buscador si son más de 10), rango de precio con slider, "Solo ofertas", "Solo con stock"
- **Orden:** Relevancia · Menor precio · Mayor precio · A-Z · Ofertas primero
- Chips de filtros activos arriba de la grilla, con "Limpiar todo"
- Grilla responsive: 4 columnas ≥1280px, 3 en 1024px, 2 en mobile
- Paginación o "Cargar más" (elegí y justificalo en el plan)
- Estado vacío ilustrado con sugerencia de categorías
- Skeletons mientras carga

---

## 12. FICHA DE PRODUCTO (`/p/[slug]`)

- Galería a la izquierda (imagen principal + miniaturas, zoom al hover en desktop)
- A la derecha: marca, nombre H1, SKU, precio mayorista destacado, precio por unidad, badge de stock, selector de cantidad, botón "AGREGAR AL CARRITO" rojo full-width, botón secundario amarillo "CONSULTAR POR WHATSAPP"
- Bloque de confianza: sin mínimo de compra · retiro en el día · medios de pago
- Tabs abajo: Descripción · Detalles (unidad de venta, unidades por bulto, marca, SKU) · Envíos y retiro
- Carrusel "Productos relacionados" de la misma subcategoría
- Metadata dinámica y JSON-LD `Product` para SEO

---

## 13. CARRITO

- **Drawer lateral** que se abre al agregar, con animación de 200ms: lista de items con miniatura, nombre, cantidad editable, subtotal por línea y botón de eliminar; subtotal general; botón "VER CARRITO" y "PEDIR POR WHATSAPP"
- **Página `/carrito`**: tabla completa, resumen fijo a la derecha con subtotal, cantidad de bultos, total de unidades y total; campo de nota para el pedido
- **Pedir por WhatsApp**: genera un mensaje formateado y abre `wa.me`:

```
¡Hola Feliz! Quiero hacer este pedido:

• ACEITE DE GIRASOL NATURA 900ML — 2 bultos x12 — $24.960
• YERBA TARAGÜI 1KG — 1 bulto x10 — $38.500

Total estimado: $63.460
Nombre:
Comercio:
```

- El carrito persiste en `localStorage` y sobrevive al refresh
- Botón "Vaciar carrito" con confirmación

---

## 14. RESPONSIVE, ACCESIBILIDAD Y PERFORMANCE

- Breakpoints: 390 / 768 / 1024 / 1280 / 1440. **Diseñá primero el mobile de 390px.**
- Área táctil mínima de 44×44px en todo control
- Navegación completa por teclado, focus ring visible en amarillo sobre fondos oscuros y en rojo sobre claros
- `aria-label` en todos los iconos sin texto; el carrusel del hero respeta `prefers-reduced-motion`
- Imágenes en WebP con `width`/`height` declarados para no generar CLS
- Objetivo Lighthouse: ≥90 en Performance, Accessibility, Best Practices y SEO en mobile
- `sitemap.ts`, `robots.ts`, Open Graph y metadata por página

---

## 15. LO QUE **NO** HAY QUE HACER

- No copiar logos, fotos, textos ni assets de Multienvases ni de ninguna otra marca. La referencia es solo de estructura.
- No usar `localStorage` para nada que no sea el carrito y las preferencias de la UI.
- No inventar funcionalidades fuera de este alcance (chat con IA, cupones, programa de puntos, etc.).
- No dejar texto en inglés en la interfaz.
- No usar librerías de UI pesadas más allá de shadcn/ui.
- No hardcodear precios ni textos dentro de los componentes: todo sale de `/src/data`.

---

## 16. GRAFO DE TRABAJO Y SUBAGENTES

El trabajo **no es una lista lineal, es un grafo de dependencias**. Todo lo que está en el mismo nivel se lanza en paralelo, cada cosa en su propio subagente. Los niveles sí son secuenciales: no arranques uno hasta que el anterior cerró.

```
NIVEL 0  (secuencial, vos mismo, sin subagentes)
  └─ CLAUDE.md → plan → src/types + tailwind tokens + scripts/seed.ts → src/data/*.json

NIVEL 1  (3 subagentes en paralelo — solo dependen del Nivel 0)
  ├─ A. Layout global      → barra superior, header, buscador, nav, mega menú, footer, FAB WhatsApp
  ├─ B. Primitivas de UI   → ProductCard, Precio, Badge, SelectorCantidad, Breadcrumb, Skeletons, EstadoVacio
  └─ C. Páginas estáticas  → nosotros, como-comprar, contacto, FAQ, ingresar, crear-cuenta (con sus TODO:)

NIVEL 2  (3 subagentes en paralelo — dependen de A y B)
  ├─ D. Home               → las 8 secciones del punto 9
  ├─ E. Catálogo           → /c/[slug] con filtros y orden + /buscar + /ofertas
  └─ F. Ficha de producto  → /p/[slug] + relacionados + JSON-LD

NIVEL 3  (secuencial, toca archivos de todos los anteriores)
  └─ G. Carrito            → store Zustand + drawer + /carrito + generador del mensaje de WhatsApp

NIVEL 4  (2 subagentes en paralelo)
  ├─ H. SEO                → metadata por página, sitemap.ts, robots.ts, Open Graph
  └─ I. QA                 → responsive 390px, teclado, contraste, Lighthouse mobile
```

### Reglas para los subagentes

1. **Un subagente = un conjunto de archivos exclusivo.** Antes de lanzarlos, declará qué rutas toca cada uno. Dos subagentes del mismo nivel no pueden escribir el mismo archivo. Si dos necesitan lo mismo, eso sube al nivel anterior.
2. **Briefing mínimo.** A cada subagente le pasás: las secciones de este prompt que le corresponden, los design tokens y la lista de archivos que puede leer. Nada más. No le mandes el prompt entero.
3. **Devolución máxima de 10 líneas:** archivos creados, decisiones tomadas, bloqueos. **Nunca código.** El código queda en el repo.
4. **Vos no reimplementás lo que devolvieron.** Integrás, resolvés conflictos de import y seguís.
5. Máximo 3 subagentes simultáneos. Más que eso, los conflictos cuestan más de lo que ahorra el paralelismo.
6. Al cerrar cada nivel: `npm run typecheck`, una captura, actualizás `CLAUDE.md` (punto 8) y `/compact`.

### Qué NO paralelizar

El Nivel 0 y el Nivel 3. El primero define los contratos que todos usan; el segundo atraviesa todas las pantallas. Hacerlos en paralelo genera más retrabajo que el tiempo que ahorra.

---

## 17. CRITERIOS DE ACEPTACIÓN

- [ ] Existe `CLAUDE.md` en la raíz, con las 10 secciones completas y el punto 8 reflejando el estado real
- [ ] Cada etapa terminada dejó su commit de `docs: actualiza CLAUDE.md`
- [ ] Todos los `TODO:` de la Fase 2 están listados en el punto 10 de `CLAUDE.md` con su archivo
- [ ] `npm run build` pasa sin errores ni warnings de TypeScript
- [ ] Toda ruta del punto 5 existe y es navegable
- [ ] "Sin mínimo de compra" aparece en el header, en la home y en la ficha de producto
- [ ] Se puede agregar un producto, verlo en el drawer, editar la cantidad y generar el link de WhatsApp con el detalle correcto
- [ ] El carrito sobrevive al refresh
- [ ] A 390px de ancho no hay scroll horizontal en ninguna página
- [ ] Ningún texto de la interfaz queda en inglés
- [ ] La capa de datos está aislada en `/src/lib/api.ts` y cambiarla por fetch a una API no requiere tocar componentes

---

---

## 18. AVISO SONORO AL TERMINAR

Creá `.claude/settings.json` con hooks que hagan sonar un pitido cuando termina la ejecución y cuando se necesita mi input, así no tengo que mirar la terminal:

```json
{
  "hooks": {
    "Stop": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "afplay /System/Library/Sounds/Glass.aiff 2>/dev/null || paplay /usr/share/sounds/freedesktop/stereo/complete.oga 2>/dev/null || printf '\\a'"
          }
        ]
      }
    ],
    "Notification": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "afplay /System/Library/Sounds/Ping.aiff 2>/dev/null || paplay /usr/share/sounds/freedesktop/stereo/message.oga 2>/dev/null || printf '\\a'"
          }
        ]
      }
    ],
    "SubagentStop": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "afplay /System/Library/Sounds/Pop.aiff 2>/dev/null || printf '\\a'"
          }
        ]
      }
    ]
  }
}
```

- `Stop`: sonido grave cuando termina la respuesta completa
- `Notification`: sonido distinto cuando el agente espera una confirmación mía
- `SubagentStop`: sonido corto cada vez que cierra un subagente, para seguir el avance del paralelismo

El comando tiene fallback en cadena: macOS → Linux → beep ANSI del terminal. En Windows con WSL, reemplazá el primero por `powershell.exe -c "[console]::beep(800,200)"`. Agregá `.claude/settings.json` al repo (no a `.gitignore`) y dejalo anotado en `CLAUDE.md`.

---

Empezá creando **`CLAUDE.md`**. Después mostrame el **plan**. No escribas código hasta que te lo confirme.

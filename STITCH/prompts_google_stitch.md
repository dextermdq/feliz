# Prompts para Google Stitch — Super Mayorista Feliz

Orden sugerido: generá primero la **Home**, ajustala hasta que te guste, y recién ahí seguí con el resto usando "same style" para que Stitch mantenga la coherencia.

Antes de empezar, subí el logo a Stitch como referencia de imagen y ajustá los hex de abajo a los reales del SVG.

---

## Bloque de estilo — pegalo al final de CADA prompt

```
Estilo: e-commerce mayorista argentino, denso pero prolijo, mobile-first.
Paleta: rojo #E30613 (marca, precios, CTA primario), amarillo #FFE000 (acentos,
badges, CTA secundario, siempre con texto negro), negro #0D0D0D (header, footer,
bloques hero), gris #F2F2F2 (fondo), blanco (tarjetas).
Tipografía: Archivo bold para títulos, Inter para cuerpo.
Tarjetas con radio 12px y sombra suave. Botones radio 8px. Badges tipo pill.
Textos en español rioplatense. Precios en pesos argentinos con separador de miles.
Nada de degradados ni de glassmorphism.
```

---

## 1. Home (desktop)

```
Homepage de un supermercado mayorista argentino llamado Super Mayorista Feliz.

Barra superior amarilla de 36px con texto negro en mayúscula: "SIN MÍNIMO DE COMPRA ·
PRECIOS MAYORISTAS PARA TODOS · RETIRÁ EN ALIÓ 3232, MAR DEL PLATA".

Header negro: logo a la izquierda, buscador blanco ancho al centro con placeholder
"¿Qué estás buscando?", y a la derecha "Iniciar sesión" y "Mi carrito" con badge rojo.

Debajo, barra de navegación negra con cuatro entradas con icono amarillo:
CATEGORÍAS (con icono hamburguesa), SIN MÍNIMO DE COMPRA, TODOS LOS MEDIOS DE PAGO,
TE ARMAMOS EL PEDIDO.

Contenido, de arriba a abajo:
1. Hero a ancho completo, 420px de alto, fondo oscuro con foto de góndolas:
   título grande "OFERTONES de la semana", bajada de una línea, botón rojo.
2. Franja blanca con 4 beneficios con icono: sin mínimo de compra, precios mayoristas,
   retiro en el día, te armamos el pedido por WhatsApp.
3. Grilla de 8 categorías en 4 columnas: foto a sangre, overlay oscuro y el nombre
   en mayúscula blanca encima (ALMACÉN, BEBIDAS, LÁCTEOS, CONGELADOS, LIMPIEZA,
   PERFUMERÍA, GOLOSINAS, DESCARTABLES).
4. "Ofertas de la semana": carrusel de 5 tarjetas de producto blancas con badge rojo
   de descuento, precio anterior tachado y botón rojo AGREGAR.
5. Banda roja a ancho completo: "Precios de mayorista, sin mínimo de compra" +
   botón amarillo "VER CATÁLOGO COMPLETO".
6. "Más vendidos": grilla de 8 tarjetas de producto.
7. Tres pasos numerados: Elegí tus productos → Armá el pedido → Retiralo o coordinamos envío.
8. Bloque con mapa, dirección Alió 3232 Mar del Plata, horario lunes a sábado de 8 a 17.

Footer negro de 4 columnas: newsletter con botón amarillo AVISARME, contacto,
información, redes sociales y logos de medios de pago.

Botón flotante verde de WhatsApp abajo a la derecha.

[+ bloque de estilo]
```

---

## 2. Listado de categoría (desktop)

```
Same style. Página de listado de productos de la categoría ALMACÉN en un
supermercado mayorista.

Mismo header y barra de navegación negros que la home.
Breadcrumb: Inicio / Almacén.
Título "ALMACÉN" con "248 productos" al lado en gris.

Sidebar izquierda de 260px con filtros: lista de subcategorías con contador,
marcas con checkboxes, rango de precio con slider, y dos toggles
"Solo ofertas" y "Solo con stock".

Arriba de la grilla: chips rojos de filtros activos con una X, y a la derecha
un select de orden (Relevancia, Menor precio, Mayor precio, A-Z).

Grilla de 3 columnas con 9 tarjetas de producto. Cada tarjeta: imagen cuadrada
sobre blanco, badge rojo "-25%" arriba a la izquierda, marca en gris chico,
nombre en dos líneas bold, "Bulto x 12 u." en gris, precio grande en rojo con
el anterior tachado arriba, texto chico "$1.041 por unidad", selector de
cantidad (− 1 +) y botón rojo AGREGAR a todo el ancho.

Abajo, botón "CARGAR MÁS PRODUCTOS".

[+ bloque de estilo]
```

---

## 3. Ficha de producto (desktop)

```
Same style. Ficha de producto de un supermercado mayorista.

Breadcrumb: Inicio / Almacén / Aceites / Aceite de girasol Natura 900ml.

Columna izquierda: imagen grande del producto sobre fondo blanco con cuatro
miniaturas debajo.

Columna derecha: marca en gris, título "ACEITE DE GIRASOL NATURA 900ML" grande,
SKU chico, badge verde "Disponible", precio grande en rojo "$12.480" con
"$1.040 por unidad" debajo, dato "Bulto cerrado x 12 unidades",
selector de cantidad, botón rojo a todo el ancho "AGREGAR AL CARRITO" y debajo
botón amarillo "CONSULTAR POR WHATSAPP".

Debajo de los botones, tres items con icono en una fila: sin mínimo de compra,
retiro en el día, todos los medios de pago.

Más abajo, tabs: Descripción · Detalles · Envíos y retiro.
Al final, carrusel "Productos relacionados" con 5 tarjetas.

[+ bloque de estilo]
```

---

## 4. Carrito — drawer lateral (desktop)

```
Same style. Panel lateral de carrito que se desliza desde la derecha sobre la
página oscurecida, 420px de ancho.

Encabezado: "Mi carrito (3)" y una X para cerrar.
Tres items, cada uno con miniatura cuadrada, nombre en dos líneas,
"Bulto x 12 u.", selector de cantidad chico, subtotal en rojo a la derecha
y un icono de tacho para eliminar.

Pie fijo: línea "Total estimado" con el monto grande en rojo,
botón rojo a todo el ancho "PEDIR POR WHATSAPP" con el icono de WhatsApp,
y debajo un botón secundario con borde "VER CARRITO COMPLETO".
Texto chico gris: "Sin mínimo de compra".

[+ bloque de estilo]
```

---

## 5. Home mobile

```
Same style. Versión mobile de 390px de la home.

Header negro compacto: logo isotipo, icono de lupa, icono de carrito con badge rojo.
Debajo, la barra amarilla con "SIN MÍNIMO DE COMPRA" rotando.
Hero de 260px de alto.
Beneficios en dos columnas de dos.
Categorías en grilla de 2 columnas.
Ofertas en carrusel horizontal con scroll, tarjeta y media visible.
Botón flotante de WhatsApp abajo a la derecha.

[+ bloque de estilo]
```

---

## 6. Login mayorista

```
Same style. Pantalla de inicio de sesión, layout partido en dos.

Izquierda: fondo negro con el logo en blanco, título "Comprá al por mayor,
sin mínimo de compra" y tres bullets con check amarillo.

Derecha: fondo blanco, card centrada con título "Iniciar sesión",
campos de email y contraseña, link "Olvidé mi contraseña",
botón rojo a todo el ancho "INGRESAR", separador "o",
y texto "¿Todavía no tenés cuenta? Creá tu cuenta mayorista" con el link en rojo.

[+ bloque de estilo]
```

---

## Después de generar

1. Exportá cada pantalla como PNG → `/design-ref/screens/`
2. Exportá el código → `/design-ref/stitch-export/`
3. Poné el logo en `/public/brand/` con las cuatro variantes
4. Recién ahí corré el prompt principal en Claude Code

El agente tiene instrucción explícita de tratar las capturas como fuente de verdad visual y el HTML de Stitch como referencia, no como código de producción.

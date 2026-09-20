import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import type { Product, Category } from "../src/types";

const MARCAS = [
  "Molinos Ala", "Marolio", "La Serenísima", "Arcor", "Quilmes",
  "Coca Cola", "Pepsi", "Fanta", "Sprite", "Naranja Pulp",
  "Natura", "Marolio", "Óleos del Sur", "Profert",
  "Bagley", "Lucchetti", "Canale", "Taragüi", "Playadito",
  "Magistral", "Ayudín", "Fulgencio", "Blem",
  "Dove", "Head & Shoulders", "Pantene", "Sedal"
];

const CATEGORIAS: Category[] = [
  {
    id: "almacen", slug: "almacen", nombre: "ALMACÉN",
    imagen: "https://via.placeholder.com/400x300?text=Almacén",
    icono: "package",
    subcategorias: [
      { id: "aceites", slug: "aceites", nombre: "Aceites y Vinagres" },
      { id: "arroz", slug: "arroz", nombre: "Arroz y Legumbres" },
      { id: "fideos", slug: "fideos", nombre: "Fideos y Pastas Secas" },
      { id: "conservas", slug: "conservas", nombre: "Conservas" },
    ],
    cantidadProductos: 45,
  },
  {
    id: "bebidas", slug: "bebidas", nombre: "BEBIDAS",
    imagen: "https://via.placeholder.com/400x300?text=Bebidas",
    icono: "wine",
    subcategorias: [
      { id: "gaseosas", slug: "gaseosas", nombre: "Gaseosas" },
      { id: "aguas", slug: "aguas", nombre: "Aguas y Saborizadas" },
      { id: "jugos", slug: "jugos", nombre: "Jugos y Polvos" },
    ],
    cantidadProductos: 32,
  },
  {
    id: "lacteos", slug: "lacteos", nombre: "LÁCTEOS",
    imagen: "https://via.placeholder.com/400x300?text=Lácteos",
    icono: "package",
    subcategorias: [
      { id: "leches", slug: "leches", nombre: "Leches" },
      { id: "yogures", slug: "yogures", nombre: "Yogures" },
      { id: "quesos", slug: "quesos", nombre: "Quesos" },
    ],
    cantidadProductos: 18,
  },
  {
    id: "congelados", slug: "congelados", nombre: "CONGELADOS",
    imagen: "https://via.placeholder.com/400x300?text=Congelados",
    icono: "snowflake",
    subcategorias: [
      { id: "papas", slug: "papas", nombre: "Papas y Rebozados" },
      { id: "hamburguesas", slug: "hamburguesas", nombre: "Hamburguesas" },
    ],
    cantidadProductos: 11,
  },
  {
    id: "limpieza", slug: "limpieza", nombre: "LIMPIEZA",
    imagen: "https://via.placeholder.com/400x300?text=Limpieza",
    icono: "droplet",
    subcategorias: [
      { id: "lavandina", slug: "lavandina", nombre: "Lavandina y Desinfectantes" },
      { id: "detergentes", slug: "detergentes", nombre: "Detergentes" },
      { id: "papel", slug: "papel", nombre: "Papel Higiénico y Rollos" },
    ],
    cantidadProductos: 24,
  },
  {
    id: "perfumeria", slug: "perfumeria", nombre: "PERFUMERÍA",
    imagen: "https://via.placeholder.com/400x300?text=Perfumería",
    icono: "droplet",
    subcategorias: [
      { id: "shampoo", slug: "shampoo", nombre: "Shampoo y Acondicionador" },
      { id: "jabones", slug: "jabones", nombre: "Jabones" },
      { id: "panialed", slug: "panialed", nombre: "Pañales" },
    ],
    cantidadProductos: 19,
  },
  {
    id: "golosinas", slug: "golosinas", nombre: "GOLOSINAS",
    imagen: "https://via.placeholder.com/400x300?text=Golosinas",
    icono: "candy",
    subcategorias: [
      { id: "chocolates", slug: "chocolates", nombre: "Chocolates" },
      { id: "galletitas", slug: "galletitas", nombre: "Galletitas" },
      { id: "caramelos", slug: "caramelos", nombre: "Caramelos y Chicles" },
    ],
    cantidadProductos: 16,
  },
  {
    id: "descartables", slug: "descartables", nombre: "DESCARTABLES",
    imagen: "https://via.placeholder.com/400x300?text=Descartables",
    icono: "package",
    subcategorias: [
      { id: "vasos", slug: "vasos", nombre: "Vasos y Platos" },
      { id: "bandejas", slug: "bandejas", nombre: "Bandejas y Envases" },
    ],
    cantidadProductos: 9,
  },
];

function generarProducto(id: number, categoria: Category): Product {
  const subcategoria = categoria.subcategorias[id % categoria.subcategorias.length];
  const marca = MARCAS[id % MARCAS.length];
  const enOferta = id % 7 === 0;
  const destacado = id % 11 === 0;
  const precioBase = 500 + (id * 47) % 5000;
  const precioAnterior = enOferta ? Math.floor(precioBase * 1.3) : undefined;

  return {
    id: `prod-${id}`,
    slug: `producto-${id}`,
    nombre: `${marca.toUpperCase()} — Producto ${id}`,
    marca,
    descripcion: `Producto de calidad mayorista para ${categoria.nombre.toLowerCase()}`,
    categoriaId: categoria.id,
    subcategoriaId: subcategoria.id,
    imagenes: [`https://via.placeholder.com/400x400?text=Prod${id}`],
    sku: `SKU-${String(id).padStart(5, "0")}`,
    unidadVenta: ["unidad", "bulto", "caja", "pack"][id % 4] as any,
    unidadesPorBulto: 10 + (id % 15),
    precioMayorista: precioBase,
    precioMinorista: Math.floor(precioBase * 1.15),
    precioAnterior,
    enOferta,
    destacado,
    stock: id % 20 === 0 ? "sin-stock" : id % 17 === 0 ? "ultimas-unidades" : "disponible",
    etiquetas: [
      ...((id % 5 === 0) ? ["NUEVO"] : []),
      ...(destacado ? ["MÁS VENDIDO"] : []),
      ...(enOferta ? ["PRECIO CUIDADO"] : []),
    ],
  };
}

function main() {
  mkdirSync(join(__dirname, "../src/data"), { recursive: true });

  const productos: Product[] = [];
  CATEGORIAS.forEach((cat) => {
    for (let i = 0; i < cat.cantidadProductos; i++) {
      productos.push(generarProducto(productos.length, cat));
    }
  });

  const ofertas = productos.filter((p) => p.enOferta);

  writeFileSync(
    join(__dirname, "../src/data/categorias.json"),
    JSON.stringify(CATEGORIAS, null, 2)
  );

  writeFileSync(
    join(__dirname, "../src/data/productos.json"),
    JSON.stringify(productos, null, 2)
  );

  writeFileSync(
    join(__dirname, "../src/data/ofertas.json"),
    JSON.stringify(ofertas, null, 2)
  );

  console.log(`✓ Generated ${productos.length} products`);
  console.log(`✓ Generated ${CATEGORIAS.length} categories`);
  console.log(`✓ Generated ${ofertas.length} offers`);
}

main();

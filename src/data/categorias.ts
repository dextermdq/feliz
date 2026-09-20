export interface Categoria {
  id: string;
  slug: string;
  nombre: string;
  imagen: string;
  alt: string;
  cantidadProductos: number;
}

export const categorias: Categoria[] = [
  {
    id: "almacen",
    slug: "almacen",
    nombre: "ALMACÉN",
    imagen: "/images/categorias/almacen.jpg",
    alt: "Góndola de almacén en supermercado mayorista con paquetes de arroz, harina, pasta y botellas de aceite",
    cantidadProductos: 450,
  },
  {
    id: "bebidas",
    slug: "bebidas",
    nombre: "BEBIDAS",
    imagen: "/images/categorias/bebidas.jpg",
    alt: "Paletas de bebidas mayorista apiladas con casos de botellas de gaseosa, agua mineral, jugos y cervezas",
    cantidadProductos: 320,
  },
  {
    id: "lacteos",
    slug: "lacteos",
    nombre: "LÁCTEOS",
    imagen: "/images/categorias/lacteos.jpg",
    alt: "Heladera refrigerada mayorista con sachets de leche, cartones, bloques de queso, crema y yogures",
    cantidadProductos: 180,
  },
  {
    id: "congelados",
    slug: "congelados",
    nombre: "CONGELADOS",
    imagen: "/images/categorias/congelados.jpg",
    alt: "Freezers industriales mayoristas con hamburguesas congeladas, verduras, papas fritas y milanesas",
    cantidadProductos: 110,
  },
  {
    id: "limpieza",
    slug: "limpieza",
    nombre: "LIMPIEZA",
    imagen: "/images/categorias/limpieza.jpg",
    alt: "Góndolas llenas de botellas de lavandina, detergentes pesados, suavizantes y limpiadores de piso",
    cantidadProductos: 240,
  },
  {
    id: "perfumeria",
    slug: "perfumeria",
    nombre: "PERFUMERÍA",
    imagen: "/images/categorias/perfumeria.jpg",
    alt: "Estantes con champu, desodorantes, jabones, pastas dentales y artículos de higiene personal en cantidad mayorista",
    cantidadProductos: 195,
  },
  {
    id: "golosinas",
    slug: "golosinas",
    nombre: "GOLOSINAS",
    imagen: "/images/categorias/golosinas.jpg",
    alt: "Cajas y paquetes de chocolates, alfajores argentinos, caramelos, chicles y snacks dulces coloridos",
    cantidadProductos: 160,
  },
  {
    id: "descartables",
    slug: "descartables",
    nombre: "DESCARTABLES",
    imagen: "/images/categorias/descartables.jpg",
    alt: "Pilas de vasos plásticos desechables, servilletas de papel, cajas de cartón y bolsas en display mayorista",
    cantidadProductos: 90,
  },
];

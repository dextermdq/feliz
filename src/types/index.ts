export type StockStatus = "disponible" | "ultimas-unidades" | "sin-stock";
export type SaleUnit = "unidad" | "bulto" | "caja" | "pack";

export type Product = {
  id: string;
  slug: string;
  nombre: string;
  marca: string;
  descripcion: string;
  categoriaId: string;
  subcategoriaId: string;
  imagenes: string[];
  sku: string;
  unidadVenta: SaleUnit;
  unidadesPorBulto: number;
  precioMayorista: number;
  precioMinorista: number;
  precioAnterior?: number;
  enOferta: boolean;
  destacado: boolean;
  stock: StockStatus;
  etiquetas?: string[];
};

export type Subcategory = {
  id: string;
  slug: string;
  nombre: string;
};

export type Category = {
  id: string;
  slug: string;
  nombre: string;
  imagen: string;
  icono: string;
  subcategorias: Subcategory[];
  cantidadProductos: number;
};

export type CartItem = {
  productId: string;
  cantidad: number;
  precioUnitario: number;
};

export type Cart = {
  items: CartItem[];
  total: number;
};

export type SearchFilters = {
  categoriaId?: string;
  subcategoriaId?: string;
  marca?: string;
  precioMin?: number;
  precioMax?: number;
  soloOfertas?: boolean;
  soloDisponibles?: boolean;
  ordenar?: "relevancia" | "precio-asc" | "precio-desc" | "a-z" | "ofertas-primero";
};

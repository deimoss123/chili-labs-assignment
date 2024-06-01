import { Category } from "@/types/Category";
import { Product } from "@/types/Product";
import ProductCard from "./ProductCard";

const BASE_URL = "https://dummyjson.com/products";

function fetchProductsURL(query?: string) {
  return query ? `${BASE_URL}/search?q=${query}` : BASE_URL;
}

type Props = {
  query?: string;
};

export default async function ProductList({ query }: Props) {
  const [fetchProducts, fetchCategories] = await Promise.all([
    fetch(fetchProductsURL(query)).then((r) => r.json()),
    fetch(`${BASE_URL}/categories`).then((r) => r.json()),
  ]);

  const products: Product[] = fetchProducts.products;
  const categories: Category[] = fetchCategories;

  console.log(query);

  return (
    <ul className="flex flex-wrap gap-4">
      {products.map((p) => (
        <ProductCard
          product={p}
          key={p.id}
          categoryName={
            categories.find((c) => c.slug === p.category)?.name ?? p.category
          }
        />
      ))}
    </ul>
  );
}

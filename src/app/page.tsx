import ProductCard from "@/components/ProductCard";
import { Category } from "@/types/Category";
import { Product } from "@/types/Product";

const BASE_URL = "https://dummyjson.com/products";

export default async function Home() {
  const [fetchProducts, fetchCategories] = await Promise.all([
    fetch(`${BASE_URL}/category/mens-shirts`).then((r) => r.json()),
    fetch(`${BASE_URL}/categories`).then((r) => r.json()),
  ]);

  const products: Product[] = fetchProducts.products;
  const categories: Category[] = fetchCategories;

  return (
    <>
      <h1 className="text-lg">Products</h1>
      <main className="px-10">
        <ul className="flex flex-wrap gap-4">
          {products.map((p) => (
            <ProductCard
              product={p}
              categoryName={categories.find((c) => c.slug === p.category)?.name ?? p.category}
            />
          ))}
        </ul>
      </main>
    </>
  );
}

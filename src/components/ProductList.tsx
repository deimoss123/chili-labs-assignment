import { Category } from "@/types/Category";
import { Product } from "@/types/Product";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const BASE_URL = "https://dummyjson.com/products";
const PRODUCTS_PER_PAGE = 12;

function fetchProductsURL(
  query: string,
  currentPage: number,
  limit: number,
) {
  const params = new URLSearchParams();

  if (query) {
    params.set("q", query);
  }

  params.set("skip", ((currentPage - 1) * limit).toString());
  params.set("limit", limit.toString());
  params.set("select", "id,title,price,category,thumbnail");

  return query
    ? `${BASE_URL}/search?${params.toString()}`
    : `${BASE_URL}?${params.toString()}`;
}

type Props = {
  query: string;
  currentPage: number;
};

export default async function ProductList({ query, currentPage }: Props) {
  const [fetchProducts, fetchCategories] = await Promise.all([
    fetch(fetchProductsURL(query, currentPage, PRODUCTS_PER_PAGE)).then((r) => r.json()),
    // it isn't optimal to fetch categories every time we fetch products
    // this should be fetched once and cached
    fetch(`${BASE_URL}/categories`).then((r) => r.json()),
  ]);

  const products: Product[] = fetchProducts.products;
  const categories: Category[] = fetchCategories;

  const totalPages = Math.ceil(fetchProducts.total / PRODUCTS_PER_PAGE);

  return (
    <>
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
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}

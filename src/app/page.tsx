import ProductList from "@/components/ProductList";
import Search from "@/components/Search";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  return (
    <main className="p-4">
      <Search />
      <Suspense key={searchParams?.query ?? null} fallback={<p>Loading...</p>}>
        <ProductList query={searchParams?.query} />
      </Suspense>
    </main>
  );
}

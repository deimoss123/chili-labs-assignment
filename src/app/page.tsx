import ProductList from "@/components/ProductList";
import ProductListSkeleton from "@/components/ProductListSkeleton";
import Search from "@/components/Search";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query ?? "";

  let currentPage = 1;
  if (
    searchParams?.page &&
    !isNaN(+searchParams.page) &&
    +searchParams.page > 0
  ) {
    currentPage = +searchParams.page;
  }

  return (
    <main className="p-4">
      <Search />
      <Suspense
        key={`${query}_${currentPage}`}
        fallback={<ProductListSkeleton />}
      >
        <ProductList query={query} currentPage={currentPage} />
      </Suspense>
    </main>
  );
}

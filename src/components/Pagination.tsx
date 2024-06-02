"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type Props = {
  totalPages: number;
  currentPage: number;
};

function createPageURL(
  pageNumber: number | string,
  searchParams: URLSearchParams,
  pathname: string,
) {
  const params = new URLSearchParams(searchParams);
  params.set("page", pageNumber.toString());
  return `${pathname}?${params.toString()}`;
}

export default function Pagination({ totalPages, currentPage }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  return (
    <div className="flex gap-2 flex-wrap justify-center mt-6 mb-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <Link
          href={createPageURL(i + 1, searchParams, pathname)}
          className={`text-center w-8 py-1 rounded ${currentPage === i + 1 ? "bg-blue-200" : "bg-gray-100"}`}
          key={i + 1}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  );
}

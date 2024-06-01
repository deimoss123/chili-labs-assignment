"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((text: string) => {
    console.log("searching:", text);

    const params = new URLSearchParams(searchParams);

    if (text) {
      params.set("query", text);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="w-full flex mx-auto sm:w-96">
      <input
        type="text"
        className="border border-black m-4 mx-auto w-full border-none bg-gray-100 p-2 rounded"
        placeholder="Search products..."
        defaultValue={searchParams.get("query")?.toString() ?? ""}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

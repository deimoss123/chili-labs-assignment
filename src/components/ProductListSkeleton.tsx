export default function ProductListSkeleton() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
      {Array.from({ length: 12 }, (_, i) => (
        <li key={i} className="bg-slate-100 p-2">
          <div className="aspect-[1/1] bg-white" />
          <div className="rounded h-3 w-1/3 my-1 animate-pulse bg-gray-200" />
          <div className="rounded h-4 my-1 animate-pulse bg-gray-300" />
          <div className="rounded h-4 w-1/4 mt-1 animate-pulse bg-gray-300" />
        </li>
      ))}
    </ul>
  );
}

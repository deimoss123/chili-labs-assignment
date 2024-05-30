import { Product } from "@/types/Product";

type Props = {
  product: Product;
  categoryName: string;
};

export default function ProductCard({ product, categoryName }: Props) {
  return (
    <li key={product.id} className="mb-4 w-80 bg-slate-100 p-2">
      <img
        className="aspect-[1/1] object-center object-cover w-full bg-white"
        src={product.thumbnail}
        alt={product.title}
      />
      <span className="text-xs text-gray-500">{categoryName}</span>
      <p>{product.title}</p>
      <p>${product.price}</p>
    </li>
  );
}

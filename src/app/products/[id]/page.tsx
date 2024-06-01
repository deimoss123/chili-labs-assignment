import ReviewCard from "@/components/ReviewCard";
import { Product } from "@/types/Product";
import Link from "next/link";

async function Page({ params: { id } }: { params: { id: string } }) {
  const product = (await fetch(`https://dummyjson.com/products/${id}`).then(
    (res) => res.json(),
  )) as Product;

  console.log(product);

  return (
    <main className="mt-8 px-4 pb-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="">
          <img src={product.images[0]}></img>
        </div>
        <div className="">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <div className="flex gap-6 mb-8">
            <div>{product.rating}/5</div>
            <Link href="#reviews" className="text-blue-600">
              {product.reviews.length} reviews
            </Link>
          </div>

          <div className="text-xl mb-4">${product.price}</div>

          <span className="w-full block text-center bg-blue-200 mb-1 rounded p-[2px] text-xs">
            {product.stock} in stock
          </span>
          <button className="w-full bg-black text-white p-4 font-bold rounded">
            Add to cart
          </button>

          <h3 className="mt-8 text-lg pb-1 font-semibold">About this item</h3>
          <p>{product.description}</p>

          <h3 className="mt-4 pt-4 border-t border-t-gray-300 text-lg pb-1 font-semibold">
            Product details
          </h3>
          <ul>
            {/* not sure what units this mock API uses */}
            <li>Weight: {product.weight} kg</li>
            <li>
              Package dimensions: {product.dimensions.width} x{" "}
              {product.dimensions.height} x {product.dimensions.depth} cm
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-2" id="reviews">
        <h2 className="text-xl font-semibold mb-2">Customer reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {product.reviews.map((review) => (
            <ReviewCard review={review} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Page;

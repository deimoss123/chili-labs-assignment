import { Review } from "@/types/Product";

type Props = {
  review: Review;
};

export default function ReviewCard({ review }: Props) {
  const dateStr = new Date(review.date).toLocaleString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-gray-100 rounded p-2 text-sm">
      <span className="font-semibold text-sm mb-1 block">{review.reviewerName}</span>
      <div className="flex justify-between mb-2">
        <span>{review.rating}/5</span>
        <span>{dateStr}</span>
      </div>
      <p>{review.comment}</p>
    </div>
  );
}

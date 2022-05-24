import useReview from "../../Hooks/useReview";
import ReviewCard from "../ReviewCard/ReviewCard";

const Review = () => {
    const [review] = useReview();
    console.log(review);

    return (
        <div>
        <h1 className="text-center text-3xl font-bold mt-10">
            {review.length}
        </h1>
        <div className="grid grid-cols-3 gap-4">
            {review.map((review) => (
            <ReviewCard key={review.id} review={review} />
            ))}
        </div>
        </div>
    );
};

export default Review;

import React from "react";

const ReviewCard = ({ review }) => {
    return (
    <div className="bg-sky-50 rounded-xl py-14 px-10 pb-5 ml-4 my-10 w-9/12 text-center">
        <h1 className="text-2xl font-semibold">{review.name}</h1>
        <p className="mt-4">{review.review}</p>
        <br/>
        <small>Ratings: {review.rating}</small>
        <p>{review.star}</p>
    </div>
    );
};

export default ReviewCard;

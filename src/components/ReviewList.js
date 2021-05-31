import React from 'react';
import Heart from '../images/heart.svg';

const ReviewList = ({ data }) => {
    return (
        <div>
            {data.map(review => (
                <div className="blog-preview" key={review.id}>
                    <h3>{review.title}</h3>
                    <p className="details">{review.rating}/10 by {review.reviewedBy} <span className="heart"><img src={Heart} alt="Heart" /> 1.56K</span></p>
                </div>
                ))}
        </div>
    )
}

export default ReviewList;

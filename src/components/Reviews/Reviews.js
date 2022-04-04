import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    const handleAddToCart = (review) => {
        const newCart = [...cart, review];
        setCart(newCart);
    }
    return (
        <div className='my-8'>
            <h4>What our customers say!</h4>
            <div className='products-container'>
                {reviews.map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
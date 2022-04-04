import React from 'react';
import './Review.css'

const Review = ({ review }) => {

    const { name, body, ratings } = review;
    return (
        <div className='reviewer'>
            <div className='reviewer-info text-left'>
                <p><span className='font-medium'>Name:</span> {name}</p>
                <p><span className='font-medium'>Description:</span> {body}</p>
                <p><span className='font-medium'>Review:</span> {ratings}/5</p>
            </div>
        </div>
    );
};

export default Review;
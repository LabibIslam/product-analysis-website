import React from 'react';

const Review = ({ review }) => {

    const { name, body, ratings } = review;
    return (
        <div className='reviewer'>
            <div className='reviewer-info'>
                <p className='reviewer-name'>Name: {name}</p>
                <p className='reviewer-body'>Description: {body}</p>
                <p className='reviewer-ratings'>Review: {ratings}</p>
            </div>
        </div>
    );
};

export default Review;
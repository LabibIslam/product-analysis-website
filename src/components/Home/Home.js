import React from 'react';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div className='my-8'>
            <div className='flex justify-evenly items-center'>
                <div>
                    <h1>Analysis Is The Key</h1>
                    <p>This site is a private site for doing some official analysis of sells data.</p>
                </div>
                <div className='w-2/5'>
                    <img src="images/home-image.jpg" alt="" />
                </div>
            </div>
            <div>
                <Reviews></Reviews>
                <button className='bg-gray-700 w-1/5 hover:w-1/4 h-10 rounded-lg'>
                    <a className='no-underline text-white' href="/reviews">For More Reviews</a>
                </button>
            </div>

        </div>
    );
};

export default Home;
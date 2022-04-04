import React from 'react';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div className='my-8'>
            <div className=''>
                <div>
                    <h1>hello from Home</h1>
                    <h1>hello from Home</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, minus. Ea maxime ab cupiditate est numquam earum tenetur magnam mollitia, non rerum explicabo cum, laborum eos. Placeat dolorem id iusto!</p>
                </div>
                <div>
                    <img src="" alt="" />
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
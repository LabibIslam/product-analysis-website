import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-evenly font-medium text-3xl'>
                <CustomLink to="/">HOME</CustomLink>
                <CustomLink to="/reviews">REVIEW</CustomLink>
                <CustomLink to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink to="/blogs">BLOGS</CustomLink>
            </nav>
        </div>
    );
};

export default Header;
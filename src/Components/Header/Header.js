import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className="sticky top-0 bg-sky-100 px-12 py-8 flex md:justify-between">
            <div className="hidden md:block">
            </div>
            <div className="flex gap-7 ">
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/reviews">Reviews</ActiveLink>
                <ActiveLink to="/dashboard">Dashboard</ActiveLink>
                <ActiveLink to="/blog">Blog</ActiveLink>
                <ActiveLink to="/about">About</ActiveLink>
            </div>
        </div>
    );
};

export default Header;
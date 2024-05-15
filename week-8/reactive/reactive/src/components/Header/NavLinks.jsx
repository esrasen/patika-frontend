import React from 'react';

const NavLinks = () => (
    <div className="md:flex space-x-8 text-ligthGrey font-bold hidden">
        <a>Home</a>
        <a>Classes</a>
        <a>Trainer</a>
        <a>Review</a>
        <a>Contact</a>
        <a className="bg-amber-500 rounded-md px-1 pb-1">JOIN US</a>
    </div>
);

export default NavLinks;
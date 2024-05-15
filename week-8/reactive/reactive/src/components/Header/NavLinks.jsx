import React from 'react';

const NavLinks = () => (
    <div className="md:flex space-x-8 text-ligthGrey font-bold hidden">
        <a href="#home">Home</a>
        <a href="#classes">Classes</a>
        <a href="#trainer">Trainer</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
        <a className="bg-amber-500 rounded-md px-1 pb-1">JOIN US</a>
    </div>
);

export default NavLinks;
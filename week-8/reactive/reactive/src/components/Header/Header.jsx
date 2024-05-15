import React, { useState, useEffect } from 'react';
import "./header.css";
import Logo from "./Logo.jsx";
import NavLinks from "./NavLinks.jsx";

const Header = () => {

        const [solidHeader, setSolidHeader] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 60) {
                    setSolidHeader(true);
                } else {
                    setSolidHeader(false);
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

    return (
        <header className={`fixed top-0 z-10 w-full ${solidHeader ? 'solid-header' : 'transparent-header'}`}
                id="navbar">
            <nav className="container mx-auto p-4 flex justify-around items-center">
                <Logo />
                <NavLinks />
            </nav>
        </header>

    );
};
export default Header;
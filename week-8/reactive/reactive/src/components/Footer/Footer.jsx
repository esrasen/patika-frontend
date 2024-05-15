import React from 'react';
import Information from "./Information.jsx";
import Helpful from "./Helpful.jsx";
import FooterText from "./FooterText.jsx";

const Footer = () => {
    return (
        <footer className="bg-blue py-10">
            <div className="mx-8 sm:mx-40 gap-5   ">
                <div className="flex gap-10">
                    <img src="../../../public/images/logo.png" className="w-44" alt=""/>
                </div>
                <FooterText/>
                <div className="flex justify-around pt-5">
                    <Information/>
                    <Helpful/>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
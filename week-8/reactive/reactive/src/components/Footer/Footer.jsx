import React from 'react';
import Information from "./Information.jsx";
import Helpful from "./Helpful.jsx";

const Footer = () => {
    return (
        <footer className="bg-blue py-10">
            <div className="mx-8 sm:mx-40 gap-5   ">
                <div className="flex gap-10">
                    <img src="../../../public/images/logo.png" class="w-44" alt=""/>
                </div>
                <div>
                    <p className="text-ligthGrey ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
                        ipsa nobis
                        porro sint temporibus. Aliquid architecto aspernatur delectus dolore dolorum, error laboriosam
                        magnam
                        nulla, obcaecati, quam tempora velit. A, voluptate.</p>
                </div>
                <div className="flex justify-around pt-5">
                    <Information/>
                    <Helpful/>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
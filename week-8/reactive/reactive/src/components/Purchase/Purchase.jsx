import React from 'react';
import "./purchase.css";
import Card from "./Card.jsx";
const Purchase = () => {

    return (
        <div className="py-12 ">
            <div className=" text-center pb-5">
                <h2 className="text-4xl font-bold text-blue">Purchase From Us</h2>
                <hr className="border-4 border-amber-500 my-8 w-28 mx-auto rounded"/>
                    <p className="mx-28 sm:mx-72">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dignissimos incidunt libero
                        necessitatibus, nobis numquam obcaecati quia sapiente sit tempora.</p>
            </div>
            <Card />
        </div>

    );
};

export default Purchase;
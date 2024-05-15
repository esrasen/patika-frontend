import React from 'react';
import Basket from "./Basket.jsx";
import Product from "./Product.jsx";
const Card = () => {

    return (
        <div className="grid-cols-6 sm:grid px-10 sm:px-0">
            <div
                className="card border shadow-2xl mx-3 mt-6 col-start-2 flex flex-col rounded-lg bg-white  shadow-secondary-1 sm:shrink-0 sm:grow sm:basis-0">
                <img className="rounded-t-lg"
                     src="../../../public/images/purchase1.jpg" alt=""/>
                <Product />
            </div>

            <div
                className="card border shadow-2xl mx-3 mt-6 flex flex-col rounded-lg bg-white  shadow-secondary-1 sm:shrink-0 sm:grow sm:basis-0">
                <img className="rounded-t-lg"
                     src="../../../public/images/purchase2.jpg" alt=""/>
                <Product />
            </div>

            <div
                className="card border shadow-2xl mx-3 mt-6  flex flex-col rounded-lg bg-white  shadow-secondary-1 sm:shrink-0 sm:grow sm:basis-0">
                <img className="rounded-t-lg"
                     src="../../../public/images/purchase3.jpg" alt=""/>
                <Product />
            </div>

            <div
                className="card border shadow-2xl mx-3 mt-6 flex flex-col rounded-lg bg-white  shadow-secondary-1 sm:shrink-0 sm:grow sm:basis-0">
                <img className="rounded-t-lg"
                     src="../../../public/images/purchase4.jpg" alt=""/>
              <Product />
            </div>
        </div>
    );
};
export default Card;
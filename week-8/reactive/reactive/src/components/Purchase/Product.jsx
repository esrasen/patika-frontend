import React from "react";
import Basket from "./Basket.jsx";

const Product = () => {
    return (
        <div className=" text-center">
            <h5 className="mb-1 text-xl font-medium leading-tight">Kettlebel / 3kg</h5>
            <p className="mb-2 text-base">
                <small className="font-bold"><span className="line-through">79,99$</span> / 49,99$</small>
            </p>
            <Basket/>
        </div>
    );
};

export default Product;
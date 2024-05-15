import React from 'react';
import Calculation from "./Calculation.jsx";

const BMIDetails = () =>{
    return (
        <div className="flex flex-col justify-center align-middle gap-10 w-10/12 sm:w-5/12">
            <h2 className="text-4xl font-bold text-blue">BMI Calculator</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum
                corporis odio parito ducimus explicabo reiciendis alias quasi culpa libero amet similique
                nisi!</p>
            <p>Lorem ipsum do Loremriatur ad harum non, molestias maiores molestiae sapiente perferendis veniam
                earum fugit ipsum
                repellendus archite ipsum dolor sit amet. chitecto ducimus explicabo reiciendis alias quasi
                culpa libero amet similique nisi!</p>
            <Calculation/>
        </div>
    );
};
export default BMIDetails;
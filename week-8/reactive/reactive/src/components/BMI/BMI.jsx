import React from 'react';
import "./bmi.css";
import BMIImage from "./BMIImage.jsx";
import Calculation from "./Calculation.jsx";
import BMIDetails from "./BMIDetails.jsx";

const BMI = () => {
    return (
        <div className="bg-ligthGrey py-12">
            <div className="container mx-auto flex flex-wrap align-middle gap-10 py-10 justify-center">
               <BMIDetails/>
                <BMIImage/>
            </div>
        </div>
    );
};
export default BMI;
import React from 'react';

const BMIImage = () =>{
return(
    <div className="flex flex-col">
        <p className="text-center font-bold">Your BMI</p>
        <img className="w-96" src="../../../public/images/bmi-index.jpg" alt=""/>
        <div id="triangle-container" className="relative w-full ">
            <div className="triangle relative w-full" id="triangle"></div>
        </div>
    </div>
);
};
export default BMIImage;
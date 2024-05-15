import React from 'react';
import "./bmi.css";

const BMI = () => {
    return (
        <section className="bg-ligthGrey py-12">
            <div className="container mx-auto flex flex-wrap align-middle gap-10 py-10 justify-center">
                <div className="flex flex-col justify-center align-middle gap-10 w-10/12 sm:w-5/12">
                    <h2 className="text-4xl font-bold text-blue">BMI Calculator</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum
                        corporis  odio parito ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!</p>
                    <p>Lorem ipsum do Loremriatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum
                        repellendus archite ipsum dolor sit amet. chitecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!</p>

                    <form className="flex flex-col sm:flex-row sm:gap-3 ">
                        <div className="mb-4 flex flex-row items-center">
                            <input type="number" id="height" name="height" className="mt-1 p-1 border border-gray-700 rounded w-56 sm:w-full"
                                   placeholder="Your Height"/>
                                <label className="block text-gray-700 pl-2">cm</label>
                        </div>
                        <div className="mb-4 flex flex-row items-center">
                            <input type="number" id="weight" name="weight" className="mt-1 p-1 border border-gray-700 rounded w-56 sm:w-full"
                                   placeholder="Your Weight"/>
                                <label className="block text-gray-700 pl-2">kg</label>
                        </div>
                    </form>
                </div>
                <div className="flex flex-col">
                    <p className="text-center font-bold">Your BMI</p>
                    <img className="w-96" src="../../../public/images/bmi-index.jpg" alt=""/>
                        <div id="triangle-container" className="relative w-full ">
                            <div className="triangle relative w-full" id="triangle"></div>
                        </div>
                </div>
            </div>
        </section>
    );
};
export default BMI;
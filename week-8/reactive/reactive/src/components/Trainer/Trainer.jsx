import React from 'react';
import "./trainer.css";
import Coach from "./Coach.jsx";

const Trainer = () => {

    return (
        <div id="trainer" className="bg-skyBlue py-12 ">
            <div className=" text-center pb-5">
                <h2 className="text-4xl font-bold text-blue">Our Best Trainers</h2>
                <hr className="border-4 border-darkOrange my-8 w-28  mx-auto rounded"/>
                    <p className="mx-28 sm:mx-72">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dignissimos incidunt libero
                        necessitatibus, nobis numquam obcaecati quia sapiente sit tempora.</p>
            </div>
            <Coach />
        </div>
    );
};

export default Trainer;
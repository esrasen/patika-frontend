import React from 'react';
import "./classes.css";

const Classes = () => {

    return (
        <section id="classes" className="bg-ligthGrey py-12 ">
    <div className=" text-center">
        <h2 className="text-4xl font-bold text-blue">Our Classes</h2>
        <hr className="border-4 border-orange my-8 w-28 mx-auto rounded"/>
            <p className="mx-28 sm:mx-72">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dignissimos incidunt libero
                necessitatibus, nobis numquam obcaecati quia sapiente sit tempora.</p>
    </div>

    <div id="btnsDiv" className="container mx-auto grid grid-cols-2 sm:grid-cols-8 gap-5 sm:gap-10 sm:mt-10 mt-5">
        <button id="yoga" className=" yoga bg-blue text-ligthGrey mx-10 sm:mx-0 sm:col-start-3 sm:mr-10 py-2 rounded hover:bg-darkOrange font-extrabold">Yoga </button>
        <button id="group" className=" group bg-blue text-ligthGrey mx-10 sm:mx-0 rounded sm:mr-10 hover:bg-darkOrange font-extrabold">Group </button>
        <button id="solo" className="solo bg-blue text-ligthGrey rounded sm:mx-0 mx-10 sm:mr-10 py-2 hover:bg-darkOrange font-extrabold">Solo</button>
        <button id="stretching" className="stretching bg-blue text-ligthGrey mx-10 sm:mx-0 rounded hover:bg-darkOrange font-extrabold"> Stretching </button>
    </div>
    <div id="feat-cont" className="container mx-auto flex flex-wrap align-middle gap-10 py-10 mt-10 justify-center">
        <div className="flex flex-col justify-center align-middle gap-5 w-10/12 sm:w-5/12">
            <h2 className="text-2xl font-extrabold text-gray-600">Why Are You Yoga ?</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae.
                Atque, illum corporis
                odio
                pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum
                repellendus
                architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!</p>
            <h2 id="subtitle" className="text-2xl font-extrabold text-gray-600">When comes Yoga Your Time.</h2>
            <ul className="text-gray-700 ">
                <li className="pb-3">Saturday-Sunday: 8:00-10:00 am</li>
                <li className="pb-3">Monday-Tuesday: 10:00-12:00 pm</li>
                <li>Wednesday-Friday: 3:00-6:00 pm</li>
            </ul>
        </div>
        <img className="w-96 " src="../../../public/images/yoga.jpg" alt=""/>
    </div>
</section>
);
};

export default Classes;
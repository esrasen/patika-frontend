import React from "react";

const Buttons = () => {
    return (
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <a href="#"
               className="bg-blue border-2 border-blue text-ligthGrey font-bold hover:bg-orange px-6 py-2 mr-10 rounded-sm  ">Sign
                Up</a>
            <a href="#"
               className=" text-ligthGrey border-2 border-white font-bold hover:bg-orange px-6 py-2 mr-10 sm:mr-0 rounded-sm ">Details</a>
        </div>
    );
};

export default Buttons;
import React from "react";

const Form = () => {
    return (
        <form className="sm:mx-auto flex flex-col gap-5 ">
            <input type="text" className=" bg-skyBlue shadow-sm p-2 rounded" placeholder="Your Name"/>
            <input type="email" className="bg-skyBlue shadow-sm p-2 rounded" placeholder="Your Email"/>
            <textarea className="p-2 rounded bg-skyBlue shadow-sm min-w-20 min-h-32"
                      placeholder="Your Message"></textarea>
        </form>
    );

};

export default Form;
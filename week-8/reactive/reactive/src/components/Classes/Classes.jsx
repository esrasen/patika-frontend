import "./classes.css";
import ClassButton from "./ClassButton.jsx";
import React, { useState } from 'react';
import DynamicContent from "./DynamicContent.jsx";

const Classes = () => {
        const [content, setContent] = useState("yoga");

        const handleButtonClick = (type) => {
            setContent(type);
        };

    return (
        <div id="classes" className="bg-ligthGrey py-12 ">
            <div className=" text-center">
                <h2 className="text-4xl font-bold text-blue">Our Classes</h2>
                <hr className="border-4 border-orange my-8 w-28 mx-auto rounded"/>
                <p className="mx-28 sm:mx-72">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                    dignissimos incidunt libero
                    necessitatibus, nobis numquam obcaecati quia sapiente sit tempora.</p>
            </div>
            <ClassButton onClick={handleButtonClick} />
            <DynamicContent content={content} />
        </div>
    );
};

export default Classes;
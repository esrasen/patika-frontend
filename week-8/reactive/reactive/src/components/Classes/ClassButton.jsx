import React from 'react';

const ClassButton = ({ onClick }) => {
    return (
        <div id="btnsDiv" className="container mx-auto grid grid-cols-2 sm:grid-cols-8 gap-5 sm:gap-10 sm:mt-10 mt-5">
            <button id="yoga" className="yoga bg-blue text-ligthGrey mx-10 sm:mx-0 sm:col-start-3 sm:mr-10 py-2 rounded hover:bg-darkOrange font-extrabold" onClick={() => onClick("yoga")}>
                Yoga
            </button>
            <button id="group" className="group bg-blue text-ligthGrey mx-10 sm:mx-0 rounded sm:mr-10 hover:bg-darkOrange font-extrabold" onClick={() => onClick("group")}>
                Group
            </button>
            <button id="solo" className="solo bg-blue text-ligthGrey rounded sm:mx-0 mx-10 sm:mr-10 py-2 hover:bg-darkOrange font-extrabold" onClick={() => onClick("solo")}>
                Solo
            </button>
            <button id="stretching" className="stretching bg-blue text-ligthGrey mx-10 sm:mx-0 rounded hover:bg-darkOrange font-extrabold" onClick={() => onClick("stretching")}>
                Stretching
            </button>
        </div>
    );
};

export default ClassButton;

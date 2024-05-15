import React from 'react';

const Statistics = () => {

    return (
        <div className="bg-sky-50 flex flex-wrap justify-center pt-10 pb-10 space-x-0 sm:space-x-6 ">
            <div className="box-border border-none h-28 w-7/12 sm:w-56 p-6  bg-white flex flex-col text-center m-2">
                <p className="font-extrabold text-blue">325</p>
                <p className="font-extrabold">Course</p>
            </div>
            <div className="box-border border-none h-28 w-7/12  sm:w-56 p-6  bg-white flex flex-col text-center m-2">
                <p className="font-extrabold text-blue">405</p>
                <p className="font-extrabold">Work Out</p>
            </div>
            <div className="box-border border-none h-28  w-7/12 sm:w-56 p-6  bg-white flex flex-col text-center m-2">
                <p className="font-extrabold text-blue">305</p>
                <p className="font-extrabold">Working Hour</p>
            </div>
            <div className="box-border border-none h-28 w-7/12 sm:w-56 p-6  bg-white flex flex-col text-center m-2">
                <p className="font-extrabold text-blue">705</p>
                <p className="font-extrabold">Happy Client</p>
            </div>
        </div>
    );
};

export default Statistics;
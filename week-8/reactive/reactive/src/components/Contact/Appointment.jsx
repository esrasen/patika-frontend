import React from "react";
import Form from "./Form";

const Appointment = () => {
    return (
        <div className="sm:w-4/12 w-8/12">
            <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                    <p className="text-gray-600 text-xl">Mobile Number </p>
                    <p className="text-gray-600">+135 773 321 4442</p>
                </div>
                <div className="text-sm leading-6">
                    <p className="text-gray-600 text-xl">Email Address </p>
                    <p className="text-gray-600">demo@demo.com</p>
                </div>
            </div>
            <div>
                <p className="text-gray-700 text-2xl py-5">Make An Appointment</p>
            </div>
            <Form/>
        </div>
    );

};

export default Appointment;
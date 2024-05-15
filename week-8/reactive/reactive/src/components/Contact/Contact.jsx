import React from "react";
import Appointment from "./Appointment.jsx";
import Map from "./Map.jsx";

const Contact = () => {
    return (
        <div id="contact" className="bg-ligthGrey py-12 ">
            <div className=" text-center pb-5">
                <h2 className="text-4xl font-bold text-blue">CONTACT US </h2>
                <hr className="border-4 border-darkOrange my-8 w-28 mx-auto rounded"/>
                <p className="mx-28 sm:mx-72">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                    dignissimos incidunt libero
                    necessitatibus, nobis numquam obcaecati quia sapiente sit tempora.</p>
            </div>

            <div className="flex items-center flex-col sm:flex-row justify-center sm:gap-20 pt-10">
                <Appointment/>
                <Map/>
            </div>
        </div>
    );
};

export default Contact;
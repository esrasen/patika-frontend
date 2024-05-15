import React from "react";
import Appointment from "./Appointment.jsx";

const Contact = () => {
    return(
        <div id="contact" className="bg-ligthGrey py-12 ">
            <div className=" text-center pb-5">
                <h2 className="text-4xl font-bold text-blue">CONTACT US </h2>
                <hr className="border-4 border-darkOrange my-8 w-28 mx-auto rounded"/>
                    <p className="mx-28 sm:mx-72">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dignissimos incidunt libero
                        necessitatibus, nobis numquam obcaecati quia sapiente sit tempora.</p>
            </div>

            <div className="flex items-center flex-col sm:flex-row justify-center sm:gap-20 pt-10">
               <Appointment />
                <div className="sm:w-4/12 w-10/12 mt-5">
                   {/* <div style="width: 100%">
                        <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=eski%C5%9Fehir,turkey+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a href="https://www.gps.ie/">gps devices</a></iframe>
                    </div>*/}
                </div>
            </div>
        </div>
    );
};

export default Contact;
import React from 'react';

const Coach = () => {

    return (

            <div className="grid gap-10 grid-cols-1 px-20 sm:px-0 sm:grid-cols-5 items-center  ">
                <div className="box sm:col-start-2 relative overflow-hidden p-2 ">
                    <img src="../../../public/images/trainer1.jpg" className="rounded-lg object-cover border-2 border-amber-500 " alt=""/>
                    <div className="content2"></div>
                    <div className="content">
                        <h4>Olivia Parker</h4>
                        <h3>Yoga Instructor</h3>
                    </div>
                </div>
                <div className="box relative overflow-hidden p-2">
                    <img src="../../../public/images/trainer2.jpg" className="rounded-lg object-cover border-2 border-amber-500" alt=""/>
                    <div className="content2"></div>
                    <div className="content">
                        <h4>Diego Ramirez</h4>
                        <h3>CrossFit Coach</h3>
                    </div>
                </div>
                <div className="box relative overflow-hidden p-2 ">
                    <img src="../../../public/images/trainer3.jpg" className="rounded-lg object-cover border-2 border-amber-500" alt=""/>
                    <div className="content2"></div>
                    <div className="content">
                        <h4>Jane Doe</h4>
                        <h3>Cardio Trainer</h3>
                    </div>
                </div>
            </div>
    );
};

export default Coach;
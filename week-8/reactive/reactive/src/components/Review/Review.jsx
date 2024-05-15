import React from 'react';
import "./review.css";
import Text from "./Text.jsx";
import ReviewHeader from "./ReviewHeader.jsx";

const Review = () => {
    return (
        <div id="review" className="bg-skyBlue py-12 ">
           <ReviewHeader />
            <div className="sm:mx-40 flex flex-col sm:flex-row sm:justify-evenly gap-5 pt-10 pb-20">
                <div className="flex flex-col items-baseline ">
                    <div className="flex gap-6"><img class="w-10 h-10 rounded-full" src="./public/images/client1.jpg"/>
                        <div>
                            <p className="font-medium">Diet Expert</p>
                            <p className="font-light">CFO</p>
                        </div>
                    </div>
                    <Text />
                </div>
                <div className="flex flex-col mt-20 sm:mt-0 items-baseline ">
                    <div className="flex gap-6"><img className="w-10 h-10 rounded-full" src="./public/images/client2.jpg"/>
                        <div>
                            <p className="font-medium">Cardio Trainer </p>
                            <p className="font-light">CEO</p>
                        </div>
                    </div>
                   <Text />
                </div>
            </div>
        </div>

    );
};

export default Review;
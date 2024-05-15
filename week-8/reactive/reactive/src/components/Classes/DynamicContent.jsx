import React from 'react';

const DynamicContent = ({ content }) => {
    const contentData = {
        yoga: {
            header: "Why Are You Yoga ?",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporis odio pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!",
            subTitle: "When comes Yoga Your Time.",
            list: (
                <>
                    <li className="pb-3">Saturday-Sunday: 8:00-10:00 am</li>
                    <li className="pb-3">Monday-Tuesday: 10:00-12:00 pm</li>
                    <li>Wednesday-Friday: 3:00-6:00 pm</li>
                </>
            ),
            imgSrc: "./public/images/yoga.jpg"
        },
        group: {
            header: "Why Are You Group ?",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae.",
            subTitle: "When comes Group Your Time.",
            list: (
                <>
                    <li className="pb-3">Saturday-Sunday: 9:00-10:00 am</li>
                    <li className="pb-3">Monday-Tuesday: 12:00-14:00 pm</li>
                    <li>Wednesday-Friday: 5:00-6:00 pm</li>
                </>
            ),
            imgSrc: "./public/images/group.webp"
        },
        solo: {
            header: "Why Are You Solo ?",
            paragraph: "pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum repellendus",
            subTitle: "When comes Solo Your Time.",
            list: (
                <>
                    <li className="pb-3">Saturday-Sunday: 5:00-7:00 pm</li>
                    <li className="pb-3">Monday-Tuesday: 10:00-11:00 pm</li>
                    <li>Wednesday-Friday: 8:00-9:00 am</li>
                </>
            ),
            imgSrc: "./public/images/solo.jpg"
        },
        stretching: {
            header: "Why Are You Stretching ?",
            paragraph: "pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum repellendus",
            subTitle: "When comes Stretching Your Time.",
            list: (
                <>
                    <li className="pb-3">Saturday-Sunday: 8:30-9:45 am</li>
                    <li className="pb-3">Monday-Tuesday: 11:00-12:30 pm</li>
                    <li>Wednesday-Friday: 5:00-6:00 pm</li>
                </>
            ),
            imgSrc: "./public/images/stret.webp"
        }
    };

    const currentContent = contentData[content] || contentData.yoga;

    return (
        <div className="container mx-auto flex flex-wrap align-middle gap-10 py-10 mt-10 justify-center">
            <div className="flex flex-col justify-center align-middle gap-5 w-10/12 sm:w-5/12">
                <h2 className="text-2xl font-extrabold text-gray-600">{currentContent.header}</h2>
                <p className="text-gray-700">{currentContent.paragraph}</p>
                <h2 id="subtitle" className="text-2xl font-extrabold text-gray-600">{currentContent.subTitle}</h2>
                <ul className="text-gray-700">{currentContent.list}</ul>
            </div>
            <img className="w-96" src={currentContent.imgSrc} alt={content} />
        </div>
    );
};

export default DynamicContent;

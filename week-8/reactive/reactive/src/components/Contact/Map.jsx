import React from "react";

const Map = () => {
    return (
        <div className="sm:w-4/12 w-10/12 mt-5">
            <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=eski%C5%9Fehir,turkey+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );

};

export default Map;
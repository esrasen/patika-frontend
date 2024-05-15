import React from 'react';
import "./home.css";
import Buttons from "./Buttons.jsx";
import HomeText from "./HomeText.jsx";

const Home = () => {

  return (
    <div className="relative section-header pt-20">
      <div>
        <div id="home" className="container mx-auto ">
          <div className="flex items-center ">
            <div className="flex flex-col gap-5 pt-10 pl-10 sm:pt-20 sm:pl-40 ">
              <div>
                <a href="#"
                  className="bg-blue text-ligthGrey font-bold hover:bg-amber-500 px-4 py-1 rounded-sm">POWERFULL</a>
              </div>
              <h1 className="text-6xl font-bold text-ligthGrey">Group <span
                className="sm:flex sm:py-5">Practice</span> <span>With Trainer</span></h1>
             <HomeText />
              <Buttons />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
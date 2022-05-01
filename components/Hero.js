import React from "react";
import { Link } from "react-scroll";

// TAILWIND WORKING WITH MOBILE FIRST, SO DESIGN FOR MOBILE FIRST
const Hero = () => {
  return (
    <>
      <div id="home" className="pt-24">
        <div className="container ">
          <div className="flex flex-wrap">
            {/* LEFT SIDE / UPSIDE */}
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-tealPrimary lg:text-xl">
                Halo Semua 🤗, kenalin aku
                <span className="font-bold text-darkPrimary block text-4xl mt-4 lg:text-5xl">
                  Afdul Rohmat
                </span>
              </h1>
              <h2 className="font-medium mb-4 text-slate-400 lg:text-2xl">
                Biomedical Engineering | Software Developer
              </h2>
              <p className="text-darkPrimary mb-10 mt-2 lg:text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's 
              </p>

              <ul className="flex list-none  cursor-pointer">
                <li className="font-semibold text-white bg-tealPrimary py-4 px-8 rounded-lg  hover:opacity-80 transition duration-300 ease-in-out ">
                  <Link to="contactMe" spy={true} smooth={true}>
                    Hubungi Saya
                  </Link>
                </li>
              </ul>
             
            </div>

            {/* RIGHT SIDE / DOWN SIDE */}
            <div className="w-full self-end px-4 relative lg:w-1/2 lg:mt-0 lg:right-0">
              <img src="/img/afdul.png" className="max-w-full mx-auto" />
              <span className="absolute top-0 -z-10 left-1/2 -translate-x-1/2">
                <svg
                  width={400}
                  height={400}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#14b8a6"
                    d="M46.1,-42.6C62.3,-29.9,79.6,-15,82.4,2.8C85.2,20.6,73.5,41.2,57.3,50.3C41.2,59.4,20.6,57,2.1,54.9C-16.5,52.8,-32.9,51.1,-47.6,42C-62.3,32.9,-75.2,16.5,-78,-2.8C-80.7,-22,-73.3,-43.9,-58.6,-56.6C-43.9,-69.2,-22,-72.5,-3.5,-69C15,-65.5,29.9,-55.2,46.1,-42.6Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

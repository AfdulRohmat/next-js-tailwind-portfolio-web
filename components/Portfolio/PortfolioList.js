import React from "react";

const PortfolioList = ({ title, desc, image, link }) => {
  return (
    <>
      <div className="max-w-sm md:max-w-[300px] lg:max-w-sm p-2 bg-white rounded-xl border border-slate-300 shadow-md m-4 cursor-pointer transform transition duration-500 hover:scale-105">
        <a>
          <img className="rounded-xl" src={image} alt="portfolio-1" />
        </a>

        <div className="p-5">
          <a href="#">
            <h1 className="font-bold text-darkPrimary text-xl mb-2 ">
              {title}
            </h1>
          </a>
          <p className="mb-10  text-slate-600 text-base ">{desc}</p>
          <a
            href={link}
            target="_blank"
            className="font-semibold text-white bg-tealPrimary py-4 px-8 rounded-lg hover:opacity-80 transition duration-300 ease-in-out "
          >
            Lihat project
          </a>
        </div>
      </div>
    </>
  );
};

export default PortfolioList;

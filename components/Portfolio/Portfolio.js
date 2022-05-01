import React from "react";
import PortfolioList from "./PortfolioList";
import portfolioDraft from "./portfolioDraft";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio">
        <div className="container pt-32">
          {/* TITLE SIDE */}
          <div className="flex flex-col items-center">
            <h1 className=" font-bold uppercase text-3xl mb-4 text-tealPrimary">
              Portfolio
            </h1>
            <p className="text-center text-slate-600 text-base mb-4 px-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* CARD SIDE */}
          <div className="flex flex-wrap items-center justify-center">
            {portfolioDraft.map((post, index) => (
              <PortfolioList
                key={index}
                title={post.title}
                desc={post.desc}
                image={post.image}
                link = {post.link}
              />
            ))}
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

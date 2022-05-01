import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const handleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-between fixed  top-0 left-0 px-8 md:px-16 lg:px-32 right-0 py-4 backdrop-blur-xl h-16 z-50 ">
        {/* TITLE NAV */}
        <div className="text-3xl font-bold text-tealPrimary cursor-pointer">
          <h1>
            <Link activeClass="active" to="home" spy={true} smooth={true}>
              Afdul._rh
            </Link>
          </h1>
        </div>

        {/* NAV DESKtop */}
        <div className="">
          <ul className="flex-col lg:flex-row list-none hidden lg:ml-auto lg:flex ">
            <li className="lg:mr-8">
              <Link activeClass="active" to="home" spy={true} smooth={true}>
                <a className="text-slate-700 hover:text-teal-400 cursor-pointer transition ease-in-out duration-100">
                  Beranda
                </a>
              </Link>
            </li>
            <li className="lg:mr-8 text-slate-700 hover:text-teal-400 cursor-pointer transition ease-in-out duration-100">
              <Link to="aboutMe" spy={true} smooth={true}>
                Tentang Saya
              </Link>
            </li>
            <li className="lg:mr-8 text-slate-700 hover:text-teal-400 cursor-pointer transition ease-in-out duration-100">
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            <li className="lg:mr-8 text-slate-700 hover:text-teal-400 cursor-pointer transition ease-in-out duration-100">
              <Link to="contactMe" spy={true} smooth={true}>
                Hubungi Saya
              </Link>
            </li>
          </ul>
        </div>

        {/* HAMBURGER MENU */}
        <div onClick={() => handleNavbar()} className="lg:hidden">
          {openNavbar ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </div>
      </div>

      <div
        className={
          openNavbar
            ? "flex max-w-[250px] bg-white shadow-lg rounded-lg w-full mt-16 px-4 fixed z-10 mr-8 top-0 right-0 lg:hidden"
            : "hidden"
        }
      >
        {/* NAVBAR MOBILE */}
        <ul>
          <li className="my-4 text-slate-700 hover:text-teal-400 cursor-pointer transition ease-in-out duration-100">
            <Link activeClass="active" to="home" spy={true} smooth={true}>
              Beranda
            </Link>
          </li>
          <li className="my-4  text-slate-700 hover:text-teal-400 cursor-pointer transition ease-in-out duration-100">
            <Link to="aboutMe" spy={true} smooth={true}>
              Tentang Saya
            </Link>
          </li>
          <li className="my-4  text-slate-700 hover:text-teal-400 cursor-pointer transition ease-in-out duration-100">
            <Link to="portfolio" spy={true} smooth={true}>
              Portfolio
            </Link>
          </li>
          <li className="my-4  text-slate-700 hover:text-teal-400 cursor-pointer transition ease-in-out duration-100">
            <Link to="contactMe" spy={true} smooth={true}>
              Hubungi Saya
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

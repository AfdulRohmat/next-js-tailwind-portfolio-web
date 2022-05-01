import React from "react";

const ContactMe = () => {
  return (
    <>
      <div id="contactMe">
        <div className="flex flex-wrap container pt-32">
          {/*  */}
          {/* LEFT SIDE / UP SIDE */}
          <div className="w-full px-4 lg:w-1/2 ">
            <h1 className="uppercase text-tealPrimary font-bold text-4xl mb-2">
              Hubungi Saya
            </h1>
            <p className="text-slate-600 text-base max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* RIGHT SIDE / DOWN SIDE */}
          <div className="w-full px-4 lg:w-1/2 mt-8">
            {/* Nama */}
            <div>
              <label for="name" className="leading-7 text-sm text-slate-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 rounded border border-slate-300 focus:border-tealPrimary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Email */}
            <div className="mt-4">
              <label for="name" className="leading-7 text-sm text-slate-600">
                Email
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 rounded border border-slate-300 focus:border-tealPrimary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Message */}
            <div className="mt-4">
              <label for="message" className="leading-7 text-sm text-slate-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-100 rounded border  border-slate-300 focus:border-tealPrimary h-40 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>

            {/* Button */}
            <div className="mt-8">
              <a
                href="#"
                className="font-semibold text-white bg-tealPrimary py-4 px-8 rounded-lg hover:opacity-80 transition duration-300 ease-in-out "
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;

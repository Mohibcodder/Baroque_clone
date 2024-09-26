import React from "react";
import Footer from "../Footer";
import Header from "../Header";


function ContactUs() {
  return (
    <>
    <Header />
      <h3 className="text-center mb-16 mt-24 font-serif text-4xl tracking-widest uppercase">
        Contact
      </h3>

      <div className="flex justify-center">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl font-sans p-4">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col sm:flex-row sm:space-x-2">
              <input 
                type="text"
                placeholder="Name"
                className=" mb-2 border border-gray-300 h-10 w-full px-3 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="E-mail"
                required
                className="border border-gray-300 h-10 w-full px-3 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="mt-4">
              <textarea
                placeholder="Message"
                className="border border-gray-300 h-32 w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
              ></textarea>
            </div>

            <button
              className="h-11 w-full border border-black rounded-none tracking-wide transition-colors duration-200 ease-in-out  mt-10"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "black";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "black";
                e.currentTarget.style.color = "white";
              }}
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs
import React from "react";
import Footer from "../Footer";
import Header from "../Header";

function Careers() {
  return (
    <>
    <Header />
      <h3 className="text-center mb-16 mt-24 font-serif text-3xl tracking-widest uppercase">
        CAREERS
      </h3>

      <div className="text-center   flex justify-center ">
        <div className="w-2/4  font-sans	 ">
          <h3 className="underline font-bold text-3xl tracking-widest font-serif uppercase	">
            AVAILABLE VACANCIES:
          </h3>
          <h4 className=" tracking-widest  text-base font-serif mt-16 uppercase">
            Fashion Designer
          </h4>
          <h4 className=" tracking-widest uppercase  text-base font-serif mt-6">
            Graphic Designer
          </h4>
          <h4 className=" tracking-widest uppercase text-base  font-serif mt-6">
            Textile Designer
          </h4>
          <h4 className=" tracking-widest uppercase text-base font-serif mt-6">
            Social Media Marketer
          </h4>
          <h4 className=" tracking-widest text-base uppercase font-serif mt-6">
            Customer Service Representative
          </h4>
          <h4 className=" tracking-widest text-base uppercase font-serif mt-4">
            Accountants
          </h4>
          <h4 className=" tracking-widestuppercase  font-medium text-2xl font-serif mt-6">
            Be a part of our team send us your CV's at:
          </h4>
          <h4 className=" tracking-widest text-sm  uppercase font-serif mt-6 mb-12">
            jobs@baroque.pk
          </h4>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Careers;

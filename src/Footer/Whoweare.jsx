import React from "react";
import Footer from "../Footer";
import Header from "../Header";

function Whoweare() {
  return (
    <>
    <Header />
      <h3 className="text-center mb-16 mt-24 font-serif text-3xl tracking-wider">WHO WE ARE</h3>

      <div className="text-center   flex justify-center">
        <div className="w-2/4  font-sans	 ">
          <p className=" font-normal		tracking-wider	 text-left ">
            Baroque <span className="font-bold	">( Bilal Textile) </span> is a
            renowned fashion clothing brand with over{" "}
            <span className="font-bold	"> 30 years </span> of experience in the
            textile sector, producing fabric that is rich in quality and
            craftwork, Baroque has successfully ventured into the retail sector
            by establishing itself as a high-end, fast fashion women’s wear
            brand.
          </p>

          <p className=" font-normal		 text-left  tracking-wider mt-7 	">
            Staying true to the name of the brand,{" "}
            <span className="font-bold	"> Baroque </span> focuses on producing
            apparel that is fashionable, stylish and timeless – by introducing
            outfits that have trendy silhouettes and are majorly made of
            embroidered and traditionally crafted fabric. Catering to a wide set
            of audience, by launching various ranges throughout the year,
            <span className="font-bold	"> Baroque </span> manages to design
            clothes that are unique, effortless and perfect for every event.
          </p>

          <p className=" font-normal		 text-left  tracking-wider mt-7 	">
            Fusing eastern, cultural artwork with contemporary style of art, the
            brand fashions clothes that are meant to be worn by modern women of
            every age and kind. Keeping this in mind, while accepting and
            promoting the beauty and individuality of each woman, their age,
            size and aesthetics, <span className="font-bold	"> Baroque </span>{" "}
            offers customized tailoring with consumers having a choice to get
            their ensembles stitched to perfection. In this case, we go by the
            motto: Stitched to your perfect fit
          </p>

          <p className=" font-normal	 text-left  tracking-wider mt-7 	">
          <span className="font-bold	"> Baroque </span> is a High End Luxury Fabric Brand, and and specializes in
            chiffon formals and also cater seasons essentials including Swiss,
            Khaddar, Lawn and Velvet.So for every season, for every occasion, we
            have got you covered!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Whoweare;

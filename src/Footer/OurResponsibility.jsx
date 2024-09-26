import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

function OurResponsibility() {
  return (
    <>
      <Header />
      <h2 className='text-center pt-10 pb-10 text-2xl sm:text-3xl md:text-4xl font-bold'>
        Our Responsibility
      </h2>
      <h2 className='text-center pt-10 pb-10 text-2xl sm:text-3xl md:text-4xl font-bold'>
        #WearHappinessThisEid
      </h2>
      
      <div className="flex justify-center items-center flex-col">
        {/* Smaller and responsive video */}
        <div className="w-full max-w-xl md:max-w-lg sm:max-w-md">
          <video controls className="w-full h-auto">
            <source src="https://cdn.shopify.com/s/files/1/2277/5269/files/Barouque_Documentary_ver_2_3-Eid_April-2022.mp4?v=1652956426" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Responsive paragraph */}
        <p className='m-20 pt-10 pb-10 px-4 sm:px-10 md:px-14 max-w-2xl text-center text-sm sm:text-base md:text-lg border-b border-t border-gray-400 hidden md:block'>
          Eid is a celebration of love. What better way than giving back the love to the ones who deserve the most. Mothers, more than anybody else, are worthy of love. A mother puts her children before anything else without expecting anything in return. This Eid, Let's put Mothers first and bring light in her life by keeping her happy and comfortable at all times. Baroque celebrates, appreciates and honors all strong mothers out there. Here's to strong women. May we know them. May we be them. May we raise them!
        </p>

        <p className='m-0 pt-10 pb-10 px-4 sm:px-10 md:px-14 max-w-2xl text-sm sm:text-base md:text-lg border-b border-t border-gray-400 block md:hidden'>
          Eid is a celebration of love. What better way than giving back the love to the ones who deserve the most. Mothers, more than anybody else, are worthy of love. A mother puts her children before anything else without expecting anything in return. This Eid, Let's put Mothers first and bring light in her life by keeping her happy and comfortable at all times. Baroque celebrates, appreciates and honors all strong mothers out there. Here's to strong women. May we know them. May we be them. May we raise them!
        </p>
      </div>

      <div className="flex justify-center items-center flex-col">
        {/* Smaller and responsive video */}
        <div className="w-full max-w-xl md:max-w-lg sm:max-w-md">
          <video controls className="w-full h-auto">
            <source src="https://cdn.shopify.com/s/files/1/2277/5269/files/IMG_1489_1_1.mp4?v=1622541653" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Responsive paragraph */}
        <p className='m-20 pt-10 pb-10 px-4 sm:px-10 md:px-14 max-w-2xl text-center text-sm sm:text-base md:text-lg border-b border-t border-gray-400 hidden md:block'>
        We remembered those who put together all the effort to make our Eid special. We made them a part of our Eid and gave them the happiness they deserve to wear. Just like last year, our aim was to make them wear happiness and the joy that we experienced on their faces is what we were looking for.
        </p>

        <p className='m-0 pt-10 pb-10 px-4 sm:px-10 md:px-14 max-w-2xl text-sm sm:text-base md:text-lg border-b border-t border-gray-400 block md:hidden'>
        We remembered those who put together all the effort to make our Eid special. We made them a part of our Eid and gave them the happiness they deserve to wear. Just like last year, our aim was to make them wear happiness and the joy that we experienced on their faces is what we were looking for.
        </p>
      </div>

      <div className="flex justify-center items-center flex-col">
        {/* Smaller and responsive video */}
        <div className="w-full max-w-xl md:max-w-lg sm:max-w-md">
          <video controls className="w-full h-auto">
            <source src="https://cdn.shopify.com/s/files/1/2277/5269/files/responsibility.mp4?v=1613215899" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Responsive paragraph */}
        <p className='m-20 pt-10 pb-10 px-4 sm:px-10 md:px-14 max-w-2xl text-center text-sm sm:text-base md:text-lg border-b border-t border-gray-400 hidden md:block'>
        We initiated our purpose to work as a part of something good so we decided to surprise these children by bringing them Eidi. We felt extremely joyous to make custom suits for these beautiful children and mothers from SOS children’s village. Giving back to our society is one of our major responsibilities but it was more than that... it was a beautiful experience.
        </p>

        <p className='m-0 pt-10 pb-10 px-4 sm:px-10 md:px-14 max-w-2xl text-sm sm:text-base md:text-lg border-b border-t border-gray-400 block md:hidden'>
        We initiated our purpose to work as a part of something good so we decided to surprise these children by bringing them Eidi. We felt extremely joyous to make custom suits for these beautiful children and mothers from SOS children’s village. Giving back to our society is one of our major responsibilities but it was more than that... it was a beautiful experience.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default OurResponsibility;

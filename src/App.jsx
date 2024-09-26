import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Firstpage from "./Firstpage";
import Secondpage from "./Secondpage";
import Thirdpage from "./Thirdpage";
import LoginPage from "./Loginhead";
import LastForm from "./LastForm";
import Chantelle from "./Chantelle";

import Bottoms from "./Bottoms";
import Specialprices from "./Specialprices";
import Readytowear from "./Readytowear";
import Shawls from "./Shawls";
import Exchangeform from "./Exchangeform";
import Exchangerefund from "./Exchangerefund";
import Refundpolicy from "./Refundpolicy";
import Ordercencelation from "./Ordercencelation";
import Dupattas from "./Dupattas";
import Whoweare from "./Footer/Whoweare";
import OurResponsibility from "./Footer/OurResponsibility";
import ServiceWeProvide from "./Footer/ServiceWeProvide";
import Careers from "./Footer/Careers";
import Legal from "./Footer/Legal";
import ContactUs from "./Footer/ContactUs";
import DispatchTimeline from "./Footer/DispatchTimeline";
import PrivacyPolicy from "./Footer/PrivacyPolicy";
import ShippingPolicy from "./Footer/ShippingPolicy";
import TermsofService from "./Footer/TermsofService";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Firstpage />, 
    },
    {
      path: "/Secondpage",
      element: <Secondpage />, 
    },
    {
      path: "/Thirdpage",
      element: <Thirdpage />, 
    },
    {
      path: "/Loginpage",
      element: <LoginPage /> 
    },
    {
      path: "/LastForm",
      element:<LastForm />
    },
    {
      path: "/Chantelle",
      element:<Chantelle />
    },
    {
      path: "/Bottoms",
      element: <Bottoms />
    },
    {
      path: "/Specialprices",
      element: <Specialprices />
    },
    {
      path: "/Readytowear",
      element: <Readytowear />
    },
    {
      path: "/Shawls",
      element: <Shawls />
    },
    {
      path: "/Exchangeform",
      element: <Exchangeform />
    },
    {
      path: "/Exchangerefund",
      element: <Exchangerefund />
    },
    {
      path: "/Refundpolicy",
      element: <Refundpolicy />
    },
    {
      path: "/Ordercencelation",
      element: <Ordercencelation />
    },
    {
      path: "/Dupattas",
      element: <Dupattas />
    },
    {
      path: "/Whoweare",
      element: <Whoweare />
    },
    {
      path: "/OurResponsibility",
      element: <OurResponsibility />
    },
    {
      path: "/ServiceWeProvide",
      element: <ServiceWeProvide />
    },
    {
      path: "/Careers",
      element: <Careers />
    },
    {
      path: "/Legal",
      element: <Legal />
    },
    {
      path: "/ContactUs",
      element: <ContactUs />
    },
    {
      path: "/DispatchTimeline",
      element: <DispatchTimeline />
    },
    {
      path: "/PrivacyPolicy",
      element: <PrivacyPolicy />
    },
    {
      path: "/ShippingPolicy",
      element: <ShippingPolicy />
    },
    {
      path: "/TermsofService",
      element: <TermsofService />
    },
   

  ]);
  return (

    <>

      {/* <Firstpage /> */}



          {/* <Thirdpage /> */}

          {/* <Sliderforthirdpage /> */}

          <RouterProvider router={router} />

    </>
  );
}

export default App;

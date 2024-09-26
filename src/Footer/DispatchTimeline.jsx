import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Footer from "../Footer";
import Header from "../Header";

function DispatchTimeline() {
  const [expanded, setExpanded] = useState(false);

  // Handle accordion expansion
  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Header />
      <h3 className="text-center mb-16 mt-24 font-serif text-3xl tracking-widest uppercase">
        Dispatch Timeline
      </h3>

      <div className="text-center flex justify-center mb-28">
        <div className="w-2/4 font-sans">
          <Accordion
          
            expanded={expanded}
            onChange={handleChange}
            className="border-t border-b border-black pt-2 pb-2" >
            <AccordionSummary
              expandIcon={expanded ? <FaMinus /> : <FaPlus />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>
                <span className="font-extrabold tracking-widest font-sans ">
                  LOCAL DISPATCH TIME{" "}
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-left font-sans text-base font-medium">
                  FOR UNSTITCHED AND READY TO WEAR: WITHIN 1 WEEK
                </p>
                <p className="text-left font-sans text-base font-medium">
                  FOR STITCHED : WITHIN 3 WEEKS.
                </p>
                <p className="text-left font-sans text-base font-medium">
                  CUSTOMIZE STITCHING : 1 WEEK EXTRA.
                </p>{" "}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <Footer />
    </>
  );
}



export default DispatchTimeline
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

export default function ControlledAccordions() {
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="d-flex align-items-center justify-content-center my-5">
      <div className="accordian-section">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          onClick={() => setClick1(!click1)}
          style={{
            backgroundColor: "transparent",
            color: "white",
            borderBottom: "2px solid rgba(247, 108, 36, 1)",
            borderRadius: "8px",
          }}
        >
          <AccordionSummary
            expandIcon={
              click1 ? (
                <RemoveIcon style={{ color: "rgba(247, 108, 36, 1)" }} />
              ) : (
                <AddIcon style={{ color: "rgba(247, 108, 36, 1)" }} />
              )
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "auto", flexShrink: 0 }} className="typog">
           <p>   01. Why choose Orive Solutions ?</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="cont">
           <p> Choose us for unparalleled IT excellence. We deliver tailored
              solutions, ensuring seamless integration, enhanced efficiency, and
              optimal performance. Trust our proven track record for innovation
              and client satisfaction. Your success is our priority experience
              the difference with our IT services.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          onClick={() => setClick2(!click2)}
          style={{
            backgroundColor: "transparent",
            color: "white",
            borderBottom: "2px solid rgba(247, 108, 36, 1)",
            borderRadius: "8px",
          }}
        >
          <AccordionSummary
            expandIcon={
              click2 ? (
                <RemoveIcon style={{ color: "rgba(247, 108, 36, 1)" }} />
              ) : (
                <AddIcon style={{ color: "rgba(247, 108, 36, 1)" }} />
              )
            }
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "auto", flexShrink: 0 }} className="typog">
            <p>  02. What services does Orive Solutions provide?</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="cont">
           <p> Orive Solutions empowers businesses with comprehensive IT services
              including ERP, HRM, CRM, School Management, Web & Mobile
              Applications and Custom Software Development.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          onClick={() => setClick3(!click3)}
          style={{
            backgroundColor: "transparent",
            color: "white",
            borderBottom: "2px solid rgba(247, 108, 36, 1)",
            borderRadius: "8px",
          }}
        >
          <AccordionSummary
            expandIcon={
              click3 ? (
                <RemoveIcon style={{ color: "rgba(247, 108, 36, 1)" }} />
              ) : (
                <AddIcon style={{ color: "rgba(247, 108, 36, 1)" }} />
              )
            }
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "auto", flexShrink: 0 }} className="typog">
            <p>  03. Why is technology & IT services important?</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="cont">
              
          <p> In today's dynamic landscape, technology and IT services are
              indispensable, driving efficiency, innovation, and global
              connectivity. They empower businesses to navigate challenges,
              optimize operations, and stay competitive, fostering growth and
              resilience in an ever-evolving digital era
              </p> 

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          onClick={() => setClick4(!click4)}
          style={{
            backgroundColor: "transparent",
            color: "white",
            borderBottom: "2px solid rgba(247, 108, 36, 1)",
            borderRadius: "8px",
          }}
        >
          <AccordionSummary
            expandIcon={
              click4 ? (
                <RemoveIcon style={{ color: "rgba(247, 108, 36, 1)" }} />
              ) : (
                <AddIcon style={{ color: "rgba(247, 108, 36, 1)" }} />
              )
            }
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "auto", flexShrink: 0 }} className="typog">
            <p> 04. Is your business bringing good results from technology?</p> 
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="cont">
              
           <p>At Orive Solutions, we redefine success by optimizing your
              business through cutting-edge IT services. Harness the power of
              technology to achieve unprecedented results. Elevate your
              operations, streamline processes, and unlock new potentials with
              our innovative solutions. Experience excellence in every digital
              endeavor.
              </p> 
           
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          onClick={() => setClick5(!click5)}
          style={{
            backgroundColor: "transparent",
            color: "white",
            borderBottom: "2px solid rgba(247, 108, 36, 1)",
            borderRadius: "8px",
          }}
        >
          <AccordionSummary
            expandIcon={
              click5 ? (
                <RemoveIcon style={{ color: "rgba(247, 108, 36, 1)" }} />
              ) : (
                <AddIcon style={{ color: "rgba(247, 108, 36, 1)" }} />
              )
            }
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "auto", flexShrink: 0 }} className="typog">
            <p>  05. What our IT consultants suggest on new topics?</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="cont">
         <p>   At Orive Solutions, our IT consultants are at the forefront of
              innovation, offering insightful perspectives and expert guidance
              on emerging trends. Stay ahead with our team's recommendations,
              ensuring your business thrives in the dynamic landscape of
              evolving technologies and strategies.
              </p>  </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

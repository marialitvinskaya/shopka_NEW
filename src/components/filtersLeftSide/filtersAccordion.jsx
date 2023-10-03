import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from "@mui/material/Paper";


export default function ControlledAccordions(props) {
    const [expanded, setExpanded] = useState(false);
const[label, setLabel] = useState(props.collapsedLabel);


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        setLabel (isExpanded ? props.expandedLabel : props.collapsedLabel);

    };



    return (
        <div>
            <Accordion expanded={expanded === 'panel'} onChange={handleChange('panel')}>

                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel-content"
                    id="1"
                >

                    <Typography onChange={handleChange('panel')} >{label}</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    {props.filterComponent}
                </AccordionDetails>


            </Accordion>
        </div>
    );
}

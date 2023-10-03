import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import Paper from "@mui/material/Paper"

function FilterComponent (props) {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {

        setSelectedOption(event.target.value);
        console.log(selectedOption)

    };

    return (

        <FormGroup>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={props.checked}
                        onChange={handleChange}
                        value={props.value}
                    />
                }
                label={props.label}
            />
        </FormGroup>

    );
};

export default FilterComponent;


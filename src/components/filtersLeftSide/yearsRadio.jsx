import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import year from "../../yearOfManufactoring";
export default function YearsRadio(props) {
    return (


        <FormControl>

            <RadioGroup
                defaultValue=""
                name="radio-group"
                onChange={(e,value) => {
                    const id = parseInt(value, 10);
                    const option = year.find((o) => o.id === id);

                }}
            >
                {year.map((o) => (
                    <FormControlLabel value={o.id}
                                      control={<Radio  />}
                                      label={o.label} />
                ))}

            </RadioGroup>
        </FormControl>

    );
}
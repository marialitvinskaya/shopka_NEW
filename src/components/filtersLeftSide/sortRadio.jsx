import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import filterItem from "../../filterItems";
export default function SortRadio(props) {
    return (


            <FormControl>

                <RadioGroup
                    defaultValue=""
                    name="radio-group"
                    onChange={(e,value) => {
                        const id = parseInt(value, 10);
                        const option = filterItem.find((o) => o.id === id);

                    }}
                >
                    {filterItem.map((o) => (
                        <FormControlLabel value={o.id}
                    control={<Radio  />}
                    label={o.label} />
                ))}

                </RadioGroup>
            </FormControl>

    );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider, {SliderThumb} from '@mui/material/Slider';
import {styled} from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import theme from "../createTheme";


const StyledSlider = styled(Slider)(({theme}) => ({
    width: 210,
    color: theme.palette.grey[30],
    '& .MuiSlider-thumb': {
        color: theme.palette.common.black
    },
    '& .MuiSlider-valueLabel': {
        fontSize: 12,
        fontWeight: 'normal',
        backgroundColor: 'unset',
        top: 2,
        color: theme.palette.text.primary,
        '&:before': {
            display: 'none',
        },
    }
}));

function valuetext(value) {
    return `$ ${value}`;
}

export default function RangeSlider() {
    const [value, setValue] = React.useState([10, 200]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            mt: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "3px solid",
            width: "245px",
            height: "73px",
            borderTop: "5px solid",
            borderBottom: "5px solid",
            borderLeft: "3px solid",
            borderRight: "3px solid",
            borderColor: theme.palette.grey[5],
            borderRadius: "3px",
            position: "relative"
        }}>


            <StyledSlider
                orientation="horizontal"
                getAriaLabel={() => 'PriceRange'}
                value={value}
                onChange={handleChange}
                getAriaValueText={valuetext}
                min={10}
                max={200}
                valueLabelDisplay="on"
                valueLabelFormat={(value) => `$${value}`}
                sx={{
                    position: "absolute",
                    bottom: "12.5%",
                    width: "200px",
                    '& .MuiSlider-rail': {
                        height: '3px', // Adjust the thickness of the slider track
                    },
                    '& .MuiSlider-track': {
                        height: '3px', // Adjust the thickness of the slider track
                    },
                    '& .MuiSlider-thumb': {
                        width: '16px', // Adjust the width of the slider thumb
                        height: '16px', // Adjust the height of the slider thumb
                    }
                }}

            />


        </Box>
    );
}
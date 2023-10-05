import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import theme from "../createTheme";

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};


export default function TextRating({rate}) {
    const value = [rate];

    return (
        <Box
            sx={{
                width: 122,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Rating
                sx={{color: "#FB8200"}}
                size="small"
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={<StarBorderOutlinedIcon  style={{  color: "#FB8200", fontSize: "inherit"}}  />}
            />
            <Box sx={{ ml: 1, ...theme.typography.descriptionMedium, fontFamily: "roboto", color: "#5E6366"}}>{rate}</Box>
        </Box>
    );
}


import React from "react";
import {createTheme} from "@mui/material/styles";
import styled from "@mui/material/styles/styled";
import Tab from "@mui/material/Tab";

let label;
const theme = createTheme({
    palette:{
        primary: {
main: "#2979FF",
            dark: "#2264D1",
            light: "#9DC2FF",
            superLight: "#EBF2FF"
        },
grey: {
      100: "#19191D",
    70: "#4A4B57",
    60: "#5A5B6A",
    50: "#787885",
    40: "#9696A0",
    30: "#B4B4BB",
    5: "#EDEDF0",
    0: "#F7F7FA",
},
        secondary: {
            main: "#C23564",
            light: "#FDEDF2",
        },
    },
components: {
        MuiTabs: {
            iconWrapper: {
                color: "secondary",
            }

                },
        },
});






export default theme;


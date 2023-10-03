
import {createTheme} from "@mui/material/styles";


            const theme = createTheme({



                palette:{
                    primary: {
                        blue60: "#2979FF",
                        main: "#2264D1",
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
MuiFormControl:{
    styleOverrides: {
        root: {
            minWidth: 136,
            
        },
    },
},
                    MuiSelect: {
    styleOverrides:{
        root: {
height: 36        },
    },
                    },
                    MuiInputLabel: {
                        styleOverrides:{
                            root: {
                                color: "#787885",
                            }
                        },
                    },

                    MuiOutlinedInput: {
                        styleOverrides: {
                            input: {
                                paddingLeft: 12,


                            },
                        },
                    },
                    MuiMenuItem:{
                        styleOverrides :{
                            root: {
                                color: "#19191D"
                            },
                        },
},

                },

});



export default theme;


import {createTheme} from "@mui/material/styles";


const theme = createTheme({
typography: {

    //fontWeightRegular: 400
    //medium 500
    //bold 700
caption: {
    fontFamily: "Inter",
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.43,
},
    captionMedium: {
        fontFamily: "Inter",
        fontSize: "0.875rem",
        fontWeight: 500,
        lineHeight: 1.43,
    },
    price: {
    fontFamily: "Inter",
        fontSize: "1.5rem",
        fontWeight: 700,
        lineHeight: 1.5,
    },
description: {
    fontFamily: "Inter",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
},
    descriptionMedium: {
        fontFamily: "Inter",
        fontSize: "1rem",
        fontWeight: 500,
        lineHeight: 1.5,
    },
    h6: {
        fontFamily: "Quicksand",
        fontSize: "1.25rem",
        fontWeight: 700,
        lineHeight: 1.5,
    },
    button: {
        fontFamily: "Inter",
        fontSize: "1.25rem",
        fontWeight: 500,
        lineHeight: 1.58,
    },
    searchInput: {
        fontFamily: "Inter",
        fontSize: "1.25rem",
        fontWeight: 400,
        lineHeight: 1.58,
    },
},

    palette: {
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
        MuiAccordion: {
            styleOverrides: {
                root: {
                    maxWidth: "304px"
                },
            },

        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    minWidth: 136,

                },
            },
        },
        MuiInputBase:{
            styleOverrides: {
                root: {
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    height: 36,
                    padding: 0,
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "#787885",
                    fontFamily: "Inter",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    lineHeight: 1.43,
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    paddingLeft: 12,
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: "#19191D",
                    fontFamily: "Inter",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    lineHeight: 1.43,
                },
            },
        },
MuiCardContent:{
            styleOverrides:{
                root:{
                    display: "flex",
                    flexDirection: "column",
gap: "8px"
                },
            },
},
        MuiList:{
            styleOverrides: {
                root:{
                    padding: 0
                },
            },
        },
        MuiListItem:{
            styleOverrides:{
                root:{
                    padding: 0
                },
            },
        },
MuiListItemText:{
            styleOverrides:{
                root:{
                    marginBottom: 16,
                    marginTop: 0
                },
            },
},


    },
});


export default theme;


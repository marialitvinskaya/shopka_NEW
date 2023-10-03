import {createTheme} from "@mui/material/styles";


const themeTabs = createTheme({
    components: {


        MuiTab: {
            styleOverrides: {
                root: {
                    minHeight: "unset",
                    height: "36px",
                    color: "#5A5B6A",
                    backgroundColor: "#EBF2FF",
                    padding: 0,
                    "&.Mui-selected": {
                        color: "#2264D1",
                        backgroundColor: "#fff",
                        borderRadius: "4px",
                        boxShadow:
                            "0px 2px 4px 0px rgba(41, 121, 255, 0.24), 0px 1px 2px 0px rgba(27, 78, 163, 0.24)",
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    height: "36px",
                },
            },
        },
    },
})


export default themeTabs;
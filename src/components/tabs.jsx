import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import theme from "../createTheme";
import "../App.css";

export default function EcomTabs(props) {
    return (
        <Tabs  >
            <Tab
                sx={{ textTransform: "none", color: (theme) => theme.palette.grey[60],...theme.typography.caption
                }}
                icon={props.icon}
                label={props.label}
            ></Tab>
        </Tabs>
    );
}
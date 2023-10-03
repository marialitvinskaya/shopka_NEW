import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import theme from "../createTheme";
import StyledTab from "../styledTabs";
import "../App.css";

export default function EcomTabs(props) {
  return (
    <Tabs textColor="primary">
      <Tab
        sx={{ textTransform: "none", color: (theme) => theme.palette.grey[60],
      }}
        icon={props.icon}
        label={props.label}
      ></Tab>
    </Tabs>
  );
}

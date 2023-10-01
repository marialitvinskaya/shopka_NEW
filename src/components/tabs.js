import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function IconLabelTabs(props) {
  return (
    <Tabs>
      <Tab
        sx={{ textTransform: "none" }}
        icon={props.icon}
        label={props.label}
      ></Tab>
    </Tabs>
  );
}

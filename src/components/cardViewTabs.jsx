import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import ViewListSharpIcon from "@mui/icons-material/ViewListSharp";

const CardViewTabs = ({ view, setView }) => {
  function handleChange(event, newValue) {
    setView(newValue);
  }

  return (
    <Tabs value={view} onChange={handleChange}>
      <Tab
        sx={{ width: "68px", heigth: "36px", m: 0 }}
        icon=<ViewListSharpIcon />
        aria-label="List View"
        value="list"
      />
      <Tab
        sx={{ width: "68px", heigth: "36px", m: 0 }}
        icon=<GridViewSharpIcon />
        aria-label="Grid View"
        value="grid"
      />
    </Tabs>
  );
};

export default CardViewTabs;

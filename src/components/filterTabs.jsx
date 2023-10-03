import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import themeTabs from "../createThemeFilterTabs";
import {ThemeProvider} from "@mui/material/styles";




export default function FilterTabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
      <ThemeProvider theme={themeTabs}>
    <div>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        indicatorColor="none"
      >

        <Tab   label="Show All" />
        <Tab   label="Auction" />
        <Tab   label="Buy Now" />
      </Tabs>


    </div>
      </ThemeProvider>
  );
}

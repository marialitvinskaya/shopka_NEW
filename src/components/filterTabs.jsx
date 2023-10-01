import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function FilterTabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Show All" />
        <Tab label="Auction" />
        <Tab label="Buy Now" />
      </Tabs>

      {/* {selectedTab === 0 && <div>Show All Content</div>}
      {selectedTab === 1 && <div>Auction Content</div>}
      {selectedTab === 2 && <div>Buy Now Content</div>} */}
    </div>
  );
}

import React from "react";
import ResponsiveAppBar from "./components/header.jsx";
import Box from "@mui/material/Box";
import cardItem from "./carditems.js";
import MultiActionAreaCard from "./components/card.jsx";
import Grid from "@mui/material/Grid"; // Grid version 1
import EcomTabs from "./components/tabs.jsx";
import tabLabel from "./tablabels.js";
import FilterTabs from "./components/filterTabs.jsx";
import Stack from "@mui/material/Stack";
import BasicSelect from "./components/sort.jsx";
import CardViewTabs from "./components/cardViewTabs.jsx";
import featureItem from "./featuresitems.js";
import Feature from "./components/features.jsx";
import ChipsArray from "./components/related.jsx";
import ControlledAccordionsYear from "./components/filtersLeftSide/yearsAccordion.jsx"
import ControlledAccordionsSort from "./components/filtersLeftSide/sortAccordion";
import CategoryList from "./components/categoriesFilter";
import DepartmentButton from "./components/departmentButton";
import {useState} from "react";
// import {ThemeProvider} from "@mui/material/styles"
// import theme from "./createTheme"






function CreateCard(cardItem) {
    return (

        <MultiActionAreaCard
            key={cardItem.id}
            img={cardItem.img}
            alt={cardItem.name}
            description={cardItem.description}
            price={cardItem.price}
            additional={cardItem.additional}
            discount={cardItem.discount}
            discountStyle={cardItem.discountStyle}
            rate={cardItem.rate}
        />

    );
}

function CreateFeatures(featureItem) {
  return (
    <Feature
      key={featureItem.id}
      icon={featureItem.icon}
      name={featureItem.name}
      additional={featureItem.additional}

    />
  );
}

function App() {
  return (

    <div>
      <ResponsiveAppBar />
      <Box sx={{ maxWidth: "1492px", m: "0 auto" }}>
             <EcomTabs  />
        <Grid container>
          <Box
            sx={{
display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              maxWidth: "355px",


              py: 3,
            }}
          >
              <DepartmentButton />
              <CategoryList />
              <ControlledAccordionsSort expandedLabel="Expanded filters" collapsedLabel="Collapsed filters"  />
              <ControlledAccordionsYear expandedLabel="Years of manufactoring" collapsedLabel="Years of manufactoring"  />


          </Box>
          <Box
            sx={{
              maxWidth: "1114px",
              ml: "auto",
              pt: 3,
              pb: 12,
            }}
          >
            <Box
              sx={{
                boxShadow:
                  "0px 2px 4px 0px rgba(90, 91, 106, 0.24), 0px 1px 2px 0px rgba(58, 58, 68, 0.24)",
                backgroundColor: "rgba(255, 255, 255, 1)",
                borderRadius: "4px",
                p: "16px",
                mb: 5,
              }}
            >
              <Stack sx={{height: "36px"}} direction="row" justifyContent={"space-between"}>
                <BasicSelect />
                <Box  sx={{ display: "flex", flexWrap:"nowrap" , height: "36px"}}>
                  <FilterTabs />
                  <CardViewTabs />
                </Box>
              </Stack>
              <ChipsArray />
              <Grid container direction="row" alignItems="baseline" rowSpacing={2} >
                {cardItem.map(CreateCard)}
              </Grid>
            </Box>
            <Stack direction="row" spacing={2}>
              {featureItem.map(CreateFeatures)}
            </Stack>
          </Box>
        </Grid>
      </Box>
    </div>

  );
}

export default App;

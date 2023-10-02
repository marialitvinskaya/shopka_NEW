import React from "react";
import ResponsiveAppBar from "./components/header.jsx";
import Box from "@mui/material/Box";
import cardItem from "./carditems.js";
import MultiActionAreaCard from "./components/card.jsx";
import Grid from "@mui/material/Grid"; // Grid version 1
import EcommTabs from "./components/tabs.jsx";
import tabLabel from "./tablabels.js";
import FilterTabs from "./components/filterTabs.jsx";
import Stack from "@mui/material/Stack";
import BasicSelect from "./components/sort.jsx";
import CardViewTabs from "./components/cardViewTabs.jsx";
import featureItem from "./featuresitems.js";
import Feature from "./components/features.jsx";
import ChipsArray from "./components/related.jsx";
import filterItem from "./filterItems.js";
import year from "./yearOfManufactoring"
import ControlledAccordions from "./components/filtersLeftSide/filtersAccordion.jsx"
import CreateSortingFilter from "./components/filtersLeftSide/createFilterComponent";
import CreateYearsFilter from "./components/filtersLeftSide/createYearsFilter";
import CategoryList from "./components/categoriesFilter";

function CreateCard(cardItem) {
  return (
    <Grid item xl={3} key={cardItem.id}>
      <MultiActionAreaCard
        key={cardItem.id}
        img={cardItem.img}
        alt={cardItem.name}
        description={cardItem.description}
        price={cardItem.price}
      />
    </Grid>
  );
}

function CreateTabs(tabLabel) {
  return (
    <EcommTabs key={tabLabel.id} icon={tabLabel.icon} label={tabLabel.label} />
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

// function CreateSortingFilter(filterItem) {
//   return (
//     <FilterComponent
//       key={filterItem.id}
//       value={filterItem.value}
//       label={filterItem.label}
//     />
//   );
// }

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Box sx={{ maxWidth: "1492px", m: "0 auto" }}>
        <Grid
          container
          sx={{ mx: "auto", maxWidth: "1492px", flexWrap: "nowrap" }}
        >
          {tabLabel.map(CreateTabs)}
        </Grid>
        <Grid container>
          <Box
            sx={{
              mr: "auto",
              maxWidth: "304px",
              bgcolor: "#F7F7FA",
              px: 2,
              py: 1,
            }}
          >
              <CategoryList />
              <ControlledAccordions expandedLabel="Expanded filters" collapsedLabel="Collapsed filters" filterComponent={filterItem.map(CreateSortingFilter)} />
              <ControlledAccordions expandedLabel="Years of manufactoring" collapsedLabel="Years of manufactoring" filterComponent={year.map(CreateYearsFilter)} />

          </Box>
          <Box
            sx={{
              maxWidth: "1114px",
              ml: "auto",
              pt: 2,
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
              <Stack direction="row" justifyContent={"space-between"}>
                <BasicSelect />
                <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
                  <FilterTabs />
                  <CardViewTabs />
                </Box>
              </Stack>
              <ChipsArray />
              <Grid container sx={{ margin: "0 auto", maxWidth: "1114px" }}>
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

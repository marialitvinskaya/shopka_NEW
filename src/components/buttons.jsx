import React, {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import theme from "../createTheme";
import Cart from "./cart";

const pages = ["Sell on Shopka", "Register"];

function AppBarButtons() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex", flexWrap: "nowrap" },
      }}
    >
      {pages.map((page) => (
        <Button
            color="secondary"
          key={page}
          sx={{
            my: 2,
              color: (theme) => theme.palette.grey[60],
            display: "block",
            textTransform: "none",
            whiteSpace: "nowrap",
          }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
}

export default AppBarButtons;

const pagesElectronics = ["Consumer Electronics"];

function ButtonElectronics() {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pagesElectronics.map((pagesElectronics) => (
        <Button
            color="primary"
          variant="text"
          key={pagesElectronics}
          sx={{
            my: 2,
            display: "block",
            textTransform: "none",
            whiteSpace: "nowrap",
          }}
        >
          {pagesElectronics}
        </Button>
      ))}
    </Box>
  );
}

export { ButtonElectronics };



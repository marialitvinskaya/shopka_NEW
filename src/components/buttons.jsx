import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import theme from "../createTheme";

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
            fontSize: 20,
            fontWeight: 500,
            fontFamily: "inter",
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
          variant="text"
          key={pagesElectronics}
          sx={{
            my: 2,
            color: "#2264D1",
            display: "block",
            textTransform: "none",
            fontSize: 20,
            fontWeight: 400,
            fontFamily: "inter",
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

function AccountButtons() {
  return (
    <Stack direction="row" spacing={2} marginRight="16px">
      <Button
        variant="outlined"
        sx={{
          width: 104,
          height: 40,
        }}
      >
        Sign in
      </Button>
      <Button
        sx={{
          width: 104,
          height: 40,
          boxShadow:
            "0px 4px 8px 0px rgba(41, 121, 255, 0.2), 0px 2px 4px 0px rgba(27, 78, 163, 0.2)",
        }}
        elevation={1}
      >
        My cart
      </Button>
    </Stack>
  );
}

export { AccountButtons };

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

    function AccountButtons() {
        return (


            <Button
                    color="primary"
                    sx={{
                        minWidth: 104,
                        height: 40,
                        textTransform: "none",
                        fontWeight: 700,
                        fontSize: "20px",
                        mx: 3.25,
                        py: 1,
                        px: 1.5,
                        border: "1px solid",
                        borderColor: theme.palette.primary.light,
                    }}
                >
                Watch
                </Button>

        );

}

export { AccountButtons };

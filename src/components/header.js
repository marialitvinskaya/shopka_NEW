import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LogoHeader from "./logo.js";
import "../App.css";
import AppBarButtons from "./buttons.js";
import { ButtonElectronics } from "./buttons.js";
import { AccountButtons } from "./buttons.js";
import SearchBar from "./search.js";

function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      disableGutters
      sx={{
        backgroundColor: "#fff",
      }}
      elevation={0}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: "100%",
          padding: "0 16px",
        }}
      >
        <Toolbar disableGutters>
          <LogoHeader />

          <AppBarButtons />
          <SearchBar />
          <ButtonElectronics />
          <AccountButtons />
          <Box sx={{ flexGrow: 0 }}>
            <Avatar alt="User Pic" src="/static/images/avatar/2.jpg" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

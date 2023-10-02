import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LogoHeader from "./logo.jsx";
import "../App.css";
import AppBarButtons from "./buttons.jsx";
import { ButtonElectronics } from "./buttons.jsx";
import { AccountButtons } from "./buttons.jsx";
import SearchBar from "./search.jsx";

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

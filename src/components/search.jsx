import React from "react";
import { styled } from "@mui/material/styles";
import { InputAdornment, Input, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../createTheme";

const SearchContainer = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: 668,
  height: 48,
  borderRadius: 99,
  backgroundColor: theme.palette.grey[5],
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  margin: "14px",
}));

const SearchBar = () => {
  return (
    <SearchContainer elevation={0}>
      <InputAdornment position="start">
        <SearchIcon sx={{ width: 32, height: 32, color: (theme) => theme.palette.grey[50] }} />
      </InputAdornment>
      <Input disableUnderline fullWidth placeholder="Search" sx={{color: (theme) => theme.palette.grey[100], ...theme.typography.searchInput}}/>
    </SearchContainer>
  );
};

export default SearchBar;

import React from "react";
import { styled } from "@mui/material/styles";
import { InputAdornment, Input, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: 668,
  height: 48,
  borderRadius: 99,
  backgroundColor: "#EDEDF0",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  margin: "14px",
}));

const SearchBar = () => {
  return (
    <SearchContainer elevation={0}>
      <InputAdornment position="start">
        <SearchIcon sx={{ color: "#787885", width: 32, height: 32 }} />
      </InputAdornment>
      <Input disableUnderline fullWidth placeholder="Search" />
    </SearchContainer>
  );
};

export default SearchBar;

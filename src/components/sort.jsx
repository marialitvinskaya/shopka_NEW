import * as React from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import theme from '../createTheme';
import data from "../data";

export default function BasicSelect({handleSort}) {
  const [sortBy, setSortBy] = useState("");
  const [condition, setCondition] = useState("");
  const [delivery, setDelivery] = useState("");


  function handleChange(event) {
    const {value} = event.target;
    setSortBy(value);
    handleSort(value); // Call handleSort function from the parent component
  }

  // function handleChange(event) {
  //   const { value, id } = event.target;
  //   if (id === "sortBySelect") {
  //     setSortBy(value);
  //   } else if (id === "conditionSelect") {
  //     setCondition(value);
  //   } else if (id === "deliverySelect") {
  //     setDelivery(value);
  //   }
  // }
  //
  // const handleSort = (order) => {
  //   const sortedData = [...data].sort((a,b) => {
  //     if (order === 'asc') {
  //       return a.price - b.price;
  //     } else if (order === 'desc') {
  //       return b.price - a.price;
  //     }
  //   });
  // }
  // export sortedData;
  return (
      <Stack direction="row" spacing={2}>
        <FormControl>
          <InputLabel id="sortBylabel">Sort By</InputLabel>
          <Select
              labelId="sortBylabel"
              id="sortBySelect"
              value={sortBy}
              label="Sort By"
              onChange={handleChange}
          >

            <MenuItem value="asc">The cheapest</MenuItem>
            <MenuItem value="desc">The most expensive</MenuItem>
            <MenuItem value="rate">Top-rated</MenuItem>
          </Select>
        </FormControl>
        <FormControl >
          <InputLabel   id="conditionLabel">Condition</InputLabel>
          <Select

              labelId="conditionLabel"
              id="conditionSelect"
              value={condition}
              label="Condition"
              onChange={handleChange}
          >
            <MenuItem value={4}></MenuItem>
            <MenuItem value={5}></MenuItem>
            <MenuItem value={6}></MenuItem>
          </Select>
        </FormControl>
        <FormControl >
          <InputLabel id="deliveryLabel">Delivery</InputLabel>
          <Select
              labelId="deliveryLabel"
              id="deliverySelect"
              value={delivery}
              label="Delivery"
              onChange={handleChange}
          >
            <MenuItem value={7}></MenuItem>
            <MenuItem value={8}></MenuItem>
            <MenuItem value={9}></MenuItem>
          </Select>
        </FormControl>
      </Stack>
  );
}
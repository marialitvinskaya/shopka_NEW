import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const chipData = [
    { key: 0, label: "worldwide shipping" },
    { key: 1, label: "under $50" },
    { key: 2, label: "kitten" },
    { key: 3, label: "plastic plugs" },
    { key: 4, label: "pucker shoes" },
    { key: 5, label: "vintage typewriter" },
  ];

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Stack direction="row" alignItems="center" sx={{ mt: 5, mb: 2 }}>
      <Typography>Related</Typography>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
        }}
        component="ul"
      >
        {chipData.map((data) => {
          return (
            <ListItem key={data.key}>
              <Chip label={data.label} onClick={handleClick} />
            </ListItem>
          );
        })}
      </Stack>
    </Stack>
  );
}

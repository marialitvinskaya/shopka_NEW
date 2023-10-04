import React from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
// import { importSvgIcon } from "../svgIcons";

export default function Feature(props) {
  //   const VectorIcon = importSvgIcon("./assets/featureIcons/Vector.svg");
  //   const VectorIcon1 = importSvgIcon("./assets/featureIcons/Vector.svg");
  //   const VectorIcon2 = importSvgIcon("./assets/featureIcons/Vector.svg");

  const IconComponent = props.icon;

  return (
    <Paper
      sx={{
        backgroundColor: "#EDEDF0",
        pb: 3,
        pt: 3,
        textAlign: "center",
        minWidth: "360px",
        boxShadow: "none",
      }}
    >
      <IconComponent />
      <Typography variant="h6">{props.name}</Typography>
      <Typography variant="caption">{props.additional}</Typography>
    </Paper>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function MultiActionAreaCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 259,
        height: "472px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: 1,
      }}
      elevation={0}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          style={{
            height: "224px",
            width: "227px",
            objectFit: "cover",
            margin: "auto",
          }}
          image={props.img}
          alt={props.name}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ marginLeft: "auto" }}>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          startIcon={<FavoriteBorderOutlinedIcon sx={{color: "primary.blue60"}}/>}
        >
          Watch
        </Button>
      </CardActions>
    </Card>
  );
}

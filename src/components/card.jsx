import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Grid from "@mui/material/Grid";
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
          alignItems: "baseline",
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

          <Typography variant="description" color="grey[100]" sx={{mb: 1}}>
            {props.description}
          </Typography>
          <Typography variant="price" color="common.black" sx={{mb: 1}}>
            {props.price}
          </Typography>
            <Typography variant="caption" color="grey[50]" sx={{mb: 1}}>
                {props.additional}
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

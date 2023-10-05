import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import cardItem from "../carditems";
import DiscountButton from "./discountButtons";
import Stack from "@mui/material/Stack";
import TextRating from "./review";
import theme from "../createTheme";
import Paper from "@mui/material/Paper";


export default function MultiActionAreaCard(props) {
  return (

          <Grid item xl={3}  >
    <Card
      sx={{
        maxWidth: 259,
        height: "472px",
        display: "flex",
        flexDirection: "column",
          justifyContent: "space-between",
        margin: "auto",
          "&:hover": {
              backgroundColor: "#fff",
              boxShadow: "0px 4px 8px 0px rgba(92, 107, 192, 0.2), 0px 2px 4px 0px rgba(59, 69, 123, 0.2)",
              elevation: 1,
          },
      }}
      elevation={0}
    >

      <CardActionArea >
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

        <CardContent >
<Box sx={{minHeight: "74px" }}>
          <Typography variant="description" color="grey[100]" >
            {props.description}
          </Typography>
</Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" >
          <Typography variant="price" color="common.black">
            {props.price}
          </Typography>
            <DiscountButton content={props.discount} style={props.discountStyle} />
            </Stack>
            <Typography variant="caption" color="grey[50]" >
                {props.additional}
            </Typography>

        </CardContent>
      </CardActionArea>

      <CardActions >
          <Stack sx={{width: "100%" }} direction="row" justifyContent={"space-between"}>

              <TextRating rate={props.rate} />

        <Button
            sx={{ ml: "auto"}}
          size="small"
          variant="outlined"
          color="primary"
          startIcon={<FavoriteBorderOutlinedIcon sx={{color: "primary.blue60"}}/>}
        >
          Watch
        </Button>
          </Stack>
      </CardActions>
    </Card>
          </Grid>


  );
}

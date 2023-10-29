import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Button, CardActionArea, CardActions} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Grid from "@mui/material/Grid";

import cardItem from "../carditems";
import DiscountButton from "./discountButtons";
import Stack from "@mui/material/Stack";
import TextRating from "./review";
import theme from "../createTheme";
import {useEffect} from "react";


export default function CardTest() {
    return (
        <Grid item xs={12} sm={6} md={3} lg={3} sx={{p: 0, mx: "auto", width: "25%"}}>
            <Card sx={{height: "100%", width: "auto", flex: "display", flexDirection: "column",}}>
                <CardActionArea>
                    <CardMedia component="img"
                               sx={{
                                   height: "224px",
                                   width: "227px",
                                   objectFit: "cover",
                                   margin: "auto",
                                   backgroundColor: theme.palette.primary.light,
                               }}
                               image="/assets/EcommerceItem/Image-11.png"/>

                    <CardContent sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                        <Typography variant="descriptionBoldRob" color="grey[100]">Name</Typography>
                        <Typography variant="description" color="grey[100]">Description</Typography>
                        <Typography variant="price" color="common.black">
                            19.99
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Stack sx={{width: "100%", p: 0}} direction="row" justifyContent={"space-between"}>

                            <TextRating/>

                            <Button
                                sx={{
                                    ml: "auto", p: 0, ...theme.typography.button, minWidth: "88px",
                                    minHeight: "32px"
                                }}
                                size="small"
                                variant="outlined"
                                color="primary"
                                startIcon={<FavoriteBorderOutlinedIcon sx={{color: "primary.blue60"}}/>}
                            >
                                Watch
                            </Button>
                        </Stack>
                    </CardActions>
                </CardActionArea>
            </Card>
        </Grid>


    )
}


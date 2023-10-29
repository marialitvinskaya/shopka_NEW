import React, {useState} from "react";
import ResponsiveAppBar from "./components/header.jsx";
import Box from "@mui/material/Box";
import MultiActionAreaCard from "./components/card.jsx";
import Grid from "@mui/material/Grid"; // Grid version 1
import Stack from "@mui/material/Stack";
import BasicSelect from "./components/sort.jsx";
import CardViewTabs from "./components/cardViewTabs.jsx";
import ChipsArray from "./components/related.jsx";
import theme from "./createTheme";
import Typography from "@mui/material/Typography";
import RangeSlider from "./components/slider";
import CustomerReviews from "./components/customerReviews";
import data from "./data";
import priceAfterDiscount from "./components/priceAfterDiscount";


function App() {

    const dataWithDiscount = data.map((d) => {
        return {
            ...d,
            priceAfterDiscount: priceAfterDiscount(d)
        };
    });


    const [query, setQuery] = useState("");
    const [sortBy, setSortBy] = useState(null);
    const [btn, setBtn] = useState("");

    const handleSort = (order) => {
        setSortBy(order); // Set the sorting order
    };


    const filterData = (query, data, sortBy, btn) => {
        let filteredData = [...dataWithDiscount];

        if (sortBy === "asc") {
            filteredData = filteredData.sort((a, b) => a.priceAfterDiscount - b.priceAfterDiscount);
        } else if (sortBy === "desc") {
            filteredData = filteredData.sort((a, b) => b.priceAfterDiscount - a.priceAfterDiscount);
        } else if (sortBy === "rate") {
            filteredData = filteredData.sort((a, b) => b.review - a.review);
        }

        if (!query && !btn) {
            return filteredData;
        } else if (query && !btn) {
            return filteredData.filter(
                (d) =>
                    d.name.toLowerCase().includes(query.toLowerCase()) ||
                    d.description.toLowerCase().includes(query.toLowerCase()) ||
                    d.priceAfterDiscount.toString().includes(query)
            );
        } else if (!query && btn) {
            return filteredData.filter(
                (d) =>
                    d.review.toFixed(1) >= btn);
        } else {
            return filteredData.filter(
                (d) =>
                    d.name.toLowerCase().includes(query.toLowerCase()) ||
                    d.description.toLowerCase().includes(query.toLowerCase()) ||
                    d.priceAfterDiscount.toString().includes(query) &&
                    d.review.toFixed(1) >= btn
            );
        }
    }

    // if (btn) {
    //   filteredData=filteredData.filter(
    //         (d) =>
    //             d.review.toFixed(1) >= btn
    //     );
    //
    //   return filteredData;
    // }

    const filteredData = filterData(query, dataWithDiscount, sortBy, btn);

    return (
        <div>
            <Box sx={{display: "flex", justifyContent: "center", height: "88px", alignItems: "center", mb: 6.5}}>
                <ResponsiveAppBar query={query} setQuery={setQuery} sx={{mx: 'auto'}}/>
            </Box>
            <Grid container spacing={3} justifyContent="center" flexWrap="nowrap">
                <Grid item direction="column" xs="auto"
                      sx={{
                          py: 3,
                          mt: 19.5,
                      }}
                >
                    <Box sx={{mb: 5}}>
                        <Typography variant="descriptionBoldRob">Price Range Selected</Typography>
                        <RangeSlider/>
                    </Box>
                    <CustomerReviews setBtn={setBtn}/>
                </Grid>
                <Grid item>
                    <Box
                        sx={{
                            boxShadow:
                                "0px 2px 4px 0px rgba(90, 91, 106, 0.24), 0px 1px 2px 0px rgba(58, 58, 68, 0.24)",
                            backgroundColor: "rgba(255, 255, 255, 1)",
                            borderRadius: "4px",
                            p: 2,
                            ml: "auto",
                            maxWidth: "1114px"
                        }}
                    >
                        <Stack sx={{height: "36px"}} direction="row" justifyContent={"space-between"}>
                            <BasicSelect handleSort={handleSort}/>
                            <CardViewTabs/>

                        </Stack>
                        <ChipsArray/>
                        <Grid container sx={{px: "auto"}} columnSpacing={2} rowSpacing={2}>
                            {filteredData.map((d) => (
                                <MultiActionAreaCard
                                    id={d.id}
                                    img={d.image}
                                    name={d.name}
                                    description={d.description}
                                    price={d.price}
                                    rate={d.review}
                                    discount={d.discount}
                                    currency={d.currency}
                                    shipping={d.shipping}
                                    cost={d.shipping.cost}
                                    method={d.shipping.method}
                                    estimatedDelivery={d.shipping.estimatedDelivery}/>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>


        </div>

    );
}
export default App;


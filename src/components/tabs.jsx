import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import theme from "../createTheme";
import "../App.css";
import tabLabel from "../tablabels";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
export default function EcomTabs(props) {


        const [value, setValue] = React.useState(1);

        const handleChange = (event, newValue) => {
            setValue(newValue);
        };


        return (


        <Tabs value={value} onChange={handleChange} indicatorColor="none" >

            {tabLabel.map((o) => (
                <Tab

                    key={o.id}
                    icon={o.icon}
                    label={o.label}
                    value={o.value}
                    sx={{
                        textTransform: "none",
                        color: (theme) => theme.palette.grey[60],
                        ...theme.typography.caption,
flex: 1
                    }}

                ></Tab>
                )
            )}
        </Tabs>

    );
}
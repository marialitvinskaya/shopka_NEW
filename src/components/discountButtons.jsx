import React from "react";
import Button from "@mui/material/Button";

export default function DiscountButton({content, style}){
    return (
        <Button style={style} sx={{radius: "4px", width: "70px", height: "24px", fontFamily: "Roboto", fontSize: "12px", fontWeight:400, whiteSpace: "nowrap", textTransform: "none" }}>
            {content}
        </Button>
    )
}



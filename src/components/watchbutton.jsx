import React, {useState} from "react";
import Button from "@mui/material/Button";
import theme from "../createTheme";
import Cart from "./cart";

export default function AccountButtons({cartItems, removeFromCart}) {

    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCart = () => {
        setIsCartOpen(true);
    };


    const closeCart = () => {
        setIsCartOpen(false);
    };

    return (

        <div>
            <Button
                color="primary"
                sx={{
                    minWidth: 104,
                    height: 40,
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "20px",
                    mx: 3.25,
                    py: 1,
                    px: 1.5,
                    border: "1px solid",
                    borderColor: theme.palette.primary.light,
                }}
                onClick={openCart}
            >
                Watch
            </Button>
            {isCartOpen && <Cart cartItems={cartItems} removeFromCart={removeFromCart} closeCart={closeCart}/>}
        </div>
    );

}

import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../images/logo.png";

const Footer = () => {
    return ( 
        <Box mt="80px" bgcolor="#fff3f3">
            <Stack gap="10px" alignItems= 'center' px="40px" pt="24px">
                <img src={Logo} alt="logo" width="70px" height="70px"/>
                <Typography variant="h5" pb="40px" mt="20px" color="#F08080">
                    Made by Sara Qureshi 2022
                </Typography>
            </Stack>
        </Box>
     );
}
 
export default Footer;
import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WeightsImage from "../images/weights.jpeg";

const theme = createTheme({
    palette: {
        primary: {
            main:'#9B2226',
        },
    },
});

const Banner = () => {
    return ( 
        <Box sx={{
            mt: { lg: '212px', xs: '70px'},
            ml: { sm: '50px'}
        }} position="relative" p="20px">
            <Typography 
                color="#F08080" 
                fontWeight="600" 
                fontSize="26px">
                Fitness Club
            </Typography>
            <Typography fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '40px'}
                }}
                mb="23px" mt="30px" 
            >
                Don't give up <br/> and keep going!
            </Typography>
            <Typography fontSize="22px" lineHeight="35px"
            mb={4}>
                Check out some awesome exercises
            </Typography>
            <ThemeProvider theme={theme}>
                <Button href="#exercises" variant="contained" color="primary"
                sx={{
                    padding: '10px'
                }}
                >Let's Go</Button>
            </ThemeProvider>
            <Typography fontWeight={600}
                color="#9B2226"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none'}
                }}
                fontSize="190px"
                fontFamily="'Lobster', cursive"
                >
                Exercise
            </Typography>
            <img src={WeightsImage} alt="banner" 
            className="hero-banner-img"/>
        </Box>
     );
}
 
export default Banner;
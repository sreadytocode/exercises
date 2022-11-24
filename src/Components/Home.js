import React, { useState } from "react";
import { Box } from "@mui/material";
import Banner from "./Banner.js";
import SearchBar from "./SearchBar.js";
import Exercises from "./Exercises.js";

const Home = () => {
    return ( 
        <Box>
            <Banner/>
            <SearchBar/>
            <Exercises/>
        </Box>
     );
}
 
export default Home;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar.js";
import Home from "../Components/Home.js";
import { Box } from "@mui/material";
import ExerciseDetails from "../Components/ExerciseDetails.js";

const GymContainer = () => {
    return ( 
        <Box width="400px">
            <Router>
                <NavBar/>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/exercise/:id" element={<ExerciseDetails/>}/>
                    </Routes>
            </Router>
        </Box>
     );
}
 
export default GymContainer;
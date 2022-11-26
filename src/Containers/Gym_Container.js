import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar.js";
import Home from "../Components/Home.js";
import { Box } from "@mui/material";
import ExerciseDetails from "../Components/ExerciseDetails.js";
import Footer from "../Components/Footer.js";

const GymContainer = () => {
    return ( 
        <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto">
            <Router>
                <NavBar/>
                    <Routes>
                        <Route path="/gym_react_exercises" element={<Home />}/>
                        <Route path="/exercise/:id" element={<ExerciseDetails/>}/>
                    </Routes>
            </Router>
                <Footer/>
        </Box>
     );
}
 
export default GymContainer;
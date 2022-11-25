import React, { useState } from "react";
import { Box } from "@mui/material";
import Banner from "./Banner.js";
import SearchBar from "./SearchBar.js";
import Exercises from "./Exercises.js";

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    
    return ( 
        <Box>
            <Banner/>
            <SearchBar setExercises={setExercises}
            bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            <Exercises setExercises={setExercises}
            bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
     );
}
 
export default Home;
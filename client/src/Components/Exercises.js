import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";


const Exercises = ({ setExercises, exercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);

    
    const exercisesPerPage = 9;
    const indexOfPreviousExercise = currentPage * exercisesPerPage;
    const indexOfTheFirstExercise = indexOfPreviousExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfTheFirstExercise, indexOfPreviousExercise);

   
    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behaviour: 'smooth'})
    };

    useEffect(()=> {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if (bodyPart === "all") {
                exercisesData = await fetch
                ('http://localhost:9000/exercises')
                .then((res) => res.json())
            } else {
                exercisesData = await fetch
                (`http://localhost:9000/bodyPart/${bodyPart}`)
                .then((res) => res.json())
            }
            setExercises(exercisesData);
        }

        fetchExercisesData();
        
    }, [setExercises, bodyPart]);

    return ( 
        <Box id="exercises"
            sx={{mt: { lg: '110px'}}}
            mt="50px"
            p="20px"
        >
            <Typography variant="h3" mb="46px">
                Showing Results
            </Typography>
            <Stack direction="row" 
                sx={{ gap: {lg: '110px', xs: '50px'}}}
                flexWrap="wrap" justifyContent="center">
                    {currentExercises.map((exercise, index) => (
                        <ExerciseCard key={index} exercise={exercise}/>  
                    ))}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {exercises.length > 9 && (
                    <Pagination 
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
     );
}
 
export default Exercises;
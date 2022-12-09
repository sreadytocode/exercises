import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ExerciseSelect from "../Components/ExerciseSelect.js";
import Video from "./Video.js";
import SimilarExercises from "./SimilarExercises.js";

import { exerciseOptions, youtubeOptions } from "../Services/GymService.js";

const ExerciseDetails = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideo, setExerciseVideo] = useState([]);
    const [exerciseTargetMuscles, setExerciseTargetMuscles] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
          const url = 'http://localhost:9000/exercises';
         

          fetch(`http://localhost:9000/exercises/${id}`)
          .then((res) => res.json())
          .then( async (exercise) => {
            setExerciseDetail(exercise)
            
            fetch(`http://localhost:9000/youtube/${exercise.name}/exercise`)
            .then((res) => res.json())
            .then( async (exerciseVideosData) => {
                setExerciseVideo(exerciseVideosData.contents);
            });
    
            fetch(`${url}/target/${exercise.target}`)
            .then((res) => res.json())
            .then( async (targetMuscle) => {
                setExerciseTargetMuscles(targetMuscle);
            })
            
          
            fetch(`${url}/equipment/${exercise.equipment}`)
            .then((res) => res.json())
            .then( async (equipmentData) => {
                setEquipmentExercises(equipmentData);
            })
        });
        

        }
        fetchExercisesData();
    }, [id])

    return ( 
        <Box>
            <ExerciseSelect exerciseDetail={exerciseDetail}/>
            <Video videos={exerciseVideo} name={exerciseDetail.name}/>
            <SimilarExercises targetMuscle={exerciseTargetMuscles} equipmentExercises={equipmentExercises}/>
        </Box>
     );
}
 
export default ExerciseDetails;
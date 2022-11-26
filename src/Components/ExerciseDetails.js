import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ExerciseSelect from "../Components/ExerciseSelect.js";
import Video from "./Video.js";
import SimilarExercises from "./SimilarExercises.js";

import { exerciseOptions, fetchData, youtubeOptions } from "../Services/GymService.js";

const ExerciseDetails = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideo, setExerciseVideo] = useState([]);
    const [exerciseTargetMuscles, setExerciseTargetMuscles] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
          const url = 'https://exercisedb.p.rapidapi.com';
          const youtubeSearchUrls = 'https://youtube-search-and-download.p.rapidapi.com';   

          const exerciseDetailData = await fetchData
          (`${url}/exercises/exercise/${id}`, exerciseOptions);
          setExerciseDetail(exerciseDetailData)
        
          const exerciseVideosData = await fetchData(`${youtubeSearchUrls}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
          setExerciseVideo(exerciseVideosData.contents);

          const targetMuscleData = await fetchData(`${url}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
          setExerciseTargetMuscles(targetMuscleData);
        
          const equipmentData = await fetchData(`${url}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
          setEquipmentExercises(equipmentData);

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
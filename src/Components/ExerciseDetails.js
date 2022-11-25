import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ExerciseSelect from "../Components/ExerciseSelect.js";
import Video from "./Video.js";
import SimilarExercises from "./SimilarExercises.js";

import { exerciseOptions, fetchData } from "../Services/GymService.js";

const ExerciseDetails = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
          const url = 'https://exercisedb.p.rapidapi.com';
          const youtubeSearchUrls = 'https://youtube-search-and-download.p.rapidapi.com';   

          const detailData = await fetchData(`${url}/exercises/exercise/${id}`, exerciseOptions);
          setExerciseDetail(detailData)
        }
        fetchExercisesData();
    }, [id])

    return ( 
        <Box>
            <ExerciseSelect exerciseDetail={exerciseDetail}/>
            <Video/>
            <SimilarExercises/>
        </Box>
     );
}
 
export default ExerciseDetails;
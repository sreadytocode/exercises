import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ScrollBar from "../Components/ScrollBar.js";
import Loader from "./Loader.js";
import styled from "styled-components";

const CustomiseSpan = styled.span`
    color: #F08080;
    text-transform: capitalize;

`

const SimilarExercises = ({ targetMuscle, equipmentExercises }) => (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
        Find Similar <CustomiseSpan>Target Muscle</CustomiseSpan> exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {targetMuscle.length !== 0 ? <ScrollBar data={targetMuscle} /> : <Loader />}
      </Stack>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
        Find Similar <CustomiseSpan>Equipment</CustomiseSpan> exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {equipmentExercises.length !== 0 ? <ScrollBar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  );
  
export default SimilarExercises;
import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Video = ({video, name}) => {
    return ( 
        <Box sx={{marginTop: { lg: '200px', xs: '20px'}}} p = "20px">
            <Typography variant="h3" mb="33px">
                Watch <span>{name}</span> exercise videos
            </Typography>
        </Box>
     );
}
 
export default Video;
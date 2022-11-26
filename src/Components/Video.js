import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import styled from "styled-components";

const CustomiseSpan = styled.span`
    color: #F08080;
    text-transform: capitalize;

`

const Video = ({videos, name}) => {

    if(!videos.length) return "Loading..."
    return ( 
        <Box sx={{marginTop: { lg: '200px', xs: '20px'}}} p = "20px">
            <Typography variant="h3" mb="33px">
                Watch <CustomiseSpan>{name}</CustomiseSpan> exercise videos
            </Typography>
            <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
                sx={{
                    flexDirection: { lg: 'row'},
                    gap: { lg: '110px', xs: '0'}
                }}>
                    {videos?.slice(0,3).map((item, index) => (
                        <a 
                            key={index}
                            className="exercise-video"
                            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                            <Box>
                                <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                                    {item.video.title}
                                </Typography>
                                <Typography fontSize="14px" color="#F08080">
                                    {item.video.channelName}
                                </Typography>
                            </Box>
                        </a>
                    ))}
            </Stack>
        </Box>
     );
}
 
export default Video;
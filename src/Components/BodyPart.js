import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../images/gym.png";

const BodyPart = ({item, setBodyPart, bodyPart}) => {
    return ( 
        <Stack 
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                borderTop: bodyPart === item ? '4px solid #FF2625' : '',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer', 
                gap: '47px'
        }}
        onClick={()=> {
            setBodyPart(item);
            window.scrollTo({top: 1800, left: 100, behaviour: 'smooth'})
        }}
        >
            <img src={Icon} alt="cat-weight" 
                style={{ width: '180px', height: '170px'}}/>

            <Typography
            fontSize="24px" fontWeight="bold" color="#3A1212"
            textTransform="capitalize"
            >{item}</Typography>
        </Stack>
     );
}
 
export default BodyPart;
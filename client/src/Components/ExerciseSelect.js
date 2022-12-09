import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import styled from "styled-components";
import BodyPartImage from "../images/body-part.png";
import TargetImage from "../images/target.png";
import EquipmentImage from "../images/equipment.png";

const Capitalise = styled.span`
    text-transform: capitalize;
`

const ExerciseSelect = ({exerciseDetail}) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ]

    return ( 
        <Stack 
            gap="60px"
            sx={{
                flexDirection: { lg: 'row'},
                p: '20px',
                alignItems: 'center',
            }}>
                <img src={gifUrl} alt={name} loading="lazy" className="detail-image"/>
                <Stack 
                sx={{gap: { lg: '35px', xs: '20px'}}}>
                    <Typography variant="h3" textTransform="capitalize">
                        {name}
                    </Typography>
                    <Typography variant="h6" >
                        Prioritise your wellbeing by exercising. <Capitalise>{name}</Capitalise> {' '}
                        is fantastic to target your {target}. This is perfect to improve
                        your mental and physical wellbeing. So keep going and don't give up!
                    </Typography>
                    {extraDetail.map((item) => (
                        <Stack key={item.name} direction="row" gap="24px" alignItems="center"> 
                            <Button sx={{
                                background: '#fff2db',
                                borderRadius: '50%',
                                width: '150px',
                                height: '150px'
                            }}>
                                <img src={item.icon} alt={bodyPart} style={{
                                    width: '80px',
                                    height: '80px'
                                }}/>
                            </Button>
                            <Typography textTransform="capitalize" variant="h5">
                                {item.name}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
        </Stack>
     );
}
 
export default ExerciseSelect;
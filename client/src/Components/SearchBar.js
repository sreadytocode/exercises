import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import ScrollBar from "./ScrollBar.js";

const SearchBar = ({setExercises, bodyPart, setBodyPart}) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExerciseData = async () => {
            fetch('http://localhost:9000/bodyPartList')
            .then((res) => res.json())
            .then(async (data) => 
            setBodyParts(['all', ...data])
            )
        
        }
        fetchExerciseData();
    }, [])

    const handleTheSearch = async () => {
        if (search) {
            const exerciseData = await fetch
            ('http://localhost:9000/exercises');
 
            const searchedExercises = exerciseData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );

            setSearch('');
            setExercises(searchedExercises);
        }
    };

    return ( 
        <Stack alignItems="center" mt="37px"
            justifyContent="center" p="20px">
                <Typography fontWeight={700}
                sx={{
                    fontSize: { lg: '44px', xs: '30px'}}}
                    mb="50px" textAlign="center">
                    Awesome Exercises You <br/>
                    Should Try Next!
                </Typography>
                <Box position="relative" mb="72px">
                    <TextField
                    sx={{
                        input: { 
                            fontWeight: '700', 
                            border: 'none', 
                            borderRadius: '4px'
                        },
                        width: { lg: '800px', xs: '350px'},
                        backgroundColor: '#fff',
                        borderRadius: '40px'
                    }}
                    height="76px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search For Exercises"
                    type="text"
                    />
                    <Button className="search-btn"
                        sx={{
                            bgcolor: '#9B2226',
                            color: '#fff',
                            textTransform: 'none',
                            width: { lg: '175px', xs: '80px' },
                            fontSize: { lg: '20px', xs: '14px' },
                            height: '56px',
                            position: "absolute",
                            right: '0'
                        }}
                        onClick={handleTheSearch}
                    >
                        Search
                    </Button>
                </Box>
                <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                        <ScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
                </Box>
        </Stack>
     );
}
 
export default SearchBar;
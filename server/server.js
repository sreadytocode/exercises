const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const fetch = require('node-fetch');

app.use(cors());

const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.EXERCISE_RAPID_API_KEY
    }
};

const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.YOUTUBE_API_KEY
    },
};


app.get('/exercises/:id', (req, res) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${req.params.id}`;
    fetch(url, exerciseOptions)
    .then((response) => response.json())
    .then((exercise) => res.send(exercise))
})


app.get('/exercises', (req, res) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises`
    fetch(url, exerciseOptions)
    .then((response) => response.json())
    .then((exercises) => res.send(exercises))
})

app.get('/exercises/target/:target', (req, res) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/target/${req.params.target}`
    fetch(url, exerciseOptions)
    .then((response) => response.json())
    .then((exercises) => res.send(exercises))
})

app.get('/exercises/equipment/:equipment', (req, res) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/equipment/${req.params.equipment}`
    fetch(url, exerciseOptions)
    .then((response) => response.json())
    .then((exercises) => res.send(exercises))
})

app.get('/bodyPartList', (req, res) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`
    fetch(url, exerciseOptions)
    .then((response) => response.json())
    .then((bodyPartList) => res.send(bodyPartList))
})
app.get('/bodyPart/:bodyPart', (req, res) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${req.params.bodyPart}`
    fetch(url, exerciseOptions)
    .then((response) => response.json())
    .then((bodyPart) => res.send(bodyPart))
})

app.get(`/youtube/:name/exercise`, (req, res) => {
    const url = `https://youtube-search-and-download.p.rapidapi.com/search?query=/${req.name}/exercise`
    fetch(url, youtubeOptions)
    .then((info)=> info.json())
    .then((video) => res.send(video))
})


app.listen(9000, function () {
    console.log('App running on port 9000');
})

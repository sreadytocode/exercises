import {rapidApiKey} from "../Services/config";

export const exerciseOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            'X-RapidAPI-Key': "3c66054837msh1dccd06ec74dd71p1e7d28jsne88b1d11c5f1"
            // process.env.REACT_APP_RAPID_API_KEY
        }
      };

      export const youtubeOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
          'X-RapidAPI-Key': '3c66054837msh1dccd06ec74dd71p1e7d28jsne88b1d11c5f1',
        },
      };

      export const fetchData = async (url, options) => {
        const res = await fetch(url, options);
        const data = await res.json();
      
        return data;
      };
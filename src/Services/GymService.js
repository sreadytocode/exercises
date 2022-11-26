import {rapidApiKey} from "../Services/config";

export const exerciseOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            'X-RapidAPI-Key': '7537507a19mshc1432c73158139cp1330ecjsne51fe2a2af1c',
            // process.env.REACT_APP_RAPID_API_KEY
        }
      };

      export const youtubeOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
          'X-RapidAPI-Key': '7537507a19mshc1432c73158139cp1330ecjsne51fe2a2af1c',
        },
      };

      export const fetchData = async (url, options) => {
        const res = await fetch(url, options);
        const data = await res.json();
      
        return data;
      };
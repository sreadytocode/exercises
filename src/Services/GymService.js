
export const exerciseOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            'X-RapidAPI-Key': "3c66054837msh1dccd06ec74dd71p1e7d28jsne88b1d11c5f1"
            // process.env.REACT_APP_RAPID_API_KEY
        }
      };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
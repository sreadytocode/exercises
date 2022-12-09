import {rapidApiKey} from "../Services/config";


      export const fetchData = async (url, options) => {
        const res = await fetch(url, options);
        const data = await res.json();
      
        return data;
      };
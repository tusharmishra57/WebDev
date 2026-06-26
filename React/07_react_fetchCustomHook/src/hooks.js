import { useState, useEffect } from 'react'

export function useFetch(url)
{
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    
        useEffect(() => 
        { 
          async function getDetails()
          {
            setLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setLoading(false);
          }
        

          getDetails();
        },[url])


    return {
      data: data,
      loading: loading
    }
}
import { useState, useEffect } from 'react'

export function useFetch(url)
{
    const [data, setData] = useState({});

    useEffect(() => 
        {
        async function getDetails()
        {
          const response = await fetch(url);
          const json = await response.json();
          setData(json);
        }
    
        getDetails();
      },[url])

      return {
        data: data

      }
}
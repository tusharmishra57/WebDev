import {useEffect, useRef} from 'react'

export function usePrev(value)
{
    const ref = useRef();

    useEffect(() =>{
        ref.current = value;  //this stores the current value, previous value is rendered by the return thing
    }, [value])

    return ref.current;  //this has the previous value
}

//return happens first then useEffect gets called
export function useDebounce()
{
    let currentClock;
    function searchBackend()
    {
        console.log("searching the backend");
    }

    function debounce()
    {
        clearTimeout(currentClock);
        currentClock = setTimeout(searchBackend, 30)
    }

    debounce();
    debounce();
    debounce();
    debounce();
    debounce();
    debounce();
    
}
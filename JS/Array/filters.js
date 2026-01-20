const input = [1, 2, 3, 4, 5]

function onlyOdds(i)
{
    if(i%2 == 0)
    {
        return false;
    }
    else
    {
        return true;
    }
}

console.log(input.filter(onlyOdds));
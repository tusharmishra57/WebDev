// Fetching Techniques
        const inputEl = document.querySelector("input");  //will give the html code for the first input tag of doucment
        console.log(inputEl);

        function addToDo()
        {
            console.log(inputEl.value); //will give the value of first input element when function gets called.
        }


//Updating Technique


        document.querySelectorAll("p")[2].innerHTML="adfsdfasdf";  //this will change/Update the content. 

        // Write a code which makes the first paragraph a counter.

        let ctr = 0;
        function counter()
        {
            document.querySelectorAll("p")[0].innerHTML = ctr;
            ctr++;
        }

        setInterval(counter, 1000);
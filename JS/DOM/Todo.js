// Adding

function addTodo()
{
    const inputEl = document.querySelector("input");

    const spanEl = document.createElement("span");
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    spanEl.innerHTML = inputEl.value;

    const divEl = document.createElement("div");
    divEl.appendChild(spanEl);
    divEl.appendChild(deleteButton);

    const parentEl = document.getElementById("todo");

    parentEl.appendChild(divEl);
    
}


deleteButton
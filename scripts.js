const list = document.getElementById("list");
const text = document.getElementById("text");
const addBtn = document.getElementById("addBtn");






//adds item typed in to the list(the DOM). 
function addItemToDOM() {
    if (text.value.trim() === "") {
        alert("please add a grocery item")
    } else {
        //create a variable for the input
        let input = text.value;
        //create a new li element. 
        let newLi = document.createElement("li");
        //specify what the innerHTML is going to be inside the new li element
        let addedItem = newLi.innerHTML = `<button class="deleteBtn" id="deleteBtn">X</button><button class="checkBtn" id="checkBtn">✔</button>•${input}`;
        //new li inner html
        newLi.innerHTML = addedItem;
        //add the li element to the list (DOM). 
        list.appendChild(newLi);
        text.value = "";
        //create a variable for the delete/check button now that it exists. 
        const deleteBtn = document.getElementById("deleteBtn");
        const checkBtn = document.getElementById("checkBtn");
        console.log(checkBtn);
        //event listener fot the delete button.
        deleteBtn.addEventListener("click", deleteItem);
        checkBtn.addEventListener("click", checkOffItem);
         
    }
}

function deleteItem(event){
    event.target.parentNode.remove();
    
}

function checkOffItem(event){
    if(checkBtn.innerHTML === "✔"){
        event.target.parentNode.style.textDecorationLine = "line-through";
        checkBtn.innerHTML = "↩";
    } else {
        event.target.parentNode.style.textDecorationLine = "none";
        checkBtn.innerHTML = "✔";
    }
    
}


//Event Listeners
addBtn.addEventListener("click", addItemToDOM);

 

const list = document.getElementById("list");
const text = document.getElementById("text");
const addBtn = document.getElementById("addBtn");






//adds item typed in to the list(the DOM). 
function addItemToDOM() {
    if (text.value.trim() === "") {
        alert("please add a grocery item")
    } else {
        console.log("we are adding to the DOM!")
        //create a variable for the input
        let input = text.value;
        //create a new li element. 
        let newLi = document.createElement("li");
        //specify what the innerHTML is going to be inside the new li element
        let addedItem = newLi.innerHTML = `<button class="deleteBtn" onclick="deleteItem(event)">X</button><button class="checkBtn" onclick="checkOffItem(event)">✔</button>•${input}`;
        //new li inner html
        newLi.innerHTML = addedItem;
        //add the li element to the list (DOM). 
        list.appendChild(newLi);
        text.value = "";
    }
}

function deleteItem(event){
    event.target.parentNode.remove();
    
}

function checkOffItem(event){
    console.log("we are at the checkoff funct!");
    console.log(event);
    if(event.target.innerHTML === "✔"){
        event.target.parentNode.style.textDecorationLine = "line-through";
        event.target.innerHTML = "↩";
    } else {
        event.target.parentNode.style.textDecorationLine = "none";
        event.target.innerHTML = "✔"; 
    }
    console.log(event.target.innerHTML); 
    
}


//Event Listeners
addBtn.addEventListener("click", addItemToDOM);

 

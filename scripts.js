const list = document.getElementById("list");
const text = document.getElementById("text");
const addBtn = document.getElementById("addBtn");


//adds item typed in to the list(the DOM). Works with the add button event listener. 
function addItemToDOM() {
    if (text.value.trim() === "") {
        alert("please add a grocery item")
    } else {
        console.log("we are adding to the DOM!")
        //create a variable for the input
        let input = text.value;
        //create a new li element. 
        let newLi = document.createElement("li");
        //specify what the innerHTML is going to be inside the new li element. events are added directly to the HTML. 
        let addedItem = newLi.innerHTML = `<button class="deleteBtn" onclick="deleteItem(event)">X</button><button class="checkBtn" onclick="checkOffItem(event)">✔</button>•${input}`;
        //new li inner html
        newLi.innerHTML = addedItem;
        //add the li element to the list (DOM). 
        list.appendChild(newLi);
        text.value = "";
    }
}

//deletes list item
function deleteItem(event){
    let deleteBtn = event.target;
    deleteBtn.parentNode.remove();
    
}


//Checks off by crossing out list item and undo if needed. 
function checkOffItem(event){
    console.log("we are at the checkoff funct!");

    let checkBtn = event.target;

    if(checkBtn.innerHTML === "✔"){
        checkBtn.parentNode.style.textDecorationLine = "line-through";
        checkBtn.innerHTML = "↩";
    } else {
        checkBtn.parentNode.style.textDecorationLine = "none";
        checkBtn.innerHTML = "✔"; 
    }
    console.log(checkBtn.innerHTML); 
    
}


//Event Listener that allows for add button to add item to the DOM. 
addBtn.addEventListener("click", addItemToDOM);

 

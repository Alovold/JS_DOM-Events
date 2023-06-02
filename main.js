console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let firstNode = document.getElementById("node1");
firstNode.textContent = `I used the getElementById("node1") method to access this`;
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let secondNode = document.getElementsByClassName("node2")[0];
secondNode.textContent = `I used the getElementByClassName("node2") method to access this`;
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3Nodes = document.getElementsByTagName("h3");
for (var i = 0; i < h3Nodes.length; i++) {
    var currentNode = h3Nodes[i];
currentNode.textContent = `I used the getElementByTagName("h3") method to access all of these`;
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let newParagraph = document.createElement("p");
let parentP = document.getElementById("parent");
newParagraph.textContent = `This node was created using the createElement() method`
// TODO: Append the created node to the parent node using the element.appendChild() method
parentP.appendChild(newParagraph);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let newAnchor = document.createElement("a");
newAnchor.textContent = `I am a <a> tag`;
// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parentP.appendChild(newAnchor);
parentP.insertBefore(newAnchor, newParagraph);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let newerParagraph = document.createElement("p");
newerParagraph.textContent = "New Child Node"
parentP.replaceChild(newerParagraph, newParagraph)

// TODO: Remove the "New Child Node"
setTimeout(()=>{parentP.removeChild(newerParagraph)}, 3000);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
let fruitList = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each
for (let i = 0; i < list.length; i++){
    let newLi = document.createElement("li");
    newLi.textContent = list[i];
    
    // TODO: Append the new list items to the unordered list element
    fruitList.appendChild(newLi);
}

// TODO: Append the unordered list to the `div#container` under exercise 4 
let groceryDiv = document.getElementById("container");
groceryDiv.appendChild(fruitList);
/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
let button = document.getElementById("btn");
let exer5 = document.querySelector(".exercise5")

function show(){
    let showDiv = document.createElement("div");
    let parentDiv = document.createElement("div");
    showDiv.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
    parentDiv.id = "modal";
    showDiv.classList.add("modal-card");

    parentDiv.appendChild(showDiv);
    exer5.appendChild(parentDiv);
}
button.addEventListener("click", show);


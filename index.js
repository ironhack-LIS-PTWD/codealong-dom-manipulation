// select by class
const $boxes = document.getElementsByClassName("box");

// select by id
const $specialBox = document.getElementById("special-box");

// select by tag Name
const $allDivs = document.getElementsByTagName("div");

$specialBox.style.backgroundColor = "red";
$specialBox.style.border = "1px solid black";
$specialBox.style.height = "200px";

// Query Selectors
// Selects the first element matching
const $queryBox = document.querySelector(".box");

// selects all elements matching returns a Node List (behaves like an array)
const $allQueryBoxes = document.querySelectorAll(".box");

// console.log("Query selector: ", $queryBox);
// console.log("Query selector All: ", $allQueryBoxes);

// changing class names
$queryBox.className = "new-class";

// chaning inner html
$queryBox.innerHTML = `<ul><li>one</li></ul>`;

// setting an attribute
const $link = document.querySelector("a");
$link.setAttribute("href", "https://www.google.com/");

// creating Elements
const $heading = document.createElement("h4");
// selecting the body
const $body = document.body;

// adding content to the created element
$heading.innerText = "This is a heading created with dom manipulation";

// adding or removing from the dom
$specialBox.appendChild($heading);
$specialBox.removeChild($heading);

// Event Listeners
const $clickMeButton = document.querySelector(".click-me-btn");
$clickMeButton.onclick = function() {
  console.log("Button clicked!");
};
$clickMeButton.addEventListener("click", () => {
  console.log("Event Listener Button clicked!");
});

// Practice
const $listButton = document.querySelector(".add-to-list");
const $ulList = document.querySelector(".list");

$listButton.addEventListener("click", () => {
  console.log("List Item Added!");
  $ulList.innerHTML += `<li> New Item </li>`;
});

// targeting input values
const $input = document.querySelector("input");
const $submitButton = document.getElementById("submit-btn");

$submitButton.addEventListener("click", () => {
  //to prevent the browsers default of refreshing page
  event.preventDefault();
  console.log("Input value: ", $input.value);
});

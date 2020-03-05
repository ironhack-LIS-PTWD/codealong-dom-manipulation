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
// selects the first element matching
const $queryBox = document.querySelector(".box");

// selects all elements matching returns an array (Node List)
const $allQueryBoxes = document.querySelectorAll(".box");

// console.log("Query selector: ", $queryBox);
// console.log("Query selector All: ", $allQueryBoxes);

// changing class names
$queryBox.className = "new-class";

// chaning inner html
$queryBox.innerHTML = `<ul><li>one</li></ul>`;

// setInterval(() => {
// 	$queryBox.className = "new-class";
// }, 3000);

// setting an attribute
const $link = document.querySelector("a");
$link.setAttribute("href", "www.google.com");

// creating Elements
const $heading = document.createElement("h4");
// body
const $body = document.body;

// adding content to the created element
$heading.innerText = "This is a heading created with dom manipulation";

// adding or removing from the dom
$specialBox.appendChild($heading);
$specialBox.removeChild($heading);

// Event Listeners
const $button = document.querySelector("button");

$button.onclick = function() {
  console.log("Button clicked!");
};

$button.addEventListener("click", () => {
  console.log("Event Listener Button clicked!");
});

// Practice

const $listButton = document.querySelector(".add-to-list");
const $ulList = document.querySelector(".list");

$listButton.addEventListener("click", () => {
  console.log("Button clicked");
  $ulList.innerHTML += `<li> New Item </li>`;
});

// targeting input values

const $input = document.querySelector("input");
const $submitButton = document.getElementById("submit-btn");

$submitButton.addEventListener("click", () => {
  event.preventDefault();
  console.log(event);
  console.log("Input value: ", $input.value);
});

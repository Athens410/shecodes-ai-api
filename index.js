function handleClick(){
console.log("Button clicked");
let heading = document.querySelector("h1");
heading.classList.add("highlight");

}


let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);







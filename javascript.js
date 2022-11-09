let welcomeElement = document.getElementById("welcome-element");
let name1 = prompt("What is your name?");
let greeting = "Good morning, ";
welcomeElement.textContent = greeting + name1;
welcomeElement.textContent += "!";

let count = 0;
let countElement = document.getElementById("count-element");

function increment() {
    count++;
    countElement.textContent = count;
}

let saveElement = document.getElementById("save-element");

function save() {
    let printout = " " + count + " -";
    saveElement.textContent += printout;
    count = 0;
    countElement.textContent = 0;
    

}



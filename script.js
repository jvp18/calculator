const buttons = document.querySelectorAll(".button");
const display = document.querySelector("#display-container");


const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;


const calcArray = []

let number = ""
const getNum = (e) => {  
   let showNumber = document.createElement("span")
   if (e.target.classList.contains("number")) {
      number += e.target.textContent
      showNumber.textContent = e.target.textContent
      display.appendChild(showNumber)
   } else {
      console.log(number)
   }
};

const show = () => {

}


buttons.forEach(num => num.addEventListener("click", getNum));



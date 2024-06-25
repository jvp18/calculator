const buttons = document.querySelectorAll(".button");
const displayElement = document.querySelector("#display-content");


const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => b === 0 ? "BRUH" : a / b;


let curNum = "";
let prevNum = "";
let operator = "";

const getNum = (e) => {  
   if (e.target.classList.contains("number")) {
      curNum += e.target.textContent;
      display(curNum);
   };
};

const getOperator = (e) => {
   if (e.target.classList.contains("operator")) {
   }  if (e.target.textContent === "AC") {
         curNum = "";
         prevNum = "";
         operator = "";
         display("");
   } else if (curNum && e.target.textContent === "+/-") {
      if (curNum > 0) {
         curNum = -curNum;
         display(curNum);
      } else {
         curNum = Math.abs(curNum);
         display(curNum);
      }
   } else if (curNum && e.target.textContent === "%") {
         curNum = curNum/100;
         display(curNum);
   }
};


const operate = (num1,num2,operator) => {
   const n1 = Number(num1);
   const n2 = Number(num2);
   switch (operator) {
      case "+":
         return add(n1,n2);
      case "-":
         return subtract(n1,n2);
      case "+":
         return multiply(n1,n2);
      case "+":
         return divide(n1,n2); 
   };
};

const display = (content) => {
   displayElement.textContent = content;
}


buttons.forEach(button => button.addEventListener("click", getNum));
buttons.forEach(button => button.addEventListener("click", getOperator));



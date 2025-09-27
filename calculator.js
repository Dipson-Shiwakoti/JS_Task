let num1Input = $("#num1");
let num2Input = $("#num2");
let resultInput = $("#result");

function add() {
  let num1 = parseFloat(num1Input.val()) || 0;
  let num2 = parseFloat(num2Input.val()) || 0;
  let result = num1 + num2;
  resultInput.val(result);
  resultInput.css("color", "green");
}

function subtract() {
  let num1 = parseFloat(num1Input.val()) || 0;
  let num2 = parseFloat(num2Input.val()) || 0;
  let result = num1 - num2;
  resultInput.val(result);
  resultInput.css("color", "red");
}

function multiply() {
  let num1 = parseFloat(num1Input.val()) || 0;
  let num2 = parseFloat(num2Input.val()) || 0;
  let result = num1 * num2;
  resultInput.val(result);
  resultInput.css("color", "blue");
}

function divide() {
  let num1 = parseFloat(num1Input.val()) || 0;
  let num2 = parseFloat(num2Input.val()) || 0;
  if (num2 === 0) {
    alert("Cannot divide by zero");
    resultInput.val("");
  } else {
    let result = num1 / num2;
    resultInput.val(result);
  }
  resultInput.css("color", "orange");
}

function modulus() {
  let num1 = parseFloat(num1Input.val()) || 0;
  let num2 = parseFloat(num2Input.val()) || 0;
  let result = num1 % num2;
  resultInput.val(result);
  resultInput.css("color", "pink");
}

//mouse handling
$("#add").on("click", add);
$("#sub").on("mouseover", subtract);
$("#mul").on("mouseenter", multiply);
$("#div").on("mouseleave", divide);
$("#mod").on("dblclick", modulus);

//keyboard handling
//keydown
$(document).on("keydown", function (event) {
  let k = event.key;
  //add
  if (k === "+" || k === "a" || k === "A") {
    add();
  }
  //subtract
  if (k === "-" || k === "s" || k === "S") {
    subtract();
  }
});
//keyup
$(document).on("keyup", function (event) {
  let k = event.key;
  //multiply
  if (k === "*" || k === "m" || k === "M") {
    multiply();
  }
  //divide
  if (k === "/" || k === "d" || k === "D") {
    divide();
  }
});
//keypress
$(document).on("keypress", function (event) {
  let k = event.key;
  //modulus
  if (k === "%" || k === "r" || k === "R") {
    modulus();
  }
});

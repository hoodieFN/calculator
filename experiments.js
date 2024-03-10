let firstNumb = 0;
let secondNumb = 0;
let operation = 0;
let x = 0;
let setOperation = 0;//1-div 2-x 3-sub 4-add 
const result = document.querySelector(".result");
//C - clear
const C = document.querySelector(".C");
C.addEventListener("click", function () {
  result.innerText = "0";
  firstNumb = 0;
  secondNumb = 0;
  x = 0;
  operation = 0;
});
//← - backspace (idk)  

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", function () {
  if (result.innerText == "0" || result.innerText == "1" ||
  result.innerText == "2" || result.innerText == "3" ||
  result.innerText == "4" || result.innerText == "5" ||
  result.innerText == "6" || result.innerText == "7" ||
  result.innerText == "8" || result.innerText == "9"){
    result.innerText = "0";
  }
  else{
    result.innerText = result.innerText.slice(0, -1);
  }
  firstNumb = parseInt(result.innerText, 10);
});

//division
const division = document.querySelector(".division");
division.addEventListener("click", function () {
  result.innerText = "0";
  operation = 1;
  setOperation = 1;
});

const multiplication = document.querySelector(".multiplication");
multiplication.addEventListener("click", function () {
  result.innerText = "0";
  operation = 1;
  setOperation = 2;
  console.log(setOperation)
});

const substraction = document.querySelector(".substraction");
substraction.addEventListener("click", function () {
  result.innerText = "0";
  operation = 1;
  setOperation = 3;
  console.log(setOperation)
});

const addition = document.querySelector(".addition");
addition.addEventListener("click", function () {
  result.innerText = "0";
  operation = 1;
  setOperation = 4;
  console.log(setOperation)
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", function () {
    if (setOperation === 1){
      x = firstNumb / secondNumb;
      result.innerText = x.toString();
    }
    else if(setOperation === 2){
      x = firstNumb * secondNumb;
      result.innerText = x.toString();
    }
    else if(setOperation === 3){
      x = firstNumb - secondNumb;
      result.innerText = x.toString();
    }
    else if(setOperation === 4){
      x = firstNumb + secondNumb;
      result.innerText = x.toString();
    }
    firstNumb = x;
    console.log("first" + firstNumb)
    console.log("second" + secondNumb)
});

//7 - number 7
const n7 = document.querySelector(".n7");
n7.addEventListener("click", function () {
  if (operation === 0){
    if (firstNumb === 0){
      result.innerText = "7"
    }
    else{
      result.innerText += "7";
    }
    firstNumb = parseInt(result.innerText, 10);
  }
  else{
    if (result.innerText === "0"){
      result.innerText = "7";
    }
    else{
      result.innerText += "7";
    }
    secondNumb = parseInt(result.innerText, 10);
  }
  console.log("first" + firstNumb)
  console.log("second" + secondNumb)
});

//8 - number 8
const n8 = document.querySelector(".n8");
n8.addEventListener("click", function () {
  if (operation === 0){
    if (firstNumb === 0){
      result.innerText = "8"
    }
    else{
      result.innerText += "8";
    }
    firstNumb = parseInt(result.innerText, 10);
  }
  else{
    if (result.innerText === "0"){
      result.innerText = "8"
    }
    else{
      result.innerText += "8";
    }
    secondNumb = parseInt(result.innerText, 10);
  }
  console.log("first" + firstNumb)
  console.log("second" + secondNumb)
});

//9 - number 9
const n9 = document.querySelector(".n9");
n9.addEventListener("click", function () {
  if (operation === 0){
    if (firstNumb === 0){
      result.innerText = "9"
    }
    else{
      result.innerText += "9";
    }
    firstNumb = parseInt(result.innerText, 10);
  }
  else{
    if (result.innerText === "0"){
      result.innerText = "9"
    }
    else{
      result.innerText += "9";
    }
    secondNumb = parseInt(result.innerText, 10);
  }
  console.log("first" + firstNumb)
  console.log("second" + secondNumb)
});

//4 - number 4
const n4 = document.querySelector(".n4");
n4.addEventListener("click", function () {
  if (operation === 0){
    if (firstNumb === 0){
      result.innerText = "4"
    }
    else{
      result.innerText += "4";
    }
    firstNumb = parseInt(result.innerText, 10);
  }
  else{
    if (result.innerText === "0"){
      result.innerText = "4"
    }
    else{
      result.innerText += "4";
    }
    secondNumb = parseInt(result.innerText, 10);
  }
  console.log("first" + firstNumb)
  console.log("second" + secondNumb)
});
  
//5 - number 5
const n5 = document.querySelector(".n5");
n5.addEventListener("click", function () {
  if (operation === 0){
    if (firstNumb === 0){
      result.innerText = "5"
    }
    else{
      result.innerText += "5";
    }
    firstNumb = parseInt(result.innerText, 10);
  }
  else{
    if (result.innerText === "0"){
      result.innerText = "5"
    }
    else{
      result.innerText += "5";
    }
    secondNumb = parseInt(result.innerText, 10);
  }
  console.log("first" + firstNumb)
  console.log("second" + secondNumb)
});

//6- number 6
const n6 = document.querySelector(".n6");
n6.addEventListener("click", function () {
  if (operation === 0){
    if (firstNumb === 0){
      result.innerText = "6"
    }
    else{
      result.innerText += "6";
    }
    firstNumb = parseInt(result.innerText, 10);
  }
  else{
    if (result.innerText === "0"){
      result.innerText = "6"
    }
    else{
      result.innerText += "6";
    }
    secondNumb = parseInt(result.innerText, 10);
  }
  console.log("first" + firstNumb)
  console.log("second" + secondNumb)
});

//1 - number 1
const n1 = document.querySelector(".n1");
n1.addEventListener("click", function () {
  if (operation === 0){
    if (firstNumb === 0){
      result.innerText = "1"
    }
    else{
      result.innerText += "1";
    }
    firstNumb = parseInt(result.innerText, 10);
  }
  else{
    if (result.innerText === "0"){
      result.innerText = "1"
    }
    else{
      result.innerText += "1";
    }
    secondNumb = parseInt(result.innerText, 10);
  }
  console.log("first" + firstNumb)
  console.log("second" + secondNumb)
});

//2 - number 2
const n2 = document.querySelector(".n2");
n2.addEventListener("click", function () {
  if (operation === 0){
    if (firstNumb === 0){
      result.innerText = "2"
    }
    else{
      result.innerText += "2";
    }
    firstNumb = parseInt(result.innerText, 10);
  }
  else{
    if (result.innerText === "0"){
      result.innerText = "2"
    }
    else{
      result.innerText += "2";
    }
    secondNumb = parseInt(result.innerText, 10);
  }
  console.log("first" + firstNumb)
  console.log("second" + secondNumb)
});

//3 - number 3
const n3 = document.querySelector(".n3");
n3.addEventListener("click", function () {
  if (operation === 0){
    if (firstNumb === 0){
      result.innerText = "3"
    }
    else{
      result.innerText += "3";
    }
    firstNumb = parseInt(result.innerText, 10);
  }
  else{
    if (result.innerText === "0"){
      result.innerText = "3"
    }
    else{
      result.innerText += "3";
    }
    secondNumb = parseInt(result.innerText, 10);
  }
  console.log("first" + firstNumb)
  console.log("second" + secondNumb)
});

//0 - number 0
const n0 = document.querySelector(".n0");
n0.addEventListener("click", function () {
  if (operation === 0){
    if (firstNumb === 0){
      result.innerText = "0"
    }
    else{
      result.innerText += "0";
    }
    firstNumb = parseInt(result.innerText, 10);
  }
  else{
    if (result.innerText === "0"){
      result.innerText = "0"
    }
    else{
      result.innerText += "0";
    }
    secondNumb = parseInt(result.innerText, 10);
  }
  console.log("first" + firstNumb)
  console.log("second" + secondNumb)
});

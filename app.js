const calculator = document.querySelector(".calculator");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

function appendValue(value) {
    input.value += value;
}

function clearValue(){
    input.value = "";
}

function calculate(){
   try{
    input.value = eval(input.value);
   } catch {
    input.value = "error";
   }
}
    

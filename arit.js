let first= Number(prompt("Enter first number: "));
let second= Number (prompt("Enter second number: "));
let option= (prompt("Enter operator to be calculated: +, -, *, /, %"));

let addition = first + second;
let subtraction = first - second;
let multiplication = first * second;
let division = first / second;
let exponent = first % second;

if (option === "+") {
    alert("The answer is " + addition + ".");
}else if (option === "-") {
    alert("The answer is " + subtraction + ".");
} else if (option === "*") {
    alert("The answer is " + multiplication + ".");
}else if (option === "/") {
    alert("The answer is " + division + ".");
} else if(option === "%"){
    alert ("The answer is " + exponent + ".");
}else {
    STOP
}

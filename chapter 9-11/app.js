var questions = "Question 1<br>"
document.write(questions)
// Question 1
var city = prompt("Please enter your city name");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights ")
} else {
    alert("Welcome to " + city)
}


var questions = "<br>Question 2<br>"
document.write(questions)
// Question 2
var gender = prompt("Please enter your gender please (Male/Female)")
if (gender === "" || gender === null) {
    alert("please enter your gender")
}
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir")
}
else if (gender.toLowerCase() === "female") {
    alert("Good Morning Maam")
}
else {
    alert("Good Morning")
}


var questions = "<br>Question 3"
document.write(questions)
// Question 3
var signal = prompt("Enter a Signal Color (Red, Yellow or Green)")
if (signal.toLowerCase() === "red") {
    alert("stop")
}
else if (signal.toLowerCase() === "yellow") {
    alert("ready")
}
else if (signal.toLowerCase() === "green") {
    alert("go")
}
else {
    alert("Please enter a valid color: (Red, Yellow or Green)")
}

document.write("<table border='1' cellspacing='0' cellpadding='10'>");
document.write("<tr><th>Signal Color</th><th>Message</th></tr>");
document.write("<tr><td>Red</td><td>Must Stop</td></tr>");
document.write("<tr><td>Yellow</td><td>Ready to move</td></tr>");
document.write("<tr><td>Green</td><td>Move now</td></tr>");
document.write("</table>");


var questions = "<br>Question 4"
document.write(questions)
// Question 4
var fuel = prompt("How much fuel left in your car? (in liters)")
fuel = parseFloat(fuel)
if (fuel < 0.26){
    alert("Please refill the fuel in your car")
}else (
    alert("Your fuel level is fine, Safe travels!")
)


var questions = "<br>Question 5"
document.write(questions)
// Question 5
var a = 4
if (++a === 5){
alert("given condition for variable a is true")
}

var b = 82
if (b++ === 83){
alert("given condition for variable b is false")
}

var c = 12
if (c++ === 13){
    alert("condition 1 is false")
}
if (c === 13){
    alert("condition 2 is true")
}
if (++c < 14){
    alert("condition 3 is false")
}
if (c === 14 ){
    alert("condition 4 is true")
}

var materialCost = 20000
var laborCost = 2000
var totalCost = materialCost + laborCost
if (totalCost === materialCost + laborCost){
    alert("The cost equals")
}

if (true){
    alert("True")
}
if (false){
    alert("False")
}

if ("car" < "cat"){
    alert("car is smaller than cat")
}

 
var questions = "<br>Question 6"
document.write(questions)
// Question 6
var sub1 = Number(prompt("Enter marks obtained in subject 1:"))
var sub2 = Number(prompt("Enter marks obtained in subject 2:"))
var sub3 = Number(prompt("Enter marks obtained in subject 3:"))
var totalMarks = Number(prompt("Enter total marks for all subject:"))

var obtainedMarks = sub1 + sub2 + sub3
var percentage = (obtainedMarks / totalMarks) * 100

var grade = ""
var remarks = ""

if (percentage >= 80){
    grade = "A-one"
    remarks = "Excellent"
}
else if (percentage >= 70){
    grade = "A"
    remarks = "Good"
}
else if (percentage >= 60){
    grade = "B"
    remarks = "You need to improve"
}
else if (percentage >= 50){
    grade = "C"
    remarks = "Nalaik"
}
else {
    grade = "Fail"
    remarks = "Sorry"
}

document.write("<h1>Marks Sheet</h1><br>")
document.write("Total Marks : " + totalMarks + "<br>")
document.write("Marks Obtained : " + obtainedMarks + "<br>")
document.write("Percentage : " + percentage.toFixed(2) + "%" + "<br>")
document.write("Grade : " + grade + "<br>")
document.write("Remarks : " + remarks + "<br>")


var questions = "<br>Question 7"
document.write(questions)
// Question 7
var secretNumber = 6
var userGuess = Number(prompt("Guess the number between 1 - 10"))
if (secretNumber === userGuess){
    alert("Bingo! Correct Answer")
}
else if (secretNumber === userGuess + 1){
    alert("Close enough to the correct answer")
}
else if (secretNumber === userGuess - 1){
    alert("Close enough to the correct answer")
}
else {
    alert("Wrong Guess! Try Again")
}


var questions = "<br>Question 8"
document.write(questions)
// Question 8
var num = Number(prompt("Enter a number to check if it's divisible by 3"))
if (num % 3 === 0){
    alert("The number " + num + " is divisible by 3")
}
else {
    alert("The number " + num + " is not divisible by 3")
}


var questions = "<br>Question 9"
document.write(questions)
// Question 9
var num = Number(prompt("Enter a number to check it's even or odd"))
if (num % 2 === 0){
    alert(num + " is an even number")
}
else{
    alert(num + " is an odd number")
}


var questions = "<br>Question 10"
document.write(questions)
// Question 10
var temperature = Number(prompt("Enter the temperature in celcius:"))
if (temperature >= 40){
    alert("Is to hot outside.")
}
else if (temperature >= 30){
    alert("The Wheather is today Normal.")
}
else if (temperature >= 20){
    alert("Today's Wheather is cool")
}
else if (temperature >= 10){
    alert("Today's Wheather is so cool")
}
else {
    alert("It's freezing outside!")
}


var questions = "<br>Question 11"
document.write(questions)
// Question 11
var firstNumber = Number(prompt("Enter first number"))
var secondNumber = Number(prompt("Enter second number"))
var operation = prompt("Enter operation (+, -, *, /, %)")
var result;
if (operation ===  "+" ) {
    result = firstNumber + secondNumber
}
else if (operation ===  "-" ) {
    result = firstNumber - secondNumber
}
else if (operation ===  "*" ) {
    result = firstNumber * secondNumber
}
else if (operation ===  "/" ) {
    if (secondNumber === 0){
        result = "Cannot divide by zero"
    }
   else {
     result = firstNumber / secondNumber 
   }
}
else if (operation ===  "%" ) {
    result = firstNumber % secondNumber
}
else {
    result = "Invalid Operation!"
}
alert ("result: " + result )
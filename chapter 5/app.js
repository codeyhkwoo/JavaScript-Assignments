var third = "Question 1" + "<br>";
document.write(third);
// Question 1
var num1 = 3, num2 = 5;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");


var third = "<br>Question 2" + "<br>";
document.write(third);
// Question 2 reapeat question 1 for subtraction, multiplication, division and modulus!
// Subtraction
var num1 = 3, num2 = 5;
document.write("Result of subtracting " + num1 + " and " + num2 + " is " + (num1 - num2) + "<br>");

// Multiplication
var num1 = 3, num2 = 5;
document.write("Result of multiplying " + num1 + " and " + num2 + " is " + (num1 * num2) + "<br>");

// Division
var num1 = 3, num2 = 5;
document.write("Result of dividing " + num1 + " and " + num2 + " is " + (num1 / num2) + "<br>");

// Modulus
var num1 = 5, num2 = 1;
document.write("Result of dividing " + num1 + " and " + num2 + " is " + (num1 % num2) + "<br>");


var third = "<br>Question 3" + "<br>";
document.write(third);
// Question 3
var variable;
document.write("Value after variable declaration is " + variable + "<br>");
variable = 5;
document.write("Initial value: " + variable + "<br>");
variable++;
document.write("Value after increment is: " + variable + "<br>");
variable = variable + 7;
document.write("Value after addition is: " + variable + "<br>");
variable--;
document.write("Value after decrement is: " + variable + "<br>")
var remainder = variable % 3;
document.write("The remainder is: " + remainder + "<br>");


var third = "<br>Question 4" + "<br>";
document.write(third); 
// Question 4
var ticketPrice = 600;
var quantity = 5;
var totalCost = ticketPrice * quantity;
document.write("Total cost to buy " + quantity + " tickets to a movie is " + totalCost + "PKR" + "<br>")


var third = "<br>Question 5";
document.write(third); 
// Question 5
var num = 4;
document.write("<h3> Table of " + num + "</h3>");
document.write(num + " x 1 = " + (num * 1) + "<br>");
document.write(num + " x 2 = " + (num * 2) + "<br>");
document.write(num + " x 3 = " + (num * 3) + "<br>");
document.write(num + " x 4 = " + (num * 4) + "<br>");
document.write(num + " x 5 = " + (num * 5) + "<br>");
document.write(num + " x 6 = " + (num * 6) + "<br>");
document.write(num + " x 7 = " + (num * 7) + "<br>");
document.write(num + " x 8 = " + (num * 8) + "<br>");
document.write(num + " x 9 = " + (num * 9) + "<br>");
document.write(num + " x 10 = " + (num * 10) + "<br>");


var third = "<br>Question 6<br>";
document.write(third); 
// Question 6
var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + '°C is ' + fahrenheit + '°F' + '<br>');
var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5/9;
document.write(fahrenheit2 + '°F is ' + celsius2 + '°C' + '<br>');


var third = "<br>Question 7";
document.write(third); 
// Question 7
var priceitem1 = 650;
var priceitem2 = 100;
var quantityitem1 = 3, quantityitem2 = 7, shippingcharges = 100;
var totalCost = (priceitem1 * quantityitem1) + (priceitem2 * quantityitem2) + shippingcharges;
document.write('<h1> Shopping Charges </h1>' + "<br>")
document.write("Price of item 1 is " + priceitem1 + '<br>');
document.write("Quantity of item 1 is " + quantityitem1 + '<br>');
document.write("Price of item 2 is " + priceitem2 + '<br>');
document.write("Quantity of item 2 is " + quantityitem2 + '<br>');
document.write("Shipping Charges " + shippingcharges + '<br><br>');
document.write("Total cost of your order is " + totalCost + "<br>");


var third = "<br>Question 8";
document.write(third); 
// Question 8
var totalMarks = 980, obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("<h1>Marks Sheet</h1>" + "<br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Obtained Marks: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "<br>");


var third = "<br>Question 9";
document.write(third); 
// Question 9
var totalPKR = (10 * 104.80) + (25 * 28);
document.write('<h1>Currency in PKR </h1>' + '<br>');
document.write('Total Currency in PKR: ' + totalPKR + '<br>');


var third = "<br>Question 10<br>";
document.write(third); 
// Question 10
var initialize = 10;
var result = ((initialize + 5) * 10) / 2;
document.write("Result of arithmetic sequence is " + result + "<br>");


var third = "<br>Question 11";
document.write(third); 
// Question 11
var currentYear = 2016, birthYear = 1992;
var age = currentYear - birthYear;
document.write("<h1> Age Calculator</h1>" + "<br>");
document.write("Current Year: " + 2016 + "<br>");
document.write("Birth Year: " + 1992 + "<br>");
document.write("Your Age is: " + age + "<br>");


var third = "<br>Question 12";
document.write(third); 
// Question 12
var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * (radius * radius);
document.write("<h1>The Geometrizer</h1>" + "<br>");
document.write("Radius of a circle is " + radius + "<br>");
document.write("The Circumference is " + circumference + "<br>");
document.write("The area is " + area + "<br>");


var third = "<br>Question 13";
document.write(third); 
// Question 13
var favSnack = "chocolate chip";
var currentAge = 15;
var maximumAge = 65;
var amountperday = 3;
var totalNeeded = (maximumAge - currentAge) * amountperday;
document.write("<h1>The Lifetime Supply Calculator</h1>" + "<br>");
document.write("Favourite Snack: chocolate chip" + "<br>");
document.write("Current age: 15" + "<br>");
document.write("Estimated Maximum Age: 65" + "<br>");
document.write("Amount of snacks per day: 3" + "<br>");
document.write("You will need " + totalNeeded + " " + favSnack + " to last you until the ripe old age of " + maximumAge + "<br>");
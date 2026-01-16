// Question 1 
var questions = "Question 1";
document.write(questions + '<br>');
var a = 10;
document.write('Result:<br>');
document.write('The value of a is: ' + a + '<br>');
document.write("........................................... <br><br>");
document.write("The value of ++a is: " + ++a +"</br>");
document.write("Now the value of a is: " + a +"</br></br>");
document.write("The value of a++ is: " + a++ +"</br>");
document.write("Now the value of a is: " + a +"</br></br>");
document.write("The value of --a is: " + --a +"</br>");
document.write("Now the value of a is: " + a +"</br></br>");
document.write("The value of a-- is: " + a-- +"</br>");
document.write("Now the value of a is: " + a +"</br></br>");

// Question 2 
var questions = "Question 2";
document.write(questions + '<br>'); 
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is: " + a + "<br>")
document.write("b is: " + b + "<br>")
document.write("result is: " + result + "<br>")


// Question 3
var questions = "<br>Question 3";
document.write(questions + '<br>'); 
var userName = prompt("Enter your name ");
alert("hello " + userName  );
document.write("hello " + userName + " hope you are doing well" + "<br>");


// Question 4
var questions = "<br>Question 4";
document.write(questions + '<br>'); 
var num = prompt("Enter a number ");
if (num === '' || num === "null") {
    num = 10;
}
num = Number(num);
document.write("<h1>Table of " + num + '</h1>' );
for (var i = 1; i <= 10; i++){
    document.write(num + " x " + i + " = " + (num * i) + "<br>" )
}


// Question 5
var questions = "<br>Question 5";
document.write(questions + '<br>');
var sub1 = prompt("Enter first subject name");
var sub2 = prompt("Enter second subject name");
var sub3 = prompt("Enter third subject name");

var totalMarksPerSubject = 100;

var obtMarks1 = Number(prompt("Enter obtained marks for " + sub1));
var obtMarks2 = Number(prompt("Enter obtained marks for " + sub2));
var obtMarks3 = Number(prompt("Enter obtained marks for " + sub3));

var totalObtMarks = obtMarks1 + obtMarks2 + obtMarks3;
var totalAllSub = totalMarksPerSubject * 3;
var overAllPercentage = (totalObtMarks / totalAllSub) * 100;

document.write("<table border='1' cellspacing='0' cellpadding='10'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

document.write("<tr><td>" + sub1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtMarks1 + "</td><td>" + (obtMarks1 / totalMarksPerSubject * 100) + "%</td></tr>"  ); 
document.write("<tr><td>" + sub2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtMarks2 + "</td><td>" + (obtMarks2 / totalMarksPerSubject * 100) + "%</td></tr>"  ); 
document.write("<tr><td>" + sub3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtMarks3 + "</td><td>" + (obtMarks3 / totalMarksPerSubject * 100) + "%</td></tr>"  ); 

document.write("<tr><th>Total</th><th>" + totalAllSub + "</th><th>" + totalObtMarks + "</th><th>" + overAllPercentage.toFixed(2) + "%</th></tr>" );
document.write("</table>");
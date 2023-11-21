//different types of variabilities

let x= 12;
console.log(typeof x);

let lost = true;
console.log(typeof lost);

let message = "JS is kinda hard :(";
alert(message);
console.log(typeof message);

let myObject = null;
console.log(typeof null);

//full name in one row

let firstName = "Oleksandra";
let lastName = "Shkilniuk";
let fullName = firstName + " " + lastName;
console.log(fullName)
alert(fullName);

// alert, confirm, prompt script
//QUESTION?? CAN I RESTRICT USERS FROM WRITING ANY TYPE OF CONTENT IN AGE FIELD. I WANT THEM TO WRITE ONLY NUMBERS!!

let Name = prompt('What is your name?');
let age = prompt("What is your age?");
alert("Hi " + Name + "!" + " You are " + age);

//license test
let nationality = confirm("Are you from Ukraine?");
let userAge = confirm("Are you 21+?");
let education = confirm("Do you have a Bachelor Degree?");
let car = confirm("Do you have any other vehicle?");
let children = confirm("Do you have children?");
let carAccident = confirm("Have you ever been in a car accident?");
let fofun = confirm("Do you have a letter A in your name?");


let result = (nationality && ((!carAccident || userAge) && (!carAccident || children) && (!carAccident || education))) || fofun;

alert("Decision resolution is " +result + " ." + "Respectfully, A company");


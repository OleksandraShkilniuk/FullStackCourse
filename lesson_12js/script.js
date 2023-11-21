
//Напишіть функцію, яка приймає масив чисел та повертає суму всіх елементів.

function totalNumber (numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }     return sum;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = totalNumber(numbers)
console.log(result);

//Напишіть функцію, яка приймає масив чисел та повертає суму всіх елементів.
function totalNumbers1 (numbers) {
    let sum1 = 0;
    for (let i = 0; i < numbers.length; i++) {
         sum1 = sum1 + numbers[i];
    } return sum1;
}
console.log(totalNumbers1([1,2,3,4,5,6,7,8,9,10]))

//Створіть об'єкт "користувач" з полями "ім'я", "вік" та "статус". Напишіть функцію, яка приймає цей об'єкт і повертає рядок у форматі "Ім'я: [ім'я], Вік: [вік], Статус: [статус]".

let myObject = {
    name: "Alex",
    age: 30,
    status: "Online",
    allObjects: function () {
        return `Name: ${myObject.name}, Age: ${myObject.age}, Status: ${myObject.status}`
    }
}
console.log(myObject.allObjects())

let secondObject = {
    name: "Alex",
    age: 30,
    status: "Online",
}

function show(obj) {
    return `Name: ${secondObject.name}, Age: ${secondObject.age}, Status: ${secondObject.status}`
}
const resultObject = show(secondObject);
console.log(resultObject)

//Напишіть функцію, яка приймає рядок і повертає новий рядок із перевернутим порядком символів.

function reverse (initialString) {
    let splittedString = initialString.split("");
    let reversedString = splittedString.reverse();
    let joinString = reversedString.join("");
    return joinString;
}

console.log (reverse("JS is so haarddd!"))

//Напишіть функцію, яка приймає рядок і повертає новий рядок із перевернутим порядком символів.
function reverse2 (string) {
    let reversedString2 = string.split("").reverse().join("");
    return reversedString2;
}
console.log(reverse2("Second option"));


//Створіть об'єкт"автомобіль" з полями "марка", "модель" та "рік випуску". Напишіть функцію, яка приймає цей об'єкт і виводить інформацію про автомобіль у консоль.
const car = {
    brand: "Honda",
    model: "Civil",
    "year of manufacture": 2011,
};
function displayCarInfo(carObject) {
    console.log(`Car Make: ${carObject.brand}`);
    console.log(`Car Model: ${carObject.model}`);
    console.log(`Car Year: ${carObject["year of manufacture"]}`);
}

displayCarInfo(car);

//Створіть просту гру "Вгадай число". Генеруйте випадкове число від 1 до 100, а потім пропонуйте користувачеві вгадати це число, підказуючи "більше" або "менше" до тих пір, поки користувач не вгадає число. Використовуйте  prompt для того, щоб запитати у коритсувача його варіант, та  alert для виведення підказок (більше, менше)
// function guessGame () {
//     let max = parseInt(prompt("Choose the maximum number in your game"))
//     let randomNumber = Math.floor(Math.random() * max) + 1;
//     let numberofTries = 0;
//     let userGuess = false;
//
//     while (!userGuess) {
//         let userChoice = parseInt(prompt("Guess the number between 1 and " + max));
//         if (userChoice === randomNumber) {
//             userGuess = true;
//             numberofTries++;
//             alert("Congratulations! You guessed the number " + randomNumber + " in " + numberofTries + " tries.");
//         } else if (userChoice < randomNumber) {
//             numberofTries++;
//             alert("You didn`t guess. The " + userChoice + " is smaller than the actual number")
//         } else if (userChoice > randomNumber) {
//             numberofTries++;
//             alert("You didn`t guess. The " + userChoice + " is bigger than the actual number")
//         }
//     }
// }
// guessGame();

// let ask = confirm("Wanna play?")
//
// if (ask) {
//         let max = parseInt(prompt("Choose the maximum number in your game"))
//         let randomNumber = Math.floor(Math.random() * max) + 1;
//         let numberOftries = 0;
//         let userGuess = false;
//
//         while(!userGuess) {
//             let userChoice = parseInt(prompt("Guess the number between 1 and " + max));
//             if (userChoice === randomNumber) {
//                 userGuess = true;
//                 numberOftries++;
//                 alert("Congratulations! You guessed the number " + randomNumber + " in " + numberOftries + " tries.");
//             } else if (userChoice < randomNumber) {
//                 numberOftries++;
//                 alert("You didn`t guess. The " + userChoice + " is smaller than the actual number")
//             } else if (userChoice > randomNumber) {
//                 numberOftries++;
//                 alert("You didn`t guess. The " + userChoice + " is bigger than the actual number")
//             }
//         }
// } else {
//     alert ("No game")
// }

//Створіть функцію-генератор випадкових паролів заданої довжини. Пароль має містити як літери, і цифри. Довжина пароля повинна передаватись у вигляді аргумента.

function newPassword (len) {
    const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let newpass = "";
    for (i = 0; i < len; i++) {
        const randomNumber = Math.floor(Math.random() * symbols.length);
        newpass += symbols.charAt(randomNumber);
    } return newpass;
}

const endPassword = newPassword(14);
console.log(endPassword);

//Напишіть функцію, яка приймає масив чисел і повертає новий масив, який містить лише унікальні значення (без повторень).
function noDuplicatesArray(array) {
    const uniqueSet = new Set(array);
    const uniqueArray = Array.from(uniqueSet)
    return uniqueArray;
}
const uniqueValues = noDuplicatesArray([1, 2, 2, 3, 4, 4, 5,7, 7]);
console.log(uniqueValues);

//.remove
function removeTest (text) {
    const newText = text.replace(/\s/g, "");
    return newText;
}
console.log(removeTest("Hi my name is"))

//toLowerCases
function lowerCases (inoutText) {
    const newText = inoutText.toLowerCase();
    return newText;
}
console.log(lowerCases("AHAHAHAHAHAHA"));

//Напишіть функцію, яка приймає рядок і визначає, чи вона є паліндромом (читається однаково в обох напрямках), ігноруючи пробіли, розділові знаки та регістр.
function isPalydrome (inputText) {
    const noSymbolsString = inputText.replace(/[^a-zA-Z]/g, "").toLowerCase();
    const reversedText = noSymbolsString.split("").reverse().join("");
    if (noSymbolsString === reversedText) {
        console.log("It is a Palydrome!")
    } else {
        console.log("It is not a Palydrome(")
    }
}
isPalydrome("Hellp")


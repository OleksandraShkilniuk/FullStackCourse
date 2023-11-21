let x=1;
if (x=>0) {
    console.log ("positive")
} else {
    console.log ("negative")
}

console.log (x);

//empty not empty

let y = "";
if (y.length === 0) {
    console.log("empty");
} else {
    console.log("not empty");
}

//even / not even
let num1 = 20;
let num2 = 4;

if (num1%num2===0 && num1%2===0) {
    console.log ("hurray! both are true")
} else {
    console.log ("not true sad :(")
}
//from 1 to 100

let numbersCounter = 1;
while (numbersCounter<=100) {
    console.log (numbersCounter);
    numbersCounter++;
}
//from 100 to 1

let numbersCounter2 = 100;
while (numbersCounter2>=1) {
    console.log (numbersCounter2);
    numbersCounter2--;
}

let brrrrr = "BREAK TO SEE";
console.log (brrrrr);

//multiplication table QUESTION: ЧОМУ Я НЕ МОЖУ ПОСТАВИТИ RESULT В УСЛОВИЕ WHILE, а треба саме forTable

let mTable = 2;
let forTable = 1;

while (forTable <= 9) {
    let result = mTable * forTable;
    console.log(mTable + " x " + forTable + " = " + result);
    forTable++;
}


//multiplication table v2 QUESTION: ЧОМУ РЕЗАЛТ ПОВИНЕН БУТИ ВСЕРЕДИНІ ЦИКЛУ

let first = 3;
let second = 1

while (second<=9) {
    let result = first*second;
    console.log (first + " x " + second + " = " + result);
    second++;
}

//even numbers from 50 to 1

for (let number = 50; number>0; number--) {
    if (number%2 != 0) continue;
    console.log (number);
  }
let brrrrrr2 = "BREAK TO SEE";
console.log (brrrrrr2);

//test even numbers from 50 to 1

for (let i=1; i<=50; i++) {
    if (i%2 == 0) {
        console.log (i)
    }
}


//asterisk triangle
let asterisk = '';

for (row = 1; row <= 5; row++) {
    for (col = 1; col <= row; col++) {
        asterisk += "*";
    }
    asterisk += '\n';
}

console.log(asterisk);

//numbers triangle
let numbers = '';

for (row2 = 1; row2 <=5; row2++) {
    for (col2 = 1; col2<=row2; col2++) {
        numbers += row2;
    }
    numbers += '\n';

}
console.log(numbers);

//pascale triangle
const numRows = 5;


for (let i = 0; i < numRows; i++) {
    let row = '';
    let num = 1;


    for (let j = 0; j < numRows - i; j++) {
        row += ' ';
    }

    for (let j = 0; j <= i; j++) {
        row += num + ' ';
        num = num * (i - j) / (j + 1);
    }

    console.log(row);
}

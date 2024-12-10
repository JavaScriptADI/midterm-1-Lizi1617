// Write your code here
//1
function displayCurrentDayTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();

    const day = daysOfWeek[now.getDay()];
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, `0`);
    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    const currentDayTime = (`Today is: ${day}. Current time is: ${hours} ${period}: ${minutes} : ${seconds}`);
    console.log(currentDayTime);
}

displayCurrentDayTime();

//2
function printCurrentWindowContent() {
    window.print();
}

printCurrentWindowContent();

//3
function currentDate() {
    const now = new Date();

    const day = now.getDate().toString().padStart(2, `0`);
    const Month = (now.getMonth() + 1).toString().padStart(2, `0`);
    const year = now.getFullYear();

    const formats = [
        `${Month}-${day}-${year}`,
        `${Month}-${day}-${year}`,
        `${day}-${Month}-${year}`,
        `${day}-${Month}-${year}`
    ];

    formats.forEach(format => console.log(format));
}

currentDate();

//4
function calculateTriangleArea(a, b, c) {
    const s = (a + b + c) / 2;

    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}

const a = 5, b = 6, c = 7;

const area = calculateTriangleArea(a, b, c);
console.log(`The area of the triangle with sides ${a}, ${b}, and ${c} is: ${area.toFixed(2)}`);

//5
function rotateStringRight(str) {
    let rotatedStr = str;

    setInterval(() => {
        rotatedStr = rotatedStr[rotatedStr.length - 1] + rotatedStr.slice(0, -1);

        console.log(rotatedStr);
    }, 500);
}

rotateStringRight();

//6
function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

const year = 2024;
if (leapYear(year)) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is ot a leap year`);
}

//7
function findSundayInYears(startYear, endYear) {
    console.log("Year where January 1st is a sunday:");
    for (let year = startYear; year <= endYear; year++) {
        const firstDay = new Date(year, 0, 1);
        if (firstDay.getDay() === 0) {
            console.log(year);
        }
    }
}

findSundayInYears();

//8
function guessTheNumber() {
    const randomNum = Math.floor(Math.random() * 10) + 1;

    const userguess = parseInt(prompt("Guess a number between 1 and 10"), 10);

    if (userguess === randomNum) {
        console.log("Good Work");
    } else {
        console.log(`Not Matched. The correct was ${randomNum}.`);
    }
}

guessTheNumber();

//9
function daysUntilChristmas() {
    const today = new Date();
    const currentYear = today.getFullYear();

    const Christmas = new Date(currentYear, 11, 25);

    if (today > Christmas) {
        Christmas.setFullYear(currentYear + 1);
    }

    const difference = Christmas - today;

    const daysLeft = Math.ceil(difference / (100 * 60 * 60 24));

    console.log(`Today are ${daysLeft} day(s) left until christmas`);
}

daysUntilChristmas();

//10
function calculate() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }

    const multiplication = num1 * num2;
    const division = num2 !== 0 ? (num1 / num2).toFixed(2) : "Undefind (division by zero)";

    alert(`Multiplication: ${multiplication}\nDivision: ${division}`);
}

calculate();

//11
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

const celsius = 60;
const fahrenheit = 45;

const fahrenheitResult = celsiusToFahrenheit(celsius);
const celsiusResult = fahrenheitToCelsius(fahrenheit);

console.log(`${celsius}°C is ${fahrenheitResult}°F`);
console.log(`${fahrenheit}°F is ${celsiusResult}°C`);

//12
function getWebsiteURL() {
    const currentURL = window.location.href;

    console.log("The current website URL is: " + currentURL);
}

getWebsiteURL();

//13
function createVariable() {
    const varName = prompt("Enter a name for the variable:");

    if (varName && /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(varName)) {
        const value = prompt(`Enter a value for the variable ${varName}:`);

        eval(`var ${varName} = '${value}';`);

        console.log(`The value of ${varName} is: ${eval(varName)}`);
    } else {
        console.log("Invalid variable name.");
    }
}

createVariable();

//14
function getFileExtension() {
    const filename = prompt("Enter a filename (e.g., 'example.txt'):");

    const extension = filename.split('.').pop();

    if (extension === filename) {
        console.log("No file extension found.");
    } else {
        console.log(`The file extension is: .${extension}`);
    }
}

getFileExtension();

//15
function differenceFrom13(num) {
    const difference = Math.abs(num - 13);

    if (num > 13) {
        return difference * 2;
    }

    return difference;
}

const number = parseInt(prompt("Enter a number:"));
const result = differenceFrom13(number);

console.log(`The result is: ${result}`);

//16
function computeSum(a, b) {
    const sum = a + b;

    if (a === b) {
        return sum * 3;
    }

    return sum;
}

const num1 = parseInt(prompt("Enter the first integer:"));
const num2 = parseInt(prompt("Enter the second integer:"));

const result = computeSum(num1, num2);

console.log(`The result is: ${result}`);

//17
function computeAbsoluteDifference(num) {
    const difference = Math.abs(num - 19);

    if (num > 19) {
        return difference * 3;
    }

    return difference;
}

const number = parseInt(prompt("Enter a number:"));
const result = computeAbsoluteDifference(number);

console.log(`The result is: ${result}`);

//18
function checkPairOfNumbers(num1, num2) {
    if (num1 === 50 || num2 === 50 || (num1 + num2 === 50)) {
        return true;
    }
    return false;
}

const number1 = parseInt(prompt("Enter the first number:"));
const number2 = parseInt(prompt("Enter the second number:"));

const result = checkPairOfNumbers(number1, number2);

console.log(`The result is: ${result}`);

//19
function isWithin20(num) {
    if (Math.abs(num - 100) <= 20 || Math.abs(num - 400) <= 20) {
        return true;
    }
    return false;
}

const number = parseInt(prompt("Enter a number:"));
const result = isWithin20(number);

console.log(`The result is: ${result}`);

//20
function checkPositiveNegative(num1, num2) {
    if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
        return true;
    }
    return false;
}

const number1 = parseInt(prompt("Enter the first number:"));
const number2 = parseInt(prompt("Enter the second number:"));

const result = checkPositiveNegative(number1, number2);

console.log(`The result is: ${result}`);

//21
function addPyPrefix(str) {
    if (str.startsWith("Py")) {
        return str;
    } else {
        return "Py" + str;
    }
}

const inputString = prompt("Enter a string:");

const result = addPyPrefix(inputString);

console.log(`The result is: ${result}`);

//22
function removeCharacterAtPosition(str, position) {
    if (position < 0 || position >= str.length) {
        return "Invalid position.";
    }

    const modifiedStr = str.slice(0, position) + str.slice(position + 1);

    return modifiedStr;
}

const inputString = prompt("Enter a string:");
const position = parseInt(prompt("Enter the position of the character to remove:"));

const result = removeCharacterAtPosition(inputString, position);

console.log(`The modified string is: ${result}`);

//23
function swapFirstAndLast(str) {
    if (str.length >= 1) {
        if (str.length === 1) {
            return str;
        } else {
            return str.charAt(str.length - 1) + str.slice(1, str.length - 1) + str.charAt(0);
        }
    } else {
        return "String length must be at least 1!";
    }
}

const inputString = prompt("Enter a string:");

const result = swapFirstAndLast(inputString);

console.log(`The new string is: ${result}`);

//24
function addFirstCharToFrontAndBack(str) {
    if (str.length >= 1) {
        const firstChar = str.charAt(0);
        return firstChar + str + firstChar;
    } else {
        return "String cannot be empty!";
    }
}

const inputString = prompt("Enter a string:");

const result = addFirstCharToFrontAndBack(inputString);

console.log(`The new string is: ${result}`);

//25
function isMultipleOf3Or7(num) {
    if (num > 0) {
        if (num % 3 === 0 || num % 7 === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Please enter a positive number!";
    }
}

const number = parseInt(prompt("Enter a positive number:"));

const result = isMultipleOf3Or7(number);

console.log(`The result is: ${result}`);

//26
function createStringFromLastThreeChars(str) {
    if (str.length >= 3) {
        const lastThreeChars = str.slice(-3);
        return lastThreeChars + str + lastThreeChars;
    } else {
        return "String length must be 3 or more!";
    }
}

const inputString = prompt("Enter a string:");

const result = createStringFr

//27
function checkStringStartsWithJava(str) {
    if (str.startsWith("Java")) {
        return "The string starts with 'Java'.";
    } else {
        return "The string does not start with 'Java'.";
    }
}

const inputString = prompt("Enter a string:");

const result = checkStringStartsWithJava(inputString);

console.log(result);

//28
function checkRange(num1, num2) {
    if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) {
        return true;
    } else {
        return false;
    }
}

const number1 = parseInt(prompt("Enter the first number:"));
const number2 = parseInt(prompt("Enter the second number:"));

const result = checkRange(number1, number2);

console.log(`The result is: ${result}`);

//29
function checkRange(num1, num2, num3) {
    if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99) || (num3 >= 50 && num3 <= 99)) {
        return true;
    } else {
        return false;
    }
}

const number1 = parseInt(prompt("Enter the first number:"));
const number2 = parseInt(prompt("Enter the second number:"));
const number3 = parseInt(prompt("Enter the third number:"));

const result = checkRange(number1, number2, number3);

console.log(`The result is: ${result}`);

//30
function removeScriptIfAtFifthPosition(str) {
    if (str.slice(4, 10) === "Script") {
        return str.slice(0, 4) + str.slice(10);
    } else {
        return str;
    }
}

const inputString = prompt("Enter a string:");

const result = removeScriptIfAtFifthPosition(inputString);

console.log(`The result is: ${result}`);

//31
function findLargestOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

const number1 = parseInt(prompt("Enter the first number:"));
const number2 = parseInt(prompt("Enter the second number:"));
const number3 = parseInt(prompt("Enter the third number:"));

const result = findLargestOfThree(number1, number2, number3);

console.log(`The largest number is: ${result}`);

//32
function closestTo100(num1, num2) {
    const diff1 = Math.abs(100 - num1);
    const diff2 = Math.abs(100 - num2);

    if (diff1 < diff2) {
        return num1;
    } else if (diff2 < diff1) {
        return num2;
    } else {
        return "Both numbers are equally close to 100";
    }
}

const number1 = parseInt(prompt("Enter the first number:"));
const number2 = parseInt(prompt("Enter the second number:"));

const result = closestTo100(number1, number2);

console.log(`The closest number to 100 is: ${result}`);

//33
function checkRange(num1, num2) {
    const inRange1 = (num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100);
    const inRange2 = (num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100);

    return inRange1 && inRange2;
}

const number1 = parseInt(prompt("Enter the first number:"));
const number2 = parseInt(prompt("Enter the second number:"));

const result = checkRange(number1, number2);

console.log(`Both numbers are in the range: ${result}`);

//34
function findLargestInRange(num1, num2) {
    if ((num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60)) {
        return Math.max(num1, num2);
    } else {
        return "Both numbers must be between 40 and 60 inclusive.";
    }
}

const number1 = parseInt(prompt("Enter the first number (between 40 and 60):"));
const number2 = parseInt(prompt("Enter the second number (between 40 and 60):"));

const result = findLargestInRange(number1, number2);

console.log(`The largest number is: ${result}`);

//35
function checkCharacterInRange(str, char) {
    if (str.length >= 4) {
        const substring = str.slice(1, 4);

        if (substring.includes(char)) {
            return `The character '${char}' exists between the 2nd and 4th positions.`;
        } else {
            return `The character '${char}' does not exist between the 2nd and 4th positions.`;
        }
    } else {
        return "The string must have at least 4 characters.";
    }
}

const inputString = prompt("Enter a string:");
const inputChar = prompt("Enter a character to search:");

const result = checkCharacterInRange(inputString, inputChar);

console.log(result);

//36
function checkLastDigit(num1, num2, num3) {
    const lastDigit1 = num1 % 10;
    const lastDigit2 = num2 % 10;
    const lastDigit3 = num3 % 10;

    if (lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3) {
        return `The last digits of the numbers are the same: ${lastDigit1}.`;
    } else {
        return "The last digits of the numbers are not the same.";
    }
}

const number1 = parseInt(prompt("Enter the first number:"));
const number2 = parseInt(prompt("Enter the second number:"));
const number3 = parseInt(prompt("Enter the third number:"));

const result = checkLastDigit(number1, number2, number3);

console.log(result);

//37
function modifyString(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    } else {
        const firstThreeLower = str.slice(0, 3).toLowerCase();
        const remainingPart = str.slice(3);
        return firstThreeLower + remainingPart;
    }
}

const inputString = prompt("Enter a string:");

const result = modifyString(inputString);

console.log(`Modified string: ${result}`);

//38
function evaluateGrade(totalMarks, isFinalExam) {
    if (isFinalExam) {
        if (totalMarks >= 90) {
            return true;
        }
    } else {
        if (totalMarks >= 89 && totalMarks <= 100) {
            return true;
        }
    }

    return false;
}

const totalMarks = parseInt(prompt("Enter the total marks:"));
const isFinalExam = prompt("Is this the final exam? (yes/no)").toLowerCase() === 'yes';

const result = evaluateGrade(totalMarks, isFinalExam);

console.log(`Is the grade A+? ${result}`);

//39
function computeSum(num1, num2) {
    const sum = num1 + num2;

    if (sum >= 50 && sum <= 80) {
        return 65;
    } else {
        return 80;
    }
}

const number1 = parseInt(prompt("Enter the first integer:"));
const number2 = parseInt(prompt("Enter the second integer:"));

const result = computeSum(number1, number2);

console.log(`The result is: ${result}`);

//40
function checkForEight(num1, num2) {
    if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || Math.abs(num1 - num2) === 8) {
        return true;
    } else {
        return false;
    }
}

const number1 = parseInt(prompt("Enter the first integer:"));
const number2 = parseInt(prompt("Enter the second integer:"));

const result = checkForEight(number1, number2);

console.log(`Does one of the numbers equal 8, or their sum or difference is 8? ${result}`);

//41
function checkNumbers(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
        return 30;
    } else if (num1 === num2 || num2 === num3 || num1 === num3) {
        return 40;
    } else {
        return 20;
    }
}

const number1 = parseInt(prompt("Enter the first number:"));
const number2 = parseInt(prompt("Enter the second number:"));
const number3 = parseInt(prompt("Enter the third number:"));

const result = checkNumbers(number1, number2, number3);

console.log(`The result is: ${result}`);

//42
function checkIncreasingMode(num1, num2, num3) {
    if (num1 < num2 && num2 < num3) {
        return "Strict mode";
    }
    else if (num1 <= num2 && num2 <= num3) {
        return "Soft mode";
    } else {
        return "Not increasing";
    }
}

const number1 = parseInt(prompt("Enter the first number:"));
const number2 = parseInt(prompt("Enter the second number:"));
const number3 = parseInt(prompt("Enter the third number:"));

const result = checkIncreasingMode(number1, number2, number3);

console.log(`The numbers are in: ${result}`);

//43
function checkRightmostDigit(num1, num2, num3) {
    const rightmost1 = num1 % 10;
    const rightmost2 = num2 % 10;
    const rightmost3 = num3 % 10;

    if (rightmost1 === rightmost2 || rightmost2 === rightmost3 || rightmost1 === rightmost3) {
        return true;
    } else {
        return false;
    }
}

const number1 = parseInt(prompt("Enter the first non-negative integer:"));
const number2 = parseInt(prompt("Enter the second non-negative integer:"));
const number3 = parseInt(prompt("Enter the third non-negative integer:"));

const result = checkRightmostDigit(number1, number2, number3);

console.log(`Do two or more numbers have the same rightmost digit? ${result}`);

//44
function checkCondition(num1, num2, num3) {
    if ((num1 >= 20 && (num1 < num2 || num1 < num3)) ||
        (num2 >= 20 && (num2 < num1 || num2 < num3)) ||
        (num3 >= 20 && (num3 < num1 || num3 < num2))) {
        return true;
    } else {
        return false;
    }
}

const number1 = parseInt(prompt("Enter the first integer:"));
const number2 = parseInt(prompt("Enter the second integer:"));
const number3 = parseInt(prompt("Enter the third integer:"));

const result = checkCondition(number1, number2, number3);

console.log(`Is any number >= 20 and less than at least one of the other two? ${result}`);

//45
function checkCondition(num1, num2) {
    if (num1 === 15 || num2 === 15 || num1 + num2 === 15 || Math.abs(num1 - num2) === 15) {
        return true;
    } else {
        return false;
    }
}

const number1 = parseInt(prompt("Enter the first integer:"));
const number2 = parseInt(prompt("Enter the second integer:"));

const result = checkCondition(number1, number2);

console.log(`Does either number equal 15 or their sum or difference equal 15? ${result}`);

//46
function checkMultipleOf7Or11(num1, num2) {
    const isMultipleOf7Or11Num1 = (num1 % 7 === 0 || num1 % 11 === 0);
    const isMultipleOf7Or11Num2 = (num2 % 7 === 0 || num2 % 11 === 0);

    if (isMultipleOf7Or11Num1 !== isMultipleOf7Or11Num2) {
        return true;
    } else {
        return false;
    }
}

const number1 = parseInt(prompt("Enter the first non-negative integer:"));
const number2 = parseInt(prompt("Enter the second non-negative integer:"));

const result = checkMultipleOf7Or11(number1, number2);

console.log(`Is one (but not both) of the numbers a multiple of 7 or 11? ${result}`);

//47
function checkNumberInRange(num) {
    if (num >= 40 && num <= 10000) {
        return true;
    }

    if (num.toString().includes("40")) {
        return true;
    }

    return false;
}

const number = parseInt(prompt("Enter a number:"));

const result = checkNumberInRange(number);

console.log(`Does the number ${number} exist in the range 40..10000 or contain '40'? ${result}`);

//48
function reverseString(str) {
    return str.split('').reverse().join('');
}

const inputString = prompt("Enter a string to reverse:");

const reversedString = reverseString(inputString);

console.log(`Reversed string: ${reversedString}`);

//49
function replaceWithNextChar(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        if (/[a-zA-Z]/.test(currentChar)) {
            let nextChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);
            if (currentChar === 'z') nextChar = 'a';
            if (currentChar === 'Z') nextChar = 'A';

            result += nextChar;
        } else {
            result += currentChar;
        }
    }

    return result;
}
const inputString = prompt("Enter a string:");

const transformedString = replaceWithNextChar(inputString);

console.log(`Transformed string: ${transformedString}`);

//50
function capitalizeFirstLetter(str) {
    return str
        .split(' ')
        .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(' ');
}

const inputString = prompt("Enter a string:");

const capitalizedString = capitalizeFirstLetter(inputString);

console.log(`Capitalized string: ${capitalizedString}`);

//51
function convertToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} hours ${remainingMinutes} minutes`;
}

const inputMinutes = parseInt(prompt("Enter a number of minutes:"));

const result = convertToHoursAndMinutes(inputMinutes);

console.log(result);

//52
function sortStringAlphabetically(str) {
    return str.split('').sort().join('');
}

const inputString = prompt("Enter a string:");

const sortedString = sortStringAlphabetically(inputString);

console.log(`Sorted string: ${sortedString}`);

//53
function checkCharsSeparatedByThree(str) {
    for (let i = 0; i < str.length - 3; i++) {
        if (str[i] === 'a' && str[i + 4] === 'b') {
            return true;
        }
    }
    return false;
}

const inputString = prompt("Enter a string:");

const result = checkCharsSeparatedByThree(inputString);

console.log(`Does the string have 'a' and 'b' separated by exactly 3 places? ${result}`);

//54
function countVowels(str) {
    const vowels = /[aeiouAEIOU]/g;
    const matchedVowels = str.match(vowels);
    return matchedVowels ? matchedVowels.length : 0;
}

const inputString = prompt("Enter a string:");

const vowelCount = countVowels(inputString);

console.log(`Number of vowels: ${vowelCount}`);

//55
function checkEqualPT(str) {
    const pCount = (str.match(/p/gi) || []).length;
    const tCount = (str.match(/t/gi) || []).length;
    return pCount === tCount;
}
const inputString = prompt("Enter a string:");

const result = checkEqualPT(inputString);

console.log(`Does the string contain an equal number of p's and t's? ${result}`);

//56
function divideAndFormat(num1, num2) {
    if (num1 <= 0 || num2 <= 0) {
        return "Both numbers must be positive.";
    }
    const result = num1 / num2;
    return result.toLocaleString('en-US');
}
const number1 = parseFloat(prompt("Enter the first positive number:"));
const number2 = parseFloat(prompt("Enter the second positive number:"));

const formattedResult = divideAndFormat(number1, number2);

console.log(`Result: ${formattedResult}`);

//57
function createRepeatedString(str, copies) {
    if (copies > 0 && Number.isInteger(copies)) {
        return str.repeat(copies);
    } else {
        return "Please provide a positive integer for the number of copies.";
    }
}

let result = createRepeatedString("Hello", 3);
console.log(result);// Output: "HelloHelloHello"

//58
function createUpdatedString(str) {
    if (str.length >= 3) {
        return str.slice(-3).repeat(4);
    } else {
        return "String length must be 3 or more.";
    }
}

let result = createUpdatedString("JavaScript");
console.log(result); Output: "iptiptiptipt"

//59
function extractFirstHalf(str) {
    if (str.length % 2 === 0) {
        return str.slice(0, str.length / 2);
    } else {
        return "String length must be even.";
    }
}
let result = extractFirstHalf("JavaScript");
console.log(result);  // Output: "Java"

//60
function removeFirstAndLast(str) {
    if (str.length > 2) {
        return str.slice(1, str.length - 1);
    } else {
        return "String length must be greater than 2.";
    }
}

let result = removeFirstAndLast("JavaScript");
console.log(result); // Output: "avaScrip"

//61
function concatenateWithoutFirstChar(str1, str2) {
    return str1.slice(1) + str2.slice(1);
}

let result = concatenateWithoutFirstChar("Hello", "World");
console.log(result); // Output: "ellorld"

//62
function moveLastThreeCharsToStart(str) {
    if (str.length >= 3) {
        return str.slice(-3) + str.slice(0, str.length - 3);
    } else {
        return "String length must be greater than or equal to 3.";
    }
}
let result = moveLastThreeCharsToStart("JavaScript");
console.log(result); // Output: "iptJavaScr"

//63
function getMiddleThreeChars(str) {
    if (str.length >= 3 && str.length % 2 !== 0) {
        let middleIndex = Math.floor(str.length / 2);
        return str.slice(middleIndex - 1, middleIndex + 2);
    } else {
        return "String length must be odd and greater than or equal to 3.";
    }
}

let result = getMiddleThreeChars("JavaScript");
console.log(result); // Output: "vSc"

//64
function concatenateStrings(str1, str2) {
    if (str1.length !== str2.length) {
        let minLength = Math.min(str1.length, str2.length);
        str1 = str1.slice(0, minLength);
        str2 = str2.slice(0, minLength);
    }
    return str1 + str2;
}

let result = concatenateStrings("Hello", "World");
console.log(result); // Output: "HelloWorld"

let result2 = concatenateStrings("Hi", "JavaScript");
console.log(result2);  // Output: "HiJa"

//65
function endsWithScript(str) {
    if (str.length >= 6) {
        return str.endsWith("Script");
    } else {
        return "String length must be greater than or equal to 6.";
    }
}
let result = endsWithScript("JavaScript");
console.log(result);// Output: true

let result2 = endsWithScript("Java");
console.log(result2);// Output: "String length must be greater than or equal to 6."

//66
function checkCityName(str) {
    if (str.startsWith("Los") || str.startsWith("New")) {
        return str;
    } else {
        return "";
    }
}

let result1 = checkCityName("Los Angeles");
console.log(result1); // Output: "Los Angeles"

let result2 = checkCityName("New York");
console.log(result2);  // Output: "New York"

let result3 = checkCityName("San Francisco");
console.log(result3); // Output: ""

//67
function modifyString(str) {
    if (str.charAt(0) === 'P' || str.charAt(str.length - 1) === 'P') {
        return str.slice(1, str.length - 1);
    } else {
        return str;
    }
}

let result1 = modifyString("Programming");
console.log(result1); // Output: "rogrammin"

let result2 = modifyString("Python");
console.log(result2);// Output: "ytho"

let result3 = modifyString("Hello");
console.log(result3);// Output: "Hello"

//68
function createNewString(str, n) {
    if (str.length >= n) {
        return str.slice(0, n) + str.slice(-n);
    } else {
        return "String length must be larger than or equal to n.";
    }
}

let result1 = createNewString("JavaScript", 3);
console.log(result1); // Output: "Javipt"

let result2 = createNewString("Hello", 2);
console.log(result2);// Output: "Helo"

let result3 = createNewString("Hi", 3);
console.log(result3); // Output: "String length must be larger than or equal to n."

//69
function sumOfArray(arr) {
    if (arr.length === 3) {
        return arr[0] + arr[1] + arr[2];
    } else {
        return "Array must contain exactly three elements.";
    }
}

let result = sumOfArray([1, 2, 3]);
console.log(result);// Output: 6

let result2 = sumOfArray([5, 10, 15]);
console.log(result2); // Output: 30

let result3 = sumOfArray([1, 2]);
console.log(result3); // Output: "Array must contain exactly three elements."

//70
function rotateLeft(arr) {
    if (arr.length === 3) {
        return [arr[1], arr[2], arr[0]];
    } else {
        return "Array must contain exactly three elements.";
    }
}

let result = rotateLeft([1, 2, 3]);
console.log(result);// Output: [2, 3, 1]

let result2 = rotateLeft([5, 10, 15]);
console.log(result2);// Output: [10, 15, 5]

let result3 = rotateLeft([7, 8, 9]);
console.log(result3);// Output: [8, 9, 7]

let result4 = rotateLeft([1, 2]);
console.log(result4);// Output: "Array must contain exactly three elements."

//71
function checkFirstOrLast(arr) {
    if (arr.length >= 1) {
        if (arr[0] === 1 || arr[arr.length - 1] === 1) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Array must have at least one element.";
    }
}

let result1 = checkFirstOrLast([1, 2, 3]);
console.log(result1); // Output: true

let result2 = checkFirstOrLast([5, 6, 1]);
console.log(result2); // Output: true

let result3 = checkFirstOrLast([2, 3, 4]);
console.log(result3); // Output: false

let result4 = checkFirstOrLast([1]);
console.log(result4);// Output: true

let result5 = checkFirstOrLast([]);
console.log(result5); // Output: "Array must have at least one element."

//72
function checkFirstAndLast(arr) {
    if (arr.length === 3) {
        if (arr[0] === arr[arr.length - 1]) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Array must contain exactly three elements.";
    }
}

let result1 = checkFirstAndLast([1, 2, 1]);
console.log(result1);// Output: true

let result2 = checkFirstAndLast([5, 6, 7]);
console.log(result2);// Output: false


let result3 = checkFirstAndLast([9, 2, 9]);
console.log(result3); // Output: true

let result4 = checkFirstAndLast([3, 4]);
console.log(result4); // Output: "Array must contain exactly three elements."

//73
function reverseArray(arr) {
    if (arr.length !== 3) {
        return "Array must have a length of 3.";
    }
    return arr.reverse();
}

const array = [1, 2, 3];
const reversedArray = reverseArray(array);
console.log(reversedArray); // Output: [3, 2, 1]

//74
function updateArray(arr) {
    if (arr.length < 2) {
        return "Array must have at least two elements.";
    }

    const maxValue = Math.max(arr[0], arr[arr.length - 1]);
    return arr.map(() => maxValue);
}

const array = [1, 2, 3, 4];
const updatedArray = updateArray(array);
console.log(updatedArray); // Output: [4, 4, 4, 4]

//75
function getMiddleElements(arr1, arr2) {
    if (arr1.length !== 3 || arr2.length !== 3) {
        return "Both arrays must have a length of 3.";
    }

    return [arr1[1], arr2[1]];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const middleArray = getMiddleElements(array1, array2);
console.log(middleArray); // Output: [2, 5]

//76
function firstAndLast(arr) {
    if (arr.length < 1) {
        return "Array must have a length of at least 1.";
    }

    return arr.length === 1 ? [arr[0]] : [arr[0], arr[arr.length - 1]];
}

const array1 = [1, 2, 3, 4];
const result1 = firstAndLast(array1);
console.log(result1); // Output: [1, 4]

const array2 = [7];
const result2 = firstAndLast(array2);
console.log(result2); // Output: [7]

//77
function containsOneOrThree(arr) {
    if (arr.length !== 2) {
        return "Array must have a length of 2.";
    }

    return arr.includes(1) || arr.includes(3);
}

const array1 = [1, 5];
console.log(containsOneOrThree(array1)); // Output: true

const array2 = [2, 4];
console.log(containsOneOrThree(array2)); // Output: false

//78
function doesNotContainOneOrThree(arr) {
    if (arr.length !== 2) {
        return "Array must have a length of 2.";
    }

    return !arr.includes(1) && !arr.includes(3);
}
const array1 = [2, 4];
console.log(doesNotContainOneOrThree(array1)); // Output: true

const array2 = [1, 5];
console.log(doesNotContainOneOrThree(array2)); // Output: false

//79
function containsThirtyAndFortyTwice(arr) {
    if (arr.length > 2) {
        return "Array length must be 0, 1, or 2.";
    }

    const count30 = arr.filter(num => num === 30).length;
    const count40 = arr.filter(num => num === 40).length;

    return count30 === 2 && count40 === 2;
}

const array1 = [30, 40];
console.log(containsThirtyAndFortyTwice(array1)); // Output: false

const array2 = [30, 30, 40, 40];
console.log(containsThirtyAndFortyTwice(array2)); // Output: "Array length must be 0, 1, or 2."

//80
function swapFirstAndLast(arr) {
    if (arr.length < 1) {
        return "Array length must be at least 1.";
    }

    if (arr.length === 1) {
        return arr;
    }

    const temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;

    return arr;
}

const array = [1, 2, 3, 4];
console.log(swapFirstAndLast(array)); // Output: [4, 2, 3, 1]

const singleElementArray = [7];
console.log(swapFirstAndLast(singleElementArray)); // Output: [7]

//81
function addDigits(num) {
    if (num < 10 || num > 99) {
        return "The number must be a positive integer of length two.";
    }

    const firstDigit = Math.floor(num / 10);
    const secondDigit = num % 10;
    return firstDigit + secondDigit;
}

const number = 47;
console.log(addDigits(number)); // Output: 11

const invalidNumber = 123;
console.log(addDigits(invalidNumber)); // Output: "The number must be a positive integer of length two."

//82
function addWithoutCarrying(num1, num2) {
    let result = 0;
    let placeValue = 1;

    while (num1 > 0 || num2 > 0) {
        const digit1 = num1 % 10;
        const digit2 = num2 % 10;

        const sum = (digit1 + digit2) % 10;

        result += sum * placeValue;

        num1 = Math.floor(num1 / 10);
        num2 = Math.floor(num2 / 10);
        placeValue *= 10;
    }

    return result;
}

console.log(addWithoutCarrying(456, 173)); // Output: 529
console.log(addWithoutCarrying(123, 789)); // Output: 802

//83
function findLongestString(arr) {
    if (arr.length === 0) {
        return "Array is empty.";
    }

    let longest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }

    return longest;
}

const strings = ["apple", "banana", "grapefruit", "kiwi"];
console.log(findLongestString(strings)); // Output: "grapefruit"

//84
function shiftToNextChar(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char === 'z') {
            result += 'a';
        } else if (char === 'Z') {
            result += 'A';
        } else if (char.match(/[a-zA-Z]/)) {
            let charCode = str.charCodeAt(i);
            result += String.fromCharCode(charCode + 1);
        } else {
            result += char;
        }
    }

    return result;
}

console.log(shiftToNextChar("abcxyzABC")); // Output: "bcdyzaBCD"
console.log(shiftToNextChar("hello world!")); // Output: "ifmmp xpsme!"

//85
function divideAndSum(arr) {
    let part1Sum = 0;
    let part2Sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            part1Sum += arr[i];
        } else {
            part2Sum += arr[i];
        }
    }

    return [part1Sum, part2Sum];
}

const array = [1, 2, 3, 4, 5, 6];
console.log(divideAndSum(array)); // Output: [9, 12]

//86
function findAngleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (anle === 180) {
        return "Straght angle";
    } else {
        return "Invalid angle";
    }
}

const angle = 120;
console.log(`The angle ${angle} is a ${findAngleType(angle)}`);

//87
function areSimilar(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    if (arr1.toString() === arr2.toString()) {
        return true;
    }

    const diffIndices = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            diffIndices.push(i);
        }
    }

    if (diffIndices.length > 2) {
        return false;
    }

    if (diffIndices.length === 2) {
        const [i, j] = diffIndices;
        const swappedArr = [...arr2];
        [swappedArr[i], swappedArr[j]] = [swappedArr[j], swappedArr[i]];
        return arr1.toString() === swappedArr.toString();
    }

    return false;
}

const arr1 = [1, 2, 3];
const arr2 = [2, 1, 3];
console.log(areSimilar(arr1, arr2)); // Output: true

const arr3 = [1, 2, 3];
const arr4 = [3, 1, 2];
console.log(areSimilar(arr3, arr4)); // Output: false

//88
function areIntegersSimilar(a, b, divisor) {
    const dividesBoth = a % divisor === 0 && b % divisor === 0;
    const dividesNeither = a % divisor !== 0 && b % divisor !== 0;
    return dividesBoth || dividesNeither;
}

const num1 = 10;
const num2 = 20;
const divisor = 5;

if (areIntegersSimilar(num1, num2, divisor)) {
    console.log(`${num1} and ${num2} are similar with divisor ${divisor}.`);
} else {
    console.log(`${num1} and ${num2} are not similar with divisor ${divisor}.`);
}

const num3 = 12;
const num4 = 25;
const divisor2 = 5;

if (areIntegersSimilar(num3, num4, divisor2)) {
    console.log(`${num3} and ${num4} are similar with divisor ${divisor2}.`);
} else {
    console.log(`${num3} and ${num4} are not similar with divisor ${divisor2}.`);
}

//89
function canReplaceOperator(x, y, z) {
    if (x + y === z) {
        return "+";
    }
    if (x - y === z) {
        return "-";
    }
    if (x * y === z) {
        return "*";
    }
    if (y !== 0 && x / y === z) {
        return "/";
    }

    return "None";
}

const x = 10, y = 30, z = 300;
const operator = canReplaceOperator(x, y, z);

if (operator !== "None") {
    console.log(`You can replace $ with '${operator}' to make the expression ${x} ${operator} ${y} = ${z} true.`);
} else {
    console.log(`No valid operator can replace $ to satisfy the expression ${x} $ ${y} = ${z}.`);
}

const x2 = 15, y2 = 5, z2 = 20;
const operator2 = canReplaceOperator(x2, y2, z2);

if (operator2 !== "None") {
    console.log(`You can replace $ with '${operator2}' to make the expression ${x2} ${operator2} ${y2} = ${z2} true.`);
} else {
    console.log(`No valid operator can replace $ to satisfy the expression ${x2} $ ${y2} = ${z2}.`);
}

//90
function findKthGreatest(arr, k) {
    if (k > arr.length || k <= 0) {
        return "Invalid input: k is out of range.";
    }
    const sortedArray = [...arr].sort((a, b) => b - a);

    return sortedArray[k - 1];
}

const array = [3, 1, 4, 1, 5, 9, 2, 6];
const k = 3;

const kthGreatest = findKthGreatest(array, k);
console.log(`The ${k}rd greatest element in the array is: ${kthGreatest}`);

//91
function maxConsecutiveSum(arr, k) {
    if (k > arr.length || k <= 0) {
        return "Invalid input: k is out of range.";
    }

    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }

    let currentSum = maxSum;
    for (let i = k; i < arr.length; i++) {
        currentSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

const array = [1, 3, 5, 7, 9, 2];
const k = 3;

const maxSum = maxConsecutiveSum(array, k);
console.log(`The maximum sum of ${k} consecutive numbers in the array is: ${maxSum}`);

//92
function maxAdjacentDifference(arr) {
    if (arr.length < 2) {
        return "Array must have at least two elements.";
    }

    let maxDifference = 0;

    for (let i = 1; i < arr.length; i++) {
        const difference = Math.abs(arr[i] - arr[i - 1]);
        maxDifference = Math.max(maxDifference, difference);
    }

    return maxDifference;
}

const array = [2, 9, 3, 15, 8, 7];
const result = maxAdjacentDifference(array);

console.log(`The maximum difference between any two adjacent elements is: ${result}`);

//93
function maxDifference(arr) {
    if (arr.length < 2) {
        return "Array must have at least two elements.";
    }

    const minElement = Math.min(...arr);
    const maxElement = Math.max(...arr);

    return maxElement - minElement;
}

const array = [2, 9, 3, 15, 8, 7];
const result = maxDifference(array);

console.log(`The maximum difference among all possible pairs is: ${result}`);

//94
function findMostFrequentNumber(arr) {
    if (arr.length === 0) {
        return "Array is empty.";
    }

    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentNumber = null;

    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;

        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
            mostFrequentNumber = num;
        }
    }

    return mostFrequentNumber;
}

const array = [1, 3, 2, 3, 4, 5, 3, 2, 1];
const result = findMostFrequentNumber(array);

console.log(`The number appearing most frequently is: ${result}`);

//95
function replaceNumber(arr, target, replacement) {
    return arr.map(num => (num === target ? replacement : num));
}

const array = [1, 2, 3, 4, 2, 5, 2];
const target = 2;
const replacement = 9;

const updatedArray = replaceNumber(array, target, replacement);
console.log(`Original array: ${array}`);
console.log(`Updated array: ${updatedArray}`);

//96
function sumOfAbsoluteDifferences(arr) {
    let sum = 0;
    for (let i = 1; i < arr.length; i++) {
        sum += Math.abs(arr[i] - arr[i - 1]);
    }
    return sum;
}

const arr = [1, 3, 5, 9, 2];
const result = sumOfAbsoluteDifferences(arr);
console.log("Sum of absolute differences:", result);

//97
function shortestPalindrome(str) {
    function isPalindrome(s) {
        return s === s.split('').reverse().join('');
    }

    if (isPalindrome(str)) return str;

    for (let i = str.length - 1; i >= 0; i--) {
        let prefix = str.slice(0, i);
        let suffix = str.slice(i);

        if (isPalindrome(suffix)) {
            return str + prefix.split('').reverse().join('');
        }
    }
}

const inputStr = "aacecaaa";
const result = shortestPalindrome(inputStr);
console.log("Shortest palindrome string:", result);

//98
function changeCase(str) {
    let upperCaseCount = 0;
    let lowerCaseCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            upperCaseCount++;
        } else {
            lowerCaseCount++;
        }
    }

    if (upperCaseCount > lowerCaseCount) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
}

const str1 = "Write";
const str2 = "PHp";
console.log(changeCase(str1)); // Output: write
console.log(changeCase(str2)); // Output: PHP

//99
function canRearrange(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

const str1 = "listen";
const str2 = "silent";
console.log(canRearrange(str1, str2)); // Output: true

const str3 = "hello";
const str4 = "world";
console.log(canRearrange(str3, str4)); // Output: false

//100
function hasCommonElement(arr1, arr2) {
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            return true;
        }
        else if (arr1[i] < arr2[j]) {
            i++;
        }
        else {
            j++;
        }
    }
    return false;
}

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 3, 6, 8];
console.log(hasCommonElement(arr1, arr2)); // Output: true

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
console.log(hasCommonElement(arr3, arr4)); // Output: false

//101
function isValidString(str) {
    if (!/^[A-Za-z]+$/.test(str)) {
        return false;
    }

    for (let i = 1; i < str.length; i++) {
        if ((str[i].toUpperCase() === str[i] && str[i - 1].toUpperCase() === str[i - 1]) ||
            (str[i].toLowerCase() === str[i] && str[i - 1].toLowerCase() === str[i - 1])) {
            return false;
        }
    }

    return true;
}

const str1 = "aBcDeFg";
console.log(isValidString(str1)); // Output: true

const str2 = "aABcD";
console.log(isValidString(str2)); // Output: false

const str3 = "abcde";
console.log(isValidString(str3)); // Output: false

const str4 = "AbCdEf";
console.log(isValidString(str4)); // Output: true

//102
function countInversions(arr) {
    let inversions = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                inversions++;
            }
        }
    }

    return inversions;
}

const arr1 = [1, 3, 2, 3, 1];
console.log(countInversions(arr1)); // Output: 4

const arr2 = [5, 4, 3, 2, 1];
console.log(countInversions(arr2)); // Output: 10

//103
function maxNumberByDeletingOneDigit(n) {
    let numStr = n.toString();
    let maxNum = -Infinity;

    for (let i = 0; i < numStr.length; i++) {
        let newNum = numStr.slice(0, i) + numStr.slice(i + 1);
        maxNum = Math.max(maxNum, parseInt(newNum));
    }

    return maxNum;
}

const num1 = 12345;
console.log(maxNumberByDeletingOneDigit(num1)); // Output: 2345

const num2 = 54321;
console.log(maxNumberByDeletingOneDigit(num2)); // Output: 5432

const num3 = 9876;
console.log(maxNumberByDeletingOneDigit(num3)); // Output: 987

//104
function findClosestPair(arr, target) {
    arr.sort((a, b) => a - b);

    let closestPair = [];
    let closestDiff = Infinity;

    let i = 0, j = arr.length - 1;

    while (i < j) {
        let diff = Math.abs(arr[i] - arr[j]);

        if (diff <= target) {
            if (Math.abs(diff - target) < Math.abs(closestDiff - target)) {
                closestPair = [arr[i], arr[j]];
                closestDiff = diff;
            }
            i++;
        } else {
            j--;
        }
    }

    return closestPair;
}

const arr = [1, 5, 9, 14, 20];
const target = 7;
const result = findClosestPair(arr, target);
console.log(`Closest pair: ${result[0]} and ${result[1]}`); // Output: Closest pair: 9 and 14

//105
function sumOfDigits(num) {
    let sum = 0;
    // Calculate the sum of digits of the number
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

function countReplacements(num) {
    let count = 0;

    while (num >= 10) {
        num = sumOfDigits(num);
        count++;
    }

    return count;
}

const num1 = 9876;
console.log(countReplacements(num1)); // Output: 2 (9876 -> 30 -> 3)

const num2 = 12345;
console.log(countReplacements(num2)); // Output: 2 (12345 -> 15 -> 6)

const num3 = 9;
console.log(countReplacements(num3)); // Output: 0 (No replacement needed, it's already a single-digit number)

//106
function divideUntilNotInteger(num, divisor) {
    if (divisor === 0) {
        return "Division by zero is not allowed";
    }

    while (Number.isInteger(num / divisor)) {
        num = num / divisor;
    }

    return num;
}

const result1 = divideUntilNotInteger(100, 2);
console.log(result1); // Output: 6.25 (100 -> 50 -> 25 -> 12.5, stops at 12.5)

const result2 = divideUntilNotInteger(27, 3);
console.log(result2); // Output: 1 (27 -> 9 -> 3 -> 1)

const result3 = divideUntilNotInteger(20, 3);
console.log(result3); // Output: 20 (can't divide evenly, so returns 20 immediately)

//107
function countDivisiblePairs(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] % arr[i] === 0 || arr[i] % arr[j] === 0) {
                count++;
            }
        }
    }

    return count;
}

const arr1 = [1, 3, 2];
console.log(countDivisiblePairs(arr1)); // Output: 2 (pairs: (1, 3), (1, 2))

const arr2 = [2, 4, 6];
console.log(countDivisiblePairs(arr2)); // Output: 2 (pairs: (2, 4), (2, 6))

const arr3 = [2, 4, 16];
console.log(countDivisiblePairs(arr3)); // Output: 3 (pairs: (2, 4), (2, 16), (4, 16))

//108
function dotProduct(vector1, vector2) {
    if (vector1.length !== 3 || vector2.length !== 3) {
        console.log("Both vectors must have 3 components.");
        return null;
    }

    let dotProductResult = 0;
    for (let i = 0; i < 3; i++) {
        dotProductResult += vector1[i] * vector2[i];
    }

    return dotProductResult;
}

const vector1 = [1, 2, 3];
const vector2 = [4, 5, 6];

const result = dotProduct(vector1, vector2);
console.log("The dot product is:", result);

//109
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function getPrimeNumbersUpTo(n) {
    const primeNumbers = [];

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }

    return primeNumbers.sort((a, b) => a - b);
}

const upperLimit = 30;
const primes = getPrimeNumbersUpTo(upperLimit);
console.log("Prime numbers up to", upperLimit, "are:", primes);

//110
function countEvenBeforeGivenNumber(sequence, target) {
    let count = 0;
    let foundTarget = false;

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === target) {
            foundTarget = true;
            break;
        }
        if (sequence[i] % 2 === 0) {
            count++;
        }
    }

    if (!foundTarget) {
        console.log("Target number not found in the sequence.");
    }

    return count;
}

const sequence = [1, 4, 6, 8, 3, 10, 2];
const target = 3;
const result = countEvenBeforeGivenNumber(sequence, target);
console.log("Number of even values before", target, "is:", result);

//111
function findThirdNumber(a, b, c) {
    if (a === b) {
        return c;
    } else if (a === c) {
        return b;
    } else if (b === c) {
        return a;
    } else {
        return "No two numbers are equal";
    }
}

const num1 = 5;
const num2 = 5;
const num3 = 8;

const thirdNumber = findThirdNumber(num1, num2, num3);
console.log("The third number is:", thirdNumber);

//112
function countTrailingZeros(n) {
    let count = 0;

    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }

    return count;
}


const num = 100;
const trailingZeros = countTrailingZeros(num);
console.log(`The number of trailing zeros in ${num}! is:`, trailingZeros);

//113
function calculateSeriesSum(n) {
    let sum = 0;
    let currentTerm = n;

    while (currentTerm >= 1) {
        sum += currentTerm;
        currentTerm = Math.floor(currentTerm / 2);
    }

    return sum;
}

const n = 16;
const result = calculateSeriesSum(n);
console.log("The sum of the series is:", result);

//114
function isCorrectSentence(sentence) {
    if (sentence.charAt(0) === sentence.charAt(0).toUpperCase() && sentence.endsWith('.')) {
        return true;
    } else {
        return false;
    }
}

const sentence1 = "This is a correct sentence.";
const sentence2 = "this is incorrect.";
const sentence3 = "Another one without a full stop";

console.log(isCorrectSentence(sentence1)); // true
console.log(isCorrectSentence(sentence2)); // false
console.log(isCorrectSentence(sentence3)); // false

//115
function isDiagonalMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i !== j && matrix[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
}

const matrix1 = [
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 3]
];

const matrix2 = [
    [1, 0, 0],
    [0, 2, 3],
    [0, 0, 3]
];

console.log(isDiagonalMatrix(matrix1)); // true
console.log(isDiagonalMatrix(matrix2)); // false

//116
function findDivisibleByThreeOptions(str) {
    const options = [];
    const hashIndex = str.indexOf('#');

    for (let digit = 0; digit <= 9; digit++) {
        const replacedString = str.replace('#', digit.toString());
        const number = parseInt(replacedString, 10);
        if (number % 3 === 0) {
            options.push(replacedString);
        }
    }

    return options;
}

const input = "2#0";
const result = findDivisibleByThreeOptions(input);
console.log(result); // Output: ["210", "240", "270"]

//117
function isIdentityMatrix(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        if (matrix[i].length !== n) {
            return false;
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j && matrix[i][j] !== 1) {
                return false;
            } else if (i !== j && matrix[i][j] !== 0) {
                return false;
            }
        }
    }

    return true;
}


const matrix1 = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];

const matrix2 = [
    [1, 0, 0],
    [0, 1, 0],
    [1, 0, 1]
];

console.log(isIdentityMatrix(matrix1)); // true
console.log(isIdentityMatrix(matrix2)); // false

//118
function isInRange(number, min, max) {
    return number >= min && number <= max;
}

const num = 5;
const min = 1;
const max = 10;

const result = isInRange(num, min, max);
console.log(`${num} is in range [${min}, ${max}]:`, result);

//119
function hasIncreasingSequence(num) {
    const numStr = num.toString();

    for (let i = 1; i < numStr.length; i++) {
        if (numStr[i] < numStr[i - 1]) {
            return false;
        }
    }

    return true;
}

const num1 = 12345;
const num2 = 54321;
const num3 = 11234;

console.log(hasIncreasingSequence(num1)); // true
console.log(hasIncreasingSequence(num2)); // false
console.log(hasIncreasingSequence(num3)); // true

//120
function isPointInsideCircle(x, y, r, a, b) {
    const distance = Math.sqrt(Math.pow(a - x, 2) + Math.pow(b - y, 2));

    return distance < r;
}

const centerX = 0;
const centerY = 0;
const radius = 5;
const pointX = 3;
const pointY = 4;

const result = isPointInsideCircle(centerX, centerY, radius, pointX, pointY);
console.log(`The point (${pointX}, ${pointY}) is inside the circle:`, result);

//121
function isLowerTriangularMatrix(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (matrix[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
}

const matrix1 = [
    [1, 0, 0],
    [4, 2, 0],
    [7, 5, 3]
];

const matrix2 = [
    [1, 0, 0],
    [4, 2, 3],
    [7, 5, 3]
];

console.log(isLowerTriangularMatrix(matrix1)); // true
console.log(isLowerTriangularMatrix(matrix2)); // false

//122
function checkSequence(arr) {
    if (arr.length < 2) {
        return "The array is too short to determine a sequence.";
    }

    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            isIncreasing = false;
        }
        if (arr[i] >= arr[i - 1]) {
            isDecreasing = false;
        }
    }

    if (isIncreasing) {
        return "Strictly Increasing Sequence";
    } else if (isDecreasing) {
        return "Strictly Decreasing Sequence";
    } else {
        return "Neither Increasing Nor Decreasing Sequence";
    }
}

const arr1 = [1, 2, 3, 4, 5];  // Strictly Increasing
const arr2 = [5, 4, 3, 2, 1];  // Strictly Decreasing
const arr3 = [1, 3, 2, 5, 4];  // Neither strictly increasing nor decreasing

console.log(checkSequence(arr1)); // "Strictly Increasing Sequence"
console.log(checkSequence(arr2)); // "Strictly Decreasing Sequence"
console.log(checkSequence(arr3)); // "Neither Increasing Nor Decreasing Sequence"

//123
function isPermutation(arr, n) {
    if (arr.length !== n) {
        return false;
    }

    const numSet = new Set(arr);

    if (numSet.size !== n) {
        return false;
    }

    for (let i = 1; i <= n; i++) {
        if (!numSet.has(i)) {
            return false;
        }
    }

    return true;
}

const arr1 = [4, 1, 3, 2];
const arr2 = [4, 1, 2, 2];
const arr3 = [1, 2, 3, 5];

console.log(isPermutation(arr1, 4)); // true
console.log(isPermutation(arr2, 4)); // false (duplicate 2)
console.log(isPermutation(arr3, 4)); // false (missing 4)

//124
function logical_Nor(x, y) {
    return !(x || y);
}

const x1 = true;
const y1 = false;
console.log(`logical_Nor(${x1}, ${y1}) = ${logical_Nor(x1, y1)}`); // false

const x2 = false;
const y2 = false;
console.log(`logical_Nor(${x2}, ${y2}) = ${logical_Nor(x2, y2)}`); // true

//125
function findLongestString(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let longestString = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longestString.length) {
            longestString = arr[i];
        }
    }

    return longestString;
}

const array1 = ["apple", "banana", "grape", "watermelon"];
const array2 = ["cat", "dog", "elephant"];
const array3 = [];

console.log(findLongestString(array1)); // "watermelon"
console.log(findLongestString(array2)); // "elephant"
console.log(findLongestString(array3)); // "Array is empty"

//126
function largestEvenNumber(arr) {
    let largestEven = null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if (largestEven === null || arr[i] > largestEven) {
                largestEven = arr[i];
            }
        }
    }

    return largestEven !== null ? largestEven : "No even number found";
}

const array1 = [1, 3, 4, 6, 8, 2];
const array2 = [11, 13, 15];
const array3 = [10, 20, 30, 40, 50];

console.log(largestEvenNumber(array1)); // 8
console.log(largestEvenNumber(array2)); // "No even number found"
console.log(largestEvenNumber(array3)); // 50

//127
function reverseBits(n) {
    let reversed = 0;

    while (n > 0) {
        reversed = (reversed << 1) | (n & 1);
        n >>= 1;
    }

    return reversed;
}

console.log(reverseBits(14));  // 112
console.log(reverseBits(56));  // 28
console.log(reverseBits(234)); // 87

//128
function smallestRoundNumber(value) {
    let factor = 10;
    while (value % factor !== 0) {
        factor *= 10;
    }

    return Math.ceil(value / factor) * factor;
}

console.log(smallestRoundNumber(590)); // 600
console.log(smallestRoundNumber(592)); // 600
console.log(smallestRoundNumber(2500)); // 2500
console.log(smallestRoundNumber(12345)); // 20000

//129
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function smallestPrimeGreaterThan(n) {
    let num = n + 1;
    while (!isPrime(num)) {
        num++;
    }
    return num;
}

console.log(smallestPrimeGreaterThan(10)); // 11
console.log(smallestPrimeGreaterThan(15)); // 17
console.log(smallestPrimeGreaterThan(20)); // 23
console.log(smallestPrimeGreaterThan(30)); // 31

//130
function countEvenDigits(n) {
    let count = 0;
    let str = Math.abs(n).toString();

    for (let i = 0; i < str.length; i++) {
        let digit = parseInt(str[i], 10);
        if (digit % 2 === 0) {
            count++;
        }
    }

    return count;
}

console.log(countEvenDigits(123456));  // 3 (Even digits: 2, 4, 6)
console.log(countEvenDigits(9876543210));  // 5 (Even digits: 8, 6, 4, 2, 0)
console.log(countEvenDigits(13579));  // 0 (No even digits)
console.log(countEvenDigits(-24680));  // 5 (Even digits: 2, 4, 6, 8, 0)

//131
function prefixSums(arr) {
    let result = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        result.push(sum);
    }

    return result;
}

const inputArray = [1, 2, 3, 4, 5];
const result = prefixSums(inputArray);
console.log(result);  // Output: [1, 3, 6, 10, 15]

//132
function findPrimeFactors(num) {
    let factors = [];
    while (num % 2 === 0) {
        if (!factors.includes(2)) {
            factors.push(2);
        }
        num /= 2;
    }

    for (let i = 3; i * i <= num; i += 2) {
        while (num % i === 0) {
            if (!factors.includes(i)) {
                factors.push(i);
            }
            num /= i;
        }
    }

    if (num > 2) {
        factors.push(num);
    }

    return factors;
}

const number = 56;
const primeFactors = findPrimeFactors(number);
console.log(primeFactors);  // Output: [2, 7]

//133
function isProperFraction(numerator, denominator) {
    if (denominator === 0) {
        return "Denominator cannot be zero";
    }

    if (numerator < denominator) {
        return true;
    } else {
        return false;
    }
}

const numerator = 3;
const denominator = 5;
const result = isProperFraction(numerator, denominator);
console.log(result);  // Output: true (since 3 < 5, it is a proper fraction)

//134
function reverseAlphabet(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char >= 'a' && char <= 'z') {
            let oppositeChar = String.fromCharCode(219 - char.charCodeAt(0));
            result += oppositeChar;
        } else {
            result += char;
        }
    }

    return result;
}

const inputString = "abcxyz";
const transformedString = reverseAlphabet(inputString);
console.log(transformedString);  // Output: "zyxcba"

//135
function removeDuplicates(str) {
    let charCount = {};
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            result += str[i];
        }
    }

    return result;
}

const inputString = "abacbcde";
const transformedString = removeDuplicates(inputString);
console.log(transformedString);  // Output: "de"

//136
function replaceFirstDigitWithDollar(str) {
    return str.replace(/\d/, '$');
}

const inputString = "hello123";
const transformedString = replaceFirstDigitWithDollar(inputString);
console.log(transformedString);  // Output: "hello$23"

//137
function checkGreaterThanFifteen(num) {
    if (num > 15) {
        return num;
    } else {
        return 15;
    }
}

const number = 10;
const result = checkGreaterThanFifteen(number);
console.log(result);  // Output: 15

//138
function reverseBits(num) {
    let reversed = 0;
    for (let i = 0; i < 16; i++) {
        reversed = (reversed << 1) | (num & 1);
        num >>= 1;
    }

    return reversed;
}

const num = 0b0000000000011101;
const reversedNum = reverseBits(num);
console.log(reversedNum.toString(2).padStart(16, '0'));  // Output: "1011100000000000"

//139
function findRightmostRoundNumber(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 10 === 0) {
            return i + 1;
        }
    }
    return 0;
}

const numbers = [12, 30, 45, 100, 56];
const position = findRightmostRoundNumber(numbers);
console.log(position);  // Output: 4 (since 100 is the rightmost round number)

//140
function areAllDigitsSame(num) {
    const numStr = num.toString();
    for (let i = 1; i < numStr.length; i++) {
        if (numStr[i] !== numStr[0]) {
            return false;
        }
    }
    return true;
}

const number = 22222;
const result = areAllDigitsSame(number);
console.log(result);  // Output: true

const number2 = 12345;
const result2 = areAllDigitsSame(number2);
console.log(result2);  // Output: false

//141
function countElementsInArrays(arr1, arr2) {
    return {
        arr1Count: arr1.length,
        arr2Count: arr2.length
    };
}

const array1 = [1, 2, 3, 4];
const array2 = ['a', 'b', 'c'];

const counts = countElementsInArrays(array1, array2);
console.log(counts);  // Output: { arr1Count: 4, arr2Count: 3 }

//142
function simplifyPath(path) {
    const parts = path.split('/');
    const stack = [];

    for (let part of parts) {
        if (part === '' || part === '.') {
            continue;
        }
        if (part === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(part);
        }
    }

    return '/' + stack.join('/');
}

const path = "/home/../usr/./bin/../lib";
const simplifiedPath = simplifyPath(path);
console.log(simplifiedPath);  // Output: "/usr/lib"

//143
function sortByLength(arr) {
    return arr.slice().sort((a, b) => a.length - b.length);
}

const strings = ["apple", "banana", "kiwi", "grape", "pear"];
const sortedStrings = sortByLength(strings);
console.log(sortedStrings);  // Output: [ 'kiwi', 'pear', 'apple', 'grape', 'banana' ]

//144
function breakUrl(url) {
    const regex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(\.org)?(\/)?$/;
    const match = url.match(regex);

    if (!match) {
        return [];
    }

    return [
        match[1] || '',
        match[2] || '',
        match[3] || '',
        match[4] || ''
    ];
}

// Example usage
const url1 = "https://example.org/";
const url2 = "http://test";
const url3 = "example.org";

console.log(breakUrl(url1));  // Output: [ 'https://', 'example', '.org', '/' ]
console.log(breakUrl(url2));  // Output: [ 'http://', 'test', '', '' ]
console.log(breakUrl(url3));  // Output: [ '', 'example', '.org', '' ]


//145
function findMaxN(a) {
    let sum = 0;
    let n = 0;

    while (sum + (n + 1) <= a) {
        n++;
        sum += n;
    }

    return n;
}

const a = 15;
const result = findMaxN(a);
console.log(result);  // Output: 5

//146
function sumOfCubes(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i * i * i;
    }

    return sum;
}

const n = 4;
const result = sumOfCubes(n);
console.log(result);  // Output: 100

//147
function sumOfDigitsInString(str) {
    let sum = 0;

    for (let char of str) {
        if (/\d/.test(char)) {
            sum += parseInt(char);
        }
    }

    return sum;
}

const inputString = "abc123def456";
const result = sumOfDigitsInString(inputString);
console.log(result);  // Output: 21 (1+2+3+4+5+6)

//148
function swapArrayHalves(arr) {
    if (arr.length % 2 !== 0) {
        throw new Error("The array length must be even.");
    }

    const mid = arr.length / 2;

    const firstHalf = arr.slice(0, mid);
    const secondHalf = arr.slice(mid);

    return secondHalf.concat(firstHalf);
}

const arr = [1, 2, 3, 4, 5, 6];
const swappedArr = swapArrayHalves(arr);
console.log(swappedArr);  // Output: [4, 5, 6, 1, 2, 3]

//149
function changeCapitalization(str) {
    let result = '';

    for (let char of str) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }

    return result;
}

const inputString = "HeLLo WoRLd!";
const outputString = changeCapitalization(inputString);
console.log(outputString);  // Output: "hEllO wOrlD!"

//150
function swapAdjacentDigits(num) {
    let numStr = num.toString();

    if (numStr.length % 2 !== 0) {
        throw new Error("The number must have an even number of digits.");
    }

    let swappedStr = '';

    for (let i = 0; i < numStr.length; i += 2) {
        swappedStr += numStr[i + 1] + numStr[i];
    }

    return parseInt(swappedStr);
}

const number = 123456;
const swappedNumber = swapAdjacentDigits(number);
console.log(swappedNumber);  // Output: 214365

























































































































// завдання 1 

function compact(arr) {
    return Array.from(new Set(arr));
};

const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2);

// завдання 2

function createArray (start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
};

let arr1 = createArray(2, 9);
console.log(arr1);

// завдання 3
let a = 2;
let b = 7;

for (let i = a; i <= b; i++) {
    for (let j = 0; j <= i - a; j++) {
        console.log(i);
    }
}

// завдання 4

function randArray(k) {
    let result = [];
    const min = 1;
    const max = 500; 
    for (let i = 0; i < k; i++) {
        let rand = min + Math.random() * (max - min);
        result.push(Math.round(rand));
    }
    return result;
}

console.log (randArray(5));

// завдання 5

let prevArr = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];

function funcName (prevArr) {
    let currArr = prevArr.flat();
    let arrOfStrings = [];
    let arrOfNumbers = [];

    for (let i = 0; i < currArr.length; i++) {
        if (typeof currArr[i] === 'string') {
            arrOfStrings.push(currArr[i]);
        }
        if (typeof currArr[i] === "number") {
            arrOfNumbers.push(currArr[i]);
        }
    }
    return [arrOfNumbers, arrOfStrings];
}

console.log(funcName(prevArr));

// завдання 8

// спосіб 1
let date = new Date();
let hour = date.getHours(); 
if (hour >= 23 || hour <= 5) {
    alert ('Доброї ночі');
};
if (hour > 5 && hour <= 11) {
    alert ('Доброго ранку');
};
if (hour > 11 && hour <= 17) {
    alert('Доброго дня');
};
if (hour > 17 && hour < 23) {
    alert ('Доброго вечора');
};

// спосіб 2
let result = (hour >= 23 || hour <= 5) ? 'Доброї ночі' :
             (hour > 5 && hour <= 11) ? 'Доброго ранку' :
             (hour > 11 && hour <= 17) ? 'Доброго дня' :
             'Доброго вечора';

alert(result);
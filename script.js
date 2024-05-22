// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
console.log('--------------------------Задание 1--------------------------');
let number = 11;
for (let i = 0; i <= number; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} - четное число`);
    } else if (i % 2 !== 0) {
        console.log(`${i} - нечетное число`);
    }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
console.log('--------------------------Задание 2--------------------------');

const array = [1, 2, 3, 4, 5, 6, 7];
const newArray = [];
function arrayExtraction(arrayOld, arrayNew, num1, num2) {
    for (let i = 0; i < arrayOld.length; i++) {
        if (arrayOld[i] !== num1 && arrayOld[i] !== num2) {
            arrayNew.push(arrayOld[i]);
        }
    }
    return arrayNew;
}
console.log(arrayExtraction(array, newArray, 4, 5));

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

console.log('--------------------------Задание 3--------------------------');

function randomArrayGenerator(arrLength, min, max) {
    const randomArray = [];
    for (let i = 0; i < arrLength; i++) {
        randomArray[i] = Math.floor(Math.random() * (max + 1)) + min;
    }
    return randomArray;
}
const arr = randomArrayGenerator(5, 0, 9);
console.log(arr);

function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
console.log(arraySum(arr));

function findNumber(array, lookingForNumber) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === lookingForNumber) {
            console.log(`В этом массиве есть число ${lookingForNumber}`);
            break;
        } else if (array[i] !== lookingForNumber && i === array.length - 1) {
            console.log(`Весь массив проверен. В массиве отсутствует число ${lookingForNumber}`);
        }
    }
}
findNumber(arr, 3);

function findMinNumber(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

console.log(`Минимальным числом в массиве ${arr} является число - ${findMinNumber(arr)}`);

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

function rock(symbol, repeat) {
    let str = '';
    for (let i = 0; i < repeat; i++) {
        str = str + symbol;
        console.log(str);
    }
}
rock('х', 20);
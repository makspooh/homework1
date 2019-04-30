// task 1
function storeSale() {
    var from = +prompt('Введите время начала скидки');
    var to = +prompt('Введите время окончания скидки');
    var present = +prompt('Введите текущее время');

    if(from > to && present < to) {
        console.log('Скидка действительна ночью');
    } else if(from < to && present > from) {
        console.log('Скидка действительна днём');
    } else {
        console.log('Скидка не действует');
    }
}

storeSale();

// task 2
function random(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand)
    console.log(rand)
}

random(100, 20000)

// task 3
function reverse(str) {
    let reverseString = '';

    for(let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    console.log(reverseString);
}

reverse('Hello world');

// task 4
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(3));

// task 5

function fibo(n) {
    let a = 1, b = 1;
    for(let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibo(77));

// task 6
function incCounter() {
    let counter = 0;
    return function() {
        return counter++
    }
}

let func1 = incCounter();
let func2 = incCounter();

console.log(func1());
console.log(func2());
console.log(func1());
console.log(func2());

// task 7
function multiA(a) {
    return function(b) {
       return (a * b);
    }
}

let multi3 = multiA(3);
let multi4 = multiA(4);

console.log(multi3(2));
console.log(multi4(2));

// task 8
function getName() {
    let name = 'Maks';
    return name;
}

let obj = {
    name: getName()
}

console.log(obj)

// task 9
let number = null;

function getDoubled(n) {
    return number = (n + n) * 2;
}

function getDoubledTrippled(n) {
    return n * 3;
}

console.log(getDoubledTrippled.call(this, getDoubled(4)));

// task 10
let arr = [1, 2, 3, 4, 5];

function random() {
    return Math.random() - 0.5;
}

arr.sort(random);

console.log(arr);

// task 11
let arr = [1, 2, 3, 4, 5];

function sum(a) {
    let arrSum = null;
    for (let i = 0; i < a.length; i++) {
        arrSum += a[i];
    }
    return arrSum;
}

console.log(sum(arr));

// task 12
let arr = [1, 2, 3, 4, 5];

function max(a) {
    let maxOfArr = null;
    for(let i = 0; i < a.length; i++) {
        a[i] > maxOfArr ? maxOfArr = a[i] : false;
    }
    return maxOfArr
}

console.log(max(arr));

// task 13
let string = 'оно';

function pal (str) {
    str = str.toLowerCase().replace(/ /g, '');
    return str.split('').reverse().join('') == str;
}

console.log(pal(string));
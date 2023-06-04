const arr = [1, 5, 4, 10, 0 , 3];
for (let i = 0; i < arr.length; i++) {
   if(arr [i]=== 10) {
    console.log(arr[i]);
    break;
   }
   console.log (arr[i]); 
}
const index = arr.indexOf(4);
console.log(index);

const numbers = [ 1 , 3 , 5 , 10 , 20];
numbers = numbers.join(' ');
console.log(numbers);

const massiv = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
];

const dva = [1, 1, 1];
dva.push(2, 2, 2);
console.log(dva);

const arr = [9, 8, 7, 'a', 6, 5];
arr.sort();
for (let i = 0; < arr.length; i++) { 
    if (typeof arr[i] !== "number") {
        arr.splice(i,1);
        i--;
    }
}
console.log (arr);

const arr =[9, 8, 7, 6,5];
const userNumber = parselnt(prompt("Введите число от 1 до 10"));
if (arr.includes(userNumber)) {
    console.log("Данное число содержится в массиве");
} else {
    console.log("Данное число не содержиться в массиве");
}

const strk = 'abcdef';
const reversedStrk = strk.split('').reverse().join('');
console.log(reversedStrk);

const arr = [[1, 2, 3,],[4, 5, 6]];
const newArr = arr.flat(Infinity);
console.log(newArr);

const arr = [5, 2, 8, 1, 9];
for (let i = 0; < arr.length - 1; i++) {
    console.log(arr[i] + arr[i+1]);
}

function squareArr(arr){
    return arr.map(num =>
    Math.pow(num, 2));
}
const arr= [1, 2, 3, 4,5];
const squaredArr =squareArr(arr);
console.log(squaredArr);

function getLengthWords(arr) {
    return arr.map(word => word.length);
    }
const arr = ['слово', 'слог', 'длинное предложение', 'буква'];
const lengthArr = getLengthWords(arr);
console.log(lengthArr); 

Function filterPositive(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) {
        result.push(array[i]);
      }
    }
    return result;
  }
  filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
  filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]
let smallerNumber = (num1,num2) => {
    if (num1<=num2) {
        return num1
    } else {
        return num2
    }
}
 console.log (smallerNumber ( 3,5))

 let evenNumber = (n) => {
    if (n % 2 == 0) {
        console.log ( "Число четное");
    } else {
        console.log ("Число нечетное")
    } 
 }
 evenNumber (4)

 let squareNum = (a) => console.log ( a * a);
 squareNum (5)
 let squareNumber = (b) => b*b ;

 let age = prompt("Сколько вам лет?");  
    if (age < 0) { 
        alert("Вы ввели неправильное значение");
        } else if (0 <= age <= 12) { 
        alert("Привет,друг!");
    } else if ( age >= 13 ) {
        alert("Добро пожаловать!");}
    


  let multiplyNumbers = (num1,num2) => {
if (isNaN (num1) || isNaN (num2)) {
    console.log(" Одно или оба значения не являются числом");
} else {
    console.log (num1 * num2);
}
  }
multiplyNumbers(22,12)


function cubeNumber(){
    let number = prompt("Введите число");
    if (isNaN(number)) {
        console.log("Переданный параметр не является числом")
    } else {
        let num =Number (number);
        let result = num **3;
        console.log  (`${num} в кубе равняется ${result}`)
    }
}

let circle1 = {
    radius: 5,
    getArea: function() {
    return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
    return 2 * Math.PI * this.radius;
    }
    };
    
    let circle2 = {
    radius: 10,
    getArea: function() {
    return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
    return 2 * Math.PI * this.radius;
    }
    };
    
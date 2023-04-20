i=0;
while (i<2) { console.log ("Привет");
i++;
    
}

let a=1;
while (a<=5) {console.log (a);
a++;    
}

let b=7;
while (b<=22) {console.log(b);
    b++;
    
}

let obj ={
    'Коля':200,
    'Вася':300,
    'Петя':400
};
for (let key in obj)  {
    alert (`${key} - зарплата ${obj[key]} долларов.`);
    }

let n=1000;
let num=5;
while (n>=50) {
    n=n/2;
    num++;
    
}
console.log (num);

for (let fridayDay=1; fridayDay <=31; fridayDay+=7) {
   alert(`Сегодня пятница, ${fridayDay}-е число.Необходимо подготовить отчет.`) 
    
}
 

// // Variable 
var time = "10:00 pm";
var price = 500;
var isblackWhether = true;

// // array 

var student = ['kamal','jamal','rofik','sajid','mojid'];
var lenthofarray = student.length;
var arrayIndexof = student.indexOf('mojid');
student.push('Rohim');
student.pop();
student.unshift('Tomal');
student.shift();

// // condition

var num1=50;
if(num1<=300 && num1>=0){
    console.log(num1);
}else if(num1>40){
    console.log(num1);
}
else{
    console.log(num1);
}

// // Loop----loop loop

var num1=0;
while(num1<=20){
    console.log(num1);
    i++;
}

for(var i=0;i<=30;i++){
    console.log(i);
}

// function-------

function ismoonGet(time){
    if(time>=19 && time<=5){
        return true;
    }
    return false;
}

var time = 8;
var moon = ismoonGet(time)
console.log(moon);

// let and const

// value of the variable could change 
 
let price = 70;
price = 50;
price = 90;

// value of the variable will not change

const myName = 'Mahadi Hasan';
myName= "Rimon";
console.log("myName");
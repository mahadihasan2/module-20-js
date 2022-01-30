function getFactorial(number){
    let factorial = 1;
    let i = 1;
    while(i<=number){
        factorial = factorial*i;
        i++;
    } 

    return factorial;
}

var factorialNumber = 6;
var factorialValue = getFactorial(factorialNumber);
console.log(factorialValue);
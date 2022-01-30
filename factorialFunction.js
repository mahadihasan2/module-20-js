function getFactorial(number){
        let factorial = 1;
        for (let i = 1; i<=number; i++ ){
            factorial = factorial*i;
        }

        return factorial;
}

var factorialNumber = 10;
var totalFactValue = getFactorial(factorialNumber);
console.log('First Factorial Number is =',totalFactValue);

var secondFactorial = getFactorial(8);
console.log('Second Factorial Number is =',secondFactorial);
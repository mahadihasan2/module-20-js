// call the function of odd number
function oddNumberIs(odd){
    if(odd % 2 !=0){
        return true;
    }
    else{
        return false;
    }
}

var isNumberOdd = 50;
var isOddNumberCount = oddNumberIs(isNumberOdd);
console.log('this number is =', isOddNumberCount);

// call the function of even number
function evenNumberIs(even){
    
    if(even % 2 ==0){
        // console.log('this number is =',even);
        return true
    }else{
        // console.log('this number is odd=',even);
        return false
    }
}

var isNumberIs =80;
var Isevennumber = evenNumberIs(isNumberIs);
console.log('this number is =',Isevennumber);
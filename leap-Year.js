function isYearIs(year){
    if(year % 4 ==0 && year%100 !=0){
        return true;
    }else if(year%400 == 0){
        return true;
    }
    return false;
}

var leapYearNumber = 6010;
var whatYear = isYearIs(leapYearNumber);
console.log(whatYear);
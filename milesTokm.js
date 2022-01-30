function milesTokm (miles){
    var km = miles * 1.60934;
    return km;

}

var mile = 65;
var totalkm = milesTokm(mile);
console.log(totalkm);
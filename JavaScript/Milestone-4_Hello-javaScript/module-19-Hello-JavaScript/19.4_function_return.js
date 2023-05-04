function add(number1, number2){
    console.log(number1,number2);
    var sum = number1 + number2;
    return sum; // return এর পর যা লেখা থাকবে, সেটার মান(value) return হিসেবে পাওয়া যাবে।।
    // console.log(sum);
}

var total = add(80,20);
// console.log('Total = ', total);

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var singaras = bringSingara(200);
console.log(" Eating singraras : ", singaras);
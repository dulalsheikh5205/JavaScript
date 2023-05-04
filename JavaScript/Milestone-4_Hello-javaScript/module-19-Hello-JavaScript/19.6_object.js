/* 
object হলো একটি  variable যা অনেক মান একসাথে ধারণ করতে পারে।।
*/
var student = { 
    id: 1267842,
    name: 'dulal', 
    class: 9, 
    marks: 98
}

var mobile = {
    brand: 'samsung',
    price: 19000,
    storage: '64gb',
    camera: '7MP'

}

var myComputer = {
    brand: 'lenovo',
    price: 39000,
    color: 'silver',
    processor: 'i7'
}

console.log(myComputer.processor);
myComputer.color = 'blue';
console.log(myComputer);
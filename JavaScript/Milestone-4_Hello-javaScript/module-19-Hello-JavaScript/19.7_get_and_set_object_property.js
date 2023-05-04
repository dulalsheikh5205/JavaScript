
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
}
// when you know the specific property name, use dot notation to get the property value

var penCount = shoppingCart.pen;
// console.log(penCount);
// when you know the specific property name, use dot notation to get the property value
var penCount2 = shoppingCart['pen'];
// console.log(penCount2);
var properties = Object.keys(shoppingCart);
// console.log(properties);
var propertiesValues = Object.values(shoppingCart);
// console.log(propertiesValues);
// console.log(shoppingCart);

var propertyNames = 'books';
var propertyValues = shoppingCart[propertyNames];
console.log(propertyNames, propertiesValues);

// set property values
shoppingCart.mause = 1555;
shoppingCart['mause'] = 1111;
console.log(shoppingCart);
console.log(propertyNames);



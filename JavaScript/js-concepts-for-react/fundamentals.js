// 1.  How to declare a variable using let and const?
const fatherName = 'Samad';
let season = 'rainy';
season = 'winter';

// 2. conditions
// 6 Basic Conditions: <,>,===, !==, <=,>=
// multiple Conditions: &&, ||
if(fatherName === 'samad' || season === 'rainy'){

}
else if(fatherName === 'Samad'){

}
else{

}

// 3. array declare
// index
// length,push
const numbers = [2,8,4];
numbers[0] = 56;

// 4. for loop

for(let i = 0; i < numbers.length;i++){
    const number = numbers[i];
    confirm.log(number);
}

// 5. function 
function multiply(num1 ,num2){
    const result = num1 * num2;
    return result;
}

const output = multiply(5,10);

// 6 Object
// 3 ways to access property by name
const student = {
    name:'dulal',
    age: 29,
    movies: ['troy','gladiator']
}
const myVariable = 'age'; 
console.log(student.age); // direct by property 
console.log(student['age']) // access via property name string 
console.log(student[myVariable]) // access via property name in a variable
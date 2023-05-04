const numbers = [89,35,98,12];
const students = {
    name: 'dulal',
    age: 28,
    designation: ['developer','backend','frontend']
}

const about = `my name is ${students.name} ${students.age} has number ${numbers[2]} also has designation ${students.designation[1]}`;
console.log(about);

// 
const getFiftyFive = () =>55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x,y,z) => x + y + z;
const doMath = (num1, num2)=>{
    const sum = num1 + num2;
    return sum;
}

// spread operator 
const newNumbers = numbers;
numbers.push(99);
const nNumbers = [numbers];
numbers.push(99);
numbers.push(99);
numbers.push(99);
console.log(nNumbers);
const currentNumber = [...numbers,55];
console.log(numbers);
console.log(newNumbers);
console.log(currentNumber);
let student = {
    name: 'dulal',
    fatherName: 'Abdus samad',
    motherName: 'Hamida Khatun',
    roll: 3
}
// console.log(typeof student); // use package quokka.json =>(ctrl+shift+p) run on save for current file
// output : javascript object
console.log(student);
// output: { name: 'dulal', fatherName: 'Abdus samad', motherName: 'Hamida Khatun', roll: 3}

let json = JSON.stringify(student);
console.log(json);
// output: { "name": "dulal", "fatherName": "Abdus samad", "motherName": "Hamida Khatun", "roll": 3}
// json object must be double quotation for key and value pair without numeric value
// console.log(typeof json);
// output : json string (json nije ekta string and json ee always double quot hobe)


let studentJson = `{
    "name": "dulal",
    "fatherName": "Abdus samad",
    "motherName": "Hamida Khatun",
    "roll": 3
}`
console.log(studentJson);
// output: { "name": "dulal", "fatherName": "Abdus samad", "motherName": "Hamida Khatun", "roll": 3}

//ekhon jodi json string theke javascript object banate chai,tahole...
let std =JSON.parse(studentJson);
console.log(std);
// output: { name: 'dulal', fatherName: 'Abdus samad', motherName: 'Hamida Khatun', roll: 3} eta javascript object hoye gache
console.log(std.name);
// output: dulal

let multipleStudentJson = `[
    {
        "name": "dulal",
        "fatherName": "Abdus samad",
        "motherName": "Hamida Khatun",
        "roll": 3
    },
    {
        "name": "jamal",
        "fatherName": "samad",
        "motherName": "Hamida",
        "roll": 3
    },
    {
        "name": "helal",
        "fatherName": "smd",
        "motherName": "Hmda",
        "roll": 3
    }
]`

console.log(multipleStudentJson); // its multiple json string 
let multipleSTD = JSON.parse(multipleStudentJson);
console.log(multipleSTD); // output: javascript object
console.log(multipleSTD[1].name);// output: jamal

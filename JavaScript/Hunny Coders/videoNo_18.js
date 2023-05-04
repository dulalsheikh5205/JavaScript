// let student = {
//     name: 'dulal',
//     fatherName:'samad',
//     motherName:'hamida',
//     roll:3
// }
// console.log(typeof student);
// let json = JSON.stringify(student);
// console.log(json);
// console.log(typeof json)

let studentJson = 
`[
    {"name":"dulal",
"fatherName":"samad",
"motherName":"hamida",
"roll":4
},
{"name":"jamal",
"fatherName":"smd",
"motherName":"hmda",
"roll":5
},
{"name":"helal",
"fatherName":"sm",
"motherName":"hm",
"roll":6
}

] `

console.log(studentJson);
console.log(typeof studentJson);
let std = JSON.parse(studentJson);
console.log(std);
console.log(typeof std);
console.log(std[2].name);
// const data = require('./friends_data.json');
// console.log(data);

// console.log(data.friends[0]);
// console.log(data.friends[0].name);
// data.friends[0].name = "Anis";
// console.log(data.friends[0].name);

// delete data.friends[0].name;
// console.log(data);

// const data = require('./students_data.json');
// // console.log(x.students[1].languages[0])
//  console.log(data.students[1].languages[0]);


/* const data = require('./friends_data.json');

for( x in data ){
    // console.log(x);
    // output: friends
}
*/

/*
const data = require('./friends_data_for_loop.json');

for( x in data ){
    // console.log(x);
    // output: friends
      //      students
      console.log(x);
      console.log(data[x]);
//       output:
//       friends
// [ { name: 'dulal', age: 28 }, { name: 'jamal', age: 30 } ]
// students
// [ { name: 'dulal', age: 28 }, { name: 'jamal', age: 30 } ]

}
*/
// const data2 = {
//     "name" : "anis",
//     "age" : 25
// }
console.log(JSON.parse(`{"name" : "anis"}`));

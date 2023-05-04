# JSON
* JavaScript Object Notation
```bash
1. JS Array + Object
2. Formatted String
3. Key Value Pair
key => value
Name: dulal
Father Name: Abdus Samad
Mother Name: Hamida Khatun
Roll: 1

then 
javascript object it is...

rule=> remove the space for key and make camel case
{

name : "dulal"
fatherName : "Abdus Samad"
motherName : "Hamida Khatun"
roll : 1

}

then javascript object to json object/string
rule=> make quotation for key and value properties
{

"name" : "dulal"
"fatherName" : "Abdus Samad"
"motherName" : "Hamida Khatun"
"roll": 1

}

* where json use or need => ajax, rest api, noSql(mongodb,friebase), configration file,

```
then create a js file
```bash
student.js

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

```

# what is json ?
* JSON=> JavaScript Object Notification(javascript syntax)
https://i.ibb.co/N9c71XZ/json-1.png
![Alt text](https://i.ibb.co/N9c71XZ/json-1.png "what is json")

* JSON is 
    1. A standard,
    2. Text-based form,
    3. Lightweight,
    4. Language independent
    5. to store and exchange data between client and server.

* JSON file extension -> .json
* official media type -> application/json
https://i.ibb.co/W6vnwgY/json-2.png
![Alt text](https://i.ibb.co/W6vnwgY/json-2.png "what is json")

# json basic structure ?
* object and array
1. object 
{
    "key":"value"
    ...
}
{
    "name" : "dulal"
    "age" : 25
},
{
    "name" : "jamal",
    "age" : 30
}
object are separated by comma
https://i.ibb.co/ncbGgSQ/json-3.png
![Alt Text](https://i.ibb.co/ncbGgSQ/json-3.png "json structure")

2. array

array [value1, value2, ...]
["dulal",29],
["jamal",32]
multiple arrays are separated by comma
https://i.ibb.co/VqNqCJr/json-4.png
![Alt Text](https://i.ibb.co/VqNqCJr/json-4.png "structure")

# json syntax
json begin and end with {} bracket
json key  will be double quot of mandatory 
json value will not be mandatory double quot

{
    "key" : "value",
    "key" : value
}
https://i.ibb.co/GVSHPCK/json-5.png
![Alt Text](https://i.ibb.co/GVSHPCK/json-5.png "syntax")
* json value by types
1. string 
{
    "name" : "dulal",
    "country" : "Bangladesh"
}
2. numbers(int/float)
{
    "age" : 29,
    "gpa" : 3.03
}
3. boolean
{
    "isRegistered" : true,
    "isActivated" : false
}
4. null
{
    "middleName" : null,
    
}
5. objects
{
    "user" : {
            "name" : "dulal",
            "age" : 29,
            "city" : "Dhaka"
    }
}
6. array
{
    "user" : [
            "dulal",
            "jamal",
            "helal"
    ]
}

# javascript object vs json syntax 
javascipt e object ee (key) er uvoy dike quotation deowya daddhotamulok na, kintu json er khetre dewya badhotamulok,
javascript ee object er (string value) single quot er moddhe rakhte pari, but  json object er khetre string value obboshoi double quot er moddhe rakhte hobe,

https://i.ibb.co/HDMMfzk/json-6.png
![Alt text](https://i.ibb.co/HDMMfzk/json-6.png "syntax")


# json create
* friends_data.json

https://i.ibb.co/XFxsFHR/json-7.png
![Alt Text](https://i.ibb.co/XFxsFHR/json-7.png "json file")

* json file 
1. protheme object toiri korte hobe, {} braket diye
2. then sob gula object ke ekata key er under a rakhbo, sejonno, key niye then array niye tarpor object gula rakhte hobe, then pura ta ke json format er jonno {} braket er moddhe rakhte hobe,

```bash
friends_data.json

{
    "friends" : [
        {
            "name" : "dulal",
            "age" : 28
        },
        {
            "name" : "jamal",
            "age" : 30
        }
    ]
}
```


create students_data.json
https://i.ibb.co/RcnC9hR/json-8.png
![Alt Text](https://i.ibb.co/RcnC9hR/json-8.png "complex json example")


work with first row for json file,
https://i.ibb.co/SdXRK9Z/json-9.png

![Alt Text](https://i.ibb.co/SdXRK9Z/json-9.png "work first row")

work with second row for json file,
https://i.ibb.co/n8S4xpX/json-10.png
![Alt Text](https://i.ibb.co/n8S4xpX/json-10.png "work second row")


```bash
students_data.json




{

    
"students" : [

    // objet কখন use হয় যখন key:value pair থাকে,তখন হয়,
// অনেকগুলা values থাকলে, array তে রাখতে হবে,

{
    "name" : "Dulal Sheikh",
    "middleName" : null,
    "age" : 28,
    "cgpa" : 3.03,
    "isRegistered" : true,
    "languages" : ["Bangla","English","japanese"],
    "friends" : [
        {
            "name" : "mahmudul",
            "age" : 27
        },
        {
            "name" : "Rasel",
            "age" : 29
        }
    ]
},
// এরপর second row এর কাজ করতে হবে,
{
    "name" : "Rabeya Begum",
    "middleName" : null,
    "age" : 30,
    "cgpa" : 3.92,
    "isRegistered" : false,
    "languages" : ["Bangla","English","finnish","hindi"],
    "friends" : [
        {
            "name" : "shakila",
            "age" : 24
        },
        {
            "name" : "jumur",
            "age" : 26
        }
    ]
}

/* এদের কে আবার collection এর মধ্যে রাখতে হবে, মানে array তে রাখতে হবে, একটা array এর নাম দিতে হবে,*/

]

// array এর মধ্যে object গুলা রাখার পর, json format এ কাজ করলে, পুরা টা কে অবশ্যই {} curly bracket এর মধ্যে রাখতে হবে,

}
```


# check validaty of JSON File/data
* excellent site to visit => JSON Beautifier => https://codebeautify.org/jsonviewer

https://i.ibb.co/DW2P0Yn/json-11.png
![Alt Text](https://i.ibb.co/DW2P0Yn/json-11.png "check validaty of json data")


Anisul Islam=> json video 4 will start

# json path
* How to Access/Modify/Delete/Convert json data ?

## How to access json objects 
var data = {
    "name" : "anis",
    "age" : 30
}
এখানে name কে বের করতে হলে ২ টা পদ্ধতি use করতে হবে,
* use dot and bracket notation
* data.name  output=> anis
* data["name"] output=> anis

<img src="https://i.ibb.co/2MfcXFx/json-12.png" alt="json-12" border="0">
![Alt Text](https://i.ibb.co/2MfcXFx/json-12.png "how to access json objects")

* Accessing nested objects

<img src="https://i.ibb.co/zVk6W4K/json-13.png" alt="json-13" border="0">
![Alt Text](https://i.ibb.co/zVk6W4K/json-13.png "Accessing nested objects")

* more example of Accessing nested objects

<img src="https://i.ibb.co/ftH8cHd/json-14.png" alt="json-14" border="0">
![Alt Text](https://i.ibb.co/ftH8cHd/json-14.png "more example")

## modify values of objects

<img src="https://i.ibb.co/1G5Sfs0/json-15.png" alt="json-15" border="0">
![Alt Text](https://i.ibb.co/1G5Sfs0/json-15.png "modify values of objects")

## Delete object properties

<img src="https://i.ibb.co/BsJdNrB/json-16.png" alt="json-16" border="0">
![Alt Text](https://i.ibb.co/BsJdNrB/json-16.png "delete object properties")


# create json file
```bash
friends_data.json

{
    "friends" : [
        {
            "name" : "dulal",
            "age" : 28
        },
        {
            "name" : "jamal",
            "age" : 30
        }
    ]
}


// then create index.js

index.js

const data = require('./friends_data.json');
console.log(data);

console.log(data.friends[0]);

console.log(data.friends[0].name);

data.friends[0].name = "Anis";
console.log(data.friends[0].name);

delete data.friends[0].name;
console.log(data);
```
```bash
console.log(data);
output: { friends: [ { name: 'dulal', age: 28 }, { name: 'jamal', age: 30 } ] }

console.log(data.friends[0]);
output: { friends: [ { name: 'dulal', age: 28 }, { name: 'jamal', age: 30 } ] }
{ name: 'dulal', age: 28 }

console.log(data.friends[0].name);
output: dulal


data.friends[0].name = "Anis";
console.log(data.friends[0].name);
output: Anis

delete data.friends[0].name;
console.log(data);
output: { friends: [ { age: 28 }, { name: 'jamal', age: 30 } ] }

```

* https://jsonpathfinder.com/ এই সাইটের মাধ্যমে, json path খুজে নেওয়া যাবে,

<img src="https://i.ibb.co/Bq3HstF/json-18.png" alt="json-18" border="0">
![Alt Text](https://i.ibb.co/Bq3HstF/json-18.png "json path finder")

```bash
const data = {
    "friends" : [
        {
            "name" : "dulal",
            "age" : 28
        },
        {
            "name" : "jamal",
            "age" : 30
        }
    ]
}

x.friends[0].name // 'x' এখানে হচ্ছে variable বা container হবে,
যেমনঃ

data.friends[0].name 
```
<img src="https://i.ibb.co/FWzKF6s/json-19.png" alt="json-19" border="0">
![Alt Text](https://i.ibb.co/FWzKF6s/json-19.png "students_data.json example for path finder")

```bash
students_data.json

{
	"students": [
		{
			"name": "Dulal Sheikh",
			"middleName": null,
			"age": 28,
			"cgpa": 3.03,
			"isRegistered": true,
			"languages": [
				"Bangla",
				"English",
				"japanese"
			],
			"friends": [
				{
					"name": "mahmudul",
					"age": 27
				},
				{
					"name": "Rasel",
					"age": 29
				}
			]
		},
		{
			"name": "Rabeya Begum",
			"middleName": null,
			"age": 30,
			"cgpa": 3.92,
			"isRegistered": false,
			"languages": [
				"Bangla",
				"English",
				"finnish",
				"hindi"
			],
			"friends": [
				{
					"name": "shakila",
					"age": 24
				},
				{
					"name": "jumur",
					"age": 26
				}
			]
		}
	]
}

* then use json path finder site for access path

x.students[1].languages[0]

```
```bash
index.js

const data = require('./students_data.json');
// console.log(x.students[1].languages[0])
 console.log(data.students[1].languages[0]);

* ctrl + j => node index.js
output: Bangla

```
# json fake data
(Free fake API for testing and prototyping.) 
https://jsonplaceholder.typicode.com/ (এই সাইটে route বা api আছে যার মাধ্যমে data fetch করতে পারি,)

https://jsonplaceholder.typicode.com/posts (এই json data গুলা কে সুন্দর মত represent করার জন্য একটা google chrome extension json path finder chrome extension for google chrome add করে pin করে নিলেই হবে)

# কিভাবে looping এর মাধ্যমে json data access করতে হয় ?

<img src="https://i.ibb.co/Cmv21pF/json-20.png" alt="json-20" border="0">
![Alt Text](https://i.ibb.co/Cmv21pF/json-20.png "json data for in loop")

```bash
* friends_data.json

{
    "friends" : [
        {
            "name" : "dulal",
            "age" : 28
        },
        {
            "name" : "jamal",
            "age" : 30
        }
    ]
}

* index.js
const data = require('./friends_data.json');

for( x in data ){
     console.log(x);
    
}

 output: friends
```
```bash
* friends_data_for_loop.json

{
    "friends" : [
        {
            "name" : "dulal",
            "age" : 28
        },
        {
            "name" : "jamal",
            "age" : 30
        }
    ],
    "students" : [
        {
            "name" : "dulal",
            "age" : 28
        },
        {
            "name" : "jamal",
            "age" : 30
        }
    ]
}


* index.js
const data = require('./friends_data_for_loop.json');

for( x in data ){
    // console.log(x);
    // output: friends
    //         students

    console.log(x);
      console.log(data[x]);
}

output:
      friends
 [ { name: 'dulal', age: 28 }, { name: 'jamal', age: 30 } ]
 students
 [ { name: 'dulal', age: 28 }, { name: 'jamal', age: 30 } ]
```

# How to convert/conversion json data

<img src="https://i.ibb.co/PFTqxfr/json-21.png" alt="json-21" border="0">
![Alt Text](https://i.ibb.co/PFTqxfr/json-21.png "convert js object to json format")


<img src="https://i.ibb.co/4MvQhvv/json-22.png" alt="json-22" border="0">
![Alt Text](https://i.ibb.co/4MvQhvv/json-22.png "js object convert to json for send data to server")


<img src="https://i.ibb.co/g3TbmqT/json-23.png" alt="json-23" border="0">
![Alt Text](https://i.ibb.co/g3TbmqT/json-23.png "json convert to js object for send data to client from server")

* js object convert to json for send data to server from client browser
```bash
*index.js

const data2 = {
    "name" : "anis",
    "age" : 25
}
console.log(JSON.stringify(data2));

output: ctrl + j => node index.js
{"name":"anis","age":25} // this is json format create 

```
* json format convert to js object for send data from server to client browser
```bash
* index.js

console.log(JSON.parse(`{"name" : "anis"}`));

output: ctrl + j => node index.js
{ name: 'anis' }
```


Anisul Islam=> json video 4 will start

# json schema
* what is json schema ?
* how to create json schema from json
* describes a standard format of json data
* validation client-submitted data

## schema example

* this data is json valid data and datatype
<img src="https://i.ibb.co/KNc4s3w/json-24.png" alt="json-24" border="0">
![Alt Text](https://i.ibb.co/KNc4s3w/json-24.png "json valid data and datatype")

* this data not json valid data and datatype
<img src="https://i.ibb.co/wYhpTQK/json-25.png" alt="json-25" border="0">
![Alt Text](https://i.ibb.co/wYhpTQK/json-25.png " this data not json valid data and datatype")

# demo
* schema validator website

<img src="https://i.ibb.co/CVtrzsp/json-26.png" alt="json-26" border="0">
![Alt Text](https://i.ibb.co/CVtrzsp/json-26.png "schema validator website")

<img src="https://i.ibb.co/47qvPQ8/json-28.png" alt="json-28" border="0">
![Alt Text](https://i.ibb.co/47qvPQ8/json-28.png "https://www.liquid-technologies.com/online-json-to-schema-converter")

```bash
go to website and add json data and then Generate Schema
https://www.liquid-technologies.com/online-json-to-schema-converter

Sample JSON Document

/* Add JSON Data */
{
	"name" : "anar",
  	"age" : 25
}

then press Generate Schema

Infered JSON Schema
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "age": {
      "type": "integer"
    }
  },
  "required": [
    "name",
    "age"
  ]
}

```
* jsonschemavalidator
<img src="https://i.ibb.co/d6R57mj/json-29.png" alt="json-29" border="0">
![Alt Text](https://i.ibb.co/d6R57mj/json-29.png " for jsonschemavalidator")

```bash
and then go to 
https://www.jsonschemavalidator.net/

set this 

select schema

{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "age": {
      "type": "integer"
    }
  },
  "required": [
    "name",
    "age"
  ]
}

input json

{
	"name" : "anar",
  	"age" : 25
}

output: No errors found. JSON validates against the schema
```


# references 
* references websites
<img src="https://i.ibb.co/2d7DQKB/json-27.png" alt="json-27" border="0">
![Alt Text](https://i.ibb.co/2d7DQKB/json-27.png "references websites")
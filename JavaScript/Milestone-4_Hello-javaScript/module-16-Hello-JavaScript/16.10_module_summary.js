/*
    ========================

    ==) javascript is a high-level, interpreted programming language. It makes the web pages more interactive. we can use javascript to make animations

    ==) variable is like a box that store things. There are five types of variables number, string, boolean, null and undefined 

    ==) javascript keywords are reserved words and they cannot be used as variable name and function name

    ==) Camel Case, Snake Case and Pascal Case are the three most common naming conventions
    
    ==)variable names are case sensitive


    ===> we discussed four types of mathematical operations: addition, subtraction, multiplication and division(+, -, *, /)
    ===> shorthand mathematical operations (+=,-, *, /)
    ===> we can join two strings together using the concatenation operator, +
    ===> change: string to int, string to float and we can specify the decimal places using toFixed()
    ===>using the modulus operator, %, we can find the remainder of a division
    ===>
    Question: 1: practice problem 1 solve below


 */

   var  totalMoney = 1000;
   var totalCost = 700;
   var remainMoney = totalMoney - totalCost;
  //  console.log(remainMoney);

   /** practice problem 2 solve below */

   var mathematics =75.25;
   var  newMathematics = parseFloat(mathematics);
   var biology = 65;
   var chemistry = 80;
   var physics = 35.45;
   var newPhysics = parseFloat(physics);
   var bangla = 99.50;
   var totalMarks = newMathematics + biology + chemistry + newMathematics + bangla;


   var averageMarks = totalMarks / 5;
   console.log(averageMarks);

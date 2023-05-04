 /*
===============
what is JavaScript
===============

* A Scripting language that allows to implement complex features on web pages.
* Can also be said as a programming language for the web.

 ** more interactive web page 
 ** interpreted language
 ** Runs on the client's computer


 ==============
 variables in javascript
 ==============

 ** variable is nothing but just a container
 ** where we can keep value contain
  
    *** variable in javaScript (var VS let VS const)

    suppose, you loves reading a lot. 'Melvin Gray' is your favorite writer. You want to buy all of his books. 'X' publisher has published his 'Y' books.
    var title = 'Code Life';
    let publisher = 'House of Books';
    const author = 'Melvin Gray';

    ---var is almost same with let but little bit updated let variable
    ---let meaning Allowing/Allowing Something
    ---const is not changeable


    ================
    Data Types in JS
    ================

    ** (Primitive Data Types)=> numbers, strings, boolean
    ** (composite/Non-Primitive Data Types)=> objects, arrays
    ** null, undefined => also know as Trivial/Others Data Types

    ==================
    variable naming convention
    ==================

    ** names can contain letters, digits,underscores, and dollar signs
    ** names must begin with a letter 
    ** The identifier names can also begin with $ and _
    ** names are case sensitive. Thus, y and Y are different variables
    ** reserved words cannot be used as names

    keyword or reserved words ==> var, delete, for, let, break,super, void, case, do, static, function, new, switch, while, interface, catch, else, if, package, finally,this, with, class, enum, default, implements, private, throw, yield, typeof, const, export, import, protected,return,true, continue, in, instanceof, public, try, debugger, false


    =====================
    Mathematical Operations
    =====================
    operators   meaning             example result
        +       (addition)          4+2 = 6
        -       (subtraction)       4-6 = 2
        *       (multiplication)    4*2 = 8
        /       (division)          4/2 = 2
        %       (modulus operator to get remainder in integer division)           5%2   = 1
        ++      (increment)         (a=10;a++)        = 11
        --      (decrement)         (a=10;a--)        = 9


        
    ===================
    array in JS
    ===================

   const salad = [tomato,broccoli, cauliflower, cucumber carrot,Avocado];

    salad[0] = tomato;
    salad[2] = cauliflower;
    salad[5] = avocado;

    salad.push('nut') = [tomato, broccoli, cauliflower, cucumber carrot,Avocado, nut ];

    salad.unshift('nut') = [nut, tomato,broccoli, cauliflower, cucumber carrot,Avocado];


    salad.pop(); = // বের হয়ে যাবে last element Avocado;

    salad.shift(); = // বের হয়ে যাবে first element tomato;


    ====================
    array in JS
    ====================

    const color = ["white","Black","Red","Green","Yellow"]; (index always starts begin from 0 number)

    let index = color.indexOf("white");
    output:: 0;


    var numbers = [1, 8, 98, 45, 65, 71, 63];
    numbers.slice(2,4);
    output:: [98,45] // slice will cut from index 2 and ending cut before 4 index ,  ২ number index থেকে শুরু করে ৪ number index  এর আগ পর্যন্ত কাটবে


    ===================
    some string operations
    ===================

    string.includes("");
    // thats mean any word stay remain in string or not remain in string 
    // :: out put will be true/false 

    var name = 'Ariana Grande is singing';
    name.includes('is');
    output:: true;
    // includes() method is case sensitive

    
    name.substring(0, 10)
    = 'Ariana Gra'; // output substring will cut from 0 index to right before 10 index // তার মানে ১০ number index এর আগ পর্যন্ত কাটবে


    string  parseInt() ==> convert will => int
    string  parseFloat ==> convert will => float


 */

 

const color = ["white","Black","Red","Green","Yellow"];
let index = color.indexOf("White");



/*
### Route Model Binding
 ---

  ```bash
 Route::prefix('vidoes/')->name('videos.')->controller(VideoController::class)->group(function(){

# Data Retrieving by Route Model Binding 
    Route::get('show/{video:name}','videoShow')->name('show');
    
    # Data Retrieving by Url Id
    Route::get('showById/{id}','videoShowById');
});

 ``` */
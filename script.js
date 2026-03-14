// //conditional statement
// // let age = 8;

// // if (age >= 18) {
// // console.log("you can vote");
// // }

// // if ( age < 18) {
// //      console.log("you cannot vote");
// // }

// // let mode = "dark";

// // if (mode === "dark") {

// // color = "black";
// // }

// // if (mode === "light") {
// //     color = "white";
// // }
// // console.log("color")

// //if else in conditional statement

// // let age = 2;

// // if ( age >= 18) {
// //     console.log("you can vote")
// // } else {
// //     console.log("you cannot vote")
// // }


// // let num = 17;

// // if ( num % 2 === 0 ) {
// //     console.log(num,"is even")
// // } else {
// //     console.log(num,"is odd")
// // }

// // let age = 2;
// //  let result = age>= 18 ? "adult" : "not adult";
// //  console.log(result);//compact if else format
// // let num = prompt ("enter a number");

// //  if ( num % 5 === 0 ) {
// //      console.log(num,"this number is multiple of 5")
// //  } else {
// //     console.log(num,"this number is not a multiple of 5 ")
// //  }

// let score = 98;
// let grade;

// if ( score >= 90 && score <= 100) {
//     grade ="A"

//  } 
//  else if ( score >= 70 &&  score <= 89) {
//   grade ="B"

//  } 
//  else if ( score >= 60 && score <= 69) {

//  grade ="C"

//  } 
//  else if ( score >= 50 && score <= 59) {

//       grade ="D"

// }
// else if (score  >= 10 && score <=49) {
//     grade ="F"

//  }

//  else (score >= 0 && score <=9) {
//     grade = "G"
//  }

// console.log("according to your marks your grade is", grade )


// //for loop

// // there are 3 syntax of loops
// //print 1 to 5
// // for (let count = 1; count <= 5; count++) {
// //     console.log("pawar")
// // }

// console.log ("apna collage")

// for (let i = 1; i <= 5; i++) {
//     console.log("i = ",i)
// }

//while loop and for loop are same

// let i = 1;

// while ( i<= 5) {
//     console.log("i",i);
//     i++;
// }
//there is another loop called do while loop
//do while loop do run atleast 1 time and condition will check firstly
// let i = 9;

// do {
//     console.log("i",i);
//     i++;
// }while(i <= 10);

//for while loop

// let str = "javascript";

// let size = 0;

// for ( let val of str) {
//     console.log("i=",val);
//     size++
// }
// console.log("size",size)

//for in loop

// let employee  = {
//     name : "yuvaraj",
//     salary:12000,
//     post : "LockManager",
// };

// for (let key in employee) {
//     console.log("key=",key, "value=",employee[key])
// }


// for (let i=0; i <= 100; i++)   {
// if (i%2===0)
//     console.log("i",i)

// }



//practice question
// let gameNum = 25;

// let userNum = prompt("enter a num: ");



// while ( userNum != gameNum) {

//     userNum = prompt("reenter num");

// }

// console.log("you did it");


// let i=0;

// for ( i <= 100; i++){
//     console.log("pp")
// }


//str in javascript

// let str = "you have to  fight alone       ";

// console.log(str.trim());

//trim str in javascirpt

// let str1 = "pavan " ;
// let str2 = " pawar" ;

// let res = str1 + str2;

// console.log(res);

// replace str

// let str = "pawan";

// let res = str.replace("n","r")
// console.log(res)
//
//chsrAT sting

//  let str = "umarkheda";

// console.log(str[3]);

//practise question

// let str1 = prompt("enter a full name");

// let str2= "@" ;

// let res = str2 + str1;

// console.log("username",res);


// let fullname = prompt("enter your full name without spaces");



// let username = "@" + fullname + fullname.length;


//  console.log(username)


//arrays
// let marks = [44,44,33,23,3,4,2,42,];
//   console.log(marks);



// let  heroes = [ 'shahrukh','karik','akdshay' ,'rajkumar'];

//   console.log(heroes);


//array indices

// let marks = [44,44,33,23,3,4,2,42,];
// console.log(arr[2]);


// let marks = [85,97,44,37,76,60];

// let sum =  0;

// for  (let val of marks) {
//     sum += val;
// }


// let avg = sum / marks.length

// console.log("Average marks of the class = " + avg);


// let items  = [250, 645, 300, 900 , 50];
// let i = 0;
// for (let val of items) {
//     let offer = val / 10;
//     items[i] = items[i] - offer;

//     console.log(`value after offer = ${items[i]}`);
//     i++;

// }


// let companies = ["bloomberg ","microsoft", "uber","google","ibm","netflix"];
// companies.splice( 1 , 3 ,"ola")
// console.log(companies) 
// let companies = ["bloomberg ","microsoft", "uber","google","ibm","netflix"];
// companies.splice( 1 , 3 ,"ola")
// console.log(companies) 

// function countVowels(str) {
//     for(const of str){
//         console.log(char);
//     }
// }
    
// }
// function myfunction()  {

//     console.log("hello from Pavan");

//     )
// }

// myfunction();
// function myfunction () {
//     console.log("hello from Pavan");
// }

// myfunction();

// function sum (x, y) {
//     s = x + y;
//     console.log("before return");

// }



// const arowwSum = (a, b ) => {
//     console.log(a + b);

// };
//practice questfunctionion //

// function countvowels(str) {
// let count = 0;
// for (const char of str)
// {
//     console.log(char);
// if (char === "a"|| char === "e" || char === "i" ||char === "o"|| char === "u")
// {count++;
// }
// }

// console.log(count)

// }
//foreach function
// let arr = [
//     "mumbai","hydrabad", "delhi",];

// arr.forEach((val, idx , arr)=>{
//     console.log(val.toUpperCase(),idx , arr);
// });


// practicequestion

// let num = [2 , 3, 4 ,5 ,6 ,7 ,8 ,9, ]

// num.forEach((num)=>{

 
// console.log(num * num);

// });

// map method 
// map creates a new method it is formed the new array
 

//  console.log("Pavan")

// const accountgId = 13244.
// let accountgmail = "pp.gmail.com"


 
// alert("hello");






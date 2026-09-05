//Artimetic operator 

//  let a = 5;
//  let b = 2;

//  console.log("a+b=", a+b);
//  console.log("a-b=", a- b);
//  console.log("a*b=" , a*b);
// console.log("a/b=" , a/b);

//unary operator//

// let a = 5;
// let b = 2;

// a = a-1;
// console.log(a);
// b=b+1;
// console.log(b);

//Assignment operator //

// let a = 5;
// let b = 2;
// a *=4; 

// console.log("a =", a);

//comparision operator //

// let a= 5;
// let b=2;

// console.log("5 != 2", a != b); 


//logical operator //

// let a = 6;
// let b = 5;

// let cond1 = a<b;

// console.log("!(a>b)", !(a>b)); 

//Ternary operator//

// let age = 25;

// let result = age >=18 ? "adult" : "not adult" ;

// console.log(result);


//conditional statement //

//  let age = 16;

//  if (age >=18) {
//     console.log("YOU CAN VOTE");
//  }

//  if (age < 18) {
//     console.log("YOU CANNOT VOTE");
//  }

// let age = 16;

// if(age>= 18) {
//     console.log("YOU CAN VOTE");
// }

// else {
//     console.log("YOU CANNOT VOTE");
// }

// let mode = "blue";
// let color;

// if( mode ==="dark") {
//     color = "black";
// }

// else if (mode ==="blue") {
//     color = "blue";
// }

// else  {
//     color = "white";
// }

// console.log(color);


// let num = prompt("ENTER A NUMBER");

// if(num % 5 ===0) {
//     console.log(num,"is a multiple of 5");
// }

// else {
//     console.log(num,"is not a multiple of 5");
// }

// for(let count = 1; count <=5; count ++) {
//     console.log("apna college");
// }

// // calculate the sum of 1 to 5//
// let sum = 0;
// let n = 100
// for(let i= 1; i <=n; i++) {

//     sum = sum + i;
// }
//     console.log("sum =", sum);
//     console.log("Loop has been ended");

// while loop//

// let i = 1;
// while(i<=5) {
//     console.log("i =", i);
//     i++
// }

// let i = 1;
// do {
//     console.log("i =", i);
//     i ++
// } while(i<=5);

// for of loops
// let str= "jaspreet choudhary";
// let size = 0;

// for (let i of str) {
//     console.log("str size =",size);
//     size++;

// }

// let student= {
//     Name : "jaspreet" ,
//     age :19,
//     cgpa : 7.5,
//     ispass : true,

// } ;

// for(let key in student) {
//     console.log("key =", key, "value =", student[key]);
// }  

// Print all numbers from 0 to 100
// let i = 0;
// for(let i = 0; i <= 100; i++ ) {
    
// if(i%2===0) {
//     console.log("i =",i);
// }


// let gamenum = 25;
// let usernum = prompt("Guess the game number");

// while(usernum != gamenum) {
//     console.log("You entered the wrong number");

// }

// console.log("Congratulations, you entered the right number"); 

// Arrays

// let marks = [97 , 72 , 10, 60, 80];
// console.log(marks);

// let marvalheroes = ["ironman" , "thor", "hulk"];
// let dcheroes= ["superman" , "batman"];

// let heroes = marvalheroes.concat(dcheroes);
// console.log (heroes); 


// function myfunction() {
//     console.log("apna college");
//     console.log("welcome to the apna college!") ;
//      console.log("apna college");
//     console.log("welcome to the apna college!") ;
// }

//  myfunction();
//  myfunction(); 

// function myfunction(msg) {
//     console.log(msg);
// }

// myfunction("I love JS"); 

// function sum(x , y) {
//    sum = x + y;
//    console.log("before reutrn");
//    return sum;
// }

// let val = sum(3,4);
// console.log(val); 

// const mult = (a,b) =>{
//    console.log(a*b);
// }  

// let div = document.querySelector("div");
// console.log(div);

// div.style.backgroundColor = "green" ;

// div.style.fontSize = "26px" ;
// div.innerText ="yo" ;
// div.style.textAlign = "center" ;
// div.style.border = "25px solid yellow";

// let newbtn = document.createElement("button");
// newbtn.innerText = "click me!" ;
// console.log(newbtn);

// let div = document.querySelector("div");
// div.prepend(newbtn) 
   
// newbtn.style.backgroundColor = "red";
// newbtn.style.color ="white";


// let div = document.querySelector("div");
// div.onmouseover = () => {
//   console.log("you inside a div");  
// }

// let btn1 = document.querySelector("#btn1")
// let currbtn1 = "light"; 

// btn1.addEventListener("click",() => { 
//      if(currbtn1==="light") {
//         currbtn1 = "dark";
//         document.querySelector("body").style.backgroundColor="black"
//      } else{
//         currbtn1 = "light";
//                 document.querySelector("body").style.backgroundColor="white"
//      }
//      console.log(currbtn1);
// })




 



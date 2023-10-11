/* Bitwise operators*/

var a= 10
var b= 2
console.log(a & b)
console.log(a | b)
console.log(a ^ b)

/* complement operators*/
 console.log(~true) //-2
 console.log(~false) // 2

 /* we know true is equal to 1 in binary it is 0000000000000001,
  when ~ is added to true then the value will be 1111111111111110 that will be -2*/
  /*same for false th decimal format will be 0 in 16 digit binary form it will be 0000000000000000
   when ~ is added it will be 1111111111111111, its value will be -1*/

   /*Exclusive operators*/
   console.log(true ^ true) //0
   console.log(true ^ false) //0
   console.log(false ^ true) //0
   console.log(false ^ false) //1
/* the o/p of the exclusive operators will be opposite the value we get*/



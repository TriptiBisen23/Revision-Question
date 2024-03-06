// print *
//       * *
//       * * *
// const input = require("readline-sync");
// let n = input.questionInt("Enter the number:");
// let i = 1;
// while(i<=n)
// {
//     let j=1
//     let a=""
//     while(j<=i)
//     {
//         a += "*" + " "
//         j++
//     }
//     console.log(a);
//     a ="";
//     i++
// }




// WAP to swap the values of 2 Number.by using third variable.
// const input = require("readline-sync");
// let a = input.questionInt("enter the 1 number:");
// let b = input.questionInt("enter the 2 number:");
// let t;
// t =a
// a =b
// b =t
// console.log(a,b);
//        ----------------------------------------------OR-----------------------------------------------------------------------
// WAP to swap the values of 2 number without using third variables.
// const input = require("readline-sync");
// let a = input.questionInt("enter the 1 number:");
// let b = input.questionInt("enter the 2 number:");
// a = a+b;
// b = a-b;
// a = a-b;
// console.log(a,b);




// wap to two sides from the users and tell that it is square or rectangle.
// const input = require("readline-sync");
// let a = input.questionInt("enter the number:");
// let b = input.questionInt("enter the number:");
// if(a==b)
// {
//     console.log("square");
// } else
// {
//     console.log("rectangle");
// }




// Find the second max of 3 num.
 // const input = require("readline-sync");
// let a = input.questionInt("enter the 1 number:");
// let b = input.questionInt("enter the 2 number:");
// let c = input.questionInt("enter the 3 number:");
// if(a>b)
// {
//     m1 = a
//     m2 = b;
// } else 
// {
//     m1 = b
//     m2 = a;
// } if(m1>c)
// {
//     m3 = m1
//     m4 = c;
// } else
// {
//     m3 = c
//     m4 = m1;
// } if(m2>m4)
// {
//     console.log(m2);
// } else
// {
//    console.log(m4);
// }



// //WAP to print the sum of digit of num//
// const input = require("readline-sync");
// let n = input.questionInt("enter the number:");
// let s = 0;
//for(i=0; n>0; i++)
// {
//    r = n%10
//    q = Math.floor(n/10)
//    n=q
//    s = s+r
// } console.log(s);



//print 1
//      121
//      12321
// const input = require("readline-sync");
// let n = input.questionInt("Enter the number:");
// let i = 1;
// while(i<=n)
// {
//    let j = 1
//    let a= ""
//    while(j<=i)
//    {
//          a+=(j)+ " "
//        j++
//    }
//  j=i-1
//  while(j>=1)
//  {
//       a+=(j)+ " "
//      j--
//  }
//  console.log(a);
//  i++;
// } 




//THE GIVEN NUM IS PRESENT IN THE ARRAY OR NOT.
// const input = require("readline-sync");
// let n = input.questionInt("Enter the length of array:");
// let arr = [];
// let c = 0;
// let t = input.questionInt("enter the target number:")
// for(let i = 0; i<n; i++)
// {
//     arr[i] = input.questionInt("enter the element no.:")
//     if(arr[i]==t)
//    { 
//         c++;
//         n=i;
//                 console.log("yes");
//    } else
//    {
//         console.log("no");
//    }
//   } 




//PRINT THE AVERAGE OF THE GIVEN ARRAY.
// const input = require("readline-sync");
// let n = input.questionInt("enter the length of array:");
// let arr = [];
// let s=0;
// for(let i=0; i<n; i++)
// {
//    arr[i] = input.questionInt("enter the element num.:");
//     s = s+arr[i]
//     a = Math.floor(s/n);
// }
//    console.log(a);
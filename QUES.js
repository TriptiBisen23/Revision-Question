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





/ print 5 mai 3 maximum
// const input = require("readline-sync");
// let a = input.questionInt("enter the 1 number:");
// let b = input.questionInt("enter the 2 number:");
// let c = input.questionInt("enter the 3 number:");
// let d = input.questionInt("enter the 4 number:");
// let e = input.questionInt("enter the 5 number:");
// if(a>b)
// {
//     m1 = a
//     m2 = b;
// } else
// {
//     m1 = b
//     m2 = a;
// } if(c>d)
// {
//     m3 = c
//     m4 = d;
// } else
// {
//     m3 = d
//     m4 = c;
// } if(m1>m3)
// {
//     m5 = m1
//     m6 = m3;
// } else
// {
//     m5 = m3
//     m6 = m1;
// } if(m5>e)
// {
//     m7 = m5
//     m8 = e;
// } else
// {
//     m7 = e
//     m8 = m5;
// } if(m2>m4)
// {
//     m9 = m2
//     m10 = m4;
// } else
// {
//     m9 = m4
//     m10 = m2;
// } if(m6>m8)
// {
//     m11 = m6
//     m12 = m8;
// } else
// {
//     m11 = m8
//     m12 = m6;
// } if(m9>m11)
// {
//     m13 = m10
//     m14 = m11;
// } else
// {
//     m13 = m11
//     m14 = m10;
// } if(m13>m14)
// {
//     console.log(m13);
// } else
// {
//     console.log(m14);
// }



//DUPLICATE(2,2,4,5,6,5)
//OUTPUT(2,0,0,5,0,0)
// const input = require("readline-sync");
// let n = input.questionInt("Enter the length of array:");
// let arr = [];
// for(let i=0; i<n; i++)
// {
//     arr[i] = input.questionInt("enter the element no.:")
// }
// for(i=0; i<n; i++)
// {
//     let c=1;
//     for(let j=i+1; j<n; j++)
//     {
//         if(arr[i]==arr[j])
//         {
//             c++;
//         }
//         c=c;
//     } 
//     if(c>1)
//     {
//         console.log((arr[i]),"duplicate ");
//     } else 
//     {
//         console.log("0");
//     }
// }





//101101111011111 max. last one num. print output 5
// const input = require("readline-sync");
// let n = input.questionInt("Enter the length of array:");
// let arr = [];
// for(let i=0; i<n; i++)
// {
//     arr[i] = input.questionInt("enter the element no.:");
// }
// for(i=0; i<n; i++)
// {
//     let c=1;
//     for(let j=i+1; j<n; j++)
//     {
//         if(arr[i]==arr[j])
//         {
//             c++;
//         }
//         c=c;
//     }
//       console.log((arr[i]), c);
// }





// // 2 ARRAY ELEMENT QUESTIONS ARR[1 2 3]  ARR[2 3 5]  OUTPUT[3 5 8]
// const input = require("readline-sync");
// let n = input.questionInt("Enter the length of array:");
// let m = input.questionInt("Enter the length of array:");
// let a = [];
// let b = [];
// let d=[];
// for(let i=0; i<n; i++)
// {
//     a[i] = input.questionInt(`enter the  aaray element :`);
// }
// for(let j=0; j<m; j++)
// {
//     b[j] = input.questionInt(`enter the secand aaray element : `);
// }
// let i=0;
// let j=0;
// let k=0;
// while(k<n+m)
// {
//     while(i<n)
//     {
//         while(j<m)
//         {
//             if(a[n]==b[m])
//             {
//                 d[k]=a[i]+b[j];
//                 console.log(d[k]);
//                 i++;
//                 j++;
//                 k++;
//                 k = n+m;
//             }
            
//         }
//     }
// }   





//1+2 = 12 print that code.
// const input = require("readline-sync");
// let a = input.questionInt("Enter the number:");
// let b = input.questionInt("Enter the number:");

// if(a>0)
// {
//     if(b>0)
//     {
//         t = a*10;
//         s = t+b;
//     }
// }        console.log(s);




// CONVERT NEGATIVE INTO POSITIVE
// const input = require("readline-sync");
// let n = input.questionInt("enter the num:");
// let t;
// if(n<0)
// {
//      t = n*-1 
// } 
// else
// {
//   console.log("positive");
// } console.log(t);





// STRONG NUMBER
//  const input = require("readline-sync");
//  let n = input.questionInt("enter the num:");
//   let c = input.questionInt("enter the num:");
//  let i = 1;
//  while(i<=n)
//  {
//     r = n%10;
//     q = Math.floor(n/10);
//     n = q;
//     let p =1;
//     while(r>0)
//     {
//         p = p*r;
//         r-1;
//     } s = s+p;
//     i++;
//  }
//    console.log(s);
//  if(s = c)
//  {
//     console.log("strong no.");
//  } else
//  {
//     console.log("not");
//  }
//  console.log(s);



const input = require("readline-sync");
let n = input.questionInt("enter the num:");
let c = input.questionInt("enter the num:");
for(let i = 1; i<=n; i++)
{
    r = n%10;
    q = Math.floor(n/10);
    n = q;
for(let p = 1; r>0; r--)
{
    p = p*r;
}  let s;
   let p;
  s = s+p;
  i++;
}  if(s=c)
{
    console.log("strong  num.");
} else
{
    console.log("not");
} console.log(s);

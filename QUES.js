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



//      ----------------------------------------------------------- 3 METHOD----------------------------------------------------------
// const input = require("readline-sync");
// let a = input.questionInt("enter the 1 number:");
// let b = input.questionInt("enter the 2 number:");
// a = a^b
// b = a^b
// a = a^b
// console.log(a,b);



// -------------------------------------------------------------------4 METHOD------------------------------------------------------------
// const input = require("readline-sync");
// let a = input.questionInt("enter the 1 number:");
// let b = input.questionInt("enter the 2 number:");
// a = a*b;
// b = Math.floor(a/b);
// a = Math.floor(a/b);
// console.log(a,b);


//-----------------------------------------------------------5 METHOD------------------------------------------------------------------------
// const input = require("readline-sync");
// let a = input.questionInt("enter the 1 number:");
// let b = input.questionInt("enter the 2 number:");
// [a, b] = [b, a];
// console.log("a:", a); 
// console.log("b:", b); 


//----------------------------------------------------------6 METHOD-------------------------------------------------------------------------
//  const input = require("readline-sync");
//  let a = input.questionInt("enter the 1 number:");
// let b = input.questionInt("enter the 2 number:");
//  let t = 5;
// let s = 10;
// ({a, b} = {a: b, b: a});
// console.log(a, b);
// a=[]






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





const input = require("readline-sync");
let n = input.questionInt("enter the num:");
let num;

{
    let originalNum = num;
    let sum = 0;
  
    while (num > 0) {
      c = num % 10;
      let factorial = 1;
  
      for (let i = 1; i <= digit; i++) {
        factorial *= i;
      }
  
      sum += factorial;
      num = Math.floor(num / 10);
    }
  
     sum === originalNum;
  }
  
  
  if (num) {
    console.log(`is a strong number.`);
   } else {
    console.log(`is not a strong number.`);
    }






//CONCREATE QUESTIONS

const input = require("readline-sync");
let a = input.prompt("Enter the number:");
let b = input.prompt("Enter the number:");
let c = input.prompt("Enter the number:");

 d=a+b+c;
console.log(d);      






// TRIANGLE 

const input = require("readline-sync");

let a = input.questionInt("Enter the number:");
let b = input.questionInt("Enter the number:");
let c = input.questionInt("Enter the number:");

if(a+b+c==180)
{
    console.log("valid");
    if(a==b==c)
    {
        console.log("eqult. trngle");
    } else if (a == 90)
    {
        console.log("right angle trngle");
    } else if(b == 90)
    {
        console.log("right angle triangle");
    } else if(c == 90)
    {
        console.log("right angle triangle");
    } else if(a>90)
    {
        console.log("sclane");
    } else if(b>90)
    {
        console.log("sclane");
    } else if(c>90)
    {
        console.log("sclane");
    } else if(a<90)
    {
        console.log("acute");
    }
} else{
    console.log("obtus");
}
{
    console.log("invalid");
}






// 12345678 - 87651234

const input = require("readline-sync");

let n = input.questionInt("Enter the number:");

//  let originalNumber = n;

// const digit1 = Math.floor(originalNumber / 10000000);
// const digit2 = Math.floor((originalNumber % 10000000) / 1000000);
// const digit3 = Math.floor((originalNumber % 1000000) / 100000);
// const digit4 = Math.floor((originalNumber % 100000) / 10000);
// const digit5 = Math.floor((originalNumber % 10000) / 1000);
// const digit6 = Math.floor((originalNumber % 1000) / 100);
// const digit7 = Math.floor((originalNumber % 100) / 10);
// const digit8 = originalNumber % 10;

//  const swappedNumber = digit8 * 10000000 + digit7 * 1000000 + digit6 * 100000 + digit5 * 10000 +
//                        digit1 * 1000 + digit2 * 100 + digit3 * 10 + digit4;

// console.log(`Original number: ${originalNumber}`);
// console.log(`Swapped number: ${swappedNumber}`);



 r = n%10000
 q = Math.floor(n/10000)
 s = (r*10000+q)
 console.log(s);








// DUPLICATE NUMBER

const input = require("readline-sync");
let n = input.questionInt("Enter the length of array:");
let arr = [];
for(let i=0; i<n; i++)
{
    arr[i] = input.questionInt("enter the element no.:")
}
for(i=0; i<n; i++)
{
    let c=1;
    for(let j=i+1; j<n; j++)
    {
        if(arr[i]==arr[j])
        {
            c++;
        }
        c=c;
    } 
    if(c>1)
    {
        console.log((arr[i]),"duplicate ");
    } else 
    {
        console.log("1");
    }
}





// MODULES

const input = require("readline-sync");
let n = input.questionInt("Enter the num:");
let b = input.questionInt("Enter the num:");


a = Math.floor(n/b);
console.log(a);





// PALANDROME

const input = require("readline-sync");

let str = input.question("Enter a string:"); 
let firstStr = str;
let lastStr = "";
let i = str.length -1;

while (i >= 0) {
    lastStr += str[i];
    i--;
}

if (firstStr === lastStr) {
    console.log("Yes, it's a palindrome.");
} else {
    console.log("No, it's not a palindrome.");
}





// SNAKE PATTERN

const input = require("readline-sync");

let rows = input.questionInt("Enter the number:");
let column = input.questionInt("Enter the number:");

let snakepattern = [];

for(let i = 0; i<rows; i++)
{
   snakepattern[i] = [];
   for(let j = 0; j<column; j++) 
   {                                                           
    if(i%2 == 0) {
        snakepattern[i][j] = i*column + j + 1;
    } else {
        snakepattern[i][column - j -1] = i*column + j +1;
    }
   }
}
for(let i = 0; i<rows; i++)
{
    
    console.log(snakepattern[i]);

}






const input= require("readline-sync");

let n = input.questionInt("Enter the value: ");

let p = "";
let k = 0;

for (let i = 1; i <= n; i++) 
{
    for (let j = 1; j <= n; j++) 
    {
        if (i %2=== 0) 
        {
            
            p += " "+k;
            k--;
        } else 
          {
    
            k++;
            p +=  " "+k;
            
            
          }
    }
       k += n;
       p+="\n";
}      
      console.log(p);





// index array


const input = require("readline-sync");
let n = input.questionInt("Enter the length:");

let arr = [];
let i = 0;

while(i<n)
{
    arr[i] = input.questionInt("enter the elements:");
    i++;
} console.log(arr);
 i = 0;
 let arr2 = [];
 while(i<n)
 {
    arr2[i] = arr[n-1]
    i++;
 
 }
console.log(arr2);






// ARMSTRONG NUMBER

const number = require("readline-sync");

let n = number.questionInt("enter number: ");
let count = 0 ;
let sum = 0;
let m = n;
let p = m;

while(m>0){
    r =m%10;
    count++;
    m= Math.floor(m/10);}

    while(n>0){
        k=n%10;
        sum = sum + k**count;
        n= Math.floor(n/10);
    }

    if(sum==p){
        console.log("sum is armstron",sum);
    }
    else {console.log("sum is not armstron",sum);}





// BUBBLE SORT QUESTION.

const input = require("readline-sync");

let n = input.questionInt("Enter the number of elements: ");

let arr = [];

for (let i = 0; i < n; i++)
 {
    arr[i] = input.questionInt("enter the element:");
 }

for (let i = 0; i < n - 1; i++) 
{
    for (let j = 0; j < n - i - 1; j++) 
    {
        if (arr[j] > arr[j + 1]) 
        {
            
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
        console.log("Bubble Sorted array:", arr);

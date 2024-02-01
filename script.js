// Do the below programs in anonymous function & IIFE
// A.Print odd numbers in an array
// Anonymous Function:
var even = [];
var odd = [];
var foo = function(arr){
for(var i=0;i<arr.length;i++){
if(arr[i]%2 == 0){
even.push(arr[i]);
}
else{
odd.push(arr[i]);
}
}
return odd;
}
console.log(foo([1,2,3,4,5]));

//IIFE Function:
var even = [];
var odd = [];
(function foo(arr){
for(var i=0;i<arr.length;i++){
if(arr[i]%2 == 0){
even.push(arr[i]);
}
else{
odd.push(arr[i]);
}
}
console.log(odd)
})
([1,2,3,4,5]);

// B.Convert all the strings to title caps in a string array:
// Anonymous Function:
var titleCase = function(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
   return str.join(' ');
  }
  console.log(titleCase("i am bala"));

  // IIFE Function:
  (function (str) {
    str = str.toLowerCase().split(' ');
     for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
    })("i am bala");


// C.Sum of all numbers in an array:
// Anonymous Function:
var foo = function(arr){
    var sum = 0;
    for(var i = 0 ; i< arr.length ; i++){
     sum = sum + arr[i];
   }
   return sum;
   }
   console.log(foo([1,2,3,4]));

// IIFE Function:

(function foo(arr){
    var sum = 0;
    for(var i = 0 ; i< arr.length ; i++){
     sum = sum + arr[i];
   }
   console.log(sum);
   })
   ([1,2,3,4]);

// D.Return all the prime numbers in an array:
// Anonymous Function:
var arr = [1,2,3,4,5,6,7,8,9,10]; 
var isPrime = function (num) {
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(arr.filter(isPrime));

// IIFE Function:
(function(arr){
  arr = arr.filter((num) => {
  for (var i = 2; i <= Math.sqrt(num); i++) {
 if (num % i === 0) 
 return false;
 }
 return true;
 });
 console.log(arr);
 })([1,2,3,4,5,6,7,8,9,10])

// E.Return all the palindromes in an array:
// Anonymous Function:

const arr = ['121', 'dad', 'abcde', 'racecar', '12345'];
var palindrome = function (arr) {
  return arr.filter((current, idx, arr) => {
    const splitArr = current.split('');
    const reversedString = splitArr.reduceRight((prev, curr) => ( prev + curr ), '');
    if (current === reversedString) 
    return current;
  })
}
console.log(palindrome(arr));

// IIFE Function:
(function palindrome (arr) {
  return arr.filter((current, idx, arr) => {
    const splitArr = current.split('');
    const reversedString = splitArr.reduceRight((prev, curr) => ( prev + curr ), '');
    if (current === reversedString) 
    return current;
  })
  console.log(palindrome(arr));
})(['121', 'dad', 'abcde', 'racecar', '12345']);

// F.Return median of two sorted arrays of the same size:
// Anonymous Function:
var Solution = function(arr, n){
  if (n % 2 == 0) {
  var z = n / 2;
  var e = arr[z];
  var q = arr[z - 1];
  var ans = (e + q) / 2;
  return ans;
}
   else
{
  var z = Math.floor(n / 2);
  return arr[z];
}
}
var arr1 = [ 1, 9, 2, 7, 15 ];
var  arr2 = [ 12, 5, 3, 4, 10 ];

var i =  arr1.length;
var j =  arr2.length;

var l =  i+j;
const arr3 = arr1.concat(arr2);

arr3.sort(function(a, b) {
return a - b;
});
console.log("Median = " + Solution(arr3, l));

// IIFE Function:
(function solution (arr, n){
  if (n % 2 == 0) {
  var z = n / 2;
  var e = arr[z];
  var q = arr[z - 1];
  var ans = (e + q) / 2;
  return ans;
}
   else
{
  var z = Math.floor(n / 2);
  return arr[z];
}
} 
var arr1 = [ 1, 9, 2, 7, 15 ];
var  arr2 = [ 12, 5, 3, 4, 10 ];
var i =  arr1.length;
var j =  arr2.length;

var l =  i+j;
const arr3 = arr1.concat(arr2);

arr3.sort(function(a, b) {
return a - b;
})
console.log("Median = " + Solution(arr3, l));
)(arr1,arr2)

// G.Remove duplicates from an array:
// Anonymous Function:
var arr = [1,1,2,3,4,5,3,6,8,1,4];
var res  = function(arr){
  let dup = [...new Set(arr)];
 return dup;
}
console.log(res(arr));

// IIFE Function:
(function(arr){
  let dup = [...new Set(arr)];
 console.log(dup);
})([1,1,2,3,4,5,3,6,8,1,4])

// H.Rotate an array by k times:
// Anonymous Function:
var arr =[1,2,3,4,5];
var k = 3;
var rotate =function (arr, k) {
    const n = arr.length;
    k %= n;
    
    const rotated = [];
    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = arr[i];
    }
    
    for (let i = 0; i < n; i++) {
        arr[i] = rotated[i];
    }
    return rotated;
}
console.log(rotate(arr,k));

// IIFE Function:


(function foo(arr, k) {
  const n = arr.length;
  k %= n;
  
  const rotated = [];
  for (let i = 0; i < n; i++) {
      rotated[(i + k) % n] = arr[i];
  }
  
  for (let i = 0; i < n; i++) {
      arr[i] = rotated[i];
  }
  return rotated;
  console.log(foo(arr,k));
})([1,2,3,4,5],3)


// ARROW FUNCTION:
// Do the below programs in arrow functions.
// A.Print odd numbers in an array:

var even = [];
var odd = [];
var foo = (arr) => {
for(var i=0;i<arr.length;i++){
if(arr[i]%2 == 0){
even.push(arr[i]);
}
else{
odd.push(arr[i]);
}
}
return odd;
}
console.log(foo([1,2,3,4,5]));

//B.Convert all the strings to title caps in a string array:

var titleCase = (str) => {
 str = str.toLowerCase().split(' ');
 for (var i = 0; i < str.length; i++) {
 str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
 } 
  return str.join(' ');
 }
 console.log(titleCase("i am bala"));

// C.Sum of all numbers in an array

 var foo = (arr) => {
  var sum = 0;
  for(var i = 0 ; i< arr.length ; i++){
   sum = sum + arr[i];
 }
 return sum;
 }
  console.log(foo([1,2,3,4]));

//D.Return all the prime numbers in an array

var arr = [1,2,3,4,5,6,7,8,9,10]; 
var isPrime = (num) => {
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(arr.filter(isPrime));

// E.Return all the palindromes in an array:

const arr = ['121', 'dad', 'abcde', 'racecar', '12345'];
var palindrome = (arr) => {
  return arr.filter((current, idx, arr) => {
    const splitArr = current.split('');
    const reversedString = splitArr.reduceRight((prev, curr) => ( prev + curr ), '');
    if (current === reversedString) 
    return current;
  })
}
console.log(palindrome(arr));




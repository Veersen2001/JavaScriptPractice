/*let arr=new Array(1,2,3,4,5);
arr.push(6,7,9);
// this methos is used to push element from last index
console.log(arr);

// remove last index
// arr.pop();
console.log(arr);

let ret=arr.pop();
console.log("last Element deleted "+ret);

// remove starting element
// arr.shift();
console.log(arr);

// if we want to return delete element
let r=arr.shift();
console.log("delete Element " +r);

// adding 9or element in starting index
arr.unshift(9)
console.log(arr);

*/


/* // concat two array
let a1=[1,2,3,4];
let a2=[5,6,7,8];
let a3=a1.concat(a2);
console.log(a1,a2,a3);

// add some string in array
let s=a3.join(" a");
console.log(s);

// reverse array element
a3.reverse();
console.log(a3);

// find index of any element or The value to locate in the array.
console.log("index of "+a3.indexOf(5));
//  if element can not present or find in array then it will return -1
console.log("index of "+a3.indexOf(15));
*/

// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.
// particular select element in array
let arr = [1,2,3,4,5,6,7];
//console.log(arr.slice(2,6));
// synax of slice->slice(start index, last index) but print last index-1

// if we add in array element
arr.splice(2,3,12);
console.log(arr);
// syntax of splice->splice( index insert element, how many element deleted ,insert element)

var sum=0;
var array=[10,15,20,30];
array.forEach(function myFunction(element)
{
    sum=sum+element;

});
console.log(sum);

var values=['one', 'two', 'three'];
var ans=values.shift(); //return delete element
console.log(ans);

let a=[1,2,3,4,5];
let a1=[3];
console.log(a.indexOf(5));
console.log(a.map(a1));
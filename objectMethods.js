let emp={id:105, name:'atul', age:45, salary:19000};

let keys=Object.keys(emp);
console.log(keys);
// return keys  in form of array

let values=Object.values(emp)
console.log(values);
// return values in form of array

let entries = Object.entries(emp)
console.log(entries);
// valuess and keys in form of array

// add new key
emp.address='jbp';

// if we do not want  change values or insert then we use freeze()   
/* Object.freeze(emp);
 emp.id=201
console.log(emp);*/

// in case of seal we  can change values but can not insert or delete
/*Object.seal(emp);
emp.id='300';
emp.phone='1263876'; // we can not add 
delete emp.id;  //we can not delete
console.log(emp);
*/

// assign another object  Copy the values of all 
// assign is the method usedto merge two or more objects together
let o=Object.assign({},emp);
console.log(o);

let v=Object.assign({x:34},emp);
console.log(v);
console.log(Object.assign(o,v)); //merge


/* The hasOwnProperty() method returns true if the specified property is a direct property of the object — even 
if the value is null or undefined. The method returns false if the property is inherited, or has not been declared at all. Unlike the in operator, this method does not check for the specified property in the object's prototype chain.*/
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
fruits.hasOwnProperty(3); // true ('Orange')
console.log(fruits.hasOwnProperty(4)); // false - not defined












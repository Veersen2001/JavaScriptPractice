// // forEach

// let arr = [2,4,5];

// arr.forEach(function(element,index,arr)  //element-> 2,4,5 index->0,1,2
// {
//     console.log("element:",element,'index:',index,'arr',arr);
// })

// // forEach with Arrow Function

// arr.forEach((element,index,arr)=>{
//     console.log(" Arrow element:",element,'index:',index,'arr',arr);
// })

// // easy way to all value in Uppercase
// const heros = ['stoy','Doga','sloga','dhruv','Salman'];

// // heros.forEach((el) =>{ console.log(el.toUpperCase())}); //all character is show in uppercase

// // heros.forEach(function(myelement){ console.log( 'lowerCase:',myelement.toLowerCase())}); //all character in lowercase

// // map same work as a forEach

// // heros.map( (h1) => {console.log(h1.toUpperCase())})


// // filter

// const herosWithGa = heros.filter((h) => {
//     // console.log(h.endsWith('ga')); //return true and false

//     return h.endsWith('ga'); //return keyword is important otherwise return empty array

// })

// console.log('Ends with ga',herosWithGa);


// // Copy Items into another array

// let items = ['item1', 'itme2', 'item3'];

// let copy = [];

// let copyArray= items.forEach((item) => {
//     copy.push(item);
// })
// console.log(copy);

// // using for loop

// for(let i=0;i<items.length;i++)
// {
//     copy[i]=items[i];
// }
// console.log("using For loop",copy);


// // reduce function

// let array1 = [2,3,4,5,6,7];

// let initialValue = 0;

// const sumArray = array1.reduce((prev, curr)=>
//     prev + curr, initialValue

   
// )
// console.log(sumArray);


// // how to work reduce function

// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// array.reduce(reducer);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]











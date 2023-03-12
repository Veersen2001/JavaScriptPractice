// it is used to find pattern

// 1. method 
let pattern = 'pw';

// create regular Expression object
let regExOne = new RegExp(pattern);

let flag = 'gi' //global cansetive

// flga indicates to check case sensitve or non-case senstive


// example

//2. method 

let regExpThree = /pw/gi; //check pw and case senstive
const strTOCheck = "PW is growing a rapid speed and recently they are working on PW skill to create skill based pwcontent";
const result = regExpThree.test(strTOCheck); //test is used to check string is present or not
 console.log(result); //output->true



const str1 = "PW is growing a rapid speed and recently they are working on PW skill to create skill based pwcontent";
 
const onotherResult = strTOCheck.match(regExpThree);
console.log(onotherResult); //output->[PW,PW,pw] and check with case senstive(gi)


const oneMoreResult = strTOCheck.replace(regExpThree,'p-w');
console.log(oneMoreResult);//output-> p-w is growing a rapid speed and recently they are working on p-w skill to create skill based p-wcontent.

// replace is widly used

const webUrl = "https//pwskill.com/veer@20";

const useableUrl = webUrl.replace(/20/,'#');
console.log(useableUrl);

const useUrl = webUrl.replace(/@\%d20/,'-')
console.log(useUrl);







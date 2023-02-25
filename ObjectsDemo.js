// objects are containing multiple values and variable contain only one value
// method of creating object
// 1.
let obj = {id:101, name:'Alex', Salary:1000};
console.log(obj);

// 2. 
let emp = new Object();
// create epmty object
emp.name='atul';
emp.salary=10000;
console.log(emp);

// 3. used this keyword
function Obj(i,n,s){
    this.id=i;
    this.name=n;
    this.salary=s;



}
const e = new Obj(123,'atul',15000);
console.log(e);

// fetch value with . and [] operator
console.log(Obj.id);
console.log(emp.name);
console.log(emp['salary']);

// insert value

emp.salary=15000;
console.log(emp);

emp.name="veer";
console.log(emp);

// delete  

delete emp.id
console.log(emp);
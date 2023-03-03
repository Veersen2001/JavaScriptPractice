// Question - 1

/* 1. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of 
days until the weekend. */

// code

const day = 'Thursday';

let dayUntilWeekend;

switch(day) 
{
    case 'Monday':
        console.log(`There are 6 days until the weekend.`);
        break;
    case 'Tuesday':
        console.log(`There are 5 days until the weekend.`);
        break;
    case 'Wednesday':
        console.log(`There are 4 days until the weekend.`);
        break;
    case 'Thursday':
        console.log(`There are 3 days until the weekend.`);
        break;
    case 'Friday':
        console.log(`There are 2 days until the weekend.`);
        break;
    case 'Saturday':
        console.log(`There are 1 days until the weekend.`);
        break;  
    case 'Sunday':
        console.log(`There are 0 days until the weekend.`);
        break;  
    default:
        dayUntilWeekend = 'Invalid day';
            

}

// Question - 2

/* 2. Write a program that takes in a number between 1 and 12 and outputs the corresponding month of the 
year. */

// code

const monthNumber = 3;

switch(monthNumber)
{
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('Fabruary');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('August');
        break;
    case 9:
        console.log('September');
        break;
    case 10:
        console.log('October');
        break;
    case 11:
        console.log('November');
        break;
    case 12:
        console.log('December');
        break;
    default:
        console.log("Invalid month number");

}
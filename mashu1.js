// array
//index           0.   1.   2 
const myArray = ['a', 'b', 'c'] // elements
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

//length
const myArray = ['a', 'b', 'c']
console.log(myArray.length)

const myArray = ['a', 'b', 'c']
myArray.push('d') // add element to the end of the array
console.log(myArray)

myArray.pop() // remove the last element of the array
console.log(myArray)

//objects 
const myDetaills = {
firstName: 'johny',
lastName: 'shemesh',
age: 35,
}
console.log(myDetaills.firstName)
console.log(myDetaills.lastName)
console.log(myDetaills.age)

myDetails.occupation = 'qa engineer' // add new property to the object
console.log(myDetails)

mydetails.age = 36 // update the value of the property
console.log(myDetails)

//Functions
function sayHello() {
    console.log('hello')
}
sayHello()

//Function Declaration

function sayHello(message) {
    console.log(message);
}
sayHello('my name is johny');

//Functiom Expression
const printMessage = function(message) {
    console.log(message);
}
printMessage('my name is johny');

//Arrow Function
const sayHello = (message) => {console.log(message);}

sayHello('my name is johny');

function addtwoNumbers(a, b) {
    return a + b;
}
const result = addtwoNumbers(1, 2);
console.log(result);

const addtwoNumbers = (a, b) => a + b;
const result = addtwoNumbers(1, 2);
console.log(result);

//conditions 
const number = 9;
const result = number > 10? 'above 10' : 'below 10';
console.log(result);


const number = 9;
if (number > 10) {
    console.log('above 10');
} else {
    console.log('below 10');
}

//switch statement
const age = 35;
switch (age) {
    case 35: 
        console.log('its Johny');
        break;
    case age > 35:
        console.log('its not Johny');
        break;
}

const name = 'Yossi';
switch (name) {
    case 'johny':
        console.log('its johny');
        break;
    case 'bobby':
        console.log('its bobby');
        break;
        default:
        console.log('i dont know who it is');
        


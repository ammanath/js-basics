
let name1 = 'Robert';
let age = 45;
let isApproved = true;
let space;
let last = null;

const interestRate = 6.7;

let person = {
    name:'Robert',
    age:45
};

//Dot notation
person.name='Michael';

//Bracket notation
person['name'] = 'Mary';


//Primitive = String, Number, Boolean, undefined, null
//Reference Types = Object, Array, Function
console.log(`The values are : ${name1} / ${age} / 
 ${isApproved} / ${space} / ${last}`);

 console.log(person);

 //Arrays
 let selectedColors = ['red', 'blue'];
 selectedColors[2] = 1;
 
 console.log(selectedColors.length);

 //functions
 function greet(name, lastName){
     console.log('Hello ' + name + ' ' +lastName);
 }

function square(number){
    return number * number;
}

let number = square(2);
console.log('Square is: ' + number);

greet('Robertooo' , 'Owens');
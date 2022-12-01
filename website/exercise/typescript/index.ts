console.log('hello TypeScript');



//variables
//boolean - true or false
let muted: boolean = true;
muted = false;
//number - numbers
let numerator: number = 42;
let denominator: number = 6;
let answer = numerator / denominator;
//string - ""
let lastName: string = 'Polite';
let greet: string = `My lastname is ${lastName}`;
//string - []
let people: string[] = [];
people = ["Jhonny", "Nicole", "Lisa"];
// people.push(4000); cannot  add  numbers in this string
//Array - can be string or numbers
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Rick');
peopleAndNumbers.push(093);
//enum - special king call emimeration
enum Color {
    //with this syntax the the output in console will be number ex:
    // Red, 1
    // Green, 2
    // Blue, 3
    //is necesary  ad the value of a string to prevent this situation
    Red = "Red",
    Green = "Green",
    blue = "blue",
};
let favoriteColor: Color = Color.blue;
console.log(`Mi favorite color is: ${favoriteColor}`);
//any - any kind
let joker: any = "Joker";
joker = { type: "wildCard"};
//object -objects
let someObject: object = { type: "card"};

//functions
//wee can set the parameters and the value that returns the function
function add(a: number, b: number): number {
    return a + b;
}
let sum = add(25,35);

//this example explains this function returns a function
function createAdder(a: number): (number) => number {
    return function(b: number) {
        return a + b;
    }

}
 const addFour = createAdder(4);
 const fourPlus6 = addFour(4);
 console.log('function return number:',fourPlus6);

 //example with strings
 function fullName(firstName: string, lastName?: string): string {
     return `${firstName} ${lastName}`;

    }
//  function fullName(firstName: string, lastName?: string): string 
    //add optional chaining  in the parameters to prevent errors
 //the  function mus have  2 arguments or will throw error 
// const person = fullName('Rick'); with optional chainig  the second argument will be undefined

const person = fullName('Morty');
console.log('function optional chaining one argument:',person);
const person2 = fullName('Rick', 'Sanchez');
console.log('function return string with 2 arguments:',person2);

//another option will be asign a value by default
function fullValue(firstName: string = "Jhony", lastName: string = "Cage"): string {
    return `${firstName} ${lastName}`;
}
const personFullName = fullValue();
console.log('Asing parameters by defaul:', personFullName);

//interface alllow to declare the "shape" of an object
//this my be useful cause helps to auto complete
enum Color2 {
    Purple = "Purple",
    Black = "Black",
};

interface Rectangle {
    height: number,
    width: number,
    color?: Color2,
};

let rect: Rectangle = {
    height: 40,
    width: 25,
    // color: Color2.Purple
}
function area(r: Rectangle) {
    return r.height * r.width;
}

const areaRectangle = area(rect);
rect.toString = function () {
    return this.color ? `Interface example: A ${this.color} Rectangle` : 'Interface example: A Rectangle'
}
console.log(rect.toString())
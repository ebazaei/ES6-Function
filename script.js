//DOM - Function
let es6Function = document.getElementById('es6Function');
let oldFunction = document.getElementById('oldFunction');


//Function
//ES6 - Functions //No need to use function and return words
//Using const is safer than using var, because a function expression is always a constant value.

const es6Func = (num1,num2) => num1 - num2;

es6Function.innerHTML = es6Func(12,10);

//You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

const x = (x, y) => { return x * y };
es6Function.innerHTML =  x(5, 6);

//ES6 - Other examples
 
const x2 = () => console.log('Es6 Func...');
x2();

//Old - Functions
function oldFunc(num1,num2){
    let result = num1 + num2;
    return result;
}
oldFunction.innerHTML = oldFunc(3,15);

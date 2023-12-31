//DOM - Function
// let es6Function = document.getElementById('es6Function');
// let oldFunction = document.getElementById('oldFunction');
let moreFunction = document.getElementById('moreFunction');
let msg = "";
let funcDef = document.getElementById('funcDef');



//Function
//More Practice on functions

//Defualt Parameters
const test4 = (num1=2 , num2=3) =>{
    return num1+num2;
}
// funcDef.innerHTML = test4(5,4);      // 9
// funcDef.innerHTML = test4(4);        //4 + Def(3) = 7
funcDef.innerHTML = test4();            //Def(2) + Def(3) = 5


//test3 : ES6 - age & level validator by es6 function & if

const test3 = (name, age, level) => {
    if(age < 18 || level === 'beginner'){
            moreFunction.innerHTML = `Dear ${name} You do not have permission to access this section because: `;
            if( level === 'beginner'){
                moreFunction.innerHTML += `"Your level is beginner" `;
            }if(age < 18 && level === 'beginner'){
                moreFunction.innerHTML += `and`;
            }if(age < 18 ){
                moreFunction.innerHTML += ` "Your age is less than 18."`;
            }
    }else{
        moreFunction.innerHTML = `Welcome ${name}`;
    }
};

//test3 : Classic - age & level validator by classic function & if


// test3 = function(name, age, level){
//     if(age < 18 || level === 'beginner'){
//             moreFunction.innerHTML = `Dear ${name} You do not have permission to access this section because: `;
//             if( level === 'beginner'){
//                 moreFunction.innerHTML += `"Your level is beginner" `;
//             }if(age < 18 && level === 'beginner'){
//                 moreFunction.innerHTML += `and`;
//             }if(age < 18 ){
//                 moreFunction.innerHTML += ` "Your age is less than 18."`;
//             }
//     }else{
//         moreFunction.innerHTML = `Welcome ${name}`;
//     }
// }

// test3("Ali", 19, "perfect");
// test3("Sara", 15, "perfect");
// test3("Amir", 21, "beginner");
test3("Mina", 13, "beginner");





// //test2
// function test2(num1,num2){
// return num1*num2;
// }
// let res2 = test2(3,6);
// moreFunction.innerHTML = res2;

// //test1
// function test1(){
//     console.log('Hello');
// }
// test1()

// //ES6 - Functions //No need to use function and return words
// //Using const is safer than using var, because a function expression is always a constant value.

// const es6Func = (num1,num2) => num1 - num2;

// es6Function.innerHTML = es6Func(12,10);

// //You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

// const x = (x, y) => { return x * y };
// es6Function.innerHTML =  x(5, 6);

// //ES6 - Other examples
 
// const x2 = () => console.log('Es6 Func...');
// x2();

// //Old - Functions
// function oldFunc(num1,num2){
//     let result = num1 + num2;
//     return result;
// }
// oldFunction.innerHTML = oldFunc(3,15);

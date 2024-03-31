const one = document.querySelector("#digit1");
const two = document.querySelector("#digit2");
const three = document.querySelector("#digit3");
const four = document.querySelector("#digit4");
const five = document.querySelector("#digit5");
const six = document.querySelector("#digit6");
const seven = document.querySelector("#digit7");
const eight = document.querySelector("#digit8");
const nine = document.querySelector("#digit9");
const zero = document.querySelector("#digit0");
const inputScreen = document.querySelector(".inputScreen");
const plus = document.querySelector("plus");
const minus = document.querySelector("minus");
const multiply = document.querySelector("multiply");
const divide = document.querySelector("divide");

const operatorDisplay = document.querySelector('[data-operator]');
const operators = document.querySelectorAll(".operator")
console.log(operators);
const digits = document.querySelectorAll(".digit");
let newS = parseInt(one.textContent) ;
let newS2 = parseInt(two.textContent) ;
let nums =[];
digits.forEach((digit) =>{
    // nums.push(parseInt(digit.textContent))

    digit.addEventListener('click' , ()=>{
        renderUI(parseInt(digit.textContent))
    });
});
function renderUI(Value){
    inputScreen.value += parseInt(Value);
}
let ans = 0;
function updateAns(operator){
    console.log(operator);
    if(operator.textContent === '+')
        {   
            operatorDisplay.textContent = '+'
            console.log(ans);
            ans += parseInt(inputScreen.value);
            console.log(ans);
        }
    else if(operator.textContent === '-')
        {   
            operatorDisplay.textContent = '-';
            console.log(ans);
            ans -= parseInt(inputScreen.value);
            console.log(ans);
        }
    else if(operator.textContent === 'x')
        {   
            operatorDisplay.textContent = 'x'
            console.log(ans);
            ans *= parseInt(inputScreen.value);
            console.log(ans);
            // let newValue = parseInt(inputScreen.value) + ans;
            // inputScreen.value = "";
            // inputScreen.value = newValue;
            // console.log(typeof(newValue));
        }
    else if(operator.textContent === '/')
        {   
            operatorDisplay.textContent = '/'
            console.log(ans);
            ans /= parseInt(inputScreen.value);
            console.log(ans);
            // let newValue = parseInt(inputScreen.value) + ans;
            // inputScreen.value = "";
            // inputScreen.value = newValue;
            // console.log(typeof(newValue));
        }
        inputScreen.value = "";
}
operators.forEach((operator) =>{
    console.log(operator);
    // nums.push(parseInt(digit.textContent))
    operator.addEventListener('click' , ()=>{
        updateAns(operator);
    });
});

function sum(a , b){
    return (a+b);
}
console.log(sum(newS , newS2));
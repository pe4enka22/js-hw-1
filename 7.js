//За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

let actions= ["+", "-", "*", "/"];
let a = 2;
let b = -10;

switch("*"){
    case "+":
        console.log(`${a+b}`);
        break;
    case "-":
        console.log(`${a-b}`);
        break;
    case "*":
        console.log(`${a*b}`);
        break;
    case "/":
        console.log(`${a/b}`);
        break;
    default:
        console.log('Дії не існує');
        break;

}
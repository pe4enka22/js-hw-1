//Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

let endPrice = 1900;
let startPrice = 1000;
let thingPrice = 1250;

if(endPrice<thingPrice || startPrice>thingPrice){
    console.log("Значення ціни товару НЕ знаходиться між 1000 та 1900 включно");
} else {
    console.log("Значення ціни товару знаходиться між 1000 та 1900 включно");
}

if(!(endPrice>=thingPrice) || !(startPrice<=thingPrice)){
    console.log("Значення ціни товару НЕ знаходиться між 1000 та 1900 включно");}
else {
    console.log("Значення ціни товару знаходиться між 1000 та 1900 включно");
}
//Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let word = "Super hero";
let newExp = /[aeiouy]/gi;
result = word.replace(newExp, '');

console.log(result);


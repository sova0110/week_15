//Задание 1
// Выведите числа от 1 до 10 в консоль
let numTask1 = 1;
while(numTask1<11){
    console.log(numTask1);
    numTask1++;
}
console.log("stop task 1");
//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
let numTask2 = 2;
while(numTask2<=20){
    console.log(numTask2);
    numTask2+=2;
}
console.log("stop task 2");
//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
let numTask3 = 10;
while(numTask3>0){
    console.log(numTask3);
    numTask3-=1;
}
console.log("stop task 3");
//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
let numTask4 = 1;
while(numTask4<11){
    console.log(numTask4*5);
    numTask4++;
}
console.log("stop task 4");
//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let sum =0;
for (let i = 0; i < 101; i++){
    sum+=i;
}
console.log("Сумма цифр от 1 до 100 равна "+sum);
//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);
  }

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let sum7=0;
for (let i = 0; i < numbers.length; i += 1) {
    sum7+=numbers[i];
  }
  console.log("Сумма "+sum7);
//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
a = ['Кот', 'Лемур', 'Енот', 'Хомячок'];
for (let i = 0; i < a.length; i++) {
    a[i] += '- прекрасное животное';
    console.log(a[i]);
}
//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
for (let i = 0; i < str.length; i++){
    console.log(str[i]);
}
//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (let n of array){
    console.log(n);
}
//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', ' How are you?'];
let wordAlone = sentences.toString().split(' ');
console.log(wordAlone);
for (let i of wordAlone){
    console.log(i);
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let sum12=0;
for (let num of array){
    sum12+=num;
}
console.log('Сумма чисел массива равна ' + sum12);
//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
for (let i of list){
    console.log(i);
    console.log(i.length);
}
console.log("stop task 13");
//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words = ['Hello', 'world', '!'];
let wordsUp = words.map(w =>w.toLocaleUpperCase());
console.log(wordsUp);
//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
for(let i=0; i<=greeting.length-1; i++){
    if(vowels.includes(greeting[i].toLocaleLowerCase())){
        vowelCount +=1;
    }
}
console.log('Количество гласных букв '+vowelCount);
//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
let newString = words.join(' ');
console.log(newString);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let num = 0;
while(num<10){
    num+=1;
    console.log(num);
}
//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let num2=11;
while(num2>1){
    num2-=1;
    console.log(num2);
}
console.log("stop task 18");
//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
/*while( n19<allNumbers.length){
    if (allNumbers[n19] >0){
        console.log('массив положителен')
    } else break
}**/
for (let elem=0;elem<=allNumbers.length; elem++){
    if(allNumbers[elem]<0){
        let notAllPositive=true;
        break;
    }
}
if(notAllPositive=true){
    console.log('есть отрицательные числа')
} else{
    console.log('массив положителен')
}
//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
let i=0;
do{
    if (random[i]>0){
    console.log(random[i]);
    i++;} else break;
} while(i<random.length);
console.log("stop task 20");

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let num21 = 0;
for (let i=1; i<=100; i++){
    if (i%3===0){
        console.log('')
    } else{

        console.log(i)
    }
}
console.log("stop task 21");
//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
let number;
let sum22=0;
do {
  number = parseInt(prompt("введите число", ""));
  sum22+=number;
} while (sum22<= 100 && number != null);
console.log("22 задание числа в браузере");
//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет

let h4Elements = document.getElementsByTagName("h4");

for(let i = 0; i < h4Elements.length; i++) {
   h4Elements[i].style.color = "blue";}


   console.log("stop task 23, фоновый цвет h4");
//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';
function makeNewWord() {
    let randomString = '';
    const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const alphabetLength = alphabet.length;
    let counter = 0;
    while (counter < 6) {
        randomString += alphabet.charAt(Math.floor(Math.random() * alphabetLength));
      counter += 1;
    }
    return randomString;
  }

console.log(makeNewWord());

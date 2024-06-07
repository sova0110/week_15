//создаем массив от -10 до 10
function createArrayNumbers(num) {
    let newArr = [];
    for (let i = -10; i <= num; i++) {
        newArr.push(i);
    }
    return newArr;
};
let num = 10;

let numbers = createArrayNumbers(num);
console.log(numbers);

// удаляем отрицательные значения

for (let i = numbers.length-1; i >= 0; i--){
  if (numbers[i] < 0){
    numbers.splice(i, 1);
  }
  
}
console.log(numbers)
//возводим в квадрат числа из numbers
let numbers2=[];
for (let el = 0; el < numbers.length; el += 1) {
    numbers2.push(el**2);
    console.log(numbers[el]**2);//выведет значения массива возведенные в квадрат
  }
console.log(numbers2);//выведет массив возведенный в квадрат
//сортировка по убыванию

for (let i=1; i<numbers.length; i++){
  for(j=0; j<i; j++)
    if(numbers[i]>numbers[j]){
      let n=numbers[i];
      numbers[i]=numbers[j];
      numbers[j]=n;
    }
}
console.log(numbers)
for (let i=1; i<numbers2.length; i++){
  for(j=0; j<i; j++)
    if(numbers2[i]>numbers2[j]){
      let n=numbers2[i];
      numbers2[i]=numbers2[j];
      numbers2[j]=n;
    }
};
console.log(numbers2)
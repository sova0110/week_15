let cities = ['Санкт-Петербург', 'Мадрид', 'Шанхай', 'Токио', 'Стамбул'];
let tempratures = [];

for (let i = 0; i < cities.length; i++) {
    let temprature = prompt(`Введите температуру в городе ${cities[i]}`);
    tempratures.push(Number(temprature));
}


//создаем двумерный массив и выводим его в консоль

let citiesTemperuters = [];
for(let i=0; i<cities.length; i++){
    citiesTemperuters.push([cities[i], tempratures[i]]);
};
console.log(citiesTemperuters);
const html = citiesTemperuters.map((item) => `<li> Температура в городе ${item} градусов </li>`).join('');
document.querySelector('ul').innerHTML = html;

//ищем максимальную и минимальную температуры

let maxTempr = Math.max.apply(null, tempratures);
let minTempr = Math.min.apply(null, tempratures);

let maxTemrHtml = document.getElementById('tempMax');
maxTemrHtml.innerHTML = `Максимальная температура ${maxTempr}`;
let minTemrHtml = document.getElementById('tempMin');
minTemrHtml.innerHTML = `Минимальная температура ${minTempr}`;




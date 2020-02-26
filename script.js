// Задача 4. Конкатенация строк
var first = 255;
var second = 255;
var third = 255;
var fourth = Math.random();

console.log('background-color: rgba(' + first + ', ' + second + ', ' + third + ', ' + fourth + ');');



// Задача 1
var age = '1';
var MIN_AGE = 18;

if (age === '') {
   let age = Number(age);
} else if (age >= MIN_AGE) {
   console.log('Доступ разрешен');
} else if (age < MIN_AGE) {
   console.log('Доступ запрещен');
} else if (age != NaN) {
   console.log('Вы ввели некоректные данные');
} else {
   console.log('Данный формат данных не поддерживается');
};



// Задача 2
var num1 = 11;
var num2 = 9;
var max = num1 >= num2
? console.log(num1)
: console.log(num2);



// Задача 3 (switch case)
var yourAge = 12;

switch (true) {
   case yourAge >= 0 && yourAge < 2:
      console.log('Сутки только начались');
      break;

   case yourAge >= 2 && yourAge < 5:
      console.log('Еще рано, можно спать');
      break;

   case yourAge >= 5 && yourAge < 7:
      console.log('Мам, можно еще чуть-чуть по спать');
      break;

   case yourAge >= 7 && yourAge < 10:
      console.log('Собираемся в школу');
      break;

   case yourAge >= 10 && yourAge < 14:
      console.log('Уроки в школе');
      break;

   case yourAge >= 14 && yourAge < 17:
      console.log('Продленка');
      break;

   case yourAge >= 17 && yourAge < 19:
      console.log('Дорога домой');
      break;

   case yourAge >= 19 && yourAge < 23:
      console.log('Урррааа :)');
      break;

   case yourAge < 0 || yourAge > 23:
      console.log('Введите возраст от 0 до 23 лет');
      break;

   default:
      console.log('Введите верные данные');
};



// Задача 3 (if else)
var yourAge2 = 21;

if (yourAge2 >= 0 && yourAge2 < 2) {
   console.log('Сутки только начались');
} else if (yourAge2 >= 2 && yourAge2 < 5) {
   console.log('Еще рано, можно спать');
} else if (yourAge2 >= 5 && yourAge2 < 7) {
   console.log('Мам, можно еще чуть-чуть по спать');
} else if (yourAge2 >= 7 && yourAge2 < 10) {
   console.log('Собираемся в школу');
} else if (yourAge2 >= 10 && yourAge2 < 14) {
   console.log('Уроки в школе');
} else if (yourAge2 >= 14 && yourAge2 < 17) {
   console.log('Продленка');
} else if (yourAge2 >= 17 && yourAge2 < 19) {
   console.log('Дорога домой');
} else if (yourAge2 >= 19 && yourAge2 < 23) {
   console.log('Урррааа :)');
} else if (yourAge2 < 0 || yourAge2 > 23) {
   console.log('Введите возраст от 0 до 23 лет');
} else {
   console.log('Введите верные данные');
};
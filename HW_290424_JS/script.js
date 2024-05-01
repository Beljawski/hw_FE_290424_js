//------------------------TASK-------------------//
// 1. Задан массив elems, передающий элемент HTML разметки.
// Реализуйте очистку данных по примеру ниже:
// let elems = [
// '<div><p class="text">Home</p></div>',
// '<div><p class="text">About</p></div>',
// '<div><p class="text">FAQ</p></div>',
// '<div><p class="text">Contacts</p></div>'
// ]
// Результат: ['Home','About','FAQ','Contacts']
// //

//-----------------------SOLUTION-----------//
// let elems = [
//   '<div><p class="text">Home</p></div>',
//   '<div><p class="text">About</p></div>',
//   '<div><p class="text">FAQ</p></div>',
//   '<div><p class="text">Contacts</p></div>',
// ];

// let elemsString = elems.join();
// let newString = elemsString.split('">');
// let newArray = [];
// for (let i = 1; i < newString.length; i++) {
//   let result = newString[i].split("</");
//   newArray.push(result[0]);
// }
// console.log(newArray);

//------------------------TASK-------------------//
// 2 Напишите функцию initCap(array), которая получает массив с элементами строкового значения и возвращает элементы с заглавной первой буквой по примеру:
// // let words = ['стакан','молоко','табуретка','вода']

// // Результат: ['Cтакан','Молоко','Табуретка','Вода']

//-----------------------SOLUTION-----------//
// let words = ["стакан", "молоко", "табуретка", "вода"];

// function initCap(words) {
//   let remainWords = [];
//   for (let k = 0; k < words.length; k++) {
//     let remainWord = words[k].slice(1);
//     remainWords.push(remainWord);
//   }

//   let newFirstLetters = [];
//   for (let i = 0; i < words.length; i++) {
//     let newFirstLetter = words[i][0].toUpperCase();
//     newFirstLetters.push(newFirstLetter);
//   }

//   let combinedArray = [];
//   for (let j = 0; j < newFirstLetters.length; j++) {
//     let combinedElem = newFirstLetters[j].concat(remainWords[j]);
//     combinedArray.push(combinedElem);
//   }

//   return combinedArray;
// }

// console.log(initCap(words));

//------------------------TASK-------------------//
// 3. Задан массив names.
// Сформируйте новый массив full_names, элементы которого будут содежрать вложенный массив с именем и фамилией. Если фамилии не окажется - второй элемент должен хранить undefined

// Пример: let names = [
// 'Steven King',
// 'Jonh Snow',
// 'Oliver',
// 'Neena Stich',
//  'Grant Laster',
// 'Persius Master',
// 'Lest'
// ]

// Результат: [
// ['Steven','King'],
// ['Jonh','Snow'],
// ['Oliver', undefined],
// ['Neena','Stich'],
// ['Grant','Laster'],
// ['Persius','Master'],
// ['Lest', undefined] ]
// ]

//-----------------------SOLUTION-----------//
//  let names = [
//     'Steven King',
//     'Jonh Snow',
//     'Oliver',
//     'Neena Stich',
//      'Grant Laster',
//     'Persius Master',
//     'Lest'
//     ] ;
//     let full_names = [];

//     for (let j = 0; j < names.length; j++) {
//         let nameSeparate = names[j].split(" ");
//         if (nameSeparate.length === 2) {
//             full_names.push(nameSeparate);
//         } else {
//             full_names.push([nameSeparate[0], undefined]);
//         }
//     }

//     console.log(full_names);




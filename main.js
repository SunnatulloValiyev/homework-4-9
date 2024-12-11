// 1-misol
// Massivning oxiridan berilgan indeksga nisbatan qiymatni topuvchi funksiyani yozing. (Masalan, -1 indeksdan ikkinchi elementni toping.)


// 2-misol

// Berilgan massivdagi barcha juft indeksdagi elementlarni yangi massivga yig'uvchi funksiyani yarating.

// function number(arr) {
//     let num1 = []; 
//     for (let i = 0; i < arr.length; i++) { 
//         if (i % 2 === 0) { 
//             num1.push(arr[i]); 
//         }
//     }
//     return num1; 
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = number(num);
// console.log(result);

// ===================================

// join

// 4-misol

// Massivning barcha elementlarini berilgan biriktiruvchi belgi bilan birlashtirib, umumiy uzunligini qaytaruvchi funksiyani yozing.

// function binder(num) {  
//     return num.join(" | ")
// }

// let number = [1, 2, 3, 4, 5, 6];
// let num1 = binder(number);   
// console.log(num1);

// ===================================

// 5-misol


// function binder(num) {
//     let reversed = num.reverse();
//     let res = reversed.join("+");

//     return res;
// }

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let num2 = binder(number);

// console.log(num2);

// ===================================

// 6-misol

// function binder(number) {
//     let number2 = [];
//     for (let i = 0; i <= number.length; i++){
//         if (number[i] % 2 == 0){
//             number2.push(number[i])
//         }
//     }
//     return number2.join("|")
// }

// let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let num2 = binder(num1);
// console.log(num2);

// ===================================

// 7-misol

// function binder(number) {
//     let number2 = [];
//     for (let i = 0; i <= number.length; i++){
//         if (number[i] % 2 == 1) {
//             number2.push(number[i])
//         }
//     }
//     return number2.join("+")
// }

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let num2 = binder(number);
// console.log(num2);

// ===================================

// toString

// 8-misol

// Massiv elementlarini stringga aylantirib, har bir elementning uzunligini qaytaruvchi funksiyani yarating.

// function binder(text) {

//     let words = text.toString();

//     return words.length;  
// }

// let text = ["Hello JavaScript and React.JS"]
// let word = binder(text);
// console.log(word);

// ===================================

// 9-misol

// Massiv elementlarini string shaklida birlashtirib, belgilangan elementni qidiruvchi funksiyani yozing.

// function binder(text, word) {
//     let words = text.toString()

//     return words.includes(word)
// }

// let text = ["Mavzu salom dunyo"];
// let word = binder(text, "Mavzu");
// console.log(word);

// ===================================

// 10-misol

// Massivni stringga aylantirgandan so'ng, oxiridan boshlab bir elementni olib tashlaydigan funksiyani yarating.

// function binder(words) {

//     word.pop()

//     return word.join("|")

// }

// let word = ["HP", "Asus", "MacBook", "Acer"]
// console.log(binder(word));

// ===================================

// 11-misol

// Ikki massivni birlashtirib, oxirgi elementni olib tashlaydigan funksiyani yozing.

// function binder(word) {
//     word.pop()

//     return word.join("~")
// }
// let word1 = ["olma", "banan", "anjir"]
// let word2 = ["mandarin", "ananas", "apelsin"]
// let text2 = binder(word1.concat(word2))
// console.log(text2);

// ===================================

// 12-misol

// Bir nechta massivlarni birlashtirib, faqat unikal qiymatlarni saqlaydigan funksiyani yarating.

// function binder(arr) {
//     let arr1 = []
//     for (let i = 0; i < arr.length; i++){
//         if (!arr1.includes(arr[i])) {
//             arr1.push(arr[i])
//         }
//     }
//     return arr1
// }

// let word1 = ['python']
// let word2 = ['python','1']
// let word3 = ['JS']
// console.log(binder(word1.concat(word2, word3)));

// ===================================

// 13-misol

// Bir nechta massivlarni birlashtirib, faqat musbat sonlarni o'z ichiga olgan yangi massiv qaytaruvchi funksiyani yozing.


// const num = (arr1, arr2) => {
//     let arr3 = arr1.concat(arr2);
//     let res = [];
//     for (let i = 0; i < arr3.length; i++) {
//         if (arr3[i] > 0) {
//             res.push(arr3[i]);
//         }
//     }
//     return res;
// };
// let arr1 = [-6, 9, 6, -98, 8, 47];
// let arr2 = [1, -6, 4, -9, 5, 6, 9, -3];
// console.log(num(arr1, arr2));

// ===================================

// copyWithin

// 14-misol

// Berilgan massivning elementlarini ko'chirish orqali faqat oxirgi uch elementni boshiga o'tkazuvchi funksiyani yozing.//

// const number = (arr) => {
//     let new_arr = arr.flat();
//     let res = [];
//     for (let i = 0; i < new_arr.length; i++) {
//         if (new_arr[i] % 2 == 0) {
//             res.push(new_arr[i]);
//         }
//     }
//     return res;
// };
// let arr = [
//     [1, 8],
//     [10, 4],
//     [5, 12],
// ];

// console.log(number(arr));

// ===================================

// flat

// 15-misol


// const num = (arr) => {
//     let res = arr.flat();
//     let sum = 0;
//     for (let i = 0; i < res.length; i++) {
//         sum += res[i];
//     }
//     return sum;
// };

// let arr = [1, 2, [3, 4, 5], [6, 7], 8, 9];
// console.log(num(arr));

// ===================================

// 16-misol

// Massivdan ixtiyoriy indeksdagi 3 ta elementni olib tashlaydigan va yangi massiv qaytaradigan funksiyani yozing.

// const task16 = (arr, index) => {
//   return arr.toSpliced(index, 3);
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// index = 3;
// console.log(task16(arr, index));

// ===================================

// 17-misol

// Massivning boshiga yangi elementlar qo'shib, asl massivni o'zgartiruvchi funksiyani yarating.

// const num = (arr) => {
//   arr.splice(0, 0, "lemon");
//   return arr;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num(arr));

// ===================================

// 18-misol

// Massivning o'rtasidan elementlarni qo'shish yoki olib tashlash orqali yangi massiv yaratadigan funksiyani yozing.

// const num = (arr) => {
//   arr.splice(arr.length / 2, 0, "hello");
//   return arr;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num(arr));

// ===================================

// 19-misol

// Massivning faqat o'rtadagi elementlarini ajratib oluvchi funksiyani yozing.

// const num = (arr) => {
//   if (arr.length % 2 == 0) {
//     return arr.slice(arr.length / 2 - 1, arr.length / 2 + 1);
//   } else {
//     return [arr[Math.floor(arr.length / 2)]];
//   }
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num(arr));

// ===================================

// 20-misol

// Massivning oxirgi qismidan belgilangan uzunlikda yangi massiv qaytaruvchi funksiyani yarating.

// const num = (arr, length) => {
//   let res = arr.slice(arr.length - length);
//   return res;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(num(arr, 3));

// ===================================

// 21-misol

// Massivning faqat juft indekslaridagi elementlardan yangi massiv yaratadigan funksiyani yozing.

// const num = (arr) => {
//   let res = [];
//   for (let i = 2; i < arr.length; i += 2) {
//     res.push(arr[i]);
//   }
//   return res;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num(arr));

// ===================================

// 22-misol

// Massivda berilgan elementni qidirib, uning indekslari yig'indisini qaytaruvchi funksiyani yozing.

// const num = (arr, element) => {
//     let sum = 0;
//     if (arr.includes(element)) {
//         arr.forEach(function (value, index) {
//             if (value === element) {
//                 sum += index;
//             }
//         });
//     }
//     return sum;
// };
// let arr = [1, 2, 5, 4, 2, 5, 6, 7, 8, 5, 10, 7, 9, 2];
// console.log(num(arr, 5));
// console.log(num(arr, 2));

// ===================================

// 23-misol

// Massivdagi eng oxirgi va birinchi elementlarning indekslari orasidagi masofani topuvchi funksiyani yarating.

// const num = (arr) => {
//     let firstIndex = 0;
//     let lastIndex = arr.length - 1;
//     return Math.abs(lastIndex - firstIndex);
// };
// let arr = [1, 2, 5, 4, 2, 5, 6, 7, 8, 5, 10];
// console.log(num(arr));

// ===================================

// 24-misol

// Massivning faqat musbat sonlardan iboratligini tekshiruvchi funksiyani yozing.

// const num = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//       return false;
//     }
//   }
//   return true;
// };

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num(arr));

// ===================================

// 25-misol

// Berilgan massivni kamayish tartibida saralab, faqat oxirgi uch elementni qaytaruvchi funksiyani yozing.

// const number = (arr) => {
//     let res = arr.sort((a, b) => b - a);

//     return res.slice(0, 3);
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(number(arr));

// ===================================

// 26-misol

// Sonlar massivini musbat va manfiy qiymatlarga ajratib, ularni alohida saralovchi funksiyani yarating.

// const number = (arr) => {
//   let musbat_sonlar = arr.filter((num) => num > 0).sort((a, b) => a - b);
//   let manfiy_sonlar = arr.filter((num) => num < 0).sort((a, b) => a - b);
//   return {musbat_sonlar, manfiy_sonlar};
// };
// let arr = [2, 8, -9, 4, 7, -2, 91, -3, 5];
// console.log(number(arr));

// ===================================

// 27-misol

// Massivning faqat birinchi uch elementini saralab, natijani qaytaruvchi funksiyani yozing.

// const num = (arr) => {
//     let res = arr.slice(0, 3).sort((a, b) => a - b);
//     return res;
// };
// let arr = [24, 3, 6, 1, 9, 6];
// console.log(num(arr));

// ===================================

// 28-misol

// Massivni teskari tartibda o'zgartirib, faqat oxirgi elementni birinchi o'ringa qo'ymaydigan funksiyani yozing

// const number = (arr) => {
//     let end = arr.pop();
//     arr.reverse();
//     arr.push(end);
//     return arr;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(number(arr));

// ===================================

// 29-misol

// Massivni teskari aylantirib, o'rtadagi qiymatlarni olib tashlaydigan funksiyani yarating.

// const num = (arr) => {
//     arr.reverse();
//     if (arr.length % 2 == 0) {
//         return arr.slice(arr.length / 2 - 1, arr.length / 2 + 1);
//     } else {
//         return [arr[Math.floor(arr.length / 2)]];
//     }
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num(arr));

// ===================================

// 30-misol

// Massivni ikki marta teskari aylantirgan holda yangi massiv qaytaruvchi funksiyani yozing.

// const task30 = (arr) => {
//   let res = [];
//   arr.reverse();
//   res.push(arr.reverse());
//   return res;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(task30(arr));

// ===================================

// 31-misol

// for...of yordamida massivdagi barcha juft sonlarni yig'ib, ularning o'rtacha qiymatini qaytaruvchi funksiyani yozing.

// const number = (arr) => {
//   let sum = 0;
//   let count = 0;
//   for (const iterator of arr) {
//     if (iterator % 2 == 0) {
//       sum += iterator;
//       count++;
//     }
//   }
//   return sum / count;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(number(arr));

// ===================================

// 32-misol
// for...of yordamida massivning har bir elementiga berilgan qiymatni qo'shib, yangi massiv yaratadigan funksiyani yozing.

// const num = (arr) => {
//     let value = 4;
//     let res = [];
//     for (const iterator of arr) {
//         res.push(value + iterator);
//     }
//     return res;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num(arr));

// ===================================

// 33-misol

// for...of yordamida massivdagi manfiy sonlarni ajratib, yangi massiv qaytaruvchi funksiyani yozing.

// const num = (arr) => {
//     let res = [];
//     for (const iterator of arr) {
//         if (iterator < 0) {
//             res.push(iterator);
//         }
//     }
//     return res;
// };
// let arr = [2, 8, -9, 4, 7, -2, 91, -3, 5];
// console.log(num(arr));

// ===================================

// 34-misol

// for...in yordamida massivning indekslari yig'indisini hisoblovchi funksiyani yozing.

// const number = (arr) => {
//   let sum = 0;
//   for (let index in arr) {
//     sum += +index;
//   }
//   return sum;
// };
// let arr = [2, 8, -9, 4, 7, -2, 91, -3, 5];
// console.log(number(arr));

// ===================================

// 35-misol

// for...in yordamida massiv elementlarining indekslari bo'yicha qiymatlarni almashtiruvchi funksiyani yozing.

// const num = (arr) => {
//     for (let i in arr) {
//         arr[i] = `${i} "sonni indexi" ${arr[i]}`;
//     }
//     return arr;
// };

// let arr = [10, 20, 30, 40];
// console.log(num(arr));

// ===================================

// 36-misol

// for...in yordamida massivda qaysi indekslar faqat musbat sonlarni o'z ichiga olishini aniqlaydigan funksiyani yozing.

// const num = (arr) => {
//   let res = [];
//   for (let index in arr) {
//     if (arr[index] > 0) {
//       res.push(index);
//     }
//   }
//   return res;
// };
// let arr = [2, 8, -1, 4, -7, -2, 91, -3, 5];
// console.log(num(arr));


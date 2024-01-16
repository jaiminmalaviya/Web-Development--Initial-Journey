'use strict';

// const a = document.getElementById('hh');
// const b = document.getElementsByClassName('jj');
// const c = document.getElementsByTagName('h1');
// const d = document.querySelector('h1');

// console.log(a.parentElement);
// console.log(b[0]);
// console.log(c[0]);
// console.log(d.parentElement);


// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 123);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof jaimin);

// let n = "1" + 1; // '11'
// console.log(n);
// n = n + 1;
// console.log(n);
// n = n + 2;
// console.log(n);

// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// let a = [1, 2, console.log(5)];
// const b = a;
// setTimeout(() => {
//     console.log(b);

// }, 5000);
// a[0] = 2;

// console.log(a);
// console.log(b);

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2037 - 1991,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas.las = 5);
// console.log(jonas);

// if (a = 0) console.log(50000);

///////////////////////////////////////
// Scoping in Practice
// 'use strict';

// calcAgee(1991);

// function calcAgee(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         // let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         // console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             // Creating NEW variable with same name as outer scope's variable
//             const firstName = 'Steven';

//             // Reasssigning outer scope's variable
//             output = 'NEW OUTPUT!';

//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }
//         }
//         // console.log(str);
//         console.log(millenial);
//         // console.log(add(2, 3));
//         console.log(output);
//     }
//     printAge();

//     return age;
// }

// const firstName = 'Jonas';
// console.log(age);
// printAge();

// Functions
// console.log(addDecl(2, 3));
// console.log(addArrow);
// console.log(add);
// // console.log(addExpr(2, 3));

// var add = 50;

// function addDecl(a, b) {
//     return a + b;
// }

// var addExpr = function (a, b) {
//     return a + b;
// };

// var addArrow = (a, b) => a + b;
// console.log(addArrow(2, 3));

// console.log(undefined);
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 0;

// function deleteShoppingCart() {
//     console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x == window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this);
// };
// calcAgeArrow(1980);

// let a = [5, 6];
// let b = a;

// console.log(b);

// a = [5, 6];

// a[1] = "jaimin";
// console.log(b);

// console.log(a);
// var a = 5;

// function a() {
//     console.log("hello");
// }

// a.namee = "jaimin";

// console.log(a.namee);
// console.log(a);

// const a = [1, 2, [3, 4, [5]], 6];
// console.log(a.a);
// console.log(...a[1]);

// let a = {
//     d: 15,
//     w: 52,
// }

// const b = [5, 4,];

// const [wq, rf] = b;
// console.log(wq, rf);

// const { d, w } = a;
// console.log(d, w);

///////////////////////////////////////
// Coding Challenge #2

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };


// for (const [i, goalScorer] of game.scored.entries()) {
//     console.log(`Goal ${i + 1}: ${goalScorer}`);
// }

// let average = 0;
// for (const value of Object.values(game.odds)) {
//     average += value;
// }
// average /= Object.values(game.odds).length;
// console.log(average);

// for (const [key, odd] of Object.entries(game.odds)) {
//     console.log(`Odd of ${game[key] ? "victory " + game[key] : "draw"}: ${odd}`);
// }

// const scorers = {};
// for (const goalScorer of game.scored) {
//     scorers[goalScorer] = (scorers[goalScorer] || 0) + 1;
// }
// console.log(scorers);
// Odd of victory Bayern Munich: 1.33
// {
//     Gnarby: 1,
//     Hummels: 1,
//     Lewandowski: 2
// }

///////////////////////////////////////
// Maps: Fundamentals
// const rest = new Map();
// rest.set('name', 'Classico Italiano', 8);
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//     .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'We are open :D')
//     .set(false, 'We are closed :(');

// console.log(rest);
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// // rest.delete(2);
// console.log(rest.delete(2));
// console.log(rest);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'Test');
// // // rest.set(document.querySelector('h1'), 'Heading');
// console.log(arr);
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get([1, 2]));
// console.log(rest.get(arr));

///////////////////////////////////////
// Maps: Iteration
// const question = new Map([
//     ['question', 'What is the best programming language in the world?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'JavaScript'],
//     ['correct', 3],
//     [true, 'Correct 🎉'],
//     [false, 'Try again!'],
// ]);
// console.log(question);

// // Convert object to map
// // console.log(Object.entries(openingHours));
// // const hoursMap = new Map(Object.entries(openingHours));
// // console.log(hoursMap);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//     if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// console.log(...question.entries());
// console.log(...question.keys());
// console.log([...question.values()]);

// let a = [4, 5, 45, 12, 15, 45,];
// // for (const value of a.keys()) {
// //     console.log(value);
// // }
// console.log(...a.entries());

// let a = [5];
// // console.log(a.length);

// const b = "jaimin";
// // console.log(b.indexOf('min'));
// console.log(b.slice(-1,));

// a.nam = "jaimin";
// function a() {
//     console.log(a.nam);
//     let sd;
// }
// a();

// console.log(a);

// console.log("   jaimin   mala viya   1".trim());
// console.log("jaimin malaviya".replace('a', 'x'));

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const textArea = document.querySelector('textarea');
// const btn = document.querySelector('button');
// btn.innerText = 'Submit';

// btn.addEventListener('click', function () {
//     const inputArr = textArea.value.trim().toLowerCase().split('\n');
//     for (const [i, value] of inputArr.entries()) {
//         const arr = value.trim().toLowerCase().split('_');

//         let outputArr = '';
//         for (const [j, valueJ] of arr.entries()) {
//             outputArr += j === 0 ? valueJ : valueJ.replace(valueJ[0], valueJ[0].toUpperCase());
//         }

//         console.log(outputArr.padEnd(20, ' ') + '✅'.repeat(i + 1));
//     }
// })

// let a = [2, 4];

// function b(arr) {
//     arr[0] = "hello";
// }
// b(a);
// console.log(a);
// let fl;

// const a = new Array(4, 65);
// console.log(a, fl);

// let a = [1, 2, 3, 4, 5];
// console.log(a.concat([2, 2]));
// console.log(a);

// console.log(a.reduce((acc, value) => {
//     // console.log(acc, value);
//     return acc += value;
// }));

// let c = 5;
// console.log(a.filter((value) => {
//     // console.log(value > 2);
//     return 1;
// }));

// const b = function () {
//     return c > 0;
// }
// console.log(b());

// console.log(a.map((value) => null));

// document.addEventListener('keydown', function (e) {
//       console.log(e); // This will log the key that was pressed
// });

// var stdin = process.openStdin();
// stdin.addListener("data", function (d) {
//       var bracket_open_obj = ["(", "[", "{"];
//       var bracket_close_obj = ["}", "]", ")"];
//       d = d.toString().trim();
//       var arr = d.split("");

//       var open_arr = [];
//       for (var s of arr) {
//             var oid = bracket_open_obj.indexOf(arr);
//             if (oid > -1) open_arr.push(oid);
//             var cid = bracket_close_obj.indexOf(s);
//             if (cid > 1) {
//                   var last_open_val = open_arr.pop();
//                   if (last_open_val != cid) {
//                         console.log("False");
//                         return;
//                   }
//             }
//       }
//       console.log("true");
// });

// console.log(Number.isInteger(2));
// console.log(Number.isNaN(+'sdsc'));
// console.log(1 / 0);
// console.log(BigInt(2.1));

// console.log(new Date(-50000000000000));

// const a = function () {
//       for (let i = 0; i < 5000; i++) {
//             console.log(0);
//       }
// }
// a();
// console.log(123);

// const timer = function () {
//       setTimeout(() => {
//             for (let i = 0; i < 99000; i++) {
//                   console.log(1);
//             }
//       }, 1000);
// }
// timer();
// console.log('jaimin');

// const a = function () {
//       const c = setTimeout(() => {
//             console.log('jaimin');
//             return 5;
//       }, 2000);
//       console.log(c);
//       return 5;
// }
// console.log(a());
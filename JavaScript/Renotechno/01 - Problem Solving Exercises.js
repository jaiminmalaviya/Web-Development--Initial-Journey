"use strict";

//
// Problem 1 - Array element 1st index.
//

function getFirstIndex(arr, value, startIndex = 0) {
  // write your code here
  let index = -1;
  startIndex = startIndex < 0 ? 0 : startIndex;

  if (startIndex < arr.length || arr.length != 0) {
    for (let i = startIndex; i < arr.length; i++) {
      const element = arr[i];

      if (element == value) {
        index = i;
        break;
      }
    }
  }
  console.log(index);
}

getFirstIndex([1, 5, 10], 5); // 1
getFirstIndex([1, 5, 10], 200); // -1
getFirstIndex(["ram", "shyam", "muni", "vishu"], "vishal"); // -1

const arr = [10, 50, 10, 20, 10, 50];
getFirstIndex(arr, 10, 0); // 0
getFirstIndex(arr, 50, 0); // 1
getFirstIndex(arr, 50, 1); // 1
getFirstIndex(arr, 50, 2); // 5
getFirstIndex(arr, 50, 6); // -1

//
// Problem 2 - Array element last index
//

const numbers = [5, 10, 20, 30, 50, 10, 50, 20, 30];

function getLastIndex(arr, value, startIndex = arr.length) {
  // write your code here
  let index = -1;
  startIndex = startIndex > arr.length ? arr.length : startIndex;

  if (startIndex > 0 || arr.length !== 0) {
    for (let i = startIndex; i >= 0; i--) {
      const element = arr[i];

      if (element == value) {
        index = i;
        break;
      }
    }
  }
  console.log(index);
}

getLastIndex(numbers, 20); // 7 last index of 20 is 7
getLastIndex(numbers, 30); // 8 last index of 30 is 8
getLastIndex(numbers, 0); // -1 0 is not in this array, so -1

getLastIndex(numbers, 30, 7); // 3
getLastIndex(numbers, 50, 3); // -1
getLastIndex(numbers, 50, 2); // -1
getLastIndex(numbers, 50, 1); // -1
getLastIndex(numbers, 50, 0); // -1
getLastIndex(numbers, 10, 3); // 1

//
// Problem 3 - Get the portion of the array.
//

function arrayPortion(arr, left = 0, right = arr.length) {
  // write your code here
  const outputArr = [];

  for (let i = left; i < arr.length - right; i++) {
    outputArr.push(arr[i]);
  }

  console.log(outputArr);
}

//   Example 1.
let A = ["one", "two", "three", "four"],
  L = 1,
  R = 1;
// output should be => ['two', 'three'];

// //   Example 2.
// let A = ["one", "two", "three", "four"],
//   L = 0,
//   R = 0;
// // output should be => ['one', 'two', 'three', 'four'];

// //   Example 3.
// let A = ["one", "two", "three", "four"],
//   L = 0,
//   R = 2;
// // output should be => ['one', 'two'];

// //   Example 4.
// let A = ["one", "two", "three", "four", "five"],
//   L = 2,
//   R = 0;
// // output should be => ['three', 'four', 'five'];

// //   Example 5.
// let A = ["one", "two", "three", "four", "five"],
//   L = 2,
//   R = 3;
// // output should be => []; // empty array

// //   Example 6.
// let A = ["one", "two", "three", "four", "five"],
//   L = 10,
//   R = 0;
// // output should be => []; // empty array

arrayPortion(A, L, R);

//
// Problem 4 - Transform the input data.
//

const student1 = {
  firstName: "Shyam",
  midName: "K",
  lastName: "Patel",
  marks: {
    arts: "82",
    science: "75",
    maths: "62",
  },
};

const student2 = {
  firstName: "Manish",
  midName: "R",
  lastName: "Gupta",
  marks: {
    arts: "78",
    science: "77",
    maths: "61",
  },
};

const students = [student1, student2];

console.table(students);

const reports = [];

/* Your code startrs here. */
for (let i = 0; i < students.length; i++) {
  const inElement = students[i];
  const inMarks = inElement.marks;

  const outElement = {
    fullName: inElement.firstName + inElement.midName + inElement.lastName,
    arts: inMarks.arts,
    science: inMarks.science,
    maths: inMarks.maths,
    total: +inMarks.arts + +inMarks.science + +inMarks.maths,
    percentage: (+inMarks.arts + +inMarks.science + +inMarks.maths) / 3,
  };

  reports[i] = outElement;
}
/* Your code ends here. */

console.table(reports);

//
// Problem 5 - Print summary of student’s result.
//

const PassingMarks = 45;
const Student = {
  name: "Shyam K Patel",
  marks: [
    {
      marks: 70,
      subject_id: "sub_001",
      subject_name: "Hindi",
    },
    {
      marks: 45,
      subject_id: "sub_002",
      subject_name: "Gujarati",
    },
    {
      marks: 68,
      subject_id: "sub_003",
      subject_name: "English",
    },
    {
      marks: 68,
      subject_id: "sub_004",
      subject_name: "Painting",
    },
  ],
};

/* Your code startrs here. */

const studentResult = function (student, passingMark) {
  const totalMarks = student.marks.reduce((accumulator, value) => {
    return accumulator + value.marks;
  }, 0);

  const percentage = totalMarks / 4;

  const classStudent =
    percentage > 70 ? "First Class with Distinction" : "First Class";

  const failedSubjectArr = student.marks.filter(
    (marks) => marks.marks <= passingMark
  );

  const finalResult = failedSubjectArr.length === 0 ? "pass" : "fail";

  let failedSubject = "";
  for (const iterator of failedSubjectArr) {
    failedSubject += iterator.subject_name + " " + iterator.marks + ", ";
  }

  if (finalResult == "pass") {
    console.log(`
    Name: ${student.name}
    Final Result: ${finalResult}
    Percentage: ${percentage}
    Class: ${classStudent}`);
  } else {
    console.log(`
    Name: ${student.name} 
    Final Result: ${finalResult}
    Failed Subjects: ${failedSubject}`);
  }
};

studentResult(Student, PassingMarks);
/* Your code ends here. */

//
// Problem 6 - Nested array & nested objects
//
const a = [];

a[0] = "Ajay";
a[11] = "Shyam";

(a[205] = {}),
  (a[3000] = {}),
  (a[3000].names = []),
  (a[3500] = {}),
  (a[3500].students = {}),
  (a[3500].students[25] = {}),
  (a[3500].students[25].hobbies = []),
  (a[3500].students[25].hobbies[7] = {});

a[205].names = ["a", "b", "c"];
a[3000].names[10] = "Raju";
a[3500].students[25].hobbies[7].title = "Painting";

a[710] = new Array(11);
a[710][11] = new Array(12);

a[710][11][12] = "I am 710-11-12";

(a[6] = []), (a[6][7] = {}), (a[6][7].names = []), (a[6][7].names[6] = []);
a[6][7].names[6][7] = "I am Engineer";

(a[5] = {}),
  (a[5].ids = []),
  (a[5].ids[5] = {}),
  (a[5].ids[5].numbers = []),
  (a[5].ids[5].numbers[5] = {});
a[5].ids[5].numbers[5].a = 65000;

(a[10] = {}),
  (a[10].a = []),
  (a[10].a[10] = {}),
  (a[10].a[10].b = []),
  (a[10].a[10].b[10] = {}),
  (a[10].a[10].b[10].c = []);
a[10].a[10].b[10].c[10] = "I am Greek Engineer";

(a[5000] = {}),
  (a[5000].flags = []),
  (a[2000] = {}),
  (a[2001] = {}),
  (a[5000].flags[a[2000].xyz] = {}),
  (a[5000].flags[a[2000].xyz].kites = []);
a[5000].flags[a[2000].xyz].kites[a[2001].abc] = "Kite Festival";

console.log(a);

//
// Problem 7 - One dimension array of numbers - Multiple programs.
//

const AA = [14, 56, 55, 1, 81, 46, 28, 7, 1, 69, 1];
const Limit = 50;
const LL = 2;
const RR = 3;

const P1 = function (arr) {
  const output = arr.filter((element) => element % 2 !== 0);
  console.log("Odd numbers: " + output);
};

const P2 = function (arr) {
  const output = arr.filter((element) => element % 2 === 0);
  console.log("Even numbers: " + output);
};

const P3 = function (arr) {
  const output = arr.filter(
    (element, key) => element % 2 !== 0 && key % 2 !== 0
  );
  console.log("Odd numbers on Odd index: " + output);
};

const P4 = function (arr) {
  const output = arr.filter(
    (element, key) => element % 2 === 0 && key % 2 === 0
  );
  console.log("Even numbers on Even index: " + output);
};

const P5 = function (arr) {
  const output = arr.reduce((accumulator, value) => accumulator + value);
  console.log("Sum of all numbers: " + output);
};

const P6 = function (arr) {
  const oddSum = arr.reduce(
    (accumulator, value) => accumulator + (value % 2 !== 0 ? value : 0),
    0
  );
  const evenSum = arr.reduce(
    (accumulator, value) => accumulator + (value % 2 === 0 ? value : 0),
    0
  );
  console.log("Sum of Odd numbers: " + oddSum);
  console.log("Sum of Even numbers: " + evenSum);
};

const P7 = function (arr, L) {
  const smallerThanL = arr.filter((element) => element < L);
  const biggerThanL = arr.filter((element) => element > L);

  console.log("Smaller than L: " + smallerThanL);
  console.log("Bigger than L: " + biggerThanL);
};

const P8 = function (arr, L, R) {
  let sum = 0;
  for (let i = R; i < arr.length - L; i++) {
    const element = arr[i];
    sum += element;
  }

  console.log("Sum: " + sum);
};

const P9 = function (arr, Z) {
  const frequency = arr.reduce(
    (accumulator, value) => accumulator + (value === Z ? 1 : 0),
    0
  );
  console.log(`Frequency of ${Z}: ${frequency}`);
};

const P10 = function (arr) {
  let positive = 0,
    negative = 0;

  arr.forEach((element) => {
    positive += element >= 0 ? 1 : 0;
    negative += element < 0 ? 1 : 0;
  });

  console.log("Total Positive Number: " + positive);
  console.log("Total Negative Number: " + negative);
};

const P11 = function (arr, Z) {
  const output = arr.filter(
    (element) => element % Z === 0 || element == Z ** 2 || element == Z ** 3
  );

  console.log("Number: " + output);
};

console.log(...AA);
P1(AA);
P2(AA);
P3(AA);
P4(AA);
P5(AA);
P6(AA);
P7(AA, Limit);
P8(AA, LL, RR);
P9(AA, 1);
P10(AA);
P11(AA, 9);

//
// Problem 8 - for or while loop - Multiple programs
//

const N = 15,
  X = 3,
  Y = 4,
  Z = 5;

const P8_1 = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log("Sum: " + sum);
};

const P8_2 = function (n, y) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i % y === 0 ? i : 0;
  }
  console.log("Sum: " + sum);
};

const P8_3 = function (n) {
  let even = "",
    odd = "";
  for (let i = 1; i <= n; i++) {
    odd += i % 2 !== 0 ? i + "-" : "";
    even += i % 2 === 0 ? i + "-" : "";
  }
  console.log("Odd: " + odd);
  console.log("Even: " + even);
};

const P8_4 = function (n) {
  let prime = "";
  for (let i = 2; i <= n; i++) {
    let counter = 0;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        counter = 1;
        break;
      }
    }
    prime += counter === 0 ? i + ", " : "";
  }
  console.log("Prime: " + prime);
};

const P8_5 = function (n) {
  let squareNumber = "";
  for (let i = 1; i <= n; i++) {
    let counter = 0;
    for (let j = 1; j * j <= i; j++) {
      if (j * j === i) {
        counter = 1;
        break;
      }
    }
    squareNumber += counter === 1 ? i + ", " : "";
  }
  console.log("Square Number: " + squareNumber);
};

const P8_6 = function (n) {
  let output = "";
  for (let i = -n; i <= n; i++) {
    output += i + ", ";
  }
  console.log(output);
};

const P8_7 = function (n, x, y, z) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    output += i % x === 0 && i % y === 0 && i % z === 0 ? i + ", " : "";
  }
  console.log("Output: " + output);
};

const P8_8 = function (n, x, y, z) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    output += x * x === i || y * y === i || z * z === i ? i + ", " : "";
  }
  console.log("Output: " + output);
};

const P8_9 = function (n, x, y, z) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    output += x === i || y === i || z === i ? "" : i + ", ";
  }
  console.log("Output: " + output);
};

const P8_10 = function (n, x, y, z) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    output += x * y === i || y * z === i || z * x === i ? i + ", " : "";
  }
  console.log("Output: " + output);
};

P8_1(N);
P8_2(N, Y);
P8_3(N);
P8_4(N);
P8_5(N);
P8_6(3);
P8_7(N, 2, 4, 3);
P8_8(N, 2, 4, 3);
P8_9(N, 12, 4, 7);
P8_10(N, 2, 4, 7);

//
// Problem 9 - Pattern programs part - 1 (for / while loop, if else, while loop, array join)
//

const NN = 4;

const P9_1 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      line += j + " ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_2 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = i; j >= 1; j--) {
      line += j + " ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_3 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      line += i + " ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_4 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n; j > n - i; j--) {
      line += j + " ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_5 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      line += n - i + 1 + " ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_6 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      line += i + " ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_7 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n - i + 1; j >= 1; j--) {
      line += i + " ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_8 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      line += i % 2 !== 0 ? j + " " : "* ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_9 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    line += "* ";
    for (let j = 1; j <= i; j++) {
      line += j + " ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_10 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      line += j + " ";
    }
    line += "* \n";
  }
  console.log(line);
};

const P9_11 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      line += i % 2 !== 0 ? j + " " : "* ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_12 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      line += "4 ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_13 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      line += "1 ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_14 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n - i + 1; j >= 1; j--) {
      line += n - i + 1 + " ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_15 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      line += j + (j === i ? " " : ", ");
    }
    line += "\n";
  }
  console.log(line);
};

const P9_16 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n; j > n - i; j--) {
      line += j + (j === n - i + 1 ? " " : ", ");
    }
    line += "\n";
  }
  console.log(line);
};

const P9_17 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      line += (j % 2 === 0 ? "+" : "*") + " ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_18 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      line += j + (j === i ? " " : " + ");
    }
    line += "\n";
  }
  console.log(line);
};

const P9_19 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      line += j + " ";
    }
    for (let j = i; j >= 1; j--) {
      line += j + " ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_20 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      line += j ** 2 + " ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_21 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      for (let k = 1; k <= j; k++) {
        line += "o";
      }
      line += " ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_22 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n - i + 1; j >= 1; j--) {
      line += n - i + 1 + (j === 1 ? " " : " - ");
    }
    line += "\n";
  }
  console.log(line);
};

const P9_23 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
      line += j + " ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_24 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n - i + 1; j <= n; j++) {
      line += j + " ";
    }
    line += "* \n";
  }
  console.log(line);
};

const P9_25 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      line += j ** 3 + " ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_26 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n - i; j >= 1; j--) {
      line += "  ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      line += String.fromCharCode("A".charCodeAt(0) + 3 * i - 3) + " ";
    }
    line += "\n";
  }
  console.log(line);
};

const P9_27 = function (n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    line += "1 ";
    for (let j = 2; j < n; j++) {
      line += i === 1 || i === n || j === i || j === n - i + 1 ? j + " " : "  ";
    }
    line += n + " ";
    line += "\n";
  }
  console.log(line);
};

P9_1(NN);
P9_2(NN);
P9_3(NN);
P9_4(NN);
P9_5(NN);
P9_6(NN);
P9_7(NN);
P9_8(NN);
P9_9(NN);
P9_10(NN);
P9_11(NN);
P9_12(NN);
P9_13(NN);
P9_14(NN);
P9_15(NN);
P9_16(NN);
P9_17(NN);
P9_18(NN);
P9_19(NN);
P9_20(NN);
P9_21(NN);
P9_22(NN);
P9_23(NN);
P9_24(NN);
P9_25(NN);
P9_26(9);
P9_27(9);

//
// Problem 10 - Replace a character with another character
//

const address = "1.1.1.1";

let defangIPaddr = function (address) {
  return address.replaceAll(".", "[.]");
};

console.log(defangIPaddr(address));

//
// Problem 11 - Object & Array iterations
//

const P11_a = { id: 1, name: "shyam", city: "bengaluru" };
const P11_b = { city: "bengaluru", id: 1, name: "shyam" };
const P11_c = { city: "bengaluru", id: 2, name: "shyam" };
const P11_d = {
  id: 1,
  name: "shyam",
  city: "bengaluru",
  fullName: "shyam k patel",
};

// SubProblem 1
function isSameObject(obj1, obj2) {
  // your amazing code starts here
  const obj1Arr = Object.entries(obj1).sort();
  const obj2Arr = Object.entries(obj2).sort();

  // console.log(JSON.stringify(obj1Arr) === JSON.stringify(obj2Arr));
  console.log(obj1Arr.join() === obj2Arr.join());
}
console.log("Problem 1");

isSameObject(P11_a, P11_b); // should return true
isSameObject(P11_b, P11_a); // should return true
isSameObject(P11_a, { ...P11_a }); // should return true
isSameObject(P11_a, P11_c); // should return false

// SubProblem 2
function hasSameKeys(obj1, obj2) {
  // your amazing code starts here
  const obj1Arr = Object.keys(obj1).sort();
  const obj2Arr = Object.keys(obj2).sort();

  // console.log(JSON.stringify(obj1Arr) === JSON.stringify(obj2Arr));
  console.log(obj1Arr.join() === obj2Arr.join());
}
console.log("Problem 2");

hasSameKeys(P11_a, P11_b); // should return true
hasSameKeys(P11_b, P11_a); // should return true
hasSameKeys({}, {}); // should return true
hasSameKeys(P11_a, P11_d); // should return false

// SubProblem 3
function hasSameValues(arr1, arr2) {
  // your amazing code starts here
  const arr1Sort = arr1.sort();
  const arr2Sort = arr2.sort();

  console.log(
    arr1Sort.length === arr2Sort.length
      ? arr1Sort.every((value, index) => value === arr2Sort[index])
      : false
  );
}
console.log("Problem 3");

const P11_aa = ["a", 10, 20];
const P11_bb = [10, "a", 20];

hasSameValues(P11_aa, P11_bb); // should return true
hasSameValues(P11_bb, P11_aa); // should return true

const list1 = ["goa", "dal", "auli", "goa"];

hasSameValues(list1, ["goa", "dal", "auli", "goa"]); // should return true
hasSameValues(list1, ["goa", "goa", "dal", "auli"]); // should return true

hasSameValues(list1, ["goa", "goa"]); // should return false
hasSameValues(list1, ["dal", "auli"]); // should return false
hasSameValues([], [""]); // should return false
hasSameValues([null, undefined], [undefined, undefined]); // should return false

// SubProblem 4
function magicMerge(...arr) {
  // your amazing code starts here
  const flatArray = arr.flat(Infinity);
  const output = [...new Set(flatArray)];

  return output;
}
console.log("Problem 4");

const list2 = magicMerge([10, 20], [50], [20, 20], [10, 50], [50, 20, 50]);
console.log(list2);

const list3 = magicMerge(["surat", "goa", "vapi"], ["vapi"]);
console.log(list3);

const list4 = magicMerge(["surat", "goa", "vapi", "vapi", "goa", "vapi"]);
console.log(list4);

//
// Problem 12 - Classes & Inheritance
//

//
// Problem 13 - Recursion
//

// SubProblem 1: Write a function that accetps a nested array of numbers & returns the flatten array.
function flattenArray(arr) {
  // your code starts here.
  return arr.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flattenArray(b) : b),
    []
  );
}

const nestedNums = [5, 6, [7], [8, [9, [10]]]];
const flatNums = flattenArray(nestedNums);
console.log(flatNums); // [5, 6, 7, 8, 9, 10]

// SubProblem 2: Write a function that accepts an object. type of the value can be number / string / object. Return array of unique keys.
function getUniqueKeys(obj) {
  // your code starts here.
  return [
    ...new Set(
      Object.keys(obj).reduce(
        (a, b) =>
          a.concat(
            typeof obj[b] === "object" ? [b].concat(getUniqueKeys(obj[b])) : b
          ),
        []
      )
    ),
  ];
}

const y = {
  a: 10,
  b: {
    c: 20,
    d: {
      e: 40,
      a: 10,
      c: 20,
      d: 50,
    },
  },
};
const keys1 = getUniqueKeys(y);
console.log(keys1);

const x = {
  name: "ghana",
  city: "bangalore",
  contactDetails: {
    eMailAddress: {
      personal: "gg.12345@gmail.com",
      business: "gg.12345@company.com",
    },
    phone: {
      home: "0261 0000001",
      personal: "+91 99009900990099",
      office: "+91 990088776600",
    },
    communication: {
      permanent: "D904 ABC Star Plaza, Surat",
      office: "201-202 Orbit Tech Park, Bangalore",
    },
  },
};

const keys2 = getUniqueKeys(x);
console.log(keys2);

// SubProblem 3: Find the deepest link from the nested object.?
function getDeepestLink(nestedObject) {
  // your code starts here.
  let deepLevel = 0;
  const addDepth = (obj, depth = 0) => {
    for (const key in obj) {
      obj.depth = depth;
      typeof obj[key] === "object" ? addDepth(obj[key], depth + 1) : "";
      deepLevel = deepLevel < depth ? depth : deepLevel;
    }
  };
  addDepth(nestedObject);
  console.log("Maximum deep level: " + deepLevel);
}

let xx = {
  a: 10,
  b: {
    num: 100,
    num2: {
      value: 100,
    },
    c: {
      val: 23,
    },
  },
};
getDeepestLink(xx); // b.num2.value

xx.c = {
  vals: 500,
  nVals: { x: 40, deep: { city: "blr" } },
};
getDeepestLink(xx); // c.nVals.deep.city

//
// Problem 14 - Find the status of the Tic Tac Toe game
//

function getTicTacToeStatus(state2D) {
  /* your amazing code starts here. */
  const arr = state2D.flat();

  // Check Game is to start
  if (arr.every((value) => value === "") === true) {
    return console.log("Game is to start");
  }

  const checkWinner = (a, b, c) => {
    if (a === b && a === c && a !== "") {
      console.log(`Player "${a}" won`);
      return true;
    }
  };

  // Check Player "0" won or Player "X" won
  for (let i = 0; i < 3; i++) {
    if (
      checkWinner(arr[3 * i], arr[3 * i + 1], arr[3 * i + 2]) === true ||
      checkWinner(arr[i], arr[i + 3], arr[i + 6]) === true ||
      checkWinner(arr[0], arr[4], arr[8]) === true ||
      checkWinner(arr[2], arr[4], arr[6]) === true
    ) {
      return;
    }
  }

  // Check Tie
  if (arr.every((value) => value !== "") === true) {
    return console.log("Tie");
  }

  // Check Game is on
  else {
    return console.log("Game is on (No body has won, result is yet to arrive)");
  }
}

getTicTacToeStatus([
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]);

getTicTacToeStatus([
  ["0", "0", "X"],
  ["X", "X", "0"],
  ["0", "0", "X"],
]);

getTicTacToeStatus([
  ["0", "", "X"],
  ["0", "X", ""],
  ["0", "", ""],
]);

getTicTacToeStatus([
  ["0", "", ""],
  ["", "X", ""],
  ["", "", "0"],
]);

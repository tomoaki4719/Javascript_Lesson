// 基本編問題
// Q1
let nickname = 'ともあき';
let age = '24';

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

// Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  // Q7
  birthday: '2000-09-27',
  sayHello: function() {
    console.log('Hello!');
  }
};

console.log(user.age);

user.sayHello();

// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

// Q5
let totalAge = playerList[0].age + playerList[1].age + playerList[2].age;
let averageAge = totalAge / playerList.length;

console.log(averageAge);

// Q6
function sayHello() {
  console.log('Hello');
}

sayHello();

let sayWorld = function() {
  console.log('World');
}

sayWorld();

// Q7
// Q3に記述済み

// Q8
let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
}

calc.add(2, 5);

calc.subtract = function(x, y) {
  console.log(x - y);
}

calc.subtract(14, 4);

calc.multiply = function(x, y) {
  console.log(x * y);
}

calc.multiply(7, 7);

calc.divide = function(x, y) {
  console.log(x / y);
}

calc.divide(25, 5);

// Q9
function remainder(x, y) {
  return x % y;
}

let result = remainder(5, 3);

console.log("5 を 3 で割った余りは " + result + " です。");

// Q10
// function foo() {
//   let x = 1;
// }
// console.log(x);

// 上記の記述から変数xは関数fooで定義されていることがわかる。
// 通常、Javascriptは関数内のみスコープが有効のため、
// 関数foo内で定義した変数xは関数の外で参照できない。
// そのため変数xが定義されていないというエラーが出力される。

// 応用編問題
// Q1
let random = Math.floor(Math.random() * 10);
console.log('random => ', random);

// Q2
setTimeout(function() {
  console.log('Hello World!');
}, 3000);

// Q3
let numbers = [];

if (0 > numbers ) {
  console.log('num is greater than 0');
} else if (0 < numbers) {
  console.log('num is greater than 0');
} else if (0 === numbers) {
  console.log('num is 0');
}

// Q4
numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers);

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let mix of mixed) {
  if (typeof mix === 'number') {
    if (mix % 2 === 0) {
      console.log('even');
    }else if (mix % 2 !== 0){
      console.log('odd');
    }
  }else {
    console.log('not number');
  }
}

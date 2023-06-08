//덧셈식 출력하기

//입력 : 4 5
//출력 : 4 + 5 = 9
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  let result = Number(input[0]) + Number(input[1]);
  console.log(`${Number(input[0])} + ${Number(input[1])} = ${result}`);
});

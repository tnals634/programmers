//문자열 돌리기

// abc 입력
//출력
//a
//b
//c
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
});

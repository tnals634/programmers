//직각삼각형 출력하기

// *의 높이와 너비인 n이 주어진다.
// 직각 삼각형을 출력해주세요.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  let answer = "";
  for (let i = 0; i < input[0]; i++) {
    for (let j = 0; j < i + 1; j++) {
      answer += "*";
    }
    console.log(answer);
    answer = "";
  }
});

//외계행성의 나이

//a = 0, b = 1, c = 2,...j = 9
//23 -> cd
function solution(age) {
  var answer = "";

  let array = [];
  for (let i = 1; age > 0; i++) {
    array[i] = Math.floor(age % 10);
    age = Math.floor(age / 10);
  }

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] == 0) {
      answer += "a";
    } else if (array[i] == 1) {
      answer += "b";
    } else if (array[i] == 2) {
      answer += "c";
    } else if (array[i] == 3) {
      answer += "d";
    } else if (array[i] == 4) {
      answer += "e";
    } else if (array[i] == 5) {
      answer += "f";
    } else if (array[i] == 6) {
      answer += "g";
    } else if (array[i] == 7) {
      answer += "h";
    } else if (array[i] == 8) {
      answer += "i";
    } else if (array[i] == 9) {
      answer += "j";
    }
  }
  return answer;
}

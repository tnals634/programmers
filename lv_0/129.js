//x사이의 개수

function solution(myString) {
  var answer = [];
  answer = myString.split("x");
  for (let i in answer) {
    answer[i] = answer[i].length;
  }
  return answer;
}

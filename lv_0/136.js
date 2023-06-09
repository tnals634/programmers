//문자열 잘라서 정렬하기

//"x"를 기준으로 잘라서 배열로 만든 후
//사전 순으로 정렬
function solution(myString) {
  var answer = [];
  answer = myString.split("x");
  answer = answer.sort();
  answer = answer.filter((value) => value != "");
  return answer;
}

//l로 만들기

//문자열중 알파벳 순서 "l"보다 앞에있는 문자는
//모두 "l"로 변경한 문자열 return
function solution(myString) {
  var answer = "";
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] < "l") {
      answer += "l";
    } else {
      answer += myString[i];
    }
  }
  return answer;
}

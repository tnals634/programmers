//대문자와 소문자

//문자열 my_string이 매개변수로 주어질 때,
//대문자는 소문자로 소문자는 대문자로 변환한 문자열을
//return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
  var answer = "";
  let string = "";
  for (let i = 0; i < my_string.length; i++) {
    string = my_string[i];
    if (string == my_string[i].toUpperCase()) {
      answer += string.toLowerCase();
    } else {
      answer += string.toUpperCase();
    }
  }
  return answer;
}

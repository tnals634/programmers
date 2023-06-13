//중복된 문자 제거

//문자열 my_string이 매개변수로 주어집니다.
//my_string에서 중복된 문자를 제거하고 하나의
//문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
//my_string = "people", result = "peol"
function solution(my_string) {
  var answer = "";
  let strings = [];
  for (let i = 0; i < my_string.length; i++) {
    strings[i] = my_string[i];
  }
  for (let i = 0; i < strings.length; i++) {
    for (let j = 1 + i; j < strings.length; j++) {
      if (strings[i] === strings[j]) {
        strings[j] = "";
      }
    }
    answer += strings[i];
  }
  return answer;
}

//부분 문자열 이어 붙여 문자열 만들기

//my_strings = ["progressive", "hamburger", "hammer", "ahocorasick"]
//parts = [[0, 4], [1, 2], [3, 5], [7, 7]]
//result = "programmers"
function solution(my_strings, parts) {
  var answer = "";
  let result = "";
  for (let i = 0; i < my_strings.length; i++) {
    answer = my_strings[i];
    for (let j = parts[i][0]; j <= parts[i][1]; j++) {
      result += answer[j];
    }
  }
  return result;
}

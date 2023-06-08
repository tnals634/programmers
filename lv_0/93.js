//공백으로 구분하기 2
//단어가 공백 한 개 이상으로 구분되어 있는 문자열 my_string이
//매개변수로 주어질 때, my_string에 나온 단어를 앞에서부터
//순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
function solution(my_string) {
  var answer = [];
  var string = "",
    j = 0;
  console.log(my_string.length);
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] != " ") {
      string += my_string[i];
    } else {
      console.log(string);
      if (string.length != 0) {
        answer[j] = string;
        j++;
        string = "";
      }
    }
  }
  if (string.length != 0) answer[j] = string;
  return answer;
}

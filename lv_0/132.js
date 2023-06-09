//문자열 정렬하기 (2)

//모든 알파벳을 소문자로 변경후 알파벳 순서대로 정렬
function solution(my_string) {
  var answer = "";
  //answer = my_string.toLowerCase().split("").sort().join("");
  let tmp;
  my_string = my_string.toLowerCase();
  my_string = my_string.split("");
  for (let i = 0; i < my_string.length - 1; i++) {
    for (let j = i + 1; j < my_string.length; j++) {
      if (my_string[i] > my_string[j]) {
        tmp = my_string[i];
        my_string[i] = my_string[j];
        my_string[j] = tmp;
      }
    }
    answer += my_string[i];
  }
  answer += my_string[my_string.length - 1];
  return answer;
}

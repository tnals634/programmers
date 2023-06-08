//문자열 정렬하기(1)

//문자열중 숫자만 골라 오름차순 정렬
function solution(my_string) {
  var answer = [];
  let k = 0;
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] * 10 >= 0) {
      answer[k] = Number(my_string[i]);
      k++;
    }
  }
  let tmp;
  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = i + 1; j < answer.length; j++) {
      if (answer[i] > answer[j]) {
        tmp = answer[i];
        answer[i] = answer[j];
        answer[j] = tmp;
      }
    }
  }
  return answer;
}

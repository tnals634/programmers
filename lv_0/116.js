//인덱스 바꾸기

//문자와 인덱스 값 2개가 주어집니다.
//인덱스 1, 과 인덱스 2 자리의 값을 서로 바꿔 출력해주세요.
function solution(my_string, num1, num2) {
  var answer = [];
  for (let i = 0; i < my_string.length; i++) {
    if (num1 == i) {
      answer += my_string[num2];
    } else if (num2 == i) {
      answer += my_string[num1];
    } else {
      answer += my_string[i];
    }
  }

  return answer;
}

//두 수의 연산값 비교하기

//양의 정수 a와 b가 주어졌을 때,
//a ⊕ b와 2 * a * b 중 더 큰 값을 return하는 solution 함수를 완성해 주세요.
//단, a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 합니다.
function solution(a, b) {
  var answer = 0;
  let str;
  let num;
  num = 2 * a * b;
  str = String(a) + String(b);
  if (num < Number(str)) answer = Number(str);
  else answer = num;
  return answer;
}

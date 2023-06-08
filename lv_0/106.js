//홀짝에 따라 다른 값 반환하기

//홀수일경우 n까지의 수중 홀수값 더한값 return 예 : n = 10; 1+3+5+7+9
//짝수일경우 n까지의 수중 짝수값  제곱수들의 합 return 예: n =10; 2^2 + 4^2 + 6^2 + 8^2 + 10^2
function solution(n) {
  var answer = 0;
  if (n % 2 == 0) {
    for (let i = 1; i <= n; i++) {
      if (i % 2 == 0) answer += i ** 2;
    }
  } else {
    for (let i = 1; i <= n; i++) {
      if (i % 2 != 0) {
        answer += i;
      }
    }
  }
  return answer;
}

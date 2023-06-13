//콜라츠 수열 만들기

//모든 자연수 x에 대해서 현재 값이 x이면 x가 짝수일 때는 2로 나누고,
//x가 홀수일 때는 3 * x + 1로 바꾸는 계산을 계속해서 반복하면
//언젠가는 반드시 x가 1이 되는지 묻는 문제를 콜라츠 문제라고 부릅니다.
//임의의 1,000 보다 작거나 같은 양의 정수 n이 주어질 때
//초기값이 n인 콜라츠 수열을 return 하는 solution 함수를 완성해 주세요.
//n =10, result = [10, 5, 16, 8, 4, 2, 1]
function solution(n) {
  var answer = [];
  let j = 0;
  for (let i = 0; n > 1; i++) {
    if (n % 2 == 0) {
      answer[i] = n;
      n = n / 2;
    } else {
      answer[i] = n;
      n = n * 3 + 1;
    }
    j++;
  }
  if (n == 1) answer[j] = n;
  return answer;
}

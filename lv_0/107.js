//n의 배수 고르기

//정수배열중 n의 배수들만 출력
function solution(n, numlist) {
  var answer = [];
  let j = 0;
  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n == 0) {
      answer[j] = numlist[i];
      j++;
    }
  }
  return answer;
}

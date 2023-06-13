//특별한 이차원 배열 1

// i == j 면 1, 아니면 0
function solution(n) {
  var answer = [];
  let num = [];
  for (let i = 0; i < n; i++) {
    num = [];
    for (let j = 0; j < n; j++) {
      if (i == j) {
        num[j] = 1;
      } else num[j] = 0;
    }
    answer[i] = num;
  }
  return answer;
}

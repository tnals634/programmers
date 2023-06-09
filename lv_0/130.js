//특별한 이차원 배열 2

//arr[i][j] = arr[j][i];
//정확히는 첫줄가로세로가 같을경우 1, 아니면 0을 출력
//[[5, 192, 33],
// [192, 72, 95],
// [33, 95, 999]];
//=> 1
function solution(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[0][i] == arr[i][0]) {
      answer++;
    }
  }
  if (answer == arr.length) answer = 1;
  else answer = 0;
  return answer;
}

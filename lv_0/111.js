//가장 큰 수 찾기

//가장 큰수와 그 인덱스를 출력
function solution(array) {
  var answer = [];
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
      answer[0] = max;
      answer[1] = i;
    }
  }
  return answer;
}

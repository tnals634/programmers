//배열의 원소 삭제하기

//정수 배열과 delete배열이 주어진다.
//정수배열에서 delete배열과 같은 수가 있으면
//그 수를 제외한 수들의 배열을 출력해라.
function solution(arr, delete_list) {
  var answer = [];
  let index = 0;
  let count = 0;
  for (let i in arr) {
    for (let j in delete_list) {
      if (arr[i] == delete_list[j]) {
        count++;
      }
    }
    if (count == 0) {
      answer[index] = arr[i];
      index++;
    }
    count = 0;
  }
  return answer;
}

//할 일 목록

//문자열 배열과 boolean배열 이 주어진다.
//같은 인덱스의 문자열이 false인 경우만 담은 문자열을 출력해주세요.
function solution(todo_list, finished) {
  var answer = [];
  let j = 0;
  for (let i in todo_list) {
    if (finished[i] == false) {
      answer[j] = todo_list[i];
      j++;
    }
  }
  return answer;
}

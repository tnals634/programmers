//순서 바꾸기

//정수 배열과 정수 n이 주어진다.
//배열 n번째 인덱스의 원소 이후들과
//배열 n번째까지의 원소들로 나눠 n번째 원소 이후들을
//n번째까지의 원소들앞에 붙여주세요.

//예 : list = [2, 1, 6] , n = 1
// 출력 : [1, 6, 2]
function solution(num_list, n) {
  var answer = [];
  let j = 0;
  for (let i = n; i < num_list.length; i++) {
    answer[j] = num_list[i];
    j++;
  }
  for (let i = 0; i < n; i++) {
    answer[j] = num_list[i];
    j++;
  }
  return answer;
}

//배열 만들기 3

//arr = [1, 2, 3, 4, 5], intervals=	[[1, 3], [0, 4]],result=[2, 3, 4, 1, 2, 3, 4, 5]
//첫 번째 구간에 해당하는 배열은 [2, 3, 4] 입니다.
//두 번째 구간에 해당하는 배열은 [1, 2, 3, 4, 5] 입니다.
//따라서 이 두 배열을 앞뒤로 붙인 배열인 [2, 3, 4, 1, 2, 3, 4, 5]를 return 합니다.
function solution(arr, intervals) {
  var answer = [];
  let j = 0;
  // for(let i = intervals[0][0]; i <= intervals[0][1]; i++){
  //     answer[j] = arr[i];
  //     j++;
  // }
  // for(let i = intervals[1][0]; i <= intervals[1][1]; i++){
  //     answer[j] = arr[i];
  //     j++;
  // }

  for (let i = 0; i < 2; i++) {
    for (let k = intervals[i][0]; k <= intervals[i][1]; k++) {
      answer[j] = arr[k];
      j++;
    }
  }
  return answer;
}

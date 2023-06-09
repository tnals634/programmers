//ad 제거하기

//문자열 배열 에서 ad 부분 문자열을 포함하고 있는
//모든 문자열을 제거하고 남은 문자열을 순서 유지하여 출력
function solution(strArr) {
  var answer = [];
  //filter사용
  // answer = strArr.filter(value => {
  //     let count;
  //     count = value.search("ad");
  //     if(count == -1) return value;
  // })
  let count = 0,
    k = 0;
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[i].length - 1; j++) {
      if (strArr[i][j] == "a" && strArr[i][j + 1] == "d") {
        count++;
      }
    }
    if (count == 0) {
      answer[k] = strArr[i];
      k++;
    } else count = 0;
  }
  return answer;
}

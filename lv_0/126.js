//문자열 섞기

// 같은 두 문자열이 주어진다.
// 각 문자 앞에서부터 서로 번갈아가며
//한번씩 등장하는 문자열을 출력
//str1 = "aaa" , str2 = "bbb"
//result = "ababab"
function solution(str1, str2) {
  var answer = "";
  for (let i in str1) {
    answer += str1[i];
    answer += str2[i];
  }
  return answer;
}

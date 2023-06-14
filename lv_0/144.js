//등차수열의 특정한 항만 더하기

//a = 7, d = 1,
//included = [false, false, false, true, false, false, false]
//              7       8      9    10    11     12      13
// 이중 true값만 더해서 return -> 10
function solution(a, d, included) {
  var answer = 0;
  for (let i in included) {
    if (included[i]) {
      answer += a;
    }
    a += d;
  }
  return answer;
}

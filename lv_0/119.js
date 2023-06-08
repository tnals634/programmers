//피자 나눠 먹기(2)

//남기지 않고 정확히 맞아떨어져야한다.
//피자는 6조각이다.
//사람이 n명 주어질때 몇판이어야 되는가
function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if ((6 * i) % n == 0) {
      answer = i;
      break;
    }
  }
  return answer;
}

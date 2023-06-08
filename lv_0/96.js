//가위 바위 보

//가위는 2, 바위는 0, 보는 5
//모두 이기는 순서대로 나타낸 문자열을 출력

function solution(rsp) {
  var answer = "";
  for (let i = 0; i < rsp.length; i++) {
    if (rsp[i] == 0) {
      answer += 5;
    } else if (rsp[i] == 2) {
      answer += 0;
    } else {
      answer += 2;
    }
  }
  return answer;
}

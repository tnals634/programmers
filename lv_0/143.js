//수 조작하기 2

//numLog[0]에 대해
//w : 수에 +1
//s : 수에 -1
//d : 수에 +10
//a : 수에 -10
//문자열을 return
function solution(numLog) {
  var answer = "";
  for (let i = 0; i < numLog.length - 1; i++) {
    if (numLog[i] + 1 == numLog[i + 1]) answer += "w";
    else if (numLog[i] - 1 == numLog[i + 1]) answer += "s";
    else if (numLog[i] + 10 == numLog[i + 1]) answer += "d";
    else answer += "a";
  }
  return answer;
}

//주사위의 개수

//직육면체 모양의 상자에 최대 들어갈 수있는 개수
//box[0]-> 가로 , [1] -> 세로 [2] -> 높이
//n -> 주사위(정육면체)의 모서리길이
function solution(box, n) {
  var answer = 0;
  answer += Math.floor(box[0] / n);
  answer *= Math.floor(box[1] / n);
  answer *= Math.floor(box[2] / n);
  return answer;
}

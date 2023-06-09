//간단한 식 계산하기

//문자로 식이 주어진다.
//"10 + 5" -> 15 return
function solution(binomial) {
  var answer = 0;
  let arr = [];
  arr = binomial.split(" ");
  arr[0] = Number(arr[0]);
  arr[2] = Number(arr[2]);
  if (arr[1] == "+") answer = arr[0] + arr[2];
  else if (arr[1] == "-") answer = arr[0] - arr[2];
  else if (arr[1] == "*") answer = arr[0] * arr[2];

  return answer;
}

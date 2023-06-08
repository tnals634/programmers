//0 떼기

//첫번째수가 0일경우 0이아닌 수전의 0들을 떼주기
function solution(n_str) {
  var answer = "";
  let i;
  if (n_str[0] != 0) answer = n_str;
  else {
    for (i = 0; i < n_str.length; i++) {
      if (n_str[i] != 0) break;
    }
    for (i; i < n_str.length; i++) {
      answer += n_str[i];
    }
  }
  return answer;
}

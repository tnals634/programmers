//뒤에서 5등까지

//제일 작은 수부터 5개

function solution(num_list) {
  var answer = [];
  let tmp;
  for (let i = 0; i < 5; i++) {
    for (let j = 1 + i; j < num_list.length; j++) {
      if (num_list[i] > num_list[j]) {
        tmp = num_list[i];
        num_list[i] = num_list[j];
        num_list[j] = tmp;
      }
    }
    answer[i] = num_list[i];
  }
  return answer;
}

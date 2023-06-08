//접미사 배열

//"banana"	=> ["a", "ana", "anana", "banana", "na", "nana"]
function solution(my_string) {
  var answer = [];
  let j = 0;
  let string = "";
  for (let i = my_string.length - 1; i >= 0; i--) {
    for (let k = i; k < my_string.length; k++) {
      string += my_string[k];
    }
    answer[j] = string;
    j++;
    string = "";
  }
  answer.sort();
  return answer;
}

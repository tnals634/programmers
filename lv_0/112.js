//배열 회전시키기

//배열 = [1, 2, 3]
//left -> [3, 1, 2]
//right -> [2, 3, 1]
function solution(numbers, direction) {
  var answer;
  if (direction == "left") {
    for (let i = 0; i < numbers.length - 1; i++) {
      answer = numbers[i];
      numbers[i] = numbers[i + 1];
      numbers[i + 1] = answer;
    }
  } else {
    for (let i = numbers.length - 1; i > 0; i--) {
      answer = numbers[i];
      numbers[i] = numbers[i - 1];
      numbers[i - 1] = answer;
    }
  }
  return numbers;
}

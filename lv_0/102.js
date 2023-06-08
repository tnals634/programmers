//최댓값 만들기(2)

//numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
function solution(numbers) {
  let answer = numbers[0] * numbers[1];
  var max = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1 + i; j < numbers.length; j++) {
      max = numbers[i] * numbers[j];
      if (max > answer) {
        answer = max;
      }
    }
  }
  return answer;
}

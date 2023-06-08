//숫자 찾기

//배열 num에서 k라는 숫자가 있으면
//해당 자리의 수를 출력
//num = 293183 , k = 1 , result = 3
function solution(num, k) {
  var answer = 0;
  // answer = String(num).search(k);
  // if(answer != -1) answer++;
  let arr = [];
  let arr2 = [];
  for (let i = 0; num > 0; i++) {
    arr[i] = Math.floor(num % 10);
    num = Math.floor(num / 10);
  }
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    arr2[j] = arr[i];
    if (arr2[j] == k) {
      answer = j + 1;
      break;
    }
    j++;
  }
  if (answer == 0) answer = -1;
  return answer;
}

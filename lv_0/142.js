//2차원으로 만들기

//num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고
//n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다.
//2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터
//n개씩 나눠 2차원 배열로 변경합니다.
function solution(num_list, n) {
  var answer = [];
  let num;
  let k = 0;
  let length = Math.floor(num_list.length / n);
  for (let i = 0; i < length; i++) {
    num = [];
    for (let j = 0; j < n; j++) {
      if (num_list[j] != null) {
        num[j] = num_list[j + k];
      }
    }
    answer[i] = num;
    k += n;
  }
  return answer;
}

//369게임

function solution(order) {
  var answer = 0;
  let arr = [];
  for (let i = 0; order > 0; i++) {
    arr[i] = Math.floor(order % 10);
    order = Math.floor(order / 10);
  }
  // for(let i = 0; i < arr.length; i++){
  //     if(arr[i] != 0){
  //         if(arr[i] % 3 == 0){
  //             answer++;
  //         }
  //     }
  // }
  answer = arr.filter((value) => value % 3 == 0);
  answer = answer.filter((value) => value != 0);
  answer = answer.length;
  return answer;
}

//짝수는 싫어요

//정수 n이 매개변수로 주어질 때,
// n 이하의 홀수가 오름차순으로 담긴 배열을 
//return하도록 solution 함수를 완성해주세요.
function solution(n) {
    var answer = [];
    let j = 0;
    for(let i = 0; i <= n; i++){
        if(i % 2 !== 0){
            answer[j] = i;
            j++;
        }
    }
    return answer;
}
//원소들의 곱과 합

//정수가 담긴 리스트 num_list가 주어질 때,
//모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을
//크면 0을 return하도록 solution 함수를 완성해주세요.
function solution(num_list) {
    var num1 = 1;
    let num2 = 0;
    let answer = 0;
    for(let i in num_list){
        num1 *= num_list[i];
    }
    for(let i in num_list){
        num2 += num_list[i];
    }
    num2 = num2**2;
    if(num1 < num2) answer = 1;
    return answer;
}
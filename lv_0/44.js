//n번째 원소부터

function solution(num_list, n) {
    var answer = [];
    for(let i=0; i <= num_list.length - n; i++){
        answer[i] = num_list[i+n-1];
    }
    return answer;
}
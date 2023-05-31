//n보다 커질 때까지 더하기

function solution(numbers, n) {
    var answer = 0;
    for(let i in numbers){
        
        answer += numbers[i];
        if(answer > n) break;
    }
    return answer;
}
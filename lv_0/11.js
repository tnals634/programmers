//배열의 평균값

function solution(numbers) {
    var answer = 0;
    for(let n=0;n<numbers.length;n++){
        answer += numbers[n];
    }
    answer = answer/numbers.length;
    
    return answer;
}
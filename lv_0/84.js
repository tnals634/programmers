//제곱수 판별하기

function solution(n) {
    var answer = 2;
    for(let i = 1; i**2 <=n; i++){
        if(n === i**2){
            return 1;
        }
    }
    return answer;
}
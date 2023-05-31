//자릿수 더하기

function solution(n) {
    var answer = 0;
    while(n!=0){
        answer += n%(10**1);
        n = Math.floor(n/(10**1));
    }
    return answer;
}
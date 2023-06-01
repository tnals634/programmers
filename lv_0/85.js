//주사위 게임 1

//둘다 홀수면 a**2 + b**2
//하나만 홀수면 2*(a+b)
//둘다 짝수면 |a-b|
function solution(a, b) {
    var answer = 0;
    let result_a = a%2;
    let result_b = b%2;
    if((result_a !== 0) &&(result_b !== 0)) answer = a**2 + b**2;
    else if((result_a !== 0) || (result_b !== 0)) answer = 2*(a+b);
    else {
        answer = a-b;
        if(answer < 0) answer = answer*(-1);
    }
    return answer;
}
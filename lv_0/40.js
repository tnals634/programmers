//숨어있는 숫자의 덧셈(1)

function solution(my_string) {
    var answer = 0;
    for(let i in my_string){
        if(Number(my_string[i]) + 10 > 10){
            answer += Number(my_string[i]);
        }
    }
    return answer;
}
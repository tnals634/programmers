//문자열 뒤집기

function solution(my_string) {
    var answer = '';
    for(let n = my_string.length-1; n >=0; n--){
        answer += my_string[n];
    }
    return answer;
}
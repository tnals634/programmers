//부분 문자열인지 확인하기

//부분 문자열이란 문자열에서 연속된 일부분에 해당하는 문자열을 의미합니다.
//예를 들어, 문자열 "ana", "ban", "anana", "banana", "n"는
//모두 문자열 "banana"의 부분 문자열이지만,
//"aaa", "bnana", "wxyz"는 모두 "banana"의 부분 문자열이 아닙니다.
//문자열 my_string과 target이 매개변수로 주어질 때, 
//target이 문자열 my_string의 부분 문자열이라면 1을, 
//아니라면 0을 return 하는 solution 함수를 작성해 주세요.
function solution(my_string, target) {
    var answer = 0;
    for(let i = 0; i < my_string.length; i++){
        for(let j = 0; j < target.length; j++){
            if(my_string[i+j] === target[j]){
                answer++;
            }
        }
        if(answer === target.length){
            answer = 1;
            break;
        }else answer = 0;
    }
    return answer;
}
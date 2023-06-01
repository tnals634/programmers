//문자열안에 문자열

//문자열 str1, str2가 매개변수로 주어집니다. 
//str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
function solution(str1, str2) {
    var answer = 0;
    // answer = str1.search(str2);
    // if(answer >= 0) answer = 1;
    // else answer = 2;
    for(let i = 0; i < str1.length; i++){
        for(let j = 0; j < str2.length; j++){
            if(str1[i+j] === str2[j]){
                answer++;
            }
        }
        if(answer === str2.length) break;
        else answer = 0;
    }
    if(answer !== 0) answer = 1;
    else answer = 2;
    return answer;
}
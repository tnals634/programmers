//모음 제거

function solution(my_string) {
    var answer = '';
    for(var i in my_string){
        if((my_string[i] === 'a')||(my_string[i] === 'e')||(my_string[i] === 'i')||(my_string[i] === 'o')||(my_string[i] === 'u')) answer += '';
        else answer += my_string[i];
    }
    return answer;
}
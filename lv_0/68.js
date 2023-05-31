//공백으로 구분하기 1

function solution(my_string) {
    var answer = [];
    let string = "";
    let j = 0;
    for(let i = 0; i < my_string.length; i++){
        if(my_string[i] === " "){
            answer[j] = string;
            string = "";
            j++;
            continue;
        }
        string += my_string[i];
    }
    answer[j] = string;
    return answer;
}
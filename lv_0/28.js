//특정 문자 제거하기

//문자열 my_string과 문자 letter이 매개변수로 주어집니다. 
//my_string에서 letter를 제거한 문자열을
// return하도록 solution 함수를 완성해주세요.
function solution(my_string, letter) {
    var answer = '';
    // for(let i in my_string){
    //     if(my_string[i] !== letter){
    //         answer += my_string[i];            
    //     }
    // }
    answer = my_string.replaceAll(letter, "");
    return answer;
}
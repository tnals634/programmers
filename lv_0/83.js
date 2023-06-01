//A 강조하기

//문자열 myString이 주어집니다. 
//myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고,
//"A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여
//return 하는 solution 함수를 완성하세요.
function solution(myString) {
    var answer = "";
    for(let i = 0; i < myString.length; i++){
        if(myString[i] === "a") answer += myString[i].toUpperCase();
        else if(myString[i] !== "A") answer += myString[i].toLowerCase();
        else answer += myString[i];
    }
    return answer;
}
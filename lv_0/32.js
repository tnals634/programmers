//배열 두배 만들기

//정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 
//return하도록 solution 함수를 완성해주세요.
function solution(numbers) {
    var answer = [];
    for(let n=0;n<numbers.length;n++){
        answer[n]=numbers[n]*2;
    }
    return answer;
}
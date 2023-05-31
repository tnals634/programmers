//카운트 다운

//정수 start와 end가 주어질 때, 
//start에서 end까지 1씩 감소하는 수들을 차례로 담은 리스트를
// return하도록 solution 함수를 완성해주세요.
function solution(start, end) {
    var answer = [];
    let s = start;
    for(let i = 0; i <= start - end; i++){
        answer[i] = s;
        s--;
    }
    return answer;
}
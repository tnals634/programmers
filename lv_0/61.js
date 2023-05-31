//길이에 따른 연산

//정수가 담긴 리스트 num_list가 주어질 때, 
//리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 
//return하도록 solution 함수를 완성해주세요.
function solution(num_list) {
    var answer = 0;
    if(num_list.length > 10){
        for(let n = 0; n < num_list.length; n++){
            answer+=num_list[n];
        }
        if(answer<=10){
            answer = 1;
            for(let n = 0; n < num_list.lenth; n++){
                answer *= num_list[n]
            }
        }
    }
    else {
        answer = 1;
        for(let n = 0; n < num_list.length; n++){
            
                answer *= num_list[n]
            }
    }
    return answer;
}
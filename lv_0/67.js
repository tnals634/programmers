//마지막 두 원소

//정수 리스트 num_list가 주어질 때, 
//마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을
//마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을
//추가하여 return하도록 solution 함수를 완성해주세요.
function solution(num_list) {
    var answer = [];
    let i = num_list.length - 1;
    answer = num_list;
    if(num_list[i-1] < num_list[i]){
        answer.push(num_list[i] - num_list[i-1]);
    }else if(num_list[i-1] >= num_list[i]){
        answer.push(num_list[i] * 2);
    }
    return answer;
}
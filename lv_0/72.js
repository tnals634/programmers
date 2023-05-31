//뒤에서 5등 위로

//정수로 이루어진 리스트 num_list가 주어집니다
//num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로
//담은 리스트를 return하도록 solution 함수를 완성해주세요.
function solution(num_list) {
    var answer = [];
    var tmp = 0;
    for(let i = 0; i < num_list.length - 1; i++){
        for(let j = i+1; j < num_list.length; j++){
            if(num_list[i] > num_list[j]){
                tmp = num_list[i];
                num_list[i] = num_list[j];
                num_list[j] = tmp;
            }
        }
    }
    for(let i = 0; i < num_list.length - 5; i++){
        answer[i] =num_list[i + 5];
    }
    return answer;
}
//짝수 홀수 개수

function solution(num_list) {
    var answer = [];
    let count = 0, count2 = 0;
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i]%2==0){
            count++;
        }else {
            count2++;
        }
    }
    answer[0]=count;
    answer[1]=count2;
    return answer;
}
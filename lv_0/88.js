//배열의 원소만큼 추가하기

//예: [5,1,4] -> [5,5,5,5,5,1,4,4,4,4]
function solution(arr) {
    var answer = [];
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i]; j++ ){
            answer[index] = arr[i];
            index++;
        }
    }
    return answer;
}
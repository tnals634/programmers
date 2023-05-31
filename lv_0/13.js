//중앙값 구하기

function solution(array) {
    var answer = 0;
    var tmp;
    for(let i = 0; i < array.length-1; i++){
        for(let j =i+1; j < array.length; j++){
            if(array[i] > array[j])
                {
                    tmp = array[i];
                    array[i] = array[j];
                    array[j] = tmp;
                }
        }
    }
    answer = array[Math.floor(array.length / 2)];
    return answer;
}
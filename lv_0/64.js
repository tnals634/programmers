//문자 리스트를 문자열로 변환하기

function solution(arr) {
    var answer = '';
    for(let n=0;n<arr.length;n++){
        answer+=arr[n]
    }
    return answer;
}
//더 크게 합치기

//a,b 두 정수에 대한 연산
//12 ⊕ 3 = 123
//3 ⊕ 12 = 312
//더큰값 return

function solution(a, b) {
    var answer = 0;
    let string1 = "";
    let string2 = "";
    string1 = String(a) + String(b);
    string2 = String(b) + String(a);
    if(Number(string1) > Number(string2)){
        answer = Number(string1);
    }else {
        answer = Number(string2);
    }
    
    return answer;
}
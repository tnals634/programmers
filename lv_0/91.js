//개미 군단

//장군개미 공격력 : 5, 병정개미 : 3, 일개미 : 1
//최소 개미로 쓰러뜨릴 개미 수
function solution(hp) {
    var answer = 0;
    answer += hp/5;
    hp = hp%5;
    if(hp >= 3){
        answer += hp/3;
        hp = hp%3;
    } else answer += hp;
    answer = Math.floor(answer);
    return answer;
}
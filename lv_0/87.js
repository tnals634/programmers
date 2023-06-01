//문자열 바꿔서 찾기

//"A"와 "B"로 이루어진 문자열 myString, pat이 주어짐
// pat이 myString의 부분문자열이면 1을 아니면 0을 return

function solution(myString, pat) {
    //     var answer = "";
    //     let count = 0;
    //     for(let i = 0; i < myString.length; i++){
    //         if(myString[i] === "A"){
    //             answer += "B";
    //         }
    //         else {
    //             answer += "A";
    //         }
    //     }
    //     for(let i = 0; i < myString.length; i++){
    //         for(let j = 0; j < pat.length; j++){
    //             if(answer[i+j] === pat[j]){
    //                 count++;
    //             }
    //         }
    //         if(count === pat.length) return 1;
    //         else count = 0;
    //     }
        
    //     return count;
        var answer = 0;
        let newString = "";
        
        for(let i = 0; i < myString.length; i++){
            if(myString[i] === "A"){
                newString += myString[i].replace("A", "B");
            }else {
                newString += myString[i].replace("B","A");
            }
        }
        answer = newString.search(pat);
        if(answer >= 0) answer = 1;
        else answer = 0;
        
        return answer;
    }
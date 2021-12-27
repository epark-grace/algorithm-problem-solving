//가장 긴 문자열
function solution(s){
    let answer = "";

    for (const item of s) {
        if (item.length > answer.length) answer = item;
    }

    return answer;
}

let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
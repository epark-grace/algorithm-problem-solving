//문자 찾기
function solution(s, t){
    let answer = 0;
    for (const char of s) {
        if (char === t) answer++;
    }
    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));
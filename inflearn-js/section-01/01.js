//세 수 중 최솟값
function solution(a, b, c){
    let answer;

    if (a < b) {
        if (a < c) answer = a;
        else answer = c;
    } else {
        if (b < c) answer = b;
        else answer = c;
    }

    return answer;
}

console.log(solution(2, 5, 1));
//가운데 문자 출력
function solution(s) {
    let answer;
    const middleIndex = s.length / 2;

    if (s.length % 2 !== 0) {
        answer = s[Math.floor(middleIndex)];
    } else {
        answer = s[middleIndex - 1] + s[middleIndex];
    }
    return answer;
}

console.log(solution('study'));
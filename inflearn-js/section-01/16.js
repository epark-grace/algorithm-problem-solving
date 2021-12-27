//중복 문자 제거
function solution(str) {
    let answer = "";
    const chars = [];
    s.indexOf();
    for (const char of str) {
        if (!chars.includes(char)) {
            chars.push(char);
            answer += char;
        }
    }

    return answer;
}

console.log(solution('ksekkset'));
//중복 단어 제거
function solution(str) {
    const answer = [];

    for (const word of str) {
        if (!answer.includes(word)) {
            answer.push(word);
        }
    }

    return answer;
}

let str=["good", "time", "good", "time", "student"];
console.log(solution(str));
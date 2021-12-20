//대문자 찾기
function solution(s){
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) answer++;
    }

    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));
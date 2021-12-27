//대소문자 변환
function solution(s){
    const charCodes = [];

    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) {
            charCode -= 32;
        } else if (charCode >= 65 && charCode <= 90) {
            charCode += 32;
        }

        charCodes.push(charCode);
    }

    return String.fromCharCode(...charCodes);
}

console.log(solution("StuDY"));
//대문자로 통일
function solution(s) {
    const charCodes = [];

    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) {
            charCode -= 32;
        }
        charCodes.push(charCode);
    }

    return String.fromCharCode(...charCodes);
}

let str = 'ItisTimeToStudy';
console.log(solution(str));
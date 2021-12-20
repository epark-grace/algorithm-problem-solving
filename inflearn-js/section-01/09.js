//A를 #으로
function solution(s){
    return s.replace(/A/g, '#');
}

let str="BANANA";
console.log(solution(str));
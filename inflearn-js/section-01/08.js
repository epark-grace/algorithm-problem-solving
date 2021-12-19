//일곱 난쟁이
function solution(arr){
    const sumOfAll = arr.reduce((acc, height) => acc + height, 0);
    const sumOfFakeDwarf = sumOfAll - 100;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sumOfFakeDwarf) {
                arr.splice(j, 1);
                arr.splice(i, 1);
                return arr;
            }
        }
    }
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
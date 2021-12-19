//홀수
function solution(arr){
    let min = Number.MAX_SAFE_INTEGER;

    const sum = arr.reduce((acc, num) => {
        if (num % 2 === 1) {
            acc += num;
            if (num < min) min = num;
        }
        return acc;
    }, 0);

    console.log(sum);
    console.log(min);
}

arr=[12, 77, 38, 41, 53, 92, 85];
solution(arr);
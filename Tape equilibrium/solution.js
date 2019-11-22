function solution(arr) {
    let minDiff,
        diff,
        left,
        right;
    const arrLength = arr.length;
    left = arr[0];
    right = arr.slice(1,arrLength).reduce((total, num)=> total + num);
    minDiff = Math.abs(left - right);
    for(let i = 1; i<arrLength-1; i++){
        left += arr[i];
        right -= arr[i];
        diff = Math.abs(left - right);
        if(minDiff>diff){
            minDiff=diff;
        }
    }
    return minDiff
}

solution([3, 1, 2, 4, 3]);

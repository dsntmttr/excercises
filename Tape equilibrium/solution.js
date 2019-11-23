function solution(arr) {
    let minDiff,
        diff,
        left,
        right;
    const arrLength = arr.length;
    // define initial left and right side
    left = arr[0];
    // Sum right side
    right = arr.slice(1,arrLength).reduce((total, num)=> total + num);
    // calculate difference as absolute value
    minDiff = Math.abs(left - right);
    for(let i = 1; i<arrLength-1; i++){
        // passing number from right to left
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

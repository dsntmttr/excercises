function solution(arr) {
    let missingInt = 1;
    //sort arr ascending
    arr.sort((a,b)=> a-b);
    // loop over sorted arr
    for(let i in arr){
        /* check if number is positive
           and increments missingInt if positive numbers are arithmetic progression n+1 */
        if(arr[i]>0 && arr[i]===missingInt){
            missingInt++
        }
    }
    console.log( missingInt);
}

solution([1,1,2,5,6,-5]);

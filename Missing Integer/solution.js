function solution(arr) {
    let result;
    //filter negative numbers
    arr = arr.filter(num=>num>0);
    //fix edge cases
    if(arr.length<=1){
        if(arr[0]===1){
            result = 2;
        }else {
            result = 1;
        }
    }else {
        // sort arr ascending
        arr.sort((a,b)=> a-b);
        if(arr[0]>1){
            result = 1;
        }else {
            // loop over sorted array and check for missing num by comparision
            for(let i=0; i<arr.length-1; i++){
                if(arr[i+1]-arr[i]>1){
                    result = arr[i]+1;
                    break;
                }
            }
        }
    }
    //check if no gaps
    if(result === undefined){
        return arr[arr.length-1]+1
    }else {
        return result;
    }
}

solution([1,1,3,5,6,-5]);

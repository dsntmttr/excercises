function solution(arr, iterations) {
    let result,
        reqIterations;
    const arrLength = arr.length;
    // edge cases
    if(arrLength < 2 || iterations === 0 || arrLength === iterations || iterations%arrLength === 0){
        result = arr;
    }else {
        // eliminate unnecessary iterations
        if(arrLength > iterations){
            reqIterations = iterations;
        }else {
            reqIterations = iterations%arrLength;
        }
        result = arr;
        // remove last element and push at the begining of the array
        for(let i=0; i<reqIterations; i++){
            result.unshift(result.pop())
        }
    }
    return result;
}
solution([1,2,3,4],3);

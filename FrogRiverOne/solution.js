function solution(x, arr) {
    let result,
        elePosSum=0;

    const elements = {};
    // sum of elements for arithmetic progression of "x"
    const correctElePosSum = x*(x+1)/2;
    //loop over arr and store only first unique
    for(i in arr){
        if(elements[arr[i]]===undefined && arr[i]<=x){
            elements[arr[i]]=i;
            // sum arr unique elements
            elePosSum += arr[i]
        }
    }
    //sums check
    if(elePosSum===correctElePosSum){
        // get values(arr indexes/time(s) when leaf falls) from elements object and sort them ascending
        const sortedUniqueEleIndexes = Object.values(elements)
            .map(eleIndex=>Number(eleIndex))
            .sort((a,b)=>a-b);
        result = sortedUniqueEleIndexes[sortedUniqueEleIndexes.length-1];
    }else {
        result = -1;
    }
    return result;
}

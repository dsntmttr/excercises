function solution(n, arr) {
    // create initial array with N elements of 0
    let initialArr = Array(...Array(n)).map(() => 0);
    let maxCounter = 0;
    let counter = 0;
    for(i in arr){
        if(arr[i]===n+1){
            maxCounter = counter
        }else {
            let z = arr[i];
            // check to keep O(n+m) instead of O(n*m) if I maxed all elements to maxCounter
            if(initialArr[z-1]<maxCounter){
                initialArr[z-1]=maxCounter;
            }
            initialArr[z-1]++;
            // keep track of highest counter
            if(counter<initialArr[z-1]){
                counter = initialArr[z-1];
            }
        }
    }
    //now the we last check elements and max counter once
    for(y in initialArr){
        if(initialArr[y]<maxCounter){
            initialArr[y]=maxCounter;
        }
    }
    return initialArr;
}
solution(5,[3,4,4,6,1,4,4]);

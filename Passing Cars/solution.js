function solution(arr) {
    // every car going west adds to a pair
    // for each car going east beforehand
    let pairs = 0,
        pairAcc = 0;
    for(let i in arr){
        if(arr[i]===1){
            // add all existing pairs to result on west car
            pairs+=pairAcc;
            // if the amount of pairs exceeds limit break the loop and return -1
            if(pairs>1000000000){
                pairs = -1;
                break;
            }
        }else {
            // keep incrementing on cars going east
            pairAcc++
        }
    }
    return pairs;
}
solution([0,1,0,1,1]);

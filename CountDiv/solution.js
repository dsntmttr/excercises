function solution(A, B, K) {
    let result;
    for(let i = A; i <= B; i++){
        // find lowest i in range (A,B) divisible by K
        if(i%K===0){
            // calc number of multiples of K in range (i,B) without reminder and add 1
            result = Math.floor((B-i)/K)+1;
            break;
        }
    }
    if(result===undefined){
        return 0;
    }else {
        return result;
    }
}
solution(6,11,2);

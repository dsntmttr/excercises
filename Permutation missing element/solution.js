function solution(arr) {
    const arrLength = arr.length;
    let result;
    if(arrLength<1){
        result = 1;
    }else{
        const ascArr = arr.sort((a,b)=> a-b);
        for(let i = 0; i<arrLength-1; i++){
            if(ascArr[i+1]-ascArr[i] !== 1){
                result = ascArr[i]+1;
                break;
            }
        }
        if(typeof(result)!=='number'){
            if(ascArr[0]===1){
                result = ascArr[arrLength-1]+1;
            }else {
                result = ascArr[0]-1;
            }
        }
    }
    return result;
}

solution([2,3,1,5]);

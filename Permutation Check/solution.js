function solution(arr) {
    const arrLength = arr.length;
    let correctArr = [];
    // create correct permutation array according to arr length
    for(let i=0; i<arrLength;i++){
        correctArr.push(i+1);
    }
    // sorting initial array ascending
    let sortedAscInitialArr = arr.sort((a,b)=> a-b);
    // stringify arrays for comparison purpose
    if(correctArr.toString()===sortedAscInitialArr.toString()){
        return 1;
    }else {
        return 0;
    }
}
solution([4, 1, 3, 2]);

function solution(arr) {
    // sort array ascending
    arr.sort((a,b)=>a-b);
    let arrLen = arr.length;
    // case of 2 large negative numbers
    const negTriplet = arr[0]*arr[1]*arr[arrLen-1];
    // product of 3 largest numbers
    const posTriplet = arr[arrLen-3]*arr[arrLen-2]*arr[arrLen-1];
    if(negTriplet < posTriplet){
        return posTriplet;
    }else {
        return negTriplet;
    }
}
solution([-3, 1, 2, -2, 5, 6]);

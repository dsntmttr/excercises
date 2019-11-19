function solution(arr) {
    let result = 0;
    // XOR takes care of the pairs returning odd num
    for (let element of arr) {
        result ^= element;
    }
    return result;
}
solution([7,9,3,9,9,3,9]);

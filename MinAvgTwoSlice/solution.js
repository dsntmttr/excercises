function solution(arr) {
  /*
    according to math I looked up on google
    (1) There must be some slices, with length of two or three, having the minimal average value among all the slices.
    (2) And all the longer slices with minimal average are built up with these 2-element and/or 3-element small slices.
    Based on this I have created the following solution
  */
  // init with first two
  let curSlice = arr[0]+arr[1],
      minAvgSlice = curSlice/2,
      start = 0,
      curAvgSlice;
  const arrLen = arr.length;
  if(arrLen>2){
    for(let i = 2; i<arrLen; i++){
      // add 3rd element
      curSlice += arr[i];
      curAvgSlice = curSlice/3;
      if(curAvgSlice < minAvgSlice){
        minAvgSlice = curAvgSlice;
        start = i-2;
      }
      // remove 1st element, to check remaining two
      curSlice -= arr[i-2];
      curAvgSlice = curSlice/2;
      if(curAvgSlice < minAvgSlice){
        minAvgSlice = curAvgSlice;
        start = i-1;
      }
    }
  }
  // return starting position of minAvgSlice
  return start
}
solution([4, 2, 2, 5, 1, 5, 8]);

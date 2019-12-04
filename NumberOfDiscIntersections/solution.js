function solution(A) {
  // for each element create array of [startPoint,endPoint]
  let discsRange = A.map((radius, i)=>[i-radius,i+radius]);
  // sort by start points of discs
  discsRange.sort((a,b)=>a[0]-b[0]);
  const aLen = A.length;
  let counter = 0;

  for(let i = 0; i < aLen; i++){
    for(let j = i+1; j < aLen; j++){
      // compare prev disc endPoint with following startPoint
      if( discsRange[i][1] >= discsRange[j][0]){
        counter++;
        if(counter>10000000){
          return -1;
        }
      }else {
        break;
      }
    }
  }
  return counter;
}
solution([1,5,2,1,4,0]);

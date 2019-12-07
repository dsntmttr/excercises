function solution(A, B) {
  let upstreamAlive=0,
      downstreamFish=[],
      downstreamCounter=0;
  // loop over all fish
  for(let i = 0, arrLen = A.length; i<arrLen; i++){
    // add downstream fish to array, for possible encounters
    if(B[i]===1){
      downstreamCounter = downstreamFish.push(A[i]);
    }else {
      // check for encouter, else upstreamFish survives
      if(downstreamCounter>0){
        // loop over downstreamFish
        for(let j=0; j<downstreamCounter; j++){
          // if upstreamFish gets eaten break loop, else pop downstreamFish
          if(downstreamFish[downstreamCounter-1-j] > A[i]){
            break;
          }else {
            downstreamFish.pop();
          }
        }
        // update alive downstream fish counter
        downstreamCounter = downstreamFish.length;
        // if all downstream fish are dead, upstreamFish survives
        if(downstreamCounter === 0){
          upstreamAlive++
        }
      }else {
        upstreamAlive++
      }
    }
  }
  //return sum of all alive fish
  return upstreamAlive+downstreamCounter;
}
solution([4, 3, 2, 1, 5], [1, 1, 1, 0, 0]);

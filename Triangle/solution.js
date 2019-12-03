function solution(A) {
  let P,Q,R;
  let result = 0;
  // sort array ascending takes care of  A[Q] + A[R] > A[P] and A[R] + A[P] > A[Q], because R is the largest
  A.sort((a,b)=>a-b);
  for(let i = 0, arrLen = A.length ; i < arrLen-2 ; i++){
    P= i;
    Q= i+1;
    R= i+2;
    // check the 3rd rule
    if(A[P]+A[Q]>A[R]){
      result = 1;
      break;
    }
  }
  return result;
}

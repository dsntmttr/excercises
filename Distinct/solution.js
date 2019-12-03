function solution(A) {
  // Set stores unique values and deconstruct into array
  const uniqueA = [...new Set(A)];
  // return num of distinct elements
  return uniqueA.length
}

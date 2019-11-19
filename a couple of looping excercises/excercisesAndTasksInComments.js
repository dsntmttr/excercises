

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99]; // should return 100
const array2 = ['a', 3, 4, 2]; // should return 4
const array3 = []; // should return 0

function biggestNumberInArray1(arr) {
  let biggestNum;
  for(num in arr){
    let currentNumb = arr[num];
    if(!isNaN(currentNumb)){
      if(biggestNum === undefined){
        biggestNum = currentNumb;
      } else {
        biggestNum < currentNumb ? biggestNum = currentNumb: false;
      }
    }
  }
  return biggestNum || 0;
}

function biggestNumberInArray2(arr) {

    return arr.reduce((prev, curr) => (prev > curr) ? prev : curr,0);

}

function biggestNumberInArray3(arr) {
    let biggestNum;
    arr.forEach(num => {
      if(biggestNum === undefined && !isNaN(num)){
        biggestNum = num;
      } else if(!isNaN(num)) {
        biggestNum < num ? biggestNum = num: false;
      }
    });
    return biggestNum || 0;
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
};

function checkBasket(basket, lookingFor) {
  let result = false;
  for(let item in basket){
    if(item === lookingFor){
      result = true;
      break;
    }
  }
  return result;
}

/*
Question 3:
Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
make a function that organizes these into individual array that is ordered.
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
*/
const arr1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const arr2 = [1,2,4,591,392,"5",391,2,5,10,2,1,1,1,20,20,"1","2"];

const sortNumArrAsc = (arr) => arr.sort((a,b) => a-b);
const groupArrNum = (arr) => {
  const groupedArr = [];
  const tempArr = [];
  const lastIdx = arr.length-1;
  let tempNum;
  let prev;
  let amount = 0;
  for(num in arr){
    tempNum = arr[num];
    if(tempNum===prev){
      amount++;
      prev = tempNum;
      tempArr.push(tempNum);
    } else if( !(Number(num) === 0) ){
        if(amount > 0){
          tempArr.push(prev);
          groupedArr.push([...tempArr]);
          tempArr.length = 0;
          amount = 0;
        } else {
          groupedArr.push(prev);
        }
      prev = tempNum;
    } else {
      prev = tempNum;
    }
    if( Number(num) === lastIdx){
      if(amount > 0){
        groupedArr.push(tempArr);
      } else {
        groupedArr.push(tempNum);
      }
    }
  }
  return groupedArr;
};
const extractType = (arr,type) => {
  const typeArr = [];
  for(i in arr){
    if(typeof(arr[i]) === type){
      typeArr.push(arr[i]);
    }
  }
  return typeArr;
};

const solutionQuestion3 = (array) => {
  const numArr = extractType(array, "number");
  const stringArr = extractType(array, "string");
  const sortedNumArr = sortNumArrAsc(numArr);
  const groupedNumArr = groupArrNum(sortedNumArr);
  const result = [];
  result.push(groupedNumArr);
  result.push(stringArr);
  return result;

};
/*
Question 4:
Write a javascript function that takes an array of numbers and a target number.
The function should find two different numbers in the array that,
when added together, give the target number.
For example: answer([1,2,3], 4)should return [1,3]
*/
const uniqueNumArr2 = (array) => [...new Set(array)];
const question4 = (array, targetNumber) => {
  const numArr = extractType(array, "number");
  const sortedNumArr = sortNumArrAsc(numArr);
  const uniqueNumArray = uniqueNumArr2(sortedNumArr);
  const componentsArr = [];
  for(let i=0; i<uniqueNumArray.length-1;i++){
    for(let y=i+1; y<uniqueNumArray.length;y++){
      if (uniqueNumArray[i]+uniqueNumArray[y]===targetNumber){
        componentsArr.push([uniqueNumArray[i],uniqueNumArray[y]]);
      }
    }
  }
  return componentsArr;
};

question4([1,2,3], 4);

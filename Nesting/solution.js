function solution(S) {
    let openBracketCounter = 0,
        curBracket;
    // loop over string elements
    for(let i=0, arrLen=S.length;i<arrLen;i++){
        curBracket = S.charAt(i);
        // return immediately when no open brackets and current bracket is a closing one
        if(openBracketCounter===0 && curBracket===")"){
            return 0
        }else if(curBracket===")"){
            openBracketCounter--;
        }else {
            openBracketCounter++;
        }
    }
    // returns 1 if properly nested or string is empty
    if(openBracketCounter!==0){
        return 0;
    }else {
        return 1;
    }
}

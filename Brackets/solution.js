function solution(S) {
    let sLen = S.length;
    // check if string length is even, otherwise can't be closed
    if(sLen%2 === 0){
        let curEle,
            openersCounter=0,
            openers = [];
        const brackets = {
            "{":"}",
            "(":")",
            "[":"]"
        };
        for(let i = 0; i<sLen;i++ )  {
            curEle = S.charAt(i);
            // if opening bracket, add to openers array
            if(brackets.hasOwnProperty(curEle)){
                openers.push(curEle);
                openersCounter++;
            } else {
                // check if closing bracket matches last opening bracket
                if(curEle===brackets[openers[openersCounter-1]]){
                    openers.pop();
                    openersCounter--;
                }else {
                    return 0;
                }
            }
        }
        if(openersCounter === 0){
            return 1;
        } else {
            return 0;
        }
    }else {
        return 0;
    }
}

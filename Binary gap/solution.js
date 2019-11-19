function solution(number) {
    // change number to binary
    const binaryNumber = (number).toString(2);
    let acc = 0,
        highestTotal = 0,
        countZeros = false;
    // destructure binary to array, loop over each symbol
    [...binaryNumber].forEach( symbolStr => {
        let symbol = Number(symbolStr);
        // "0"s are ignored until first "1", gap is returned only if there is "1" to close the gap of "0"s
        if(symbol === 1){
            if(acc === 0) {
                //enable counting gap
                countZeros = true
            }
            // save gap if highest
            if(acc > 0 && acc > highestTotal){
                highestTotal = acc;
            }
            // reset gap counter
            acc = 0;
        } else if(symbol === 0 && countZeros === true){
            // count gap
            acc++;
        }
    });
    return highestTotal;
}

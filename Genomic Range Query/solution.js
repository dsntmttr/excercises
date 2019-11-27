function solution(s, p, q) {
    let result = [],
        range;
    for(let i in p){
        // slice part of dna
        range = s.slice(p[i],q[i]+1);
        // look for first appearance from the lowest to keep complexity to minimum
        // then push dna factor to result array
        if(range.indexOf('A')!==-1){
            result.push(1);
        }else if(range.indexOf('C')!==-1){
            result.push(2);
        }else if(range.indexOf('G')!==-1){
            result.push(3);
        }else {
            result.push(4);
        }
    }
    return result;
}

solution('CAGCCTA', [2, 5, 0], [4, 5, 6]);

const convertHexToNum = (hex) => parseInt(hex,16);
const convertNumToHex = (num) => (num).toString(16);
const rgbRegex = /[Rr][Gg][Bb]\(\s*(?:(?:\d{1,2}|1\d\d|2(?:[0-4]\d|5[0-5]))\s*,?){3}\)$/;
const hexRegex = /^#[0-9a-f]{3}([0-9a-f]{3})?$/;
const colorConverter = (color) => {
    let result,
        blue,
        green,
        red;
    if(hexRegex.test(color)){
        red = convertHexToNum(color.substring(1,3));
        green = convertHexToNum(color.substring(3,5));
        blue = convertHexToNum(color.substring(5,7));
        result = `rgb(${red},${green},${blue})`
    }else if(rgbRegex.test(color)) {
        let rgbNumArr = color.slice(4,-1).split(",");
        red = convertNumToHex(Number(rgbNumArr[0]));
        green = convertNumToHex(Number(rgbNumArr[1]));
        blue = convertNumToHex(Number(rgbNumArr[2]));
        result = `#${red}${green}${blue}`
    }else {
        result = "wrong input";
    }
    return result;
};

colorConverter('#f1f1f1');

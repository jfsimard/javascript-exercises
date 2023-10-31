const repeatString = function(word, num) {
    if(num < 0) return "ERROR";
    let str = "";
    
    for (let i = 1; i <= num; i++) {
        str += word; 
    }
    return str;
};
//repeatString('la', 10);
// Do not edit below this line
module.exports = repeatString;

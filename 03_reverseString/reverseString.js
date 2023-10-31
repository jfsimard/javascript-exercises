const reverseString = function(str) {
let backStr = "";
for (let i = 1; i <= str.length; i++) {
    backStr += str.substr(-i,1);
}
 return backStr;
};

// Do not edit below this line
module.exports = reverseString;

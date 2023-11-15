const palindromes = function (str) {
    const trimedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const revStrArr = Array.from(trimedStr).reverse();
    const revStr = revStrArr.toString().replace(/[^a-z0-9]/g, "");
    if(revStr === trimedStr)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = palindromes;

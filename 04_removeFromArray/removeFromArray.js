const removeFromArray = function(arr, ...myArgs) {
    const newArr = [];
        arr.forEach(item => {
            if(!myArgs.includes(item)) {
                newArr.push(item); 
            }
        });
        return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

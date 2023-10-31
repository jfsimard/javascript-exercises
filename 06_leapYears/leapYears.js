const leapYears = function(year) {
    let intYear = Math.floor(Number(year));
	if( (intYear % 4 === 0 && intYear % 100 != 0) || intYear % 400 === 0)
		return true;
	else return false;
};

// Do not edit below this line
module.exports = leapYears;

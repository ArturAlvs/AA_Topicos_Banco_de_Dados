var DateModel = require('./date.model.js');

var todaysDate = getDate2();

console.log(todaysDate);






//Functions-----------------------------------------
function getDate2() {
	var todaysDate = new Date();
	var dd = todaysDate.getDate();
	var mm = todaysDate.getMonth()+1; //January is 0!
	var yyyy = todaysDate.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 

	todaysDate = dd+'-'+mm+'-'+yyyy;

	return todaysDate;
}
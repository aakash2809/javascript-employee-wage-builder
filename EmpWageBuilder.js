
var IS_FULL_TIME = 1;  //constatnt
var WAGE_PER_HOUR = 20;  //wage per hour
var FULL_DAY_HOUR = 8;  //Number of fixed Hours perday
var calculateDailyWage = 0;

console.log("           Welcome to EmployeeWage Computation System                 ");
console.log("----------------------------------------------------------------------");

var empCheck = Math.floor(Math.random() * 10) % 2; //Employee status computation

if (empCheck == IS_FULL_TIME) {
    console.log("Employee is Present");
} else {
    console.log("Employee is not Present");
}

calculateDailyWage = (FULL_DAY_HOUR * WAGE_PER_HOUR); //daily full day wage camputation
console.log("Employee daily Full day wage - " + calculateDailyWage);


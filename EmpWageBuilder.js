
const IS_PRESENT = 1; //default present status
const WAGE_PER_HOUR = 20; //wage per hour
const FULL_DAY_HOUR = 8; //Number of fixed Hours for full day
const PART_TIME_HOUR = 4; //Number of fixed Hours for half day
var calculateDailyWage = 0;

console.log("           Welcome to EmployeeWage Computation System                 ");
console.log("----------------------------------------------------------------------");

var empAttendanceCheck = Math.floor(Math.random() * 10) % 2; //Employee status computation

if (empAttendanceCheck == IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is not Present");
}

calculateDailyWage = (FULL_DAY_HOUR * WAGE_PER_HOUR); //daily full day wage camputation
console.log("Employee daily Full day wage - " + calculateDailyWage);

calculateDailyWage = (PART_TIME_HOUR * WAGE_PER_HOUR); //daily part time wage camputation
console.log("Employee daily Part time day wage - " + calculateDailyWage);


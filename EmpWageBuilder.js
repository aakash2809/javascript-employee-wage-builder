
const IS_PRESENT = 1; //default present status
const WAGE_PER_HOUR = 20; //wage per hour
const FULL_DAY_HOUR = 8; //Number of fixed Hours for full day
const PART_TIME_HOUR = 4; //Number of fixed Hours for half day
var calculateDailyWage = 0; //Variable to assign calculated daily wage
var employeeStatus; //Variable to assign random genration key for half day or full
var dayHours;

//To find how many hours work done by emmployee
function getWorkPerDay(employeeStatus) {
    let workDone = 0;
    switch (employeeStatus) {
        case 0:
            workDone = FULL_DAY_HOUR;
            break;
        case 1:
            workDone = PART_TIME_HOUR;
            break;

    }
    return workDone;
}



console.log("           Welcome to EmployeeWage Computation System                 ");
console.log("----------------------------------------------------------------------");

var empAttendanceCheck = Math.floor(Math.random() * 10) % 2; //Employee status computation

if (empAttendanceCheck == IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is not Present");
}


employeeStatus = (Math.floor(Math.random() * 10) % 2); // key genration for half day or full day
dayHours = getWorkPerDay(employeeStatus);





calculateDailyWage = (FULL_DAY_HOUR * WAGE_PER_HOUR); //daily full day wage camputation
console.log("Employee daily Full day wage - " + calculateDailyWage);

calculateDailyWage = (PART_TIME_HOUR * WAGE_PER_HOUR); //daily part time wage camputation
console.log("Employee daily Part time day wage - " + calculateDailyWage);


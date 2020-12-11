const IS_PRESENT = 1; // constant to check whether present or absent
const WAGE_PER_HOUR = 20; //wage per hour
const FULL_DAY_HOUR = 8; //Number of fixed Hours for full day
const PART_TIME_HOUR = 4; //Number of fixed Hours for half day
const TOTAL_WORKING_DAYS_PER_MONTH = 20;//Total no of days in month 
const TOTAL_WORKING_HOURS_PER_MONTH = 100;//Maximum number of working hours in month
var calculateDailyWage = 0; //Variable to assign calculated daily wage
var workigHoursCompleted = 0; //Number of hours completed by Employee
var dayHours; //Number of hours work done.
var numberOfHalfDays = 0;//variable to store number of half days
var numberOfFulldays = 0;//variable to store number of full days
var count = 0;//Varible to track count to validate condition
var numberofPresent = 0;//Variable to track number of presents
var numberOfAbsent = 0;//Variable to track number of abasents

//To find how many hours work done by emmployee
function getWorkPerDay(employeeStatus) {
    var workDone = 0;
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

// loop till working days and hours per month 
while (count < TOTAL_WORKING_DAYS_PER_MONTH && workigHoursCompleted < TOTAL_WORKING_HOURS_PER_MONTH) {

    let empCheck = Math.floor(Math.random() * 10) % 2;// computation

    if (empCheck == IS_PRESENT) {
        numberofPresent++;

        let employeeStatus = (Math.floor(Math.random() * 10) % 2); // key genration for half day or full

        // counting number of full days and half days
        if (employeeStatus == 0)
            numberOfHalfDays++;
        else
            numberOfFulldays++;

        let dayHours = getWorkPerDay(employeeStatus);
        calculateDailyWage = calculateDailyWage + (dayHours * WAGE_PER_HOUR);
    }

    else
        numberOfAbsent++;
    count++;

}

console.log("Number of days presents  - " + numberofPresent);
console.log("total of days absents    - " + numberOfAbsent);
console.log("total half working days  - " + numberOfHalfDays);
console.log("total full working days  - " + numberOfFulldays);
console.log("total wage               - " + calculateDailyWage);



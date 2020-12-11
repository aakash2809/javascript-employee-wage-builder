const WAGE_PER_HOUR = 20; //wage per hour
const FULL_DAY_HOUR = 8; //Number of fixed Hours for full day
const PART_TIME_HOUR = 4; //Number of fixed Hours for half day
const TOTAL_WORKING_DAYS = 20;
var calculateDailyWage = 0; //Variable to assign calculated daily wage
var dayHours; //Number of hours work done.
var numberOfDaysDonebyEmployee = 0;// total working days
var numberOfHalfDays = 0;
var numberOfFulldays = 0;
var count = 0;

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

// loop till working days per month
while (count < TOTAL_WORKING_DAYS) {
    let employeeStatus = (Math.floor(Math.random() * 10) % 2); // key genration for half day or full day

    // counting number of full days and half days
    if (employeeStatus == 0)
        numberOfHalfDays++;
    else
        numberOfFulldays++;

    let dayHours = getWorkPerDay(employeeStatus);
    calculateDailyWage = calculateDailyWage + (dayHours * WAGE_PER_HOUR);
    count++;

}

numberOfDaysDonebyEmployee = numberOfFulldays + numberOfHalfDays;// total working days computation

console.log("total half working days - " + numberOfHalfDays);
console.log("total full working days - " + numberOfFulldays);
console.log("total working days      - " + numberOfDaysDonebyEmployee);
console.log("total wage              - " + calculateDailyWage);




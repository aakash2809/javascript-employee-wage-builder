const IS_PRESENT = 1;
const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;
const PART_TIME_HOUR = 4;
const TOTAL_WORKING_DAYS_PER_MONTH = 20;
const TOTAL_WORKING_HOURS_PER_MONTH = 100;

var calculateDailyWage = 0;
var workigHoursCompleted = 0;
var numberOfHalfDays = 0;
var numberOfFulldays = 0;
var trackCountNumberOFdays = 0;
var numberofPresent = 0;
var numberOfAbsent = 0;

/**
 * @description this function will return  how many hours work done by emmployee
*/
getWorkPerDay = (employeeStatus) => {
    var workDone = 0;

    switch (employeeStatus) {
        case 0:
            workDone = FULL_DAY_HOUR;
            break;
        case 1:
            workDone = PART_TIME_HOUR;
            break;
        default:
            console.log("employee status key not matched with cases");
    }
    return workDone;
}

/**
 * @description  Computaion ends based on total working days per months
 * and total working hours per months
 * Computation of total wage based on half days and full days
*/
main = () => {
    console.log("Welcome to EmployeeWage Computation System ");

    while (trackCountNumberOFdays < TOTAL_WORKING_DAYS_PER_MONTH && workigHoursCompleted < TOTAL_WORKING_HOURS_PER_MONTH) {
        let empCheck = Math.floor(Math.random() * 10) % 2;

        if (empCheck == IS_PRESENT) {
            numberofPresent++;
            let employeeStatus = (Math.floor(Math.random() * 10) % 2);

            // Counting number of full days and half days
            employeeStatus == 0 ? numberOfHalfDays++ : numberOfFulldays++

            let dayHours = getWorkPerDay(employeeStatus);
            calculateDailyWage = calculateDailyWage + (dayHours * WAGE_PER_HOUR);
        } else {
            numberOfAbsent++;
        }
        trackCountNumberOFdays++;
    }

    console.log("Number of days presents  - " + numberofPresent);
    console.log("total of days absents    - " + numberOfAbsent);
    console.log("total half working days  - " + numberOfHalfDays);
    console.log("total full working days  - " + numberOfFulldays);
    console.log("total wage               - " + calculateDailyWage);
}

main();
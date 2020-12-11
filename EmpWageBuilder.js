const IS_PRESENT = 1;
const FULL_DAY_HOUR = 8;
const PART_TIME_HOUR = 4;

var calculateDailyWage = 0;
var workingHoursCompleted = 0;
var numberOfHalfDays = 0;
var numberOfFulldays = 0;
var workingDaysCompleted = 0;
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
 * @description  This function compute daily wage based on empployee attendance status 
 * and then return updated wage as per attendance
 * It also computation of total wage based on half days and full days
*/
computeEmpWage = (empAttandanceStatus, WAGE_PER_HOUR) => {
    if (empAttandanceStatus == IS_PRESENT) {
        numberofPresent++;
        let empDayStatus = (Math.floor(Math.random() * 10) % 2);
        empDayStatus == 0 ? numberOfHalfDays++ : numberOfFulldays++

        dayHours = getWorkPerDay(empDayStatus);
        workingHoursCompleted = workingHoursCompleted + dayHours;

        workingHoursCompleted > 100 ? workingHoursCompleted = 100 : workingHoursCompleted;

        calculateDailyWage = calculateDailyWage + (dayHours * WAGE_PER_HOUR);
    } else {
        numberOfAbsent++;
    }

    return calculateDailyWage;
}

/**
 * @description  Computaion ends based on total working days per months
 * and total working hours per months
 * Computation of total wage delegated to a seprate function
 * Print the valuable results
*/
main = (companyName, TOTAL_WORKING_DAYS_PER_MONTH, TOTAL_WORKING_HOURS_PER_MONTH, WAGE_PER_HOUR) => {
    while (workingDaysCompleted < TOTAL_WORKING_DAYS_PER_MONTH && workingHoursCompleted < TOTAL_WORKING_HOURS_PER_MONTH) {
        let empAttandanceStatus = (Math.floor(Math.random() * 10) % 2);
        calculateDailyWage = computeEmpWage(empAttandanceStatus, WAGE_PER_HOUR);
        workingDaysCompleted++;
    }

    console.log("Company Name             - " + companyName);
    console.log("Number of days presents  - " + numberofPresent);
    console.log("total of days absents    - " + numberOfAbsent);
    console.log("total half working days  - " + numberOfHalfDays);
    console.log("total full working days  - " + numberOfFulldays);
    console.log("Number of hours completed- " + workingHoursCompleted);
    console.log("total wage               - " + calculateDailyWage);
}

console.log("Welcome to EmployeeWage Computation System ");
main("Airtel", 20, 100, 20);
console.log();
main("Dmart", 30, 200, 40);
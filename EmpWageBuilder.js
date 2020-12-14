class CompanyEmpWage {
    PART_TIME_HOUR = 4;
    FULL_DAY_HOUR = 8;
    TOTAL_WORKING_DAYS_PER_MONTH;
    WAGE_PER_HOUR;
    TOTAL_WORKING_HOURS_PER_MONTH;
    IS_PRESENT = 1;

    companyName = null;
    calculateDailyWage = 0;
    workingHoursCompleted = 0;
    numberOfHalfDays = 0;
    numberOfFulldays = 0;
    workingDaysCompleted = 0;
    numberofPresent = 0;
    numberOfAbsent = 0;
    dailyWage = new Array();
    index = 0;

    constructor(companyName, TOTAL_WORKING_DAYS_PER_MONTH, TOTAL_WORKING_HOURS_PER_MONTH, WAGE_PER_HOUR) {
        this.companyName = companyName;
        this.TOTAL_WORKING_DAYS_PER_MONTH = TOTAL_WORKING_DAYS_PER_MONTH;
        this.WAGE_PER_HOUR = WAGE_PER_HOUR;
        this.TOTAL_WORKING_HOURS_PER_MONTH = TOTAL_WORKING_HOURS_PER_MONTH;
    }

    //This function will return  how many hours work done by emmployee
    getWorkPerDay = (employeeStatus) => {
        var workDone = 0;
        (employeeStatus == 1) ? (workDone = this.FULL_DAY_HOUR) : (workDone = this.PART_TIME_HOUR);
        return workDone;
    }

    //This function having the main logic to calculate wage  
    wageCalculator = (empAttandanceStatus, WAGE_PER_HOUR) => {
        if (empAttandanceStatus == this.IS_PRESENT) {
            this.numberofPresent++;
            let empDayStatus = (Math.floor(Math.random() * 10) % 2);
            (empDayStatus == 0) ? this.numberOfHalfDays++ : this.numberOfFulldays++
            let dayHours = this.getWorkPerDay(empDayStatus);

            this.dailyWage[this.index] = (dayHours * WAGE_PER_HOUR);
            this.index++;

            this.workingHoursCompleted = this.workingHoursCompleted + dayHours;

            (this.workingHoursCompleted > this.TOTAL_WORKING_HOURS_PER_MONTH) ?
                (this.workingHoursCompleted = this.TOTAL_WORKING_HOURS_PER_MONTH) : (this.workingHoursCompleted);

            this.calculateDailyWage = this.calculateDailyWage + (dayHours * WAGE_PER_HOUR);
        } else {
            this.numberOfAbsent++;
        }

        return this.calculateDailyWage;
    }

    /**
     * Computation ends based on total working days per months
     * and total working hours per months
     * Computation of total wage delegated to a seprate function
     * Print the valuable results
    */
    computeEmpWage = () => {
        while (this.workingDaysCompleted < this.TOTAL_WORKING_DAYS_PER_MONTH && this.workingHoursCompleted < this.TOTAL_WORKING_HOURS_PER_MONTH) {
            let empAttandanceStatus = (Math.floor(Math.random() * 10) % 2);
            this.calculateDailyWage = this.wageCalculator(empAttandanceStatus, this.WAGE_PER_HOUR);
            this.workingDaysCompleted++;
        }
    }

    //This method is printing the daily wage and the total wage of employee for a month
    showEmpDailyWage = () => {
        console.log("\n" + this.companyName + " :");
        for (let i = 0; i < this.index; i++) {
            console.log("Day:" + (i + 1) + " Wage " + this.dailyWage[i]);
        }
        console.log("Total wage of month : " + this.calculateDailyWage + "\n");
    }
}

//This method is resposible to build wages for different companies
empWageBuilder = () => {
    Airtel = new CompanyEmpWage("Airtel", 20, 100, 20);
    Dmart = new CompanyEmpWage("Dmart", 30, 200, 40);
    var totalWageOfCompnies = new Array();

    Airtel.computeEmpWage();
    totalWageOfCompnies.push(Airtel.companyName + ": " + Airtel.calculateDailyWage + " ");
    Airtel.showEmpDailyWage();

    Dmart.computeEmpWage();
    totalWageOfCompnies.push(Dmart.companyName + ": " + Dmart.calculateDailyWage + " ");
    Dmart.showEmpDailyWage();

    console.log(totalWageOfCompnies);
}

empWageBuilder();


var IS_FULL_TIME = 1;  //constatnt

console.log("           Welcome to EmployeeWage Computation System                 ");
console.log("----------------------------------------------------------------------");

var empCheck = Math.floor(Math.random() * 10) % 2; //Employee status computation

if (empCheck == IS_FULL_TIME) {
    console.log("Employee is Present");
} else {
    console.log("Employee is not Present");
}

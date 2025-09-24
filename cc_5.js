// CC 5

// Employees Array
let employees = [
    {
        name: "Spongebob",
        hourlyRate: 14,
        hoursWorked: 60
    },
    {
        name: "Patrick",
        hourlyRate: 20,
        hoursWorked: 10
    },
    {
        name: "Squidward",
        hourlyRate: 30,
        hoursWorked: 30
    }
]

// Base Pay Function
function calculateBasePay(rate, hours) {
    let validHours = Math.min(hours, 40)
    return rate * validHours
}

// Overtime Pay Function
function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        let overtimeHours = hours - 40;
        return overtimeHours * (rate * 1.5);
    }
        else {
        return 0;
    }
}
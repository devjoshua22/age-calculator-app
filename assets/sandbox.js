// Age Calculator JavaScript
// This script calculates age based on user input and displays the result.
// It includes validation and clear comments for beginners.

// Get references to input fields and error message elements
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const dayError = document.getElementById('day-error');
const monthError = document.getElementById('month-error');
const yearError = document.getElementById('year-error');

// Get references to result display elements
const resultYears = document.getElementById('result-years');
const resultMonths = document.getElementById('result-months');
const resultDays = document.getElementById('result-days');

// Get the form element
const ageForm = document.getElementById('age-form');

// Helper function to check for leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Helper function to get days in a month
function getDaysInMonth(month, year) {
    if (month === 2) {
        return isLeapYear(year) ? 29 : 28;
    }
    const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    return daysInMonth[month - 1];
}

// Validate user input and show error messages if needed
function validateInput(day, month, year) {
    let valid = true;
    const currentYear = new Date().getFullYear();
    // Reset error messages
    dayError.textContent = '';
    monthError.textContent = '';
    yearError.textContent = '';
    dayInput.style.borderColor = '';
    monthInput.style.borderColor = '';
    yearInput.style.borderColor = '';

    // Validate year
    if (!year || year < 1900 || year > currentYear) {
        yearError.textContent = 'Enter a valid year (1900 to ' + currentYear + ')';
        yearInput.style.borderColor = 'red';
        valid = false;
    }
    // Validate month
    if (!month || month < 1 || month > 12) {
        monthError.textContent = 'Enter a valid month (1-12)';
        monthInput.style.borderColor = 'red';
        valid = false;
    }
    // Validate day
    const maxDay = getDaysInMonth(month, year);
    if (!day || day < 1 || day > maxDay) {
        dayError.textContent = `Enter a valid day (1-${maxDay}) for month ${month}`;
        dayInput.style.borderColor = 'red';
        valid = false;
    }
    // Validate that the date is not in the future
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    if (birthDate > today) {
        yearError.textContent = 'Birth date cannot be in the future';
        yearInput.style.borderColor = 'red';
        valid = false;
    }
    return valid;
}

// Calculate age based on input date and current date
function calculateAge(day, month, year) {
    const today = new Date();
    let years = today.getFullYear() - year;
    let months = today.getMonth() + 1 - month;
    let days = today.getDate() - day;

    // Adjust if days are negative
    if (days < 0) {
        months--;
        const prevMonth = today.getMonth() === 0 ? 12 : today.getMonth();
        const prevYear = today.getMonth() === 0 ? today.getFullYear() - 1 : today.getFullYear();
        days += getDaysInMonth(prevMonth, prevYear);
    }
    // Adjust if months are negative
    if (months < 0) {
        years--;
        months += 12;
    }
    return { years, months, days };
}

// Handle form submission
ageForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page
    // Get values from input fields
    const day = parseInt(dayInput.value, 10);
    const month = parseInt(monthInput.value, 10);
    const year = parseInt(yearInput.value, 10);
    // Validate input
    if (validateInput(day, month, year)) {
        // Calculate age
        const age = calculateAge(day, month, year);
        // Display result
        resultYears.textContent = age.years;
        resultMonths.textContent = age.months;
        resultDays.textContent = age.days;
    } else {
        // If not valid, clear result
        resultYears.textContent = '--';
        resultMonths.textContent = '--';
        resultDays.textContent = '--';
    }
});

/*
  Comments for beginners:
  - This script listens for the form submission and prevents the default page reload.
  - It validates the input for day, month, and year, including leap years and future dates.
  - If the input is valid, it calculates the age and displays it.
  - If the input is invalid, it shows helpful error messages and clears the result.
*/



















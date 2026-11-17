// JavaScript Date and Time
// JavaScript provides a built-in Date object to work with dates and time. It allows us to get the current date, create custom dates, retrieve individual date/time values, and format dates according to different locales.

// 1. Creating a Date Object
// We can create a Date object using the new Date() constructor.
let myDate = new Date();
console.log(myDate.toString()); // Converts the date into a complete date and time string.
console.log(myDate.toDateString()); // Returns only the date in readable format.
console.log(myDate.toLocaleString()); // Returns the date and time in a locale-specific format.
console.log(typeof myDate); // object - Displays the current date and time.

// 2. Creating a Date Object with Specific Date and Time
// We can create a Date object by passing specific date and time values.
const specificDate = new Date(2023, 5, 15, 10, 30, 0); // Year, Month (0-11), Day, Hour, Minute, Second
console.log(specificDate);

// 3. Retrieving Date and Time Values
// We can retrieve individual date and time values using various methods.
console.log("Year:", myDate.getFullYear());
console.log("Month:", myDate.getMonth() + 1); // Months are zero-based (0-11)
console.log("Date:", myDate.getDate());
console.log("Day of the Week:", myDate.getDay());
console.log("Hours:", myDate.getHours());
console.log("Minutes:", myDate.getMinutes());
console.log("Seconds:", myDate.getSeconds());
console.log("Milliseconds:", myDate.getMilliseconds());

// 4. Date.now() and Timestamps
// Date.now() returns the current timestamp (milliseconds since Unix Epoch).
let nCreatedDate = new Date("05-23-2024");
let myTimeStamp = Date.now(); // Returns the current timestamp in milliseconds.
console.log(myTimeStamp);
console.log(nCreatedDate.getTime()); // Returns the timestamp of a particular Date object in milliseconds.
console.log(Math.floor(Date.now() / 1000)); // Returns the current timestamp in seconds.

// 5. Formatting Dates
// Using Template Literals
// We can combine date methods with template literals to display customized date information.
let newDate = new Date();
console.log(
  `${newDate.getDay()} and the month is ${newDate.getMonth() + 1} and the time is ${newDate}`,
);

// Custom Date Formatting Using toLocaleString()
// We can format dates using toLocaleDateString() and toLocaleTimeString() methods.
console.log("Formatted Date:", myDate.toLocaleDateString()); // Returns the date in a locale-specific format.
console.log("Formatted Time:", myDate.toLocaleTimeString()); // Returns the time in a locale-specific format.

// 6. Date Arithmetic
// We can perform arithmetic operations on dates by adding or subtracting milliseconds.
const futureDate = new Date(myDate.getTime() + 7 * 24 * 60 * 60 * 1000); // Adding 7 days
console.log("Future Date (7 days later):", futureDate);

// 7. Comparing Dates
// We can compare dates using comparison operators.
const date1 = new Date(2023, 5, 15);
const date2 = new Date(2023, 5, 20);
console.log("Is date1 earlier than date2?", date1 < date2);
console.log("Is date1 later than date2?", date1 > date2);

// 8. Key Takeaways
// - Use the Date object to work with dates and times in JavaScript.
// - Remember that months are zero-based (0-11) when creating Date objects.
// - Use methods like getFullYear(), getMonth(), getDate(), etc., to retrieve individual date/time values.
// - Format dates using toLocaleDateString() and toLocaleTimeString() for better readability.

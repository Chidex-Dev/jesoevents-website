// BookDates object schema
class BookDates {
  constructor(date, userEmail) {
    this.date = date;
    this.userEmail = userEmail;
  }
}

// Array to store booked dates
const bookedDatesArray = [];

// Function to add a new booking
function bookDate(date, userEmail) {
  const newBooking = new BookDates(date, userEmail);
  bookedDatesArray.push(newBooking);
}

// Function to fetch booked dates
function getBookedDates() {
  return bookedDatesArray.map(booking => booking.date);
}

// Function to check if a date is booked
function isDateBooked(date) {
  return bookedDatesArray.some(booking => booking.date === date);
}

// Example usage:
bookDate("2024-03-15", "user1@example.com");
bookDate("2024-03-20", "user2@example.com");

const fetchedBookedDates = getBookedDates();
console.log("Booked Dates:", fetchedBookedDates);

// Function to disable calendar options for booked dates
function disableBookedDates() {
  const calendarOptions = document.querySelectorAll(".calendar-option");

  calendarOptions.forEach(option => {
    const date = option.dataset.date;
    if (isDateBooked(date)) {
      option.disabled = true;
    }
  });
}

// Example usage for disabling calendar options
disableBookedDates();

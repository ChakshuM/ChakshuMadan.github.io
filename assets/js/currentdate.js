// Function to format date as 'Month Day, Year'
// function formatDate(date) {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return date.toLocaleDateString(undefined, options);
//   }
  
//   // Get today's date
//   const today = new Date();
  
//   // Set the date in the span element
//   document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById('current-date').textContent = formatDate(today);
//   });

// Function to format date as 'Month Day, Year'
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

// Get today's date
const today = new Date();

// Set the date in the span element
document.addEventListener("DOMContentLoaded", function() {
  const dateElement = document.getElementById('current-date'); // Highlighted change
  if (dateElement) { // Highlighted change
      dateElement.textContent = formatDate(today);
  } else {
      console.error("Element with ID 'current-date' not found."); // Highlighted change for debugging
  }
});

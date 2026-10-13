// Get the element where the date and time will be displayed
const dateTimeElement = document.getElementById('dateTime');

// Update the date and time every second
setInterval(function() {
  // Get the current date and time
  const currentDate = new Date();

  // Format the date and time
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  // Display the date and time
  dateTimeElement.textContent = `${formattedDate}, ${formattedTime}`;
}, 1000);

 /* JavaScript to toggle the navigation menu */
 function toggleNav() {
  var nav = document.querySelector('nav ul');
  nav.classList.toggle('responsive');
}

/* Add event listener to the hamburger menu icon */
document.querySelector('nav ul li.hamburger').addEventListener('click', toggleNav);

document.getElementById('contact-form').addEventListener('submit', function(event) {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  if (name === 'Your Name' || name === '') {
    alert('Name is required');
    event.preventDefault();
    return;
  }

  if (email === 'Your Email' || email === '') {
    alert('Email is required');
    event.preventDefault();
    return;
  }
});





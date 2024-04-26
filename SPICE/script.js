document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // Do something with the form values (e.g., send them to a server, validate, etc.)
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  });
  
  document.getElementById('login-btn').addEventListener('click', function() {
    // Redirect to welcome page
    window.location.href = "welcome.html"; // Change "welcome.html" to your actual welcome page URL
  });
  
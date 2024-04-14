// script.js

document.getElementById("sign-in-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission (we'll handle it with JavaScript)

    // For demonstration purposes, let's just log the entered email
    var email = document.getElementById("email").value;
    console.log("User entered email:", email);

    // Here you can add code for actual authentication
});

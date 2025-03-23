document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form input values
    const userData = {
        username: document.getElementById("username").value.trim(),
        first_name: document.getElementById("first-name").value.trim(),
        last_name: document.getElementById("last-name").value.trim(),
        email: document.getElementById("email").value.trim(),
        country: document.getElementById("country").value,
        password: document.getElementById("password").value.trim()
    };

    // Validate required fields
    if (!userData.username || !userData.first_name || !userData.last_name || 
        !userData.email || userData.country === "Select Country" || !userData.password) {
        alert("Please fill in all required fields.");
        return;
    }

    // Send POST request to JSON Server
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Registration successful!");
        console.log("User registered:", data);

        // Reset form fields after successful registration
        document.getElementById("registrationForm").reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Failed to register. Please try again.");
    });
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Validate user from JSON Server
    fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                alert("Login successful!");
                localStorage.setItem("loggedInUser", JSON.stringify(user));
                window.location.href = "index.html"; 
            } else {
                alert("Invalid email or password.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        });
});

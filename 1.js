function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const email = document.getElementById("email").value;
    const errorMessages = document.getElementById("errorMessages");

    // Clear previous errors
    errorMessages.innerHTML = "";

    // Regular Expressions
    const usernameRegex = /^[A-Za-z][A-Za-z0-9]{7,15}$/; // Username: Starts with alphabet, alphanumeric, 8-16 chars
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^\w\s]).{8,16}$/; // Password: 8-16 chars, 1 special char, 1 number
    const dobRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/; // Date: dd-mm-yyyy
    const contactNumberRegex = /^\d+$/; // Only digits
    const emailRegex = /^[A-Za-z0-9._%+-]+@(gmail|hotmail|rediffmail)\.com$/; // Ends with @gmail.com, @hotmail.com, or @rediffmail.com

    let errors = [];

    // Validation checks
    if (!usernameRegex.test(username)) {
        errors.push("Username must start with an alphabet, be 8-16 characters, and contain only alphabets and numbers.");
    }

    if (!passwordRegex.test(password)) {
        errors.push("Password must be 8-16 characters long, include alphabets, at least 1 number, and exactly 1 special character.");
    }

    if (!dobRegex.test(dob)) {
        errors.push("Date of Birth must be in the format DD-MM-YYYY.");
    }

    if (!contactNumberRegex.test(contactNumber)) {
        errors.push("Contact Number must contain numbers only.");
    }

    if (!emailRegex.test(email)) {
        errors.push("Email must end with @gmail.com, @hotmail.com, or @rediffmail.com.");
    }

    // Display errors or success message
    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join("<br>");
    } else {
        alert("Registration Successful! All inputs are valid.");
    }
}
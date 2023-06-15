var form = document.getElementById('contact-form');
var sendBtn = document.getElementById('send-btn');
var statusMsg = document.getElementById('status-msg');

function handleFormSubmission(e) {
    e.preventDefault();

    if (form.checkValidity()) {
        // Get form data
        var name = nameInput.value;
        var email = emailInput.value;
        var subject = subjectInput.value;
        var message = messageInput.value;

        // Create the email body
        var body = "Name: " + name + "\n";
        body += "Email: " + email + "\n";
        body += "Subject: " + subject + "\n";
        body += "Message: " + message;

        // Send the email using your preferred email sending method/library
        // Replace the code below with your actual email sending logic

        // Example using EmailJS (https://www.emailjs.com/)
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            to_email: "YOUR EMAIL ID",
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        }).then(function () {
            // Email sent successfully
            var successMsg = document.createElement('p');
            successMsg.textContent = 'Thank you for getting in touch!';
            successMsg.style.color = 'green';
            statusMsg.appendChild(successMsg);

            form.reset();
            sendBtn.disabled = true;
        }).catch(function (error) {
            // Error sending email
            var errorMsg = document.createElement('p');
            errorMsg.textContent = 'There was an error sending the email. Please try again later.';
            errorMsg.style.color = 'red';
            statusMsg.appendChild(errorMsg);
        });
    } else {
        // Form is invalid, disable submit button
        sendBtn.disabled = true;
    }
}


// Event listener for form submission
form.addEventListener('submit', handleFormSubmission);

var messageInput = document.getElementById('message');
var characterCount = document.getElementById('character-count');

// Function to update character count
function updateCharacterCount() {
    var message = messageInput.value;
    var count = message.length;
    characterCount.textContent = count + '/3000';
}

// Event listener for input change in the message textarea
messageInput.addEventListener('input', updateCharacterCount);

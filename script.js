var form = document.getElementById('contact-form');
var sendBtn = document.getElementById('send-btn');
var statusMsg = document.getElementById('status-msg');

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    
    // Send email using EmailJS
    emailjs.sendForm('service_bacl91i', this)
      .then(function(response) {
        var successMsg = document.createElement('p');
        successMsg.textContent = 'Thank you for getting in touch!';
        successMsg.style.color = '#007BBF';
        document.getElementById('status-msg').appendChild(successMsg);
        
        document.getElementById('contact-form').reset();
        document.getElementById('send-btn').disabled = true;
      }, function(error) {
        var errorMsg = document.createElement('p');
        errorMsg.textContent = 'There was an error sending the email. Please try again later.';
        errorMsg.style.color = 'red';
        document.getElementById('status-msg').appendChild(errorMsg);
      });
  });
  
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

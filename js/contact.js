document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  let valid = true;

  // Simple email regex for validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Reset custom validity
  name.setCustomValidity("");
  email.setCustomValidity("");
  message.setCustomValidity("");

  if (!name.value.trim()) {
    name.setCustomValidity("Please enter your name.");
    valid = false;
  }
  if (!email.value.trim()) {
    email.setCustomValidity("Please enter your email.");
    valid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    email.setCustomValidity("Please enter a valid email address.");
    valid = false;
  }
  if (!message.value.trim()) {
    message.setCustomValidity("Please enter your message.");
    valid = false;
  }

  if (!valid) {
    // Show browser validation messages
    this.reportValidity();
    e.preventDefault();
  }
});

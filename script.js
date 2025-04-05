document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const service = document.getElementById("service");
    const feedback = document.getElementById("formFeedback");
  
    if (!name.value.trim()) {
      feedback.textContent = "Please enter your name.";
      name.focus();
      return;
    }
  
    if (!email.value.trim() || !email.value.includes("@")) {
      feedback.textContent = "Please enter a valid email address.";
      email.focus();
      return;
    }
  
    if (!service.value) {
      feedback.textContent = "Please select a service.";
      service.focus();
      return;
    }
  
    feedback.style.color = "green";
    feedback.textContent = "Thanks for signing up!";
    this.reset(); // Clear form
  });
  
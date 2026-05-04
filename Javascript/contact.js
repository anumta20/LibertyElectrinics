const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("messageError");

// REGEX PATTERNS
const nameRegex = /^[A-Za-z ]{4,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRegex = /^03[0-9]{9}$/;

// LOAD SAVED FORM DATA
window.addEventListener("load", () => {
  const savedContact = JSON.parse(localStorage.getItem("contactFormData"));

  if (savedContact) {
    nameInput.value = savedContact.name || "";
    emailInput.value = savedContact.email || "";
    phoneInput.value = savedContact.phone || "";
    messageInput.value = savedContact.message || "";
  }
});

// SAVE FORM DATA TO LOCAL STORAGE WHILE TYPING
function saveFormData() {
  const data = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    message: messageInput.value
  };

  localStorage.setItem("contactFormData", JSON.stringify(data));
}

// VALIDATION
function validateForm() {
  let isValid = true;

  if (!nameRegex.test(nameInput.value.trim())) {
    nameError.classList.remove("d-none");
    isValid = false;
  } else {
    nameError.classList.add("d-none");
  }

  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.classList.remove("d-none");
    isValid = false;
  } else {
    emailError.classList.add("d-none");
  }

  if (!phoneRegex.test(phoneInput.value.trim())) {
    phoneError.classList.remove("d-none");
    isValid = false;
  } else {
    phoneError.classList.add("d-none");
  }

  if (messageInput.value.trim().length < 10) {
    messageError.classList.remove("d-none");
    isValid = false;
  } else {
    messageError.classList.add("d-none");
  }

  return isValid;
}

// LIVE SAVE + VALIDATION
[nameInput, emailInput, phoneInput, messageInput].forEach(input => {
  input.addEventListener("input", () => {
    saveFormData();
    validateForm();
  });
});

// SUBMIT FORM
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (validateForm()) {

    // SAVE CONTACT MESSAGES HISTORY
    let contactMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];

    contactMessages.push({
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      phone: phoneInput.value.trim(),
      message: messageInput.value.trim(),
      date: new Date().toLocaleString()
    });

    localStorage.setItem("contactMessages", JSON.stringify(contactMessages));

    alert("✅ Message submitted successfully!");

    form.reset();
    localStorage.removeItem("contactFormData");
  }
});
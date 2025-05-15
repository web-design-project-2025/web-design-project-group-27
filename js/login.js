document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".signIn-form");
  const message = document.getElementById("submittedMessage");

  if (!form || !message) {
    console.error("Form or message element is missing in the DOM.");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();
    const fullName = `${firstName} ${lastName}`;

    form.classList.add("fade-out");

    setTimeout(() => {
      form.style.display = "none";
      message.textContent = `Welcome, ${fullName}!`;
      message.style.display = "block";

      setTimeout(() => {
        message.classList.add("fade-in");
        message.style.opacity = "1";
      }, 10);
    }, 500);
  });
});

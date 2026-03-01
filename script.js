const form = document.getElementById("bookingForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const data = Object.fromEntries(formData.entries());

  try {
    await fetch("https://script.google.com/macros/s/AKfycbwes8uhtnuOKRtLxxANZqImqJK89-04XuljRf3b1jENsY7fPz6tolHzGnZioVuk7iv4/exec", {
      method: "POST",
      body: JSON.stringify(data),
    });

    alert("Thanks for booking with us! We'll contact you shortly to confirm your appointment.");

    form.reset();
  } catch (err) {
    alert("Something went wrong. Please try again.");
    console.error(err);
  }
});

// Prevent past dates
document.getElementById("date").min =
  new Date().toISOString().split("T")[0];

const form = document.getElementById("bookingForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("https://script.google.com/macros/library/d/1ulCbIcqhdoN7GVY1xY27zqituE14YvVoHeLz-kgcikESotYakls0aqZ0/1", {
      method: "POST",
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      alert("Thanks for booking with us! We'll contact you shortly to confirm your appointment.");
      form.reset();
    } else {
      throw new Error("Failed");
    }

  } catch (err) {
    alert("Something went wrong. Please try again.");
    console.error(err);
  }
});

// Prevent past dates
document.getElementById("date").min =
  new Date().toISOString().split("T")[0];

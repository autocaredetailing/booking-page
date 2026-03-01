const form = document.getElementById("bookingForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    service: form.service.value,
    date: form.date.value,
    time: form.time.value
  };

  try {
    const response = await fetch("PASTE_YOUR_WEB_APP_URL_HERE", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      alert("✅ Booking successful! We will contact you soon.");
      form.reset();
    } else {
      alert("❌ Error submitting booking.");
    }
  } catch (error) {
    alert("⚠️ Network error. Please try again.");
    console.error(error);
  }
});

// Prevent past dates
document.getElementById("date").min =
  new Date().toISOString().split("T")[0];

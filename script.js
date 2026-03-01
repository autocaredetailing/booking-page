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
    const response = await fetch("https://script.google.com/macros/s/AKfycbxJ_ekAJngwQY8pS6i8dzyQ310_SFSqAq3VMVg65wCn6gOJB7OyatDFUEJdx9EWP_RAQw/exec", {
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

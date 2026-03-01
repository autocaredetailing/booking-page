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
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.status === "success") {
      alert("✅ Booking confirmed!");
      form.reset();
    } else {
      alert("❌ Submission failed.");
    }
  } catch (error) {
    alert("⚠️ Network error. Please try again.");
    console.error(error);
  }
});

document.getElementById("date").min =
  new Date().toISOString().split("T")[0];

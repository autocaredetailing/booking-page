const scriptURL = "https://script.google.com/macros/s/AKfycbzmbJ_8EJwrEqwedHzFhhuqzCnw9gnO44hAzyahiKSURAJbM6QJP_r6RCcTtS2n991P/exec";

document.getElementById("bookingForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    service: document.getElementById("service").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value
  };

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.status === "success") {
      alert("✅ Booking submitted successfully!");
      document.getElementById("bookingForm").reset();
    } else {
      alert("❌ Error submitting booking.");
    }

  } catch (error) {
    alert("⚠️ Network error. Please try again.");
  }
});

// Prevent past dates
document.getElementById("date").min = new Date().toISOString().split("T")[0];

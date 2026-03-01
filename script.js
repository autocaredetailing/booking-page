const scriptURL = "YOUR_WEB_APP_URL"; // paste your /exec URL

document.getElementById("bookingForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", document.getElementById("name").value);
  formData.append("email", document.getElementById("email").value);
  formData.append("phone", document.getElementById("phone").value);
  formData.append("service", document.getElementById("service").value);
  formData.append("date", document.getElementById("date").value);
  formData.append("time", document.getElementById("time").value);

  try {
    await fetch(scriptURL, {
      method: "POST",
      body: formData
    });

    alert("✅ Booking submitted successfully!");
    document.getElementById("bookingForm").reset();

  } catch (error) {
    alert("❌ Error submitting booking.");
    console.error(error);
  }
});

// Prevent past dates
document.getElementById("date").min = new Date().toISOString().split("T")[0];

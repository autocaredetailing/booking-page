document.getElementById("bookingForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    name: this[0].value,
    email: this[1].value,
    service: this[2].value,
    date: this[3].value,
    time: this[4].value
  };

  await fetch("PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE", {
    method: "POST",
    body: JSON.stringify(data)
  });

  alert("Booking confirmed! We'll contact you shortly.");
  this.reset();
});

// Prevent past dates
document.getElementById("date").min =
  new Date().toISOString().split("T")[0];

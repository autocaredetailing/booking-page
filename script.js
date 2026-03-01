document.getElementById("bookingForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    name: this[0].value,
    email: this[1].value,
    number:this[2].value,
    service: this[3].value,
    date: this[4].value,
    time: this[5].value
  };

  await fetch("https://script.google.com/macros/s/AKfycbwes8uhtnuOKRtLxxANZqImqJK89-04XuljRf3b1jENsY7fPz6tolHzGnZioVuk7iv4/exec", {
    method: "POST",
    body: JSON.stringify(data)
  });

  alert("Thanks for booking with us! We'll contact you shortly to confirm your appointment details.");
  this.reset();
});

// Prevent past dates
document.getElementById("date").min =
  new Date().toISOString().split("T")[0];

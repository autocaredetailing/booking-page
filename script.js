function doPost(e) {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // If data is sent as form data (most common)
  const data = e.parameter;

  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.phone,
    data.service,
    data.date,
    data.time
  ]);

  // Send confirmation email
  MailApp.sendEmail({
    to: data.email,
    subject: "Booking Confirmation Received – Autocare Detailing",
    body:
      "Hi " + data.name + ",\n\n" +
      "Thanks for booking with us! We’ve received your request for " +
      data.service + " on " + data.date + " at " + data.time + ".\n\n" +
      "We’ll contact you shortly to confirm your appointment.\n\n" +
      "Best regards,\nAutocare Detailing"
  });

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

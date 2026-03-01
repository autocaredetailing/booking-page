function doPost(e) {

  // Parse incoming data
  const data = JSON.parse(e.postData.contents);

  // Get the sheet
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getActiveSheet();

  // Save booking
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
  MailApp.sendEmail(
    data.email,
    "Appointment Confirmed – Autocare Detailing",
    `Hi ${data.name},

Your ${data.service} appointment is booked for ${data.date} at ${data.time}.

We bring the sheen to you!

Autocare Detailing Ltd`
  );

  // Respond to website
  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

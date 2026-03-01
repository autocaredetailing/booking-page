function doPost(e) {
  try {
    // Parse incoming data
    const data = JSON.parse(e.postData.contents);

    // Get active sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Add row to sheet
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
      subject: "Booking Confirmation Received — Autocare Detailing",
      body: `Hi ${data.name},

Thank you for booking with us! We’ve received your request for ${data.service} on ${data.date} at ${data.time}.

A member of our team will contact you shortly to confirm your appointment details.

If you have any questions, simply reply to this email — we’re happy to help.

Best regards,
Autocare Detailing Ltd
We bring the sheen to you!`
    });

    // Create response with CORS headers
    const output = ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

    output.setHeader("Access-Control-Allow-Origin", "*");
    output.setHeader("Access-Control-Allow-Methods", "POST");
    output.setHeader("Access-Control-Allow-Headers", "Content-Type");

    return output;

  } catch (error) {
    const output = ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);

    output.setHeader("Access-Control-Allow-Origin", "*");
    return output;
  }
}

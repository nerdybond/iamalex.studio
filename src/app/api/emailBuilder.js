// import 'dotenv/config';
// import { Recipient, Sender, EmailParams, MailerSend } from "mailersend";

// const mailersend = new MailerSend({
//   api_key: "mlsn.41f3158418af1020c2dc17775f067a94e79d341781bf30604a0b9b18962707cc",
// });

// export async function sendEmail() {
//   const recipients = [new Recipient("founder@somepeeps.studio", "Founder")];
//   const sentFrom = new Sender("somepeeps@somepeeps.studio", "Some Peeps");
//   const emailParams = new EmailParams();
//   emailParams.setFrom(sentFrom);
//   emailParams.recipients = recipients;
//   emailParams.subject = "Subject";
//   // emailParams.templateId = 'ynrw7gy1x3rg2k8e';
//   emailParams.setHtml("<strong>This is the HTML content</strong>");
//   emailParams.setText("This is the text content");

//   try {
//     const result = await mailersend.email.send(emailParams);
//     console.log(result);
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// }
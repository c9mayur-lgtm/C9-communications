'use server';

/**
 * Server Action to handle consultation form submissions.
 * This currently logs the data and simulates a delay.
 * In the future, this can be connected to a CRM, Email Service, or Database.
 */
export async function submitConsultationForm(formData: {
  firstName: string;
  lastName: string;
  email: string;
  organisation: string;
  message: string;
  path: string;
}) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Log the data to the server console (visible in logs)
  console.log('--- New Consultation Form Submission ---');
  console.log('Path:', formData.path);
  console.log('Name:', `${formData.firstName} ${formData.lastName}`);
  console.log('Email:', formData.email);
  console.log('Organisation:', formData.organisation);
  console.log('Message:', formData.message);
  console.log('----------------------------------------');

  // HERE: This is where you would plug in your CRM (Salesforce/HubSpot) or Email Service
  // Example: 
  // await sendEmail(formData);
  // await createHubspotContact(formData);

  return {
    success: true,
    message: 'Thank you for your inquiry. A C9 engineer will review your request and respond within 2 hours.',
  };
}

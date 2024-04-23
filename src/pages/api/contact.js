// pages/api/contact.js

import dbConnect from '../../../lib/dbConnect';
import ContactForm from '../../../models/contactFormModel';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const contact = new ContactForm(req.body); // Create a new document from the body
      await contact.save(); // Save the document to database
      return res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Database insertion error:', error);
      return res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
